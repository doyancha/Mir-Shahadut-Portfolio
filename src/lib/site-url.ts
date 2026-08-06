import { DEFAULT_SITE_URL } from "@/lib/constants";

export function getSiteUrl(): string {
  const configuredUrl = process.env["NEXT_PUBLIC_SITE_URL"]?.trim();

  if (!configuredUrl) {
    return DEFAULT_SITE_URL;
  }

  return new URL(configuredUrl).toString().replace(/\/+$/, "");
}
