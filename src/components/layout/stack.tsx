import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type StackGap = "xs" | "sm" | "md" | "lg" | "xl";

type StackProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  gap?: StackGap;
};

const gapClasses: Record<StackGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-5",
  lg: "gap-7",
  xl: "gap-10",
};

export function Stack({ children, className, gap = "md", ...props }: StackProps) {
  return (
    <div className={cn("flex flex-col", gapClasses[gap], className)} {...props}>
      {children}
    </div>
  );
}
