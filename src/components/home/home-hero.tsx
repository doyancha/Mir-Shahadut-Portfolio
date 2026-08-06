import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Cluster } from "@/components/layout/cluster";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { homepageFeaturedProjects, homepageHeroContent } from "@/content/homepage";
import { cn } from "@/lib/utils";

function HeroPreviewTile({
  projectIndex,
  projectName,
  className,
  emphasis = "secondary",
}: {
  projectIndex: string;
  projectName: string;
  className?: string;
  emphasis?: "primary" | "secondary";
}) {
  return (
    <Card
      surface={emphasis === "primary" ? "elevated" : "default"}
      padding="none"
      className={cn("overflow-hidden border-[hsl(var(--border-strong))]", className)}
    >
      <div
        className={cn(
          "relative h-full",
          emphasis === "primary"
            ? "bg-[linear-gradient(180deg,hsl(var(--background-elevated)),hsl(var(--surface)))]"
            : "bg-[hsl(var(--surface))]"
        )}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at top left, hsl(var(--accent) / 0.12), transparent 28%), radial-gradient(circle at bottom right, hsl(var(--accent) / 0.06), transparent 24%)",
          }}
        />
        <div className="relative flex h-full min-h-[13rem] flex-col justify-between gap-4 p-4 sm:p-5 md:min-h-[14rem] md:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-1">
              <p className="type-metadata text-[hsl(var(--accent))]">{projectIndex}</p>
              <p className="type-card-title break-words text-[hsl(var(--foreground))]">
                {projectName}
              </p>
            </div>
            <p className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-2.5 py-1 text-[length:var(--text-caption)] font-medium text-[hsl(var(--foreground-secondary))]">
              Project preview
            </p>
          </div>

          <div className="space-y-4">
            <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
              Screenshot pending
            </p>
            <div className="grid gap-2">
              <div className="h-2 rounded-full bg-[hsl(var(--border) / 0.72)]" />
              <div className="h-2 w-[76%] rounded-full bg-[hsl(var(--border) / 0.56)]" />
              <div className="h-2 w-[58%] rounded-full bg-[hsl(var(--border) / 0.66)]" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]" />
              <div className="h-10 rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]" />
              <div className="h-10 rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))]" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function HomeHero() {
  return (
    <Section className="pb-12 pt-6 md:pb-14 md:pt-8">
      <PageContainer size="home-hero">
        <div className="grid gap-8 lg:min-h-[44rem] lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:items-center lg:gap-12">
          <Stack gap="lg" className="max-w-[40rem]">
            <p className="type-label text-[hsl(var(--accent))]">{homepageHeroContent.eyebrow}</p>

            <Stack gap="sm">
              <h1 className="type-display max-w-[12ch] text-[hsl(var(--foreground))]">
                {homepageHeroContent.name}
              </h1>
              <p className="type-subsection-title max-w-[28rem] text-[hsl(var(--foreground-secondary))]">
                {homepageHeroContent.title}
              </p>
            </Stack>

            <p className="type-body-large max-w-[40rem] text-[hsl(var(--foreground-secondary))]">
              {homepageHeroContent.introduction}
            </p>

            <Cluster gap="sm" className="items-stretch">
              <LinkButton href={homepageHeroContent.primaryCta.href} variant="primary" size="lg">
                {homepageHeroContent.primaryCta.label}
              </LinkButton>
              <LinkButton
                href={homepageHeroContent.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {homepageHeroContent.secondaryCta.label}
              </LinkButton>
            </Cluster>

            <p className="type-metadata max-w-[34rem] text-[hsl(var(--foreground-muted))]">
              Project proof is shown through live demonstrations and case studies while repositories
              remain private.
            </p>
          </Stack>

          <div className="relative isolate mx-auto w-full max-w-[42rem] lg:min-h-[44rem]">
            <div className="grid gap-4 lg:block">
              <HeroPreviewTile
                projectIndex="01"
                projectName={homepageFeaturedProjects[0]?.name ?? "HRH Shopping"}
                emphasis="primary"
                className="lg:absolute lg:left-0 lg:right-[12%] lg:top-0 lg:z-30 lg:min-h-[16rem]"
              />

              <HeroPreviewTile
                projectIndex="02"
                projectName={homepageFeaturedProjects[1]?.name ?? "BookEasy"}
                className="lg:absolute lg:right-0 lg:top-[13%] lg:z-20 lg:w-[78%] lg:min-h-[14rem]"
              />

              <HeroPreviewTile
                projectIndex="03"
                projectName={homepageFeaturedProjects[2]?.name ?? "TaskOrbit"}
                className="lg:absolute lg:left-[10%] lg:bottom-0 lg:z-10 lg:w-[74%] lg:min-h-[14rem]"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
