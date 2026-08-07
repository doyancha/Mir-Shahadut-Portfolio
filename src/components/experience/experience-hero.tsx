import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  experienceHeroFacts,
  experienceHeroIntroduction,
  experiencePageEyebrow,
  experiencePageHeading,
} from "@/content/experience";

export function ExperienceHero() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="wide">
        <Stack gap="lg">
          <Stack gap="sm" className="max-w-[var(--container-prose)]">
            <p className="type-label text-[hsl(var(--accent))]">{experiencePageEyebrow}</p>
            <h1 className="type-page-title text-[hsl(var(--foreground))]">
              {experiencePageHeading}
            </h1>
            <p className="type-body-large text-[hsl(var(--foreground-secondary))]">
              {experienceHeroIntroduction}
            </p>
          </Stack>

          <dl className="grid gap-3 md:grid-cols-3">
            {experienceHeroFacts.map((fact) => (
              <div key={fact.label} className="surface-card flex h-full flex-col gap-2 p-4 md:p-5">
                <dt className="type-label text-[hsl(var(--foreground-muted))]">{fact.label}</dt>
                <dd className="type-body-large text-[hsl(var(--foreground))]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Stack>
      </PageContainer>
    </Section>
  );
}
