import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

const signOutMock = vi.hoisted(() => vi.fn(async () => undefined));

vi.mock("next-auth/react", () => ({
  signOut: signOutMock,
}));

describe("admin sign-out", () => {
  it("uses the admin sign-in callback destination", async () => {
    const { adminSignOutCallbackUrl, signOutFromAdmin } = await import(
      "@/components/admin/admin-sign-out-button"
    );

    expect(adminSignOutCallbackUrl).toBe("/admin/sign-in");

    await signOutFromAdmin();

    expect(signOutMock).toHaveBeenCalledWith({ callbackUrl: "/admin/sign-in" });
  });

  it("renders a sign-out control for the admin shell", async () => {
    const { AdminSignOutButton } = await import("@/components/admin/admin-sign-out-button");
    const markup = renderToStaticMarkup(<AdminSignOutButton />);

    expect(markup).toContain("Sign out");
  });
});
