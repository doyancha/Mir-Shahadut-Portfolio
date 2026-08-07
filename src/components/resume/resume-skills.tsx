import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { Cluster } from "@/components/layout/cluster";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { resumeSkillDescription, resumeSkillGroups, resumeSkillHeading } from "@/content/resume";

export function ResumeSkills() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="wide">
        <Stack gap="md">
          <SectionHeader title={resumeSkillHeading} description={resumeSkillDescription} />

          <div className="grid gap-4 lg:grid-cols-3">
            {resumeSkillGroups.map((group) => (
              <Card key={group.title} surface="muted" className="h-full p-5 md:p-6 lg:p-7">
                <Stack gap="md">
                  <div className="space-y-2">
                    <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                      {group.title}
                    </h3>
                  </div>

                  <Cluster gap="sm" className="items-start">
                    {group.technologies.map((technology) => (
                      <Tag key={technology} tone="subtle">
                        {technology}
                      </Tag>
                    ))}
                  </Cluster>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </PageContainer>
    </Section>
  );
}
