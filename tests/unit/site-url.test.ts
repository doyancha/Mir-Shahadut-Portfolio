import { afterEach, describe, expect, it, vi } from "vitest";

import { withTestEnvironment } from "./test-env";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("getSiteUrl", () => {
  it("falls back to localhost in development", async () => {
    await withTestEnvironment(
      {
        NODE_ENV: "development",
        NEXT_PUBLIC_SITE_URL: undefined,
      },
      async () => {
        const { getSiteUrl } = await import("@/lib/site-url");

        expect(getSiteUrl()).toBe("http://localhost:3000");
      }
    );
  });

  it("returns a normalized absolute origin when configured", async () => {
    await withTestEnvironment(
      {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: "https://example.com/",
      },
      async () => {
        const { getSiteUrl } = await import("@/lib/site-url");

        expect(getSiteUrl()).toBe("https://example.com");
      }
    );
  });

  it("omits the origin in production when NEXT_PUBLIC_SITE_URL is missing", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);

    await withTestEnvironment(
      {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: undefined,
      },
      async () => {
        const { getSiteUrl } = await import("@/lib/site-url");

        expect(getSiteUrl()).toBe("");
      }
    );

    expect(warnSpy).toHaveBeenCalledOnce();
  });

  it("omits the origin in production when NEXT_PUBLIC_SITE_URL is invalid", async () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => undefined);

    await withTestEnvironment(
      {
        NODE_ENV: "production",
        NEXT_PUBLIC_SITE_URL: "not-a-valid-url",
      },
      async () => {
        const { getSiteUrl } = await import("@/lib/site-url");

        expect(getSiteUrl()).toBe("");
      }
    );

    expect(warnSpy).toHaveBeenCalledOnce();
  });
});
