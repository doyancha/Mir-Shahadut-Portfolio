import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  skillsCtaDescription,
  skillsCtaEyebrow,
  skillsCtaHeading,
  skillsCtaPrimary,
  skillsCtaSecondary,
} from "@/content/skills";

export function SkillsCta() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-narrative">
        <Card surface="elevated" className="p-5 md:p-6 lg:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <Stack gap="sm" className="max-w-[36rem] min-w-0">
              <p className="type-label text-[hsl(var(--accent))]">{skillsCtaEyebrow}</p>
              <h2 className="type-section-title text-[hsl(var(--foreground))]">
                {skillsCtaHeading}
              </h2>
              <p className="type-body text-[hsl(var(--foreground-secondary))]">
                {skillsCtaDescription}
              </p>
            </Stack>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <LinkButton href={skillsCtaPrimary.href} size="lg" className="w-full sm:w-auto">
                {skillsCtaPrimary.label}
              </LinkButton>
              <LinkButton
                href={skillsCtaSecondary.href}
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {skillsCtaSecondary.label}
              </LinkButton>
            </div>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}
