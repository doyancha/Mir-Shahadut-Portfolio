import { beforeEach, describe, expect, it, vi } from "vitest";

import { withTestEnvironment } from "./test-env";

const { prismaMock } = vi.hoisted(() => {
  const prismaMock = {
    user: {
      upsert: vi.fn(),
      findUnique: vi.fn(),
    },
  };

  return { prismaMock };
});

vi.mock("@/lib/db/prisma", () => ({
  prisma: prismaMock,
}));

beforeEach(() => {
  prismaMock.user.upsert.mockReset();
  prismaMock.user.findUnique.mockReset();
});

describe("admin auth foundation", () => {
  it("allows allowlisted GitHub identities and persists the admin user once", async () => {
    prismaMock.user.upsert.mockResolvedValue({
      id: "user-admin-1",
      email: "admin@example.com",
      name: "Admin User",
      image: "https://avatars.example/admin.png",
      role: "ADMIN",
      status: "ACTIVE",
    });
    prismaMock.user.findUnique.mockResolvedValue({
      id: "user-admin-1",
      email: "admin@example.com",
      name: "Admin User",
      image: "https://avatars.example/admin.png",
      role: "ADMIN",
      status: "ACTIVE",
    });

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "allowed-admin",
        ADMIN_ALLOWED_EMAILS: "admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const auth = await import("@/lib/admin/auth");

        expect(auth.hasConfiguredAdminAuth).toBe(true);
        expect(auth.authOptions.providers).toHaveLength(1);

        await expect(
          auth.authOptions.callbacks?.signIn?.({
            account: { provider: "github" },
            profile: { login: "allowed-admin" },
            user: {
              email: "admin@example.com",
              name: "Admin User",
              image: "https://avatars.example/admin.png",
            } as any,
          } as any)
        ).resolves.toBe(true);

        const jwt = await auth.authOptions.callbacks?.jwt?.({
          token: {},
          user: {
            id: "provider-user-id",
            email: "admin@example.com",
            name: "Admin User",
            image: "https://avatars.example/admin.png",
            role: "ADMIN",
            status: "ACTIVE",
          } as any,
          account: { provider: "github" } as any,
          profile: { login: "allowed-admin", avatar_url: "https://avatars.example/admin.png" } as any,
          trigger: "signIn",
        } as any);

        expect(prismaMock.user.upsert).toHaveBeenCalledTimes(1);
        expect(jwt).toMatchObject({
          id: "user-admin-1",
          role: "ADMIN",
          status: "ACTIVE",
          email: "admin@example.com",
          name: "Admin User",
        });
      }
    );
  });

  it("keeps later auth reads read-only after the initial Prisma sync", async () => {
    prismaMock.user.upsert.mockResolvedValue({
      id: "user-admin-2",
      email: "active-admin@example.com",
      name: "Active Admin",
      image: "https://avatars.example/active.png",
      role: "ADMIN",
      status: "ACTIVE",
    });
    prismaMock.user.findUnique.mockResolvedValue({
      id: "user-admin-2",
      email: "active-admin@example.com",
      name: "Active Admin",
      image: "https://avatars.example/active.png",
      role: "ADMIN",
      status: "ACTIVE",
    });

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "active-admin",
        ADMIN_ALLOWED_EMAILS: "active-admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const auth = await import("@/lib/admin/auth");

        const signedInToken = await auth.authOptions.callbacks?.jwt?.({
          token: {},
          user: {
            id: "provider-user-id",
            email: "active-admin@example.com",
            name: "Active Admin",
            image: "https://avatars.example/active.png",
            role: "ADMIN",
            status: "ACTIVE",
          } as any,
          account: { provider: "github" } as any,
          profile: { login: "active-admin", avatar_url: "https://avatars.example/active.png" } as any,
          trigger: "signIn",
        } as any);

        const refreshedToken = await auth.authOptions.callbacks?.jwt?.({
          token: signedInToken as any,
          account: undefined,
          profile: undefined,
          trigger: "update",
        } as any);

        expect(prismaMock.user.upsert).toHaveBeenCalledTimes(1);
        expect(prismaMock.user.findUnique).toHaveBeenCalledTimes(2);
        expect(refreshedToken).toMatchObject({
          id: "user-admin-2",
          role: "ADMIN",
          status: "ACTIVE",
          email: "active-admin@example.com",
          name: "Active Admin",
        });
      }
    );
  });

  it("propagates persisted ADMIN + ACTIVE claims through jwt and session callbacks", async () => {
    prismaMock.user.findUnique.mockResolvedValue({
      id: "user-admin-3",
      email: "active-admin@example.com",
      name: "Active Admin",
      image: "https://avatars.example/active.png",
      role: "ADMIN",
      status: "ACTIVE",
    });

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "active-admin",
        ADMIN_ALLOWED_EMAILS: "active-admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const auth = await import("@/lib/admin/auth");

        const token = await auth.authOptions.callbacks?.jwt?.({
          token: { id: "user-admin-3", email: "active-admin@example.com" },
          account: undefined,
          profile: undefined,
          trigger: "update",
        } as any);

        expect(token).toMatchObject({
          id: "user-admin-3",
          role: "ADMIN",
          status: "ACTIVE",
          email: "active-admin@example.com",
          name: "Active Admin",
        });

        const session = await auth.authOptions.callbacks?.session?.({
          session: { user: { name: "Placeholder", email: "active-admin@example.com" } },
          token: token as any,
        } as any);

        expect(session?.user).toMatchObject({
          id: "user-admin-3",
          role: "ADMIN",
          status: "ACTIVE",
        });
      }
    );
  });

  it("denies ADMIN users whose persisted status is not ACTIVE", async () => {
    prismaMock.user.findUnique.mockResolvedValue({
      id: "user-admin-4",
      email: "suspended-admin@example.com",
      name: "Suspended Admin",
      image: null,
      role: "ADMIN",
      status: "SUSPENDED",
    });

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "suspended-admin",
        ADMIN_ALLOWED_EMAILS: "suspended-admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const auth = await import("@/lib/admin/auth");
        const { isAdminSessionAuthorized } = await import("@/lib/admin/auth-policy");

        const token = await auth.authOptions.callbacks?.jwt?.({
          token: { id: "user-admin-4", email: "suspended-admin@example.com" },
          account: undefined,
          profile: undefined,
          trigger: "update",
        } as any);

        const session = await auth.authOptions.callbacks?.session?.({
          session: { user: { name: "Suspended Admin", email: "suspended-admin@example.com" } },
          token: token as any,
        } as any);

        expect(session?.user.status).toBe("SUSPENDED");
        expect(session?.user.role).toBe("ADMIN");
        expect(isAdminSessionAuthorized(session as any)).toBe(false);
      }
    );
  });

  it("denies non-admin persisted users", async () => {
    prismaMock.user.findUnique.mockResolvedValue({
      id: "user-viewer-1",
      email: "viewer@example.com",
      name: "Viewer",
      image: null,
      role: "VIEWER",
      status: "ACTIVE",
    });

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "viewer",
        ADMIN_ALLOWED_EMAILS: "viewer@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const auth = await import("@/lib/admin/auth");
        const { isAdminSessionAuthorized } = await import("@/lib/admin/auth-policy");

        const token = await auth.authOptions.callbacks?.jwt?.({
          token: { id: "user-viewer-1", email: "viewer@example.com" },
          account: undefined,
          profile: undefined,
          trigger: "update",
        } as any);

        const session = await auth.authOptions.callbacks?.session?.({
          session: { user: { name: "Viewer", email: "viewer@example.com" } },
          token: token as any,
        } as any);

        expect(session?.user.role).toBe("VIEWER");
        expect(session?.user.status).toBe("ACTIVE");
        expect(isAdminSessionAuthorized(session as any)).toBe(false);
      }
    );
  });

  it("fails safe when the auth secret is missing", async () => {
    await withTestEnvironment(
      {
        AUTH_SECRET: undefined,
        NEXTAUTH_SECRET: undefined,
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "allowed-admin",
        ADMIN_ALLOWED_EMAILS: "admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const auth = await import("@/lib/admin/auth");

        expect(auth.hasConfiguredAdminAuth).toBe(false);
        expect(auth.authOptions.providers).toHaveLength(0);
        expect(auth.adminAuthWarning).toContain("Admin authentication is disabled");

        await expect(auth.getAdminSession()).resolves.toBeNull();
      }
    );
  });

  it("fails safe when the allowlist is missing", async () => {
    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: undefined,
        ADMIN_ALLOWED_EMAILS: undefined,
        NODE_ENV: "test",
      },
      async () => {
        const auth = await import("@/lib/admin/auth");

        expect(auth.hasConfiguredAdminAuth).toBe(false);
        expect(auth.authOptions.providers).toHaveLength(0);
        expect(auth.adminAuthWarning).toContain("allowlist");
      }
    );
  });

  it("disables GitHub provider configuration when GitHub credentials are missing", async () => {
    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: undefined,
        GITHUB_SECRET: undefined,
        ADMIN_ALLOWED_GITHUB_LOGINS: "allowed-admin",
        ADMIN_ALLOWED_EMAILS: "admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const auth = await import("@/lib/admin/auth");

        expect(auth.hasConfiguredAdminAuth).toBe(false);
        expect(auth.authOptions.providers).toHaveLength(0);
        expect(auth.adminAuthWarning).toContain("GitHub OAuth is disabled");
      }
    );
  });
});
