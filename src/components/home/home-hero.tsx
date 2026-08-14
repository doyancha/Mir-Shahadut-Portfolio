import Image from "next/image";

import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { Cluster } from "@/components/layout/cluster";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { homepageFeaturedProjects, homepageHeroContent } from "@/content/homepage";
import { cn } from "@/lib/utils";
import type { ProjectScreenshot } from "@/types/project";

type HeroPreviewScreenshot = ProjectScreenshot & {
  src: string;
  width: number;
  height: number;
};

function HeroPreviewTile({
  projectName,
  screenshot,
  screenshots,
  className,
  emphasis = "secondary",
}: {
  projectName: string;
  screenshot: ProjectScreenshot | undefined;
  screenshots: ProjectScreenshot[];
  className?: string;
  emphasis?: "primary" | "secondary";
}) {
  if (!screenshot?.src || !screenshot.width || !screenshot.height) {
    return null;
  }

  const previewScreenshots = screenshots.filter(
    (previewScreenshot): previewScreenshot is HeroPreviewScreenshot =>
      Boolean(previewScreenshot.src && previewScreenshot.width && previewScreenshot.height)
  );

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

        <div className="relative flex h-full min-h-[15.5rem] flex-col justify-start gap-3 p-4 sm:p-5 md:min-h-[16.75rem] md:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="type-card-title break-words text-[hsl(var(--foreground))]">
                {projectName}
              </p>
            </div>
            <p className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-2.5 py-1 text-[length:var(--text-caption)] font-medium text-[hsl(var(--foreground-secondary))]">
              Project preview
            </p>
          </div>

          <div className="mt-1 space-y-3">
            <div className="grid gap-2.5">
              <div className="h-2 rounded-full bg-[hsl(var(--border) / 0.72)]" />
              <div className="h-2 w-[76%] rounded-full bg-[hsl(var(--border) / 0.56)]" />
              <div className="h-2 w-[58%] rounded-full bg-[hsl(var(--border) / 0.66)]" />
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {previewScreenshots.slice(0, 3).map((previewScreenshot, index) => (
                <figure
                  key={`${previewScreenshot.src}-${index}`}
                  className="relative aspect-[16/12] overflow-hidden rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))]"
                >
                  <Image
                    src={previewScreenshot.src}
                    alt={previewScreenshot.alt}
                    fill
                    priority={emphasis === "primary" && index === 0}
                    loading={emphasis === "primary" && index === 0 ? "eager" : "lazy"}
                    fetchPriority={emphasis === "primary" && index === 0 ? "high" : "auto"}
                    sizes="(max-width: 1024px) 100vw, 12vw"
                    className="object-contain object-center"
                  />
                </figure>
              ))}
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

          <div
            className="relative isolate mx-auto w-full max-w-[42rem] lg:min-h-[44rem]"
            role="group"
            aria-label="Featured project previews"
          >
            <div className="grid gap-4 lg:block">
              <HeroPreviewTile
                projectName={homepageFeaturedProjects[0]?.name ?? "HRH Shopping"}
                screenshot={homepageFeaturedProjects[0]?.desktopScreenshots[0]}
                screenshots={homepageFeaturedProjects[0]?.desktopScreenshots ?? []}
                emphasis="primary"
                className="lg:absolute lg:left-0 lg:right-[16%] lg:top-0 lg:z-30 lg:min-h-[16rem]"
              />

              <HeroPreviewTile
                projectName={homepageFeaturedProjects[1]?.name ?? "BookEasy"}
                screenshot={homepageFeaturedProjects[1]?.desktopScreenshots[0]}
                screenshots={homepageFeaturedProjects[1]?.desktopScreenshots ?? []}
                className="lg:absolute lg:right-0 lg:top-[20%] lg:z-20 lg:w-[82%] lg:min-h-[14rem]"
              />

              <HeroPreviewTile
                projectName={homepageFeaturedProjects[2]?.name ?? "TaskOrbit"}
                screenshot={homepageFeaturedProjects[2]?.desktopScreenshots[0]}
                screenshots={homepageFeaturedProjects[2]?.desktopScreenshots ?? []}
                className="lg:absolute lg:left-[8%] lg:bottom-0 lg:z-10 lg:w-[76%] lg:min-h-[14rem]"
              />
            </div>
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
