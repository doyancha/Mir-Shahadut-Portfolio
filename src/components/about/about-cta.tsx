import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  aboutCtaDescription,
  aboutCtaEyebrow,
  aboutCtaHeading,
  aboutCtaPrimary,
  aboutCtaSecondary,
} from "@/content/about";

export function AboutCta() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-narrative">
        <Card surface="elevated" className="p-5 md:p-6 lg:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <Stack gap="sm" className="max-w-[34rem]">
              <p className="type-label text-[hsl(var(--accent))]">{aboutCtaEyebrow}</p>
              <h2 className="type-section-title text-[hsl(var(--foreground))]">
                {aboutCtaHeading}
              </h2>
              <p className="type-body max-w-[36rem] text-[hsl(var(--foreground-secondary))]">
                {aboutCtaDescription}
              </p>
            </Stack>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <LinkButton href={aboutCtaPrimary.href} size="lg" className="w-full sm:w-auto">
                {aboutCtaPrimary.label}
              </LinkButton>
              <LinkButton
                href={aboutCtaSecondary.href}
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {aboutCtaSecondary.label}
              </LinkButton>
            </div>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}
