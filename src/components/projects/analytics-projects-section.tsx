import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  analyticsProjectsSectionEyebrow,
  analyticsProjectsSectionHeading,
  analyticsProjectsSectionIntroduction,
} from "@/content/analytics-projects-page";
import { analyticsProjectEntries } from "@/content/analytics-projects";
import { AnalyticsProjectEvidenceRow } from "./analytics-project-evidence-row";

export function AnalyticsProjectsSection() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-featured">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={analyticsProjectsSectionEyebrow}
            title={analyticsProjectsSectionHeading}
            description={analyticsProjectsSectionIntroduction}
          />

          <ol className="grid gap-4 md:gap-5 lg:gap-6">
            {analyticsProjectEntries.map((project, index) => (
              <li key={project.slug} className="min-w-0">
                <AnalyticsProjectEvidenceRow project={project} index={index} />
              </li>
            ))}
          </ol>
        </Stack>
      </PageContainer>
    </Section>
  );
}
