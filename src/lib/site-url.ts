import { DEFAULT_SITE_URL } from "@/lib/constants";

let warnedMissingProductionSiteUrl = false;

export function getSiteUrl(): string {
  const configuredUrl = process.env["NEXT_PUBLIC_SITE_URL"]?.trim();

  if (!configuredUrl) {
    if (process.env.NODE_ENV === "production") {
      if (!warnedMissingProductionSiteUrl) {
        warnedMissingProductionSiteUrl = true;
        console.warn(
          "NEXT_PUBLIC_SITE_URL is missing in production. Canonical and Open Graph URLs will be omitted instead of defaulting to localhost."
        );
      }

      return "";
    }

    return DEFAULT_SITE_URL;
  }

  try {
    return new URL(configuredUrl).toString().replace(/\/+$/, "");
  } catch {
    if (process.env.NODE_ENV === "production") {
      if (!warnedMissingProductionSiteUrl) {
        warnedMissingProductionSiteUrl = true;
        console.warn(
          "NEXT_PUBLIC_SITE_URL is invalid in production. Canonical and Open Graph URLs will be omitted instead of defaulting to localhost."
        );
      }

      return "";
    }

    return DEFAULT_SITE_URL;
  }
}
