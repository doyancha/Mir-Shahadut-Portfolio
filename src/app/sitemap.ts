import type { MetadataRoute } from "next";

import { caseStudyEntries } from "@/content/case-studies";
import { navigationItems } from "@/content/navigation";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return [];
  }

  const publicRoutes = [
    ...navigationItems.map((item) => item.href),
    ...caseStudyEntries.map((caseStudy) => caseStudy.canonicalPath),
  ];

  return publicRoutes.map((href) => ({
    url: new URL(href, siteUrl).toString(),
    changeFrequency: "weekly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
