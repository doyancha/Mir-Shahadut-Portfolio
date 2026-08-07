import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { experienceEntries } from "@/content/experience";

export function ExperienceTimeline() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="wide">
        <Stack gap="md">
          <SectionHeader
            title="Work experience"
            description="Professional roles that have contributed to my experience across development and project-focused work."
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {experienceEntries.map((entry) => (
              <Card key={`${entry.organization}-${entry.role}`} className="h-full">
                <Stack gap="md">
                  <div className="space-y-2">
                    <p className="type-label text-[hsl(var(--accent))]">{entry.organization}</p>
                    <h3 className="type-card-title text-[hsl(var(--foreground))]">{entry.role}</h3>
                  </div>

                  <dl className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    <div className="space-y-1">
                      <dt className="type-label text-[hsl(var(--foreground-muted))]">
                        Employment type
                      </dt>
                      <dd className="type-body text-[hsl(var(--foreground))]">
                        {entry.employmentType}
                      </dd>
                    </div>

                    <div className="space-y-1">
                      <dt className="type-label text-[hsl(var(--foreground-muted))]">
                        Work arrangement
                      </dt>
                      <dd className="type-body text-[hsl(var(--foreground))]">
                        {entry.workArrangement}
                      </dd>
                    </div>

                    <div className="space-y-1">
                      <dt className="type-label text-[hsl(var(--foreground-muted))]">Start date</dt>
                      <dd className="type-body text-[hsl(var(--foreground))]">{entry.startDate}</dd>
                    </div>

                    <div className="space-y-1">
                      <dt className="type-label text-[hsl(var(--foreground-muted))]">End date</dt>
                      <dd className="type-body text-[hsl(var(--foreground))]">{entry.endDate}</dd>
                    </div>
                  </dl>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </PageContainer>
    </Section>
  );
}
