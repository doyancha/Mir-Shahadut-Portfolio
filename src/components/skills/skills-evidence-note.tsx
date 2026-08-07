import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  skillsEvidenceEyebrow,
  skillsEvidenceHeading,
  skillsEvidencePoints,
  skillsEvidenceSummary,
} from "@/content/skills";

export function SkillsEvidenceNote() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-narrative">
        <Card surface="elevated" className="p-5 md:p-6 lg:p-7">
          <Stack gap="md">
            <div className="space-y-2">
              <p className="type-label text-[hsl(var(--accent))]">{skillsEvidenceEyebrow}</p>
              <h2 className="type-section-title text-[hsl(var(--foreground))]">
                {skillsEvidenceHeading}
              </h2>
            </div>

            <p className="type-body-large max-w-[44rem] text-[hsl(var(--foreground-secondary))]">
              {skillsEvidenceSummary}
            </p>

            <ul className="grid gap-2 sm:grid-cols-2">
              {skillsEvidencePoints.map((point) => (
                <li
                  key={point}
                  className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-[length:var(--text-body-small)] text-[hsl(var(--foreground-secondary))]"
                >
                  {point}
                </li>
              ))}
            </ul>
          </Stack>
        </Card>
      </PageContainer>
    </Section>
  );
}
