import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/components/admin/admin-navigation", () => ({
  AdminNavigation: () => <nav aria-label="Admin navigation">Navigation</nav>,
}));

vi.mock("@/components/admin/admin-sign-out-button", () => ({
  AdminSignOutButton: () => <button type="button">Sign out</button>,
}));

describe("admin shell", () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it("renders authenticated identity and protected shell framing", async () => {
    const { AdminShell } = await import("@/components/admin/admin-shell");

    const markup = renderToStaticMarkup(
      <AdminShell
        identity={{
          name: "Admin User",
          email: "admin@example.com",
          image: null,
          role: "ADMIN",
          status: "ACTIVE",
        }}
      >
        <section>Protected content</section>
      </AdminShell>
    );

    expect(markup).toContain("Admin shell");
    expect(markup).toContain("Admin User");
    expect(markup).toContain("admin@example.com");
    expect(markup).toContain("Protected content");
    expect(markup).toContain('id="main-content"');
  });
});
