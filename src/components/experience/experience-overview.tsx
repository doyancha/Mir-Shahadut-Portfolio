import { PageContainer } from "@/components/layout/page-container";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { experienceOverviewDescription, experienceOverviewHeading } from "@/content/experience";

export function ExperienceOverview() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="prose">
        <Stack gap="md">
          <SectionHeader title={experienceOverviewHeading} />
          <Prose className="p-0">
            <p>{experienceOverviewDescription}</p>
          </Prose>
        </Stack>
      </PageContainer>
    </Section>
  );
}
