import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Tag } from "@/components/ui/tag";
import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import type { ProjectRecord } from "@/types/project";
import { cn } from "@/lib/utils";
import { ProjectMediaGallery } from "./project-media-gallery";

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
        <ProjectMediaGallery
          screenshots={project.desktopScreenshots.slice(0, 5)}
          ariaLabel={`${project.name} screenshots`}
          priority={index === 0}
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
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
