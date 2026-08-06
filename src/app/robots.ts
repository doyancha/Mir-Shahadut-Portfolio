import type { MetadataRoute } from "next";

import { DEFAULT_SITE_URL } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
    host: DEFAULT_SITE_URL,
  };
}
