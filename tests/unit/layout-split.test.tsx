import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "geist-sans" }),
  IBM_Plex_Mono: () => ({ variable: "ibm-plex-mono" }),
}));

vi.mock("@/components/layout/site-header", () => ({
  SiteHeader: () => <header data-testid="public-header">Public header</header>,
}));

vi.mock("@/components/layout/site-footer", () => ({
  SiteFooter: () => <footer data-testid="public-footer">Public footer</footer>,
}));

vi.mock("@/components/layout/skip-link", () => ({
  SkipLink: () => <a href="#main-content">Skip to content</a>,
}));

vi.mock("@/components/seo/structured-data", () => ({
  StructuredData: () => <script data-testid="structured-data" />,
}));

vi.mock("@/lib/metadata", () => ({
  createMetadata: () => ({}),
}));

describe("layout split", () => {
  it("keeps the root layout global-only", async () => {
    const { default: RootLayout } = await import("@/app/layout");

    const markup = renderToStaticMarkup(<RootLayout>Root content</RootLayout>);

    expect(markup).toContain("Root content");
    expect(markup).not.toContain("Public header");
    expect(markup).not.toContain("Public footer");
    expect(markup).not.toContain("Skip to content");
  });

  it("renders public chrome from the marketing layout only", async () => {
    const { default: MarketingLayout } = await import("@/app/(marketing)/layout");

    const markup = renderToStaticMarkup(<MarketingLayout>Public content</MarketingLayout>);

    expect(markup).toContain("Public content");
    expect(markup).toContain("Public header");
    expect(markup).toContain("Public footer");
    expect(markup).toContain("Skip to content");
  });
});
