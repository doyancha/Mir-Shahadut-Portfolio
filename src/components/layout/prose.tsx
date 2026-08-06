import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ProseProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Prose({ children, className, ...props }: ProseProps) {
  return (
    <div
      className={cn(
        "container-prose text-[length:var(--text-body)] leading-[1.75] text-[hsl(var(--foreground-secondary))]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
