import type { Metadata } from "next";

import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

type CreateMetadataOptions = Metadata & {
  path?: string;
};

type TwitterCard = "summary" | "summary_large_image" | "player" | "app";
type OpenGraphType =
  | "article"
  | "book"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "profile"
  | "website"
  | "video.tv_show"
  | "video.other"
  | "video.movie"
  | "video.episode";

const SOCIAL_IMAGE_PATH = "/social-image.png";
const SOCIAL_IMAGE_ALT = "Mir Shahadut Hossain, Full Stack Web Developer";

function normalizePath(path: string): string {
  if (path === "/") {
    return path;
  }

  return `/${path.replace(/^\/+/, "").replace(/\/+$/, "")}`;
}

function resolveTitle(title: Metadata["title"]): string {
  if (typeof title === "string") {
    return title;
  }

  if (title && typeof title === "object") {
    const titleObject = title as {
      absolute?: unknown;
      default?: unknown;
    };

    if (typeof titleObject.absolute === "string" && titleObject.absolute.trim()) {
      return titleObject.absolute;
    }

    if (typeof titleObject.default === "string" && titleObject.default.trim()) {
      return titleObject.default;
    }
  }

  return SITE_NAME;
}

function resolveTwitterCard(twitter: Metadata["twitter"]): TwitterCard | undefined {
  if (!twitter || typeof twitter !== "object") {
    return undefined;
  }

  const card = (twitter as { card?: unknown }).card;

  if (card === "summary" || card === "summary_large_image" || card === "player" || card === "app") {
    return card;
  }

  return undefined;
}

export function createMetadata({ path = "/", ...overrides }: CreateMetadataOptions = {}): Metadata {
  const canonicalPath = normalizePath(path);
  const siteUrl = getSiteUrl();
  const hasSiteUrl = Boolean(siteUrl);
  const pageTitle = resolveTitle(overrides.title);
  const pageDescription = overrides.description ?? SITE_DESCRIPTION;
  const { openGraph: openGraphOverrides, twitter: twitterOverrides, ...rest } = overrides;
  const openGraphType = ((openGraphOverrides as { type?: OpenGraphType } | null | undefined)
    ?.type ?? "website") as OpenGraphType;
  const openGraphLocale = openGraphOverrides?.locale ?? "en_US";
  const openGraphSiteName = openGraphOverrides?.siteName ?? SITE_NAME;
  const openGraphUrl = openGraphOverrides?.url ?? (hasSiteUrl ? canonicalPath : undefined);
  const socialImageUrl = hasSiteUrl ? new URL(SOCIAL_IMAGE_PATH, siteUrl).toString() : undefined;
  const twitterCard = resolveTwitterCard(twitterOverrides) ?? "summary_large_image";
  const twitterTitle = twitterOverrides?.title ?? pageTitle;
  const twitterDescription = twitterOverrides?.description ?? pageDescription;

  return {
    ...(hasSiteUrl ? { metadataBase: new URL(siteUrl) } : {}),
    title: overrides.title ?? {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: pageDescription,
    applicationName: SITE_NAME,
    ...(hasSiteUrl ? { alternates: { canonical: canonicalPath } } : {}),
    icons: {
      icon: "/icon.svg",
    },
    openGraph: {
      ...openGraphOverrides,
      type: openGraphType,
      locale: openGraphLocale,
      siteName: openGraphSiteName,
      title: openGraphOverrides?.title ?? pageTitle,
      description: openGraphOverrides?.description ?? pageDescription,
      ...(openGraphUrl ? { url: openGraphUrl } : {}),
      ...(openGraphOverrides?.images
        ? {}
        : socialImageUrl
          ? {
              images: [
                {
                  url: socialImageUrl,
                  alt: SOCIAL_IMAGE_ALT,
                  width: 1200,
                  height: 630,
                },
              ],
            }
          : {}),
    },
    twitter: {
      ...twitterOverrides,
      card: twitterCard,
      title: twitterTitle,
      description: twitterDescription,
      ...(twitterOverrides?.images ? {} : socialImageUrl ? { images: socialImageUrl } : {}),
    },
    ...rest,
  };
}
