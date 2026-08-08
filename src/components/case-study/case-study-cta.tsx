import { Card } from "@/components/ui/card";
import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";
import { LinkButton } from "@/components/ui/link-button";

type CaseStudyCtaProps = {
  liveDemoUrl: string;
};

export function CaseStudyCta({ liveDemoUrl }: CaseStudyCtaProps) {
  return (
    <Card padding="lg" className="rounded-[28px]">
      <Stack gap="md">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Explore the project</h2>
          <p className="max-w-2xl text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
            Follow the live demo to review the project in detail, or return to the projects index.
          </p>
        </div>
        <Cluster gap="sm">
          <LinkButton href={liveDemoUrl} external>
            Live demo
          </LinkButton>
          <LinkButton href="/projects" variant="secondary">
            Projects index
          </LinkButton>
        </Cluster>
      </Stack>
    </Card>
  );
}
