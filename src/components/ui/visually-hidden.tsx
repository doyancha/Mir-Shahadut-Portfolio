import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function VisuallyHidden({ children, className, ...props }: VisuallyHiddenProps) {
  return (
    <span className={cn("sr-only", className)} {...props}>
      {children}
    </span>
  );
}
