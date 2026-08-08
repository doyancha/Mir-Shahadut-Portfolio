import { socialLinks } from "@/content/social-links";
import { personalProfile } from "@/content/personal";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";
import { getSiteUrl } from "@/lib/site-url";

type JsonLdRecord = Record<string, unknown>;

function sanitizeJsonLd(data: JsonLdRecord): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function StructuredData() {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return null;
  }

  const sameAs = socialLinks
    .map((link) => link.href)
    .filter(
      (href): href is string =>
        typeof href === "string" && href.startsWith("https://") && href.length > 0
    );

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalProfile.displayName,
    jobTitle: personalProfile.professionalTitle,
    email: personalProfile.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
    sameAs,
    url: siteUrl,
    description: personalProfile.shortIntroduction,
  } satisfies JsonLdRecord;

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl,
    description: SITE_DESCRIPTION,
  } satisfies JsonLdRecord;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(website) }}
      />
    </>
  );
}
