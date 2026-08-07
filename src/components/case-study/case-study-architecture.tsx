import { Card } from "@/components/ui/card";
import { Stack } from "@/components/layout/stack";
import { Tag } from "@/components/ui/tag";
import type { CaseStudyArchitectureSection } from "@/content/case-studies";

type ArchitectureGroup = {
  label: string;
  items?: string[];
};

type CaseStudyArchitectureProps = {
  architecture: CaseStudyArchitectureSection;
};

export function CaseStudyArchitecture({ architecture }: CaseStudyArchitectureProps) {
  const groups: ArchitectureGroup[] = [];

  if (architecture.frontend?.length) {
    groups.push({ label: "Frontend", items: architecture.frontend });
  }

  if (architecture.backend?.length) {
    groups.push({ label: "Backend", items: architecture.backend });
  }

  if (architecture.data?.length) {
    groups.push({ label: "Data", items: architecture.data });
  }

  if (architecture.auth?.length) {
    groups.push({ label: "Auth", items: architecture.auth });
  }

  if (architecture.deployment?.length) {
    groups.push({ label: "Deployment", items: architecture.deployment });
  }

  if (!groups.length) {
    return null;
  }

  return (
    <section className="scroll-mt-28">
      <Card padding="lg" className="rounded-[28px]">
        <Stack gap="md">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Architecture</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {groups.map((group) => (
              <Card key={group.label} surface="muted" padding="md" className="rounded-[24px]">
                <Stack gap="sm">
                  <Tag>{group.label}</Tag>
                  <ul className="grid gap-2 text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
                    {group.items?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Stack>
              </Card>
            ))}
          </div>
        </Stack>
      </Card>
    </section>
  );
}
