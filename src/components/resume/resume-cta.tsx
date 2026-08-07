import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  resumeCtaDescription,
  resumeCtaHeading,
  resumeCtaPrimary,
  resumeCtaSecondary,
  resumeCtaTertiary,
} from "@/content/resume";

export function ResumeCta() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="wide">
        <Card surface="elevated" className="p-5 md:p-6 lg:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <Stack gap="sm" className="max-w-[38rem]">
              <p className="type-label text-[hsl(var(--accent))]">NEXT STEP</p>
              <h2 className="type-section-title text-[hsl(var(--foreground))]">
                {resumeCtaHeading}
              </h2>
              <p className="type-body text-[hsl(var(--foreground-secondary))]">
                {resumeCtaDescription}
              </p>
            </Stack>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap md:justify-end">
              <LinkButton href={resumeCtaPrimary.href} size="lg" className="w-full sm:w-auto">
                {resumeCtaPrimary.label}
              </LinkButton>
              <LinkButton
                href={resumeCtaSecondary.href}
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                {resumeCtaSecondary.label}
              </LinkButton>
              <LinkButton
                href={resumeCtaTertiary.href}
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto"
              >
                {resumeCtaTertiary.label}
              </LinkButton>
            </div>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}
