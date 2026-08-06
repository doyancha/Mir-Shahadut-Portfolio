import { Card } from "@/components/ui/card";
import { Cluster } from "@/components/layout/cluster";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { Tag } from "@/components/ui/tag";
import {
  homepageTechnologiesEyebrow,
  homepageTechnologiesHeading,
  homepageTechnologiesIntroduction,
  homepageTechnologyGroups,
} from "@/content/homepage";

export function SelectedTechnologies() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-standard">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={homepageTechnologiesEyebrow}
            title={homepageTechnologiesHeading}
            description={homepageTechnologiesIntroduction}
          />

          <div className="grid gap-4 lg:grid-cols-3">
            {homepageTechnologyGroups.map((group) => (
              <Card key={group.title} surface="muted" className="p-5 md:p-6">
                <Stack gap="md">
                  <div className="space-y-2">
                    <p className="type-label text-[hsl(var(--accent))]">{group.title}</p>
                    <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                      {group.description}
                    </p>
                  </div>

                  <Cluster gap="sm" className="items-start">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
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
