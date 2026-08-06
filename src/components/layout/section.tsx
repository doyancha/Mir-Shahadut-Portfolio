import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn("section-shell", className)} {...props}>
      {children}
    </section>
  );
}
