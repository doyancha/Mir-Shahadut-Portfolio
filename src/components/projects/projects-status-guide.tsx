import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  projectsStatusGuideEyebrow,
  projectsStatusGuideHeading,
  projectsStatusGuideIntroduction,
  projectsStatusGuideItems,
} from "@/content/projects-page";

export function ProjectsStatusGuide() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-standard">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={projectsStatusGuideEyebrow}
            title={projectsStatusGuideHeading}
            description={projectsStatusGuideIntroduction}
          />

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {projectsStatusGuideItems.map((item) => (
              <Card key={item.title} surface="muted" className="min-w-0 p-4 md:p-5">
                <Stack gap="xs">
                  <h3 className="type-card-title text-[hsl(var(--foreground))]">{item.title}</h3>
                  <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                    {item.description}
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
