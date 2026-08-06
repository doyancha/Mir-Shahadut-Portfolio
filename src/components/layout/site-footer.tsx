import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { navigationItems } from "@/content/navigation";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <PageContainer
        size="wide"
        className="flex flex-col gap-8 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-8 md:flex-row md:items-start md:justify-between md:gap-12 md:pb-10"
      >
        <div className="max-w-[32rem] space-y-3">
          <p className="type-card-title text-[hsl(var(--foreground))]">Mir Shahadut Hossain</p>
          <p className="max-w-[32rem] text-sm leading-7 text-[hsl(var(--foreground-secondary))]">
            Official professional portfolio and personal-brand website.
          </p>
          <p className="type-metadata text-[hsl(var(--foreground-muted))]">
            © {currentYear} Mir Shahadut Hossain
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="grid gap-2 border-t border-[hsl(var(--border))] pt-6 md:w-[16rem] md:shrink-0 md:border-t-0 md:pt-0"
        >
          <ul className="grid gap-2">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex text-sm text-[hsl(var(--foreground-secondary))] transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[hsl(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageContainer>
    </footer>
  );
}
