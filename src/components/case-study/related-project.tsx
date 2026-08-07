import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Stack } from "@/components/layout/stack";
import { LinkButton } from "@/components/ui/link-button";
import type { CaseStudy } from "@/content/case-studies";

type RelatedProjectProps = {
  relatedProject: CaseStudy;
};

export function RelatedProject({ relatedProject }: RelatedProjectProps) {
  return (
    <Card padding="lg" className="rounded-[28px]">
      <Stack gap="md">
        <Badge tone="neutral" className="w-fit">
          Related project
        </Badge>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {relatedProject.title}
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
            {relatedProject.description}
          </p>
        </div>
        <LinkButton href={relatedProject.canonicalPath} variant="secondary">
          Open related case study
        </LinkButton>
      </Stack>
    </Card>
  );
}
