import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cluster } from "@/components/layout/cluster";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  skillsTechnologyEyebrow,
  skillsTechnologyGroups,
  skillsTechnologyHeading,
  skillsTechnologyIntroduction,
} from "@/content/skills";

export function TechnologyGroups() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-standard">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={skillsTechnologyEyebrow}
            title={skillsTechnologyHeading}
            description={skillsTechnologyIntroduction}
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {skillsTechnologyGroups.map((group) => (
              <Card key={group.title} surface="muted" className="min-w-0 p-5 md:p-6 lg:p-7">
                <Stack gap="md">
                  <div className="space-y-2">
                    <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                      {group.title}
                    </h3>
                    <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                      {group.description}
                    </p>
                  </div>

                  <Cluster gap="sm" className="items-start">
                    {group.technologies.map((technology) => (
                      <Badge key={technology} tone="neutral">
                        {technology}
                      </Badge>
                    ))}
                  </Cluster>

                  <p className="type-metadata text-[hsl(var(--foreground-muted))]">
                    {group.evidence}
                  </p>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </PageContainer>
    </Section>
  );
}
