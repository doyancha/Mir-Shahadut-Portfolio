import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

const redirectMock = vi.hoisted(() => vi.fn(() => {
  throw new Error("redirect");
}));

const adminShellMock = vi.hoisted(
  () => vi.fn(({ children }: { children: ReactNode }) => <>{children}</>)
);

const getAdminSessionMock = vi.hoisted(() => vi.fn());
const isAdminSessionAuthorizedMock = vi.hoisted(() => vi.fn());

vi.mock("next/navigation", () => ({
  redirect: redirectMock,
}));

vi.mock("@/components/admin/admin-shell", () => ({
  AdminShell: adminShellMock,
}));

vi.mock("@/lib/admin/auth", () => ({
  adminUnauthorizedPath: "/admin/unauthorized",
  getAdminSession: getAdminSessionMock,
}));

vi.mock("@/lib/admin/auth-policy", () => ({
  isAdminSessionAuthorized: isAdminSessionAuthorizedMock,
}));

describe("admin layout", () => {
  it("renders the private shell for authorized sessions", async () => {
    getAdminSessionMock.mockResolvedValue({
      user: {
        name: "Admin User",
        email: "admin@example.com",
        image: null,
        role: "ADMIN",
        status: "ACTIVE",
      },
    });
    isAdminSessionAuthorizedMock.mockReturnValue(true);

    const { default: AdminLayout } = await import("@/app/(admin-shell)/admin/layout");

    const element = await AdminLayout({ children: <section>Protected</section> });

    expect(adminShellMock).toHaveBeenCalledWith(
      expect.objectContaining({
        identity: expect.objectContaining({
          name: "Admin User",
          email: "admin@example.com",
          role: "ADMIN",
          status: "ACTIVE",
        }),
      }),
      undefined
    );
    expect(element).toBeDefined();
  });

  it("redirects unauthenticated requests to sign in", async () => {
    getAdminSessionMock.mockResolvedValue(null);

    const { default: AdminLayout } = await import("@/app/(admin-shell)/admin/layout");

    await expect(AdminLayout({ children: <section>Protected</section> })).rejects.toThrow("redirect");
    expect(redirectMock).toHaveBeenCalledWith("/admin/sign-in");
  });

  it("redirects unauthorized sessions to the unauthorized page", async () => {
    getAdminSessionMock.mockResolvedValue({
      user: {
        name: "Suspended Admin",
        email: "suspended@example.com",
        image: null,
        role: "ADMIN",
        status: "SUSPENDED",
      },
    });
    isAdminSessionAuthorizedMock.mockReturnValue(false);

    const { default: AdminLayout } = await import("@/app/(admin-shell)/admin/layout");

    await expect(AdminLayout({ children: <section>Protected</section> })).rejects.toThrow("redirect");
    expect(redirectMock).toHaveBeenCalledWith("/admin/unauthorized");
  });
});
