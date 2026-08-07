import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { Tag } from "@/components/ui/tag";
import {
  skillsCapabilityEyebrow,
  skillsCapabilityGroups,
  skillsCapabilityHeading,
  skillsCapabilityIntroduction,
} from "@/content/skills";

export function CapabilityGroups() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-standard">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={skillsCapabilityEyebrow}
            title={skillsCapabilityHeading}
            description={skillsCapabilityIntroduction}
          />

          <ul className="grid gap-4 lg:grid-cols-2">
            {skillsCapabilityGroups.map((group) => (
              <li key={group.title} className="min-w-0">
                <Card surface="muted" className="h-full min-w-0 p-5 md:p-6 lg:p-7">
                  <Stack gap="md" className="h-full">
                    <div className="space-y-2">
                      <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                        {group.title}
                      </h3>
                      <p className="type-body text-[hsl(var(--foreground-secondary))]">
                        {group.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="type-label text-[hsl(var(--foreground-muted))]">Focus areas</p>
                      <div className="flex flex-wrap gap-2">
                        {group.focusAreas.map((focusArea) => (
                          <Tag key={focusArea} tone="subtle">
                            {focusArea}
                          </Tag>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="type-label text-[hsl(var(--foreground-muted))]">
                        Project evidence
                      </p>
                      <p className="type-metadata max-w-full break-words text-[hsl(var(--foreground-muted))]">
                        {group.evidence}
                      </p>
                    </div>
                  </Stack>
                </Card>
              </li>
            ))}
          </ul>
        </Stack>
      </PageContainer>
    </Section>
  );
}
