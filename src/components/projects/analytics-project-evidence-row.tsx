import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Tag } from "@/components/ui/tag";
import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import { cn } from "@/lib/utils";
import type { AnalyticsProjectRecord } from "@/types/analytics-project";
import { ProjectMediaPreview } from "./project-media-preview";

type AnalyticsProjectEvidenceRowProps = {
  project: AnalyticsProjectRecord;
  index: number;
};

export function AnalyticsProjectEvidenceRow({ project, index }: AnalyticsProjectEvidenceRowProps) {
  const rank = String(index + 1).padStart(2, "0");
  const previewScreenshot = project.media[0];
  const techLabels = project.technologies.slice(0, 5);

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
              <Badge tone="neutral">{project.category}</Badge>
              <Tag tone="subtle">{project.dataset.scale}</Tag>
            </div>

            <div className="space-y-3">
              <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                {project.title}
              </h3>
              <p className="type-body text-[hsl(var(--foreground-secondary))]">
                {project.shortSummary}
              </p>
            </div>

            <div className="space-y-3">
              <p className="type-label text-[hsl(var(--foreground-muted))]">Verified technologies</p>
              <Cluster gap="xs" className="items-start">
                {techLabels.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </Cluster>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <LinkButton href={project.canonicalPath} size="md">
                View Analysis
              </LinkButton>
              <LinkButton href={project.primaryCta.href} external variant="secondary">
                {project.primaryCta.label}
              </LinkButton>
            </div>

            <div className="min-w-0 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--background-elevated))] p-4 md:p-5">
              <Stack gap="sm">
                <p className="type-label text-[hsl(var(--foreground-muted))]">PROJECT EVIDENCE</p>
                <p className="type-metadata leading-6 text-[hsl(var(--foreground-muted))]">
                  {project.recommendedDemoArtifact}
                </p>
              </Stack>
            </div>
          </div>
        </div>
      </Card>
    </article>
  );
}
