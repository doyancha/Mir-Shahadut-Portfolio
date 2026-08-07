import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Prose } from "@/components/layout/prose";
import { Stack } from "@/components/layout/stack";
import type { CaseStudyTextSection } from "@/content/case-studies";

type CaseStudyStatusProps = {
  status?: CaseStudyTextSection;
};

export function CaseStudyStatus({ status }: CaseStudyStatusProps) {
  if (!status?.paragraphs.length) {
    return null;
  }

  return (
    <section className="scroll-mt-28">
      <Card padding="lg" className="rounded-[28px]">
        <Stack gap="md">
          <Badge tone="neutral" className="w-fit">
            Current status
          </Badge>
          <Prose className="max-w-none space-y-4">
            {status.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Prose>
        </Stack>
      </Card>
    </section>
  );
}
