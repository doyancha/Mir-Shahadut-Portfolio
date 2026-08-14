import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import { ProjectMediaGallery } from "@/components/projects/project-media-gallery";
import type { AnalyticsProjectRecord } from "@/types/analytics-project";

type AnalyticsProjectHeroProps = {
  project: AnalyticsProjectRecord;
};

export function AnalyticsProjectHero({ project }: AnalyticsProjectHeroProps) {
  return (
    <Card padding="lg" className="overflow-hidden rounded-[32px]">
      <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
        <Stack gap="lg" className="min-w-0">
          <Badge tone="accent" className="w-fit">
            Data analytics case study
          </Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {project.introduction}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--foreground-muted))]">
                Business question
              </p>
              <p className="mt-2 text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
                {project.businessQuestion}
              </p>
            </div>
            <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--foreground-muted))]">
                Dataset scale
              </p>
              <p className="mt-2 text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
                {project.dataset.scale}
              </p>
            </div>
          </div>

          <Cluster gap="sm">
            <LinkButton href={project.canonicalPath} size="md">
              View Analysis
            </LinkButton>
            <LinkButton
              href={project.primaryCta.href}
              variant="secondary"
              size="md"
              external={/^https?:\/\//.test(project.primaryCta.href)}
            >
              {project.primaryCta.label}
            </LinkButton>
            <LinkButton
              href={project.secondaryCta.href}
              variant="ghost"
              size="md"
              external={/^https?:\/\//.test(project.secondaryCta.href)}
            >
              {project.secondaryCta.label}
            </LinkButton>
          </Cluster>
        </Stack>

        <Stack gap="md" className="min-w-0">
          <ProjectMediaGallery
            screenshots={project.media}
            ariaLabel={`${project.title} screenshots`}
            priority
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <Card padding="lg" surface="muted" className="space-y-4 rounded-[28px]">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
                Key facts
              </p>
            </div>
            <dl className="grid gap-3 text-sm">
              <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4">
                <dt className="text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-[hsl(var(--foreground-muted))]">
                  Category
                </dt>
                <dd className="mt-2 font-medium text-white">{project.category}</dd>
              </div>
              <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4">
                <dt className="text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-[hsl(var(--foreground-muted))]">
                  Dataset source
                </dt>
                <dd className="mt-2 break-words font-medium text-white">{project.dataset.sourceLabel}</dd>
              </div>
              <div className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4">
                <dt className="text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-[hsl(var(--foreground-muted))]">
                  Demo fallback
                </dt>
                <dd className="mt-2 break-words font-medium text-white">{project.recommendedDemoArtifact}</dd>
              </div>
            </dl>
          </Card>
        </Stack>
      </div>
    </Card>
  );
}
