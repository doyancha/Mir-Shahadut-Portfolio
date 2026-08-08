import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  resumeHeroFacts,
  resumeHeroIntroduction,
  resumePdfDownloadLabel,
  resumePdfPath,
  resumePageEyebrow,
  resumePageHeading,
} from "@/content/resume";

export function ResumeHero() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="wide">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(18rem,0.88fr)] lg:items-start">
          <Stack gap="lg" className="min-w-0">
            <div className="w-full min-w-0 max-w-[18rem] space-y-4 sm:max-w-[40rem]">
              <p className="type-label text-[hsl(var(--accent))]">{resumePageEyebrow}</p>
              <h1 className="type-page-title max-w-[16ch] text-[hsl(var(--foreground))]">
                {resumePageHeading}
              </h1>
              <p className="type-body-large max-w-[40rem] break-words text-[hsl(var(--foreground-secondary))]">
                {resumeHeroIntroduction}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <LinkButton href={resumePdfPath} size="lg" className="w-full sm:w-auto" download>
                {resumePdfDownloadLabel}
              </LinkButton>
              <LinkButton
                href="/projects"
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                View Projects
              </LinkButton>
              <LinkButton href="/contact" size="lg" variant="ghost" className="w-full sm:w-auto">
                Contact Me
              </LinkButton>
            </div>
          </Stack>

          <Card surface="muted" className="min-w-0 p-5 md:p-6 lg:p-7">
            <Stack gap="md">
              <div className="space-y-1.5">
                <p className="type-label text-[hsl(var(--accent))]">At a glance</p>
                <h2 className="type-card-title text-[hsl(var(--foreground))]">
                  Professional snapshot
                </h2>
              </div>

              <dl className="min-w-0 grid gap-4">
                {resumeHeroFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="min-w-0 space-y-1.5 border-t border-[hsl(var(--border))] pt-4 first:border-t-0 first:pt-0"
                  >
                    <dt className="type-caption text-[hsl(var(--foreground-muted))]">
                      {fact.label}
                    </dt>
                    <dd className="type-body-small max-w-full break-words text-[hsl(var(--foreground-secondary))]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Stack>
          </Card>
        </div>
      </PageContainer>
    </Section>
  );
}
