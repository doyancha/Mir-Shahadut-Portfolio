import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  homepageEngineeringEyebrow,
  homepageEngineeringHeading,
  homepageEngineeringIntroduction,
  homepageEngineeringPrinciples,
} from "@/content/homepage";

export function EngineeringApproach() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-narrative">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={homepageEngineeringEyebrow}
            title={homepageEngineeringHeading}
            description={homepageEngineeringIntroduction}
          />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start">
            <Card surface="muted" className="p-5 md:p-6 lg:p-7">
              <Stack gap="md">
                <p className="type-label text-[hsl(var(--accent))]">Working style</p>
                <p className="type-body-large max-w-[40rem] text-[hsl(var(--foreground-secondary))]">
                  I begin with the user journey and core requirements, then organize the interface,
                  application logic, and data responsibilities around a clear structure.
                </p>
                <p className="type-body max-w-[40rem] text-[hsl(var(--foreground-muted))]">
                  The goal is not unnecessary complexity. It is a solution that remains
                  understandable, testable, and ready to evolve.
                </p>
              </Stack>
            </Card>

            <Card surface="default" className="p-5 md:p-6 lg:p-7">
              <Stack gap="md">
                <p className="type-label text-[hsl(var(--accent))]">Principles</p>
                <ul className="space-y-4">
                  {homepageEngineeringPrinciples.map((principle) => (
                    <li
                      key={principle.title}
                      className="border-t border-[hsl(var(--border))] pt-4 first:border-t-0 first:pt-0"
                    >
                      <div className="space-y-1.5">
                        <h3 className="type-card-title text-[hsl(var(--foreground))]">
                          {principle.title}
                        </h3>
                        <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                          {principle.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Stack>
            </Card>
          </div>
        </Stack>
      </PageContainer>
    </Section>
  );
}
