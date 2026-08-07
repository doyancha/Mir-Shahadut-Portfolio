import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import {
  projectsEvidenceNoteEyebrow,
  projectsEvidenceNoteHeading,
  projectsEvidenceNoteItems,
  projectsEvidenceNoteSummary,
} from "@/content/projects-page";

export function ProjectsEvidenceNote() {
  return (
    <Section className="pt-12 pb-0 md:pt-16">
      <PageContainer size="home-narrative">
        <Card surface="elevated" className="p-5 md:p-6 lg:p-7">
          <Stack gap="md">
            <div className="space-y-2">
              <p className="type-label text-[hsl(var(--accent))]">{projectsEvidenceNoteEyebrow}</p>
              <h2 className="type-section-title text-[hsl(var(--foreground))]">
                {projectsEvidenceNoteHeading}
              </h2>
            </div>

            <p className="type-body-large max-w-[44rem] text-[hsl(var(--foreground-secondary))]">
              {projectsEvidenceNoteSummary}
            </p>

            <ul className="grid gap-2 sm:grid-cols-2">
              {projectsEvidenceNoteItems.map((item) => (
                <li
                  key={item.label}
                  className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 py-2 text-[length:var(--text-body-small)] text-[hsl(var(--foreground-secondary))]"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </Stack>
        </Card>
      </PageContainer>
    </Section>
  );
}
