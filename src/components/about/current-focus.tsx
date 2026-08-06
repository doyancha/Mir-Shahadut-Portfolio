import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  aboutCurrentFocusDescription,
  aboutCurrentFocusEyebrow,
  aboutCurrentFocusHeading,
  aboutCurrentFocusPoints,
} from "@/content/about";

export function CurrentFocus() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-narrative">
        <Stack gap="xl">
          <SectionHeader
            eyebrow={aboutCurrentFocusEyebrow}
            title={aboutCurrentFocusHeading}
            description={aboutCurrentFocusDescription}
          />

          <Card surface="elevated" className="p-5 md:p-6 lg:p-7">
            <Stack gap="md">
              <p className="type-label text-[hsl(var(--accent))]">Focus areas</p>
              <p className="type-body max-w-[42rem] text-[hsl(var(--foreground-secondary))]">
                I continue strengthening the connection between interface design, server-side
                behavior, data handling, and practical delivery across real application workflows.
              </p>

              <div className="flex flex-wrap gap-2 min-w-0">
                {aboutCurrentFocusPoints.map((point) => (
                  <Tag key={point} tone="subtle">
                    {point}
                  </Tag>
                ))}
              </div>
            </Stack>
          </Card>
        </Stack>
      </PageContainer>
    </Section>
  );
}
