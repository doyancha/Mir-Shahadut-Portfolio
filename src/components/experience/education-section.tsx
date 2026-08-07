import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { educationDescription, educationHeading, educationRecord } from "@/content/experience";

export function EducationSection() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="prose">
        <Stack gap="md">
          <SectionHeader title={educationHeading} />
          <Prose className="p-0">
            <p>{educationDescription}</p>
          </Prose>
          <Card>
            <Stack gap="sm">
              <div className="space-y-2">
                <p className="type-label text-[hsl(var(--accent))]">
                  {educationRecord.institution}
                </p>
                <h3 className="type-card-title text-[hsl(var(--foreground))]">
                  {educationRecord.degree}
                </h3>
              </div>

              <div className="space-y-1">
                <p className="type-body text-[hsl(var(--foreground-secondary))]">
                  {educationRecord.fieldOfStudy}
                </p>
                <p className="type-body text-[hsl(var(--foreground-secondary))]">
                  {educationRecord.gpa}
                </p>
              </div>
            </Stack>
          </Card>
        </Stack>
      </PageContainer>
    </Section>
  );
}
