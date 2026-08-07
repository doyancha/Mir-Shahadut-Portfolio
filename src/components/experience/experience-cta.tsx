import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  experienceCtas,
  supportingContextDescription,
  supportingContextHeading,
} from "@/content/experience";

export function ExperienceCta() {
  return (
    <>
      <Section className="pt-12 pb-0 md:pt-16">
        <PageContainer size="prose">
          <Stack gap="md">
            <SectionHeader title={supportingContextHeading} />
            <p className="type-body-large text-[hsl(var(--foreground-secondary))]">
              {supportingContextDescription}
            </p>
          </Stack>
        </PageContainer>
      </Section>

      <Section className="pt-12 pb-0 md:pt-16">
        <PageContainer size="wide">
          <Card surface="muted" className="p-5 md:p-6 lg:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
              <Stack gap="sm" className="max-w-[34rem]">
                <p className="type-label text-[hsl(var(--accent))]">NEXT STEP</p>
                <h2 className="type-section-title text-[hsl(var(--foreground))]">
                  Continue with projects or resume
                </h2>
                <p className="type-body text-[hsl(var(--foreground-secondary))]">
                  Explore selected projects for practical implementation evidence, or continue to
                  the resume page for a concise professional summary.
                </p>
              </Stack>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <LinkButton
                  href={experienceCtas.primary.href}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {experienceCtas.primary.label}
                </LinkButton>
                <LinkButton
                  href={experienceCtas.secondary.href}
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {experienceCtas.secondary.label}
                </LinkButton>
              </div>
            </div>
          </Card>
        </PageContainer>
      </Section>
    </>
  );
}
