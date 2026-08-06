import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  homepageContactCta,
  homepageContactDescription,
  homepageContactEyebrow,
  homepageContactHeading,
} from "@/content/homepage";

export function ContactCtaSection() {
  return (
    <Section className="pt-10 pb-0 md:pt-14">
      <PageContainer size="home-narrative">
        <Card surface="elevated" className="p-5 md:p-6 lg:p-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
            <Stack gap="sm" className="max-w-[34rem]">
              <p className="type-label text-[hsl(var(--accent))]">{homepageContactEyebrow}</p>
              <h2 className="type-section-title text-[hsl(var(--foreground))]">
                {homepageContactHeading}
              </h2>
              <p className="type-body max-w-[36rem] text-[hsl(var(--foreground-secondary))]">
                {homepageContactDescription}
              </p>
            </Stack>

            <div className="flex md:justify-end">
              <LinkButton
                href={homepageContactCta.href}
                variant="primary"
                size="lg"
                className="w-full md:w-auto"
              >
                {homepageContactCta.label}
              </LinkButton>
            </div>
          </div>
        </Card>
      </PageContainer>
    </Section>
  );
}
