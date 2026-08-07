import { Card } from "@/components/ui/card";
import { Prose } from "@/components/layout/prose";
import { Stack } from "@/components/layout/stack";
import type { CaseStudyListSection, CaseStudyTextSection } from "@/content/case-studies";

type CaseStudySectionProps = {
  id: string;
  title: string;
  section: CaseStudyTextSection | CaseStudyListSection;
};

function isTextSection(
  section: CaseStudyTextSection | CaseStudyListSection
): section is CaseStudyTextSection {
  return "paragraphs" in section;
}

export function CaseStudySection({ id, title, section }: CaseStudySectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <Card padding="lg" className="rounded-[28px]">
        <Stack gap="md">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
          {isTextSection(section) ? (
            <Prose className="max-w-none space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Prose>
          ) : (
            <ul className="grid gap-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))] px-4 py-3 text-sm leading-6 text-[hsl(var(--foreground-secondary))]"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </Stack>
      </Card>
    </section>
  );
}
