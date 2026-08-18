import { renderToStaticMarkup } from "react-dom/server";
import type { ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";

const notFoundMock = vi.hoisted(() => vi.fn(() => {
  throw new Error("not-found");
}));

vi.mock("next/navigation", () => ({
  notFound: notFoundMock,
}));

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("admin section pages", () => {
  it("renders a known admin section placeholder", async () => {
    const { default: AdminSectionPage } = await import("@/app/(admin-shell)/admin/[section]/page");

    const markup = renderToStaticMarkup(
      await AdminSectionPage({ params: { section: "content" } })
    );

    expect(markup).toContain("Content");
    expect(markup).toContain("Placeholder");
    expect(markup).toContain("/admin/content");
  });

  it("rejects unknown admin sections", async () => {
    const { default: AdminSectionPage } = await import("@/app/(admin-shell)/admin/[section]/page");

    await expect(AdminSectionPage({ params: { section: "nope" } })).rejects.toThrow("not-found");
    expect(notFoundMock).toHaveBeenCalled();
  });
});
