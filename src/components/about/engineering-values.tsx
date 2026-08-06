import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  aboutValues,
  aboutValuesEyebrow,
  aboutValuesHeading,
  aboutValuesIntroduction,
} from "@/content/about";

export function EngineeringValues() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-standard">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={aboutValuesEyebrow}
            title={aboutValuesHeading}
            description={aboutValuesIntroduction}
          />

          <ul className="grid gap-4 lg:grid-cols-2">
            {aboutValues.map((value) => (
              <li key={value.title} className="min-w-0">
                <Card surface="muted" className="h-full min-w-0 p-5 md:p-6">
                  <Stack gap="sm" className="h-full">
                    <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                      {value.title}
                    </h3>
                    <p className="type-body break-words text-[hsl(var(--foreground-secondary))]">
                      {value.description}
                    </p>
                  </Stack>
                </Card>
              </li>
            ))}
          </ul>
        </Stack>
      </PageContainer>
    </Section>
  );
}
