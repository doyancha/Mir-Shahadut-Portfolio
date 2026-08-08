import { describe, expect, it, vi } from "vitest";

import { withTestEnvironment } from "./test-env";

describe("createMetadata", () => {
  it("inherits page metadata into Open Graph, Twitter, and canonical values", async () => {
    await withTestEnvironment(
      {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: "https://example.com/",
      },
      async () => {
        const { createMetadata } = await import("@/lib/metadata");

        const metadata = createMetadata({
          path: "/contact",
          title: "Contact",
          description: "Contact Mir Shahadut Hossain about freelance work, jobs, or projects.",
        });

        expect(metadata.metadataBase?.toString()).toBe("https://example.com/");
        expect(metadata.alternates?.canonical).toBe("/contact");
        expect(metadata.description).toBe(
          "Contact Mir Shahadut Hossain about freelance work, jobs, or projects."
        );
        expect(metadata.openGraph).toMatchObject({
          title: "Contact",
          description: "Contact Mir Shahadut Hossain about freelance work, jobs, or projects.",
          url: "/contact",
          siteName: "Mir-Shahadut-Portfolio",
          type: "website",
          locale: "en_US",
        });
        expect(metadata.openGraph?.images?.[0]).toMatchObject({
          url: "https://example.com/social-image.png",
          alt: "Mir Shahadut Hossain, Full Stack Web Developer",
          width: 1200,
          height: 630,
        });
        expect(metadata.twitter).toMatchObject({
          card: "summary_large_image",
          title: "Contact",
          description: "Contact Mir Shahadut Hossain about freelance work, jobs, or projects.",
          images: "https://example.com/social-image.png",
        });
      }
    );
  });

  it("omits localhost-style absolute metadata in production when the site URL is missing", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);

    await withTestEnvironment(
      {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: undefined,
      },
      async () => {
        const { createMetadata } = await import("@/lib/metadata");

        const metadata = createMetadata({
          path: "/projects",
          title: "Projects",
          description: "Full-stack project work including verified summaries and live demos.",
        });

        expect(metadata.metadataBase).toBeUndefined();
        expect(metadata.alternates).toBeUndefined();
        expect(metadata.openGraph?.url).toBeUndefined();
        expect(metadata.openGraph?.images).toBeUndefined();
        expect(metadata.twitter?.images).toBeUndefined();
        expect(JSON.stringify(metadata)).not.toContain("localhost");
      }
    );

    expect(warnSpy).toHaveBeenCalledOnce();
  });
});
