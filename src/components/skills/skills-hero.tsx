import { Badge } from "@/components/ui/badge";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  skillsHeroEyebrow,
  skillsHeroHeading,
  skillsHeroIntroduction,
  skillsHeroProofPoints,
  skillsHeroSupport,
} from "@/content/skills";

export function SkillsHero() {
  return (
    <Section className="pt-10 pb-0 md:pt-14">
      <PageContainer size="home-prose">
        <Stack gap="lg" className="min-w-0">
          <div className="space-y-4">
            <p className="type-label text-[hsl(var(--accent))]">{skillsHeroEyebrow}</p>
            <h1 className="type-page-title max-w-[14ch] text-[hsl(var(--foreground))]">
              {skillsHeroHeading}
            </h1>
            <p className="type-body-large max-w-[40rem] text-[hsl(var(--foreground-secondary))]">
              {skillsHeroIntroduction}
            </p>
            <p className="type-body max-w-[40rem] text-[hsl(var(--foreground-muted))]">
              {skillsHeroSupport}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {skillsHeroProofPoints.map((proofPoint) => (
              <Badge key={proofPoint.label} tone="accent">
                {proofPoint.label}
              </Badge>
            ))}
          </div>
        </Stack>
      </PageContainer>
    </Section>
  );
}
