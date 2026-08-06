import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ClusterGap = "xs" | "sm" | "md" | "lg";
type ClusterJustify = "start" | "center" | "between" | "end";

type ClusterProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  gap?: ClusterGap;
  justify?: ClusterJustify;
};

const gapClasses: Record<ClusterGap, string> = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
};

const justifyClasses: Record<ClusterJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  between: "justify-between",
  end: "justify-end",
};

export function Cluster({
  children,
  className,
  gap = "sm",
  justify = "start",
  ...props
}: ClusterProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        gapClasses[gap],
        justifyClasses[justify],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
