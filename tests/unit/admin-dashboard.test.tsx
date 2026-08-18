import { renderToStaticMarkup } from "react-dom/server";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("admin dashboard", () => {
  it("renders the private admin landing placeholder", async () => {
    const { default: AdminDashboardPage } = await import("@/app/(admin-shell)/admin/page");

    const markup = renderToStaticMarkup(<AdminDashboardPage />);

    expect(markup).toContain("Admin foundation dashboard");
    expect(markup).toContain("editing, publishing, analytics, and CMS workflows are not implemented yet");
    expect(markup).toContain("/admin/content");
    expect(markup).toContain("/admin/system");
  });
});
