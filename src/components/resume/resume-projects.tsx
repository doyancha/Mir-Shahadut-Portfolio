import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Tag } from "@/components/ui/tag";
import { Cluster } from "@/components/layout/cluster";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  resumeProjectHighlights,
  resumeProjectsDescription,
  resumeProjectsHeading,
} from "@/content/resume";

export function ResumeProjects() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="wide">
        <Stack gap="md">
          <SectionHeader title={resumeProjectsHeading} description={resumeProjectsDescription} />

          <div className="grid gap-4 lg:grid-cols-3">
            {resumeProjectHighlights.map((project) => (
              <Card key={project.slug} surface="muted" className="h-full p-5 md:p-6 lg:p-7">
                <Stack gap="md" className="h-full">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      {project.status ? <Badge tone="neutral">{project.status}</Badge> : null}
                    </div>
                    <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                      {project.name}
                    </h3>
                  </div>

                  <p className="type-body text-[hsl(var(--foreground-secondary))]">
                    {project.summary}
                  </p>

                  <Cluster gap="sm" className="items-start">
                    {project.technologies.map((technology) => (
                      <Tag key={technology}>{technology}</Tag>
                    ))}
                  </Cluster>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <LinkButton href={`/projects/${project.slug}`} variant="secondary" size="sm">
                      View case study
                    </LinkButton>
                    {project.liveDemoUrl ? (
                      <LinkButton href={project.liveDemoUrl} external variant="ghost" size="sm">
                        Open live demo
                      </LinkButton>
                    ) : null}
                  </div>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </PageContainer>
    </Section>
  );
}
