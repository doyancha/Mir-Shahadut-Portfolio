import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  homepageFeaturedEyebrow,
  homepageFeaturedHeading,
  homepageFeaturedProjects,
  homepageFeaturedIntroduction,
} from "@/content/homepage";
import { FeaturedProjectRow } from "@/components/projects/featured-project-row";

export function FeaturedProjects() {
  return (
    <Section className="pb-0 pt-12 md:pt-16">
      <PageContainer size="home-featured">
        <Stack gap="xl">
          <Stack gap="sm" className="max-w-[var(--container-home-prose)]">
            <p className="type-label text-[hsl(var(--accent))]">{homepageFeaturedEyebrow}</p>
            <h2 className="type-section-title text-[hsl(var(--foreground))]">
              {homepageFeaturedHeading}
            </h2>
            <p className="type-body text-[hsl(var(--foreground-secondary))]">
              {homepageFeaturedIntroduction}
            </p>
          </Stack>

          <Stack gap="xl">
            {homepageFeaturedProjects.map((project, index) => (
              <FeaturedProjectRow key={project.slug} project={project} index={index} />
            ))}
          </Stack>
        </Stack>
      </PageContainer>
    </Section>
  );
}
