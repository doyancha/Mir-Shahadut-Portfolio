import type { Metadata } from "next";

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

type CreateMetadataOptions = Metadata & {
  path?: string;
};

function normalizePath(path: string): string {
  if (path === "/") {
    return path;
  }

  return `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

export function createMetadata({ path = "/", ...overrides }: CreateMetadataOptions = {}): Metadata {
  const canonicalPath = normalizePath(path);
  const siteUrl = getSiteUrl();
  const hasSiteUrl = Boolean(siteUrl);

  return {
    ...(hasSiteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    ...(hasSiteUrl ? { alternates: { canonical: canonicalPath } } : {}),
    icons: {
      icon: "/icon.svg",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
      ...(hasSiteUrl ? { url: canonicalPath } : {}),
    },
    twitter: {
      card: "summary",
      title: SITE_NAME,
      description: SITE_DESCRIPTION,
    },
    ...overrides,
  };
}
