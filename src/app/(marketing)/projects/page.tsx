import type { Metadata } from "next";

import { ProjectsCta } from "@/components/projects/projects-cta";
import { ProjectsEvidenceNote } from "@/components/projects/projects-evidence-note";
import { ProjectsHero } from "@/components/projects/projects-hero";
import { ProjectEvidenceRow } from "@/components/projects/project-evidence-row";
import { AnalyticsProjectsSection } from "@/components/projects/analytics-projects-section";
import { ProjectsStatusGuide } from "@/components/projects/projects-status-guide";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { createMetadata } from "@/lib/metadata";
import { projectEntries } from "@/content/projects";

export const metadata: Metadata = createMetadata({
  path: "/projects",
  title: "Projects",
  description:
    "Full-stack project work including HRH Shopping, BookEasy, and TaskOrbit, presented through verified summaries, live demos, and factual development status.",
});

export default function ProjectsPage() {
  return (
    <div className="pb-16 md:pb-24">
      <ProjectsHero />
      <ProjectsStatusGuide />

      <Section className="pt-12 pb-0 md:pt-16">
        <PageContainer size="home-featured">
          <ol className="grid gap-4 md:gap-5 lg:gap-6">
            {projectEntries.map((project, index) => (
              <li key={project.slug} className="min-w-0">
                <ProjectEvidenceRow project={project} index={index} />
              </li>
            ))}
          </ol>
        </PageContainer>
      </Section>

      <AnalyticsProjectsSection />
      <ProjectsEvidenceNote />
      <ProjectsCta />
    </div>
  );
}
