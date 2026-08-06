import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Cluster } from "@/components/layout/cluster";
import { Stack } from "@/components/layout/stack";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <Stack gap="sm" className={cn("max-w-[var(--container-prose)]", className)}>
      {eyebrow ? <p className="type-label text-[hsl(var(--accent))]">{eyebrow}</p> : null}
      <div className="space-y-3">
        <h2 className="type-section-title text-[hsl(var(--foreground))]">{title}</h2>
        {description ? (
          <p className="type-body text-[hsl(var(--foreground-secondary))]">{description}</p>
        ) : null}
      </div>
      {actions ? <Cluster gap="sm">{actions}</Cluster> : null}
    </Stack>
  );
}
