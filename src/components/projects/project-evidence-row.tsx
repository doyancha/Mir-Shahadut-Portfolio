import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Tag } from "@/components/ui/tag";
import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import { cn } from "@/lib/utils";
import type { ProjectRecord } from "@/types/project";
import {
  projectDemoStatusLabels,
  projectRepositoryVisibilityLabels,
} from "@/content/projects-page";
import { ProjectMediaPreview } from "./project-media-preview";

function getProjectEvidenceNote(project: ProjectRecord): string | null {
  return project.statusNotes.find((note) => !note.startsWith("Do not")) ?? null;
}

type ProjectEvidenceRowProps = {
  project: ProjectRecord;
  index: number;
};

export function ProjectEvidenceRow({ project, index }: ProjectEvidenceRowProps) {
  const rank = String(index + 1).padStart(2, "0");
  const summary = project.homepageSummary ?? project.shortSummary ?? "Pending owner input";
  const techLabels = (project.homepageTechnologyStack ?? project.technologyStack).slice(0, 5);
  const projectEvidenceNote = getProjectEvidenceNote(project);
  const liveDemoUrl = project.liveDemoUrl ?? null;
  const demoStatusLabel = projectDemoStatusLabels[project.demoStatus];
  const previewScreenshot = project.desktopScreenshots[0];

  return (
    <article className={cn("min-w-0")}>
      <Card surface="muted" className="p-5 md:p-6 lg:p-7">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:gap-8">
          <div className="min-w-0">
            <ProjectMediaPreview
              screenshot={previewScreenshot}
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>

          <div className="min-w-0 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <p className="type-metadata text-[hsl(var(--accent))]">{rank}</p>
              <Badge tone="neutral">{project.currentStatus ?? "Pending owner input"}</Badge>
              <Tag tone="subtle">
                {projectRepositoryVisibilityLabels[project.repositoryVisibility]}
              </Tag>
              <Tag tone="subtle">{demoStatusLabel}</Tag>
            </div>

            <div className="space-y-3">
              <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                {project.name}
              </h3>
              <p className="type-body text-[hsl(var(--foreground-secondary))]">{summary}</p>
            </div>

            <div className="space-y-3">
              <p className="type-label text-[hsl(var(--foreground-muted))]">
                Verified technologies
              </p>
              <Cluster gap="xs" className="items-start">
                {techLabels.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </Cluster>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <LinkButton href={`/projects/${project.slug}`} size="md">
                View Case Study
              </LinkButton>
              {liveDemoUrl ? (
                <LinkButton href={liveDemoUrl} external variant="secondary">
                  Live Demo
                </LinkButton>
              ) : null}
            </div>

            <div className="min-w-0 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--background-elevated))] p-4 md:p-5">
              <Stack gap="sm">
                <p className="type-label text-[hsl(var(--foreground-muted))]">PROJECT EVIDENCE</p>

                {projectEvidenceNote ? (
                  <p className="type-metadata leading-6 text-[hsl(var(--foreground-muted))]">
                    {projectEvidenceNote}
                  </p>
                ) : null}
              </Stack>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
}
