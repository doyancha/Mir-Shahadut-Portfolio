import { UserRole, UserStatus } from "@prisma/client";
import NextAuth, { type NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";

import { prisma } from "@/lib/db/prisma";

import { isAllowedAdminIdentity, normalizeGitHubSubject, parseAllowlist } from "./allowlist";
import {
  adminAuthWarning,
  adminSignInPath,
  adminUnauthorizedPath,
  hasConfiguredAdminAuth,
} from "./auth-policy";

const allowedGithubLogins = parseAllowlist(process.env["ADMIN_ALLOWED_GITHUB_LOGINS"]);
const allowedEmails = parseAllowlist(process.env["ADMIN_ALLOWED_EMAILS"]);

const githubClientId = process.env["GITHUB_ID"]?.trim();
const githubClientSecret = process.env["GITHUB_SECRET"]?.trim();
const githubProvider =
  hasConfiguredAdminAuth && githubClientId && githubClientSecret
    ? GitHubProvider({
        clientId: githubClientId,
        clientSecret: githubClientSecret,
      })
    : null;

function readGitHubLogin(profile: unknown): string | null {
  if (!profile || typeof profile !== "object") {
    return null;
  }

  const login = (profile as { login?: unknown }).login;
  return typeof login === "string" && login.trim() ? login.trim().toLowerCase() : null;
}

function readGitHubEmail(profile: unknown): string | null {
  if (!profile || typeof profile !== "object") {
    return null;
  }

  const email = (profile as { email?: unknown }).email;
  return typeof email === "string" && email.trim() ? email.trim().toLowerCase() : null;
}

async function syncAdminIdentityFromGitHub(input: {
  profile: unknown;
  email: string;
  name: string | null | undefined;
}) {
  const githubLogin = readGitHubLogin(input.profile);
  const normalizedEmail = input.email.trim().toLowerCase();
  const localPart = normalizedEmail.split("@")[0] ?? normalizedEmail;
  const displayName: string = input.name?.trim() || localPart;
  const authSubject = normalizeGitHubSubject(githubLogin, normalizedEmail);
  const now = new Date();

  const dbUser = await prisma.user.upsert({
    where: { email: normalizedEmail },
    create: {
      email: normalizedEmail,
      name: displayName,
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      authProvider: "github",
      authSubject,
      lastLoginAt: now,
    },
    update: {
      name: displayName,
      role: UserRole.ADMIN,
      status: UserStatus.ACTIVE,
      authProvider: "github",
      authSubject,
      lastLoginAt: now,
    },
  });

  return {
    id: dbUser.id,
    role: dbUser.role,
    status: dbUser.status,
    name: dbUser.name,
    email: dbUser.email,
  };
}

async function refreshAdminClaimsFromDatabase(token: {
  id?: string | null;
  email?: string | null;
  name?: string | null;
  picture?: string | null;
  role?: UserRole;
  status?: UserStatus;
}) {
  const lookup =
    token.id && token.id.trim()
      ? { id: token.id.trim() }
      : token.email
        ? { email: token.email.trim().toLowerCase() }
        : null;

  if (!lookup) {
    return token;
  }

  const dbUser = await prisma.user.findUnique({
    where: lookup,
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      status: true,
    },
  });

  if (!dbUser) {
    return {
      ...token,
      id: undefined,
      role: undefined,
      status: undefined,
    };
  }

  return {
    ...token,
    id: dbUser.id,
    role: dbUser.role,
    status: dbUser.status,
    name: dbUser.name,
    email: dbUser.email,
  };
}

export const authOptions: NextAuthOptions = {
  ...(process.env["AUTH_SECRET"]?.trim() ? { secret: process.env["AUTH_SECRET"].trim() } : {}),
  session: {
    // Keep admin JWTs short-lived and refresh claims from the database on server reads.
    // The proxy gate can only trust the signed token, so the lifetime is intentionally bounded.
    strategy: "jwt",
    maxAge: 60 * 60 * 8,
    updateAge: 60 * 15,
  },
  pages: {
    signIn: adminSignInPath,
    error: adminSignInPath,
  },
  providers: githubProvider ? [githubProvider] : [],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (!hasConfiguredAdminAuth || account?.provider !== "github") {
        return false;
      }

      const githubLogin = readGitHubLogin(profile);
      const email = (user?.email ?? readGitHubEmail(profile))?.trim().toLowerCase() ?? null;

      return isAllowedAdminIdentity(
        {
          githubLogin,
          email,
        },
        allowedGithubLogins,
        allowedEmails
      );
    },
    async jwt({ token, user, account, profile, trigger }) {
      if (!hasConfiguredAdminAuth) {
        return token;
      }

      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.status = user.status;
        if (typeof user.name === "string") {
          token.name = user.name;
        }

        if (typeof user.email === "string") {
          token.email = user.email;
        }

        if (typeof user.image === "string") {
          token.picture = user.image;
        }
      }

      if (trigger === "signIn" && account?.provider === "github") {
        const email = (token.email ?? readGitHubEmail(profile) ?? user?.email)?.trim().toLowerCase() ?? null;

        if (email) {
          const syncedUser = await syncAdminIdentityFromGitHub({
            profile,
            email,
            name: token.name ?? user?.name,
          });

          token.id = syncedUser.id;
          token.role = syncedUser.role;
          token.status = syncedUser.status;
          token.name = syncedUser.name;
          token.email = syncedUser.email;
        }
      }

      if (token.id || token.email) {
        const refreshed = await refreshAdminClaimsFromDatabase(token);

        if (typeof refreshed.id === "string") {
          token.id = refreshed.id;
        } else {
          delete token.id;
        }

        if (refreshed.role !== undefined) {
          token.role = refreshed.role;
        } else {
          delete token.role;
        }

        if (refreshed.status !== undefined) {
          token.status = refreshed.status;
        } else {
          delete token.status;
        }

        if (typeof refreshed.name === "string") {
          token.name = refreshed.name;
        } else {
          delete token.name;
        }

        if (typeof refreshed.email === "string") {
          token.email = refreshed.email;
        } else {
          delete token.email;
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id ?? "";
        session.user.role = token.role ?? UserRole.VIEWER;
        session.user.status = token.status ?? UserStatus.SUSPENDED;
      }

      return session;
    },
  },
  debug: process.env["NODE_ENV"] !== "production",
};

export const auth = NextAuth(authOptions);

export async function getAdminSession() {
  if (!hasConfiguredAdminAuth) {
    return null;
  }

  return getServerSession(authOptions);
}

export async function requireAdminSession() {
  const session = await getAdminSession();

  if (
    !session ||
    session.user?.role !== UserRole.ADMIN ||
    session.user?.status !== UserStatus.ACTIVE
  ) {
    return null;
  }

  return session;
}

export { adminAuthWarning, adminSignInPath, adminUnauthorizedPath, hasConfiguredAdminAuth };
