import { renderToStaticMarkup } from "react-dom/server";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const { pathnameState } = vi.hoisted(() => {
  const pathnameState = { value: "/admin" };
  return { pathnameState };
});

vi.mock("next/navigation", () => ({
  usePathname: () => pathnameState.value,
}));

describe("admin navigation", () => {
  beforeEach(() => {
    pathnameState.value = "/admin";
  });

  afterEach(() => {
    vi.resetModules();
  });

  it("renders the registry-driven navigation entries", async () => {
    const { AdminNavigation } = await import("@/components/admin/admin-navigation");

    const markup = renderToStaticMarkup(<AdminNavigation />);

    expect(markup).toContain('href="/admin"');
    expect(markup).toContain('href="/admin/content"');
    expect(markup).toContain('href="/admin/assets"');
    expect(markup).toContain('href="/admin/settings"');
    expect(markup).toContain('href="/admin/system"');
  });

  it("marks the current route as active", async () => {
    pathnameState.value = "/admin/assets";

    const { AdminNavigation } = await import("@/components/admin/admin-navigation");

    const markup = renderToStaticMarkup(<AdminNavigation />);

    expect(markup).toContain('aria-current="page"');
    expect(markup).toContain('href="/admin/assets"');
  });
});
