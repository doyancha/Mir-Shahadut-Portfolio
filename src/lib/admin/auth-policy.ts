import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

export const adminSignInPath = "/admin/sign-in";
export const adminUnauthorizedPath = "/admin/unauthorized";
export const adminDashboardPath = "/admin";

export const ADMIN_ROLE = "ADMIN";
export const ACTIVE_USER_STATUS = "ACTIVE";

function trimEnv(value: string | undefined | null): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export const adminAuthSecret =
  trimEnv(process.env["AUTH_SECRET"]) ?? trimEnv(process.env["NEXTAUTH_SECRET"]);
export const hasConfiguredGitHubAuth = Boolean(
  trimEnv(process.env["GITHUB_ID"]) && trimEnv(process.env["GITHUB_SECRET"])
);
export const hasConfiguredAdminAllowlist = Boolean(
  trimEnv(process.env["ADMIN_ALLOWED_GITHUB_LOGINS"]) || trimEnv(process.env["ADMIN_ALLOWED_EMAILS"])
);
export const hasConfiguredAdminAuth = Boolean(
  adminAuthSecret && hasConfiguredGitHubAuth && hasConfiguredAdminAllowlist
);

export const adminAuthWarning = !adminAuthSecret
  ? "Admin authentication is disabled until AUTH_SECRET or NEXTAUTH_SECRET is configured."
  : !hasConfiguredGitHubAuth
    ? "GitHub OAuth is disabled until GITHUB_ID and GITHUB_SECRET are configured."
    : !hasConfiguredAdminAllowlist
      ? "Admin authentication is disabled until the admin allowlist is configured."
    : null;

export function isAdminTokenAuthorized(token: Pick<JWT, "role" | "status"> | null | undefined) {
  return token?.role === ADMIN_ROLE && token?.status === ACTIVE_USER_STATUS;
}

export function isAdminSessionAuthorized(session: Pick<Session, "user"> | null | undefined) {
  return (
    session?.user?.role === ADMIN_ROLE &&
    session.user.status === ACTIVE_USER_STATUS
  );
}
