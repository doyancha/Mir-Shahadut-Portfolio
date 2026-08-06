import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  aboutProfessionalFocusCards,
  aboutProfessionalFocusEyebrow,
  aboutProfessionalFocusHeading,
  aboutProfessionalFocusIntroduction,
} from "@/content/about";

export function ProfessionalFocus() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-standard">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={aboutProfessionalFocusEyebrow}
            title={aboutProfessionalFocusHeading}
            description={aboutProfessionalFocusIntroduction}
          />

          <ul className="grid gap-4 lg:grid-cols-3">
            {aboutProfessionalFocusCards.map((card) => (
              <li key={card.title} className="min-w-0">
                <Card surface="muted" className="h-full p-5 md:p-6">
                  <Stack gap="sm" className="h-full">
                    <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                      {card.title}
                    </h3>
                    <p className="type-body text-[hsl(var(--foreground-secondary))]">
                      {card.description}
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
