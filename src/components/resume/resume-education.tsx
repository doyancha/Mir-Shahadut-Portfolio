import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  resumeEducationDescription,
  resumeEducationHeading,
  resumeEducationRecord,
} from "@/content/resume";

export function ResumeEducation() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="prose">
        <Stack gap="md">
          <SectionHeader title={resumeEducationHeading} description={resumeEducationDescription} />
          <Card>
            <Stack gap="sm">
              <div className="space-y-2">
                <p className="type-label text-[hsl(var(--accent))]">
                  {resumeEducationRecord.institution}
                </p>
                <h3 className="type-card-title text-[hsl(var(--foreground))]">
                  {resumeEducationRecord.degree}
                </h3>
              </div>

              <div className="space-y-1">
                <p className="type-body text-[hsl(var(--foreground-secondary))]">
                  {resumeEducationRecord.fieldOfStudy}
                </p>
                <p className="type-body text-[hsl(var(--foreground-secondary))]">
                  {resumeEducationRecord.gpa}
                </p>
              </div>
            </Stack>
          </Card>
        </Stack>
      </PageContainer>
    </Section>
  );
}
