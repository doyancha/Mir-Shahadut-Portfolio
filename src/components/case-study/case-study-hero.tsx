import { ProjectMediaGallery } from "@/components/projects/project-media-gallery";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import { LinkButton } from "@/components/ui/link-button";
import type { CaseStudy } from "@/content/case-studies";
import type { ProjectScreenshot } from "@/types/project";

type CaseStudyHeroProps = {
  caseStudy: CaseStudy;
  screenshots: ProjectScreenshot[];
};

export function CaseStudyHero({ caseStudy, screenshots }: CaseStudyHeroProps) {
  return (
    <Card padding="lg" className="overflow-hidden rounded-[32px]">
      <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
        <Stack gap="lg" className="min-w-0">
          <Badge tone="accent" className="w-fit">
            Case study
          </Badge>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {caseStudy.description}
            </p>
          </div>
          <Cluster gap="sm">
            <LinkButton href={caseStudy.liveDemoUrl} external size="md">
              Live demo
            </LinkButton>
            <LinkButton href="/projects" variant="secondary" size="md">
              Back to projects
            </LinkButton>
          </Cluster>
        </Stack>

        <Stack gap="md" className="min-w-0">
          <ProjectMediaGallery
            screenshots={screenshots}
            ariaLabel={`${caseStudy.title} screenshots`}
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
              {caseStudy.keyFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-4"
                >
                  <dt className="text-[length:var(--text-caption)] uppercase tracking-[0.18em] text-[hsl(var(--foreground-muted))]">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 font-medium text-white">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Card>
        </Stack>
      </div>
    </Card>
  );
}
