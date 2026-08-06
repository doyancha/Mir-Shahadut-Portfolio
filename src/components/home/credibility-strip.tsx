import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import {
  homepageCredibilityItems,
  homepageCredibilityLabel,
  homepageCredibilityNote,
} from "@/content/homepage";

export function CredibilityStrip() {
  return (
    <Section className="py-0">
      <PageContainer size="home-standard">
        <Card
          surface="muted"
          className="border-[hsl(var(--border-strong))] px-5 py-5 md:px-6 md:py-6"
        >
          <div className="space-y-4">
            <p className="type-label text-[hsl(var(--accent))]">{homepageCredibilityLabel}</p>
            <div className="grid gap-4 lg:grid-cols-[repeat(3,minmax(0,1fr))_minmax(0,1.1fr)] lg:items-center">
              {homepageCredibilityItems.map((item) => (
                <div key={item} className="space-y-1.5">
                  <p className="type-body-small text-[hsl(var(--foreground))]">{item}</p>
                </div>
              ))}
              <div className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background-elevated))] p-4">
                <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                  {homepageCredibilityNote}
                </p>
              </div>
            </div>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}
