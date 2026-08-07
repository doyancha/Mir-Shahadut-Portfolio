import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  projectsHeroEyebrow,
  projectsHeroHeading,
  projectsHeroIntroduction,
  projectsHeroSupport,
} from "@/content/projects-page";

export function ProjectsHero() {
  return (
    <Section className="pb-12 pt-6 md:pb-14 md:pt-8">
      <PageContainer size="home-prose">
        <Stack gap="lg" className="max-w-[42rem]">
          <p className="type-label text-[hsl(var(--accent))]">{projectsHeroEyebrow}</p>
          <Stack gap="sm">
            <h1 className="type-display max-w-[12ch] text-[hsl(var(--foreground))]">
              {projectsHeroHeading}
            </h1>
            <p className="type-body-large max-w-[40rem] text-[hsl(var(--foreground-secondary))]">
              {projectsHeroIntroduction}
            </p>
          </Stack>
          <p className="type-metadata max-w-[34rem] text-[hsl(var(--foreground-muted))]">
            {projectsHeroSupport}
          </p>
        </Stack>
      </PageContainer>
    </Section>
  );
}
