import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { socialLinks } from "@/content/social-links";
import { navigationItems } from "@/content/navigation";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const footerNavigationItems = navigationItems.filter((item) =>
    ["Projects", "Experience", "Resume", "Contact"].includes(item.label)
  );
  const footerSocialLinks = socialLinks.filter((link) =>
    ["GitHub", "LinkedIn"].includes(link.label)
  );

  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <PageContainer
        size="wide"
        className="pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-6 md:pb-8 md:pt-8"
      >
        <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="space-y-2">
            <p className="type-card-title text-[hsl(var(--foreground))]">Mir Shahadut Hossain</p>
            <p className="type-metadata text-[hsl(var(--foreground-muted))]">
              © {currentYear} Mir Shahadut Hossain
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-end">
                {footerNavigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex text-sm font-medium text-[hsl(var(--foreground-secondary))] transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {footerSocialLinks.length > 0 ? (
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm md:justify-end">
                {footerSocialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-[hsl(var(--foreground-muted))] transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
