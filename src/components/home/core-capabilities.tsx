import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { Tag } from "@/components/ui/tag";
import {
  homepageCapabilitiesEyebrow,
  homepageCapabilitiesHeading,
  homepageCapabilitiesIntroduction,
  homepageCapabilityCards,
} from "@/content/homepage";

export function CoreCapabilities() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-standard">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={homepageCapabilitiesEyebrow}
            title={homepageCapabilitiesHeading}
            description={homepageCapabilitiesIntroduction}
          />

          <ul className="grid gap-4 lg:grid-cols-2">
            {homepageCapabilityCards.map((card) => (
              <li key={card.title} className="min-w-0">
                <Card surface="muted" className="h-full p-5 md:p-6">
                  <Stack gap="md" className="h-full">
                    <div className="space-y-2">
                      <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                        {card.title}
                      </h3>
                      <p className="type-body text-[hsl(var(--foreground-secondary))]">
                        {card.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="type-label text-[hsl(var(--foreground-muted))]">Focus areas</p>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <Tag key={tag} tone="subtle">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
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
