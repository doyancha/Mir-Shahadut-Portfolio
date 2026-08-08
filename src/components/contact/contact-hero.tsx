import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  contactDirectEmail,
  contactHeroCtas,
  contactPageDescription,
  contactPageEyebrow,
  contactPageHeading,
} from "@/content/contact";

export function ContactHero() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="wide">
        <Card surface="elevated" className="p-6 md:p-7 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:items-start">
            <Stack gap="lg" className="min-w-0">
              <div className="space-y-4">
                <p className="type-label text-[hsl(var(--accent))]">{contactPageEyebrow}</p>
                <h1 className="type-page-title max-w-[18ch] text-[hsl(var(--foreground))]">
                  {contactPageHeading}
                </h1>
                <p className="type-body-large max-w-[40rem] break-words text-[hsl(var(--foreground-secondary))]">
                  {contactPageDescription}
                </p>
                <p className="type-body text-[hsl(var(--foreground-secondary))]">
                  Direct email:{" "}
                  <a
                    href={`mailto:${contactDirectEmail}`}
                    className="inline break-all font-medium text-[hsl(var(--accent))] underline underline-offset-4 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[hsl(var(--accent-hover))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
                  >
                    {contactDirectEmail}
                  </a>
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {contactHeroCtas.map((cta, index) => (
                  <LinkButton
                    key={cta.label}
                    href={cta.href}
                    size="lg"
                    variant={index === 0 ? "primary" : "secondary"}
                    className="w-full sm:w-auto"
                  >
                    {cta.label}
                  </LinkButton>
                ))}
              </div>
            </Stack>

            <Card surface="muted" className="min-w-0 p-5 md:p-6">
              <Stack gap="sm">
                <p className="type-label text-[hsl(var(--accent))]">How to reach me</p>
                <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                  Use the form below for a structured message, or use the direct email link for a
                  faster start.
                </p>
              </Stack>
            </Card>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}
