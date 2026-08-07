import { Card } from "@/components/ui/card";
import { Stack } from "@/components/layout/stack";
import type { CaseStudyWorkflowsSection } from "@/content/case-studies";

type CaseStudyWorkflowsProps = {
  workflows: CaseStudyWorkflowsSection;
};

export function CaseStudyWorkflows({ workflows }: CaseStudyWorkflowsProps) {
  if (!workflows.items.length) {
    return null;
  }

  return (
    <section className="scroll-mt-28">
      <Card padding="lg" className="rounded-[28px]">
        <Stack gap="md">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Workflows</h2>
          <div className="grid gap-4 xl:grid-cols-2">
            {workflows.items.map((workflow) => (
              <Card key={workflow.title} surface="muted" padding="md" className="rounded-[24px]">
                <Stack gap="sm">
                  <h3 className="text-lg font-semibold text-white">{workflow.title}</h3>
                  <ol className="grid gap-2 text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
                    {workflow.steps.map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="font-mono text-[hsl(var(--accent))]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </Card>
    </section>
  );
}
