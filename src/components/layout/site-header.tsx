import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { ContactCtaLink } from "@/components/layout/contact-cta-link";

export function SiteHeader() {
  return (
    <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background))]">
      <PageContainer size="wide" className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="inline-flex min-h-[var(--control-height-md)] items-center rounded-md px-1 py-1 text-sm font-semibold text-[hsl(var(--foreground))] transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[hsl(var(--foreground-secondary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] sm:text-base"
        >
          Mir Shahadut Hossain
        </Link>

        <div className="flex items-center gap-3">
          <DesktopNavigation />
          <ContactCtaLink />
          <MobileNavigation />
        </div>
      </PageContainer>
    </header>
  );
}
