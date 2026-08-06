import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  aboutJourneyEyebrow,
  aboutJourneyHeading,
  aboutJourneyIntroduction,
  aboutJourneyMilestones,
  aboutJourneyNarrative,
} from "@/content/about";

export function JourneySummary() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-narrative">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={aboutJourneyEyebrow}
            title={aboutJourneyHeading}
            description={aboutJourneyIntroduction}
          />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <Card surface="default" className="min-w-0 p-5 md:p-6 lg:p-7">
              <Stack gap="md">
                <p className="type-label text-[hsl(var(--accent))]">Narrative</p>
                <div className="space-y-4">
                  {aboutJourneyNarrative.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="type-body-large max-w-[42rem] break-words text-[hsl(var(--foreground-secondary))]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Stack>
            </Card>

            <Card surface="muted" className="min-w-0 p-5 md:p-6 lg:p-7">
              <Stack gap="md">
                <p className="type-label text-[hsl(var(--accent))]">Milestones</p>
                <ul className="space-y-4">
                  {aboutJourneyMilestones.map((milestone) => (
                    <li
                      key={milestone.label}
                      className="border-t border-[hsl(var(--border))] pt-4 first:border-t-0 first:pt-0"
                    >
                      <div className="space-y-1.5">
                        <h3 className="type-card-title text-[hsl(var(--foreground))]">
                          {milestone.label}
                        </h3>
                        <p className="type-body-small break-words text-[hsl(var(--foreground-secondary))]">
                          {milestone.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Stack>
            </Card>
          </div>
        </Stack>
      </PageContainer>
    </Section>
  );
}
