import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Tag } from "@/components/ui/tag";
import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import type { ProjectRecord } from "@/types/project";
import { cn } from "@/lib/utils";

function ProjectMediaPlaceholder({ project, rank }: { project: ProjectRecord; rank: string }) {
  return (
    <Card
      aria-hidden="true"
      surface="default"
      padding="none"
      className="overflow-hidden border-[hsl(var(--border-strong))]"
    >
      <div className="relative min-h-[15rem] aspect-[16/10] bg-[hsl(var(--background-elevated))]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at top left, hsl(var(--accent) / 0.1), transparent 28%), radial-gradient(circle at bottom right, hsl(var(--accent) / 0.05), transparent 25%)",
          }}
        />
        <div className="relative flex h-full min-h-[15rem] min-w-0 flex-col justify-between gap-4 p-4 sm:p-5 md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 space-y-1">
              <p className="type-metadata text-[hsl(var(--accent))]">{rank}</p>
              <p className="type-card-title break-words text-[hsl(var(--foreground))]">
                {project.name}
              </p>
              <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                Project preview
              </p>
            </div>
            <span className="inline-flex w-fit max-w-full self-start rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-2.5 py-1 text-left text-[length:var(--text-caption)] font-medium text-[hsl(var(--foreground-secondary))]">
              Screenshot pending
            </span>
          </div>

          <div className="min-w-0 space-y-3">
            <div className="grid gap-2">
              <div className="h-2 rounded-full bg-[hsl(var(--border) / 0.75)]" />
              <div className="h-2 w-[78%] rounded-full bg-[hsl(var(--border) / 0.55)]" />
              <div className="h-2 w-[58%] rounded-full bg-[hsl(var(--border) / 0.65)]" />
            </div>
            <div className="grid min-w-0 grid-cols-[repeat(3,minmax(0,1fr))] gap-2">
              <div className="h-10 min-w-0 rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]" />
              <div className="h-10 min-w-0 rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]" />
              <div className="h-10 min-w-0 rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function FeaturedProjectRow({ project, index }: { project: ProjectRecord; index: number }) {
  const rank = String(index + 1).padStart(2, "0");
  const isReversed = index % 2 === 1;
  const liveDemoUrl = project.liveDemoUrl ?? null;
  const techLabels = (project.homepageTechnologyStack ?? project.technologyStack).slice(0, 5);
  const summary = project.homepageSummary ?? project.shortSummary ?? "Pending owner input";

  return (
    <article
      className={cn(
        "flex flex-col gap-5 lg:items-stretch lg:gap-0",
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      )}
    >
      <div className="lg:w-[58%]">
        <ProjectMediaPlaceholder project={project} rank={rank} />
      </div>

      <div className="lg:w-[42%]">
        <Card surface="muted" className="h-full p-5 md:p-6 lg:p-7">
          <Stack gap="md" className="h-full">
            <div className="flex flex-wrap items-center gap-3">
              <p className="type-metadata text-[hsl(var(--accent))]">{rank}</p>
              <Badge tone="neutral">{project.currentStatus ?? "Pending owner input"}</Badge>
              <Tag tone="subtle">
                {project.repositoryVisibility === "private" ? "Private repository" : "Repository"}
              </Tag>
            </div>

            <div className="space-y-3">
              <h3 className="type-subsection-title text-[hsl(var(--foreground))]">
                {project.name}
              </h3>
              <p className="type-body text-[hsl(var(--foreground-secondary))]">{summary}</p>
            </div>

            <div className="space-y-3">
              <p className="type-label text-[hsl(var(--foreground-muted))]">Main technologies</p>
              <Cluster gap="xs">
                {techLabels.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </Cluster>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {liveDemoUrl ? (
                <LinkButton href={liveDemoUrl} external variant="secondary">
                  Open live demo
                </LinkButton>
              ) : null}
            </div>

            <p className="type-metadata text-[hsl(var(--foreground-muted))]">
              {project.repositoryVisibility === "private" ? "Private repository" : "Repository"} ·{" "}
              {project.currentStatus ?? "Pending owner input"}
            </p>
          </Stack>
        </Card>
      </div>
    </article>
  );
}
