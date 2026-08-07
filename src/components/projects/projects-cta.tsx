import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Cluster } from "@/components/layout/cluster";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  projectsCtaDescription,
  projectsCtaEyebrow,
  projectsCtaHeading,
  projectsCtaPrimary,
  projectsCtaSecondary,
} from "@/content/projects-page";

export function ProjectsCta() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-prose">
        <Card surface="elevated" className="p-5 md:p-6 lg:p-7">
          <Stack gap="md">
            <div className="space-y-2">
              <p className="type-label text-[hsl(var(--accent))]">{projectsCtaEyebrow}</p>
              <h2 className="type-section-title text-[hsl(var(--foreground))]">
                {projectsCtaHeading}
              </h2>
            </div>

            <p className="type-body-large text-[hsl(var(--foreground-secondary))]">
              {projectsCtaDescription}
            </p>

            <Cluster gap="sm" className="items-stretch">
              <LinkButton href={projectsCtaPrimary.href} variant="primary" size="lg">
                {projectsCtaPrimary.label}
              </LinkButton>
              <LinkButton href={projectsCtaSecondary.href} variant="secondary" size="lg">
                {projectsCtaSecondary.label}
              </LinkButton>
            </Cluster>
          </Stack>
        </Card>
      </PageContainer>
    </Section>
  );
}
