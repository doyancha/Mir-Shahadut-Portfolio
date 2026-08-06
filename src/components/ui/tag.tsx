import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: "neutral" | "subtle";
};

export function Tag({ children, className, tone = "neutral", ...props }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[length:var(--text-caption)] font-medium",
        tone === "neutral"
          ? "border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))] text-[hsl(var(--foreground-secondary))]"
          : "border-[hsl(var(--border))] bg-transparent text-[hsl(var(--foreground-muted))]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
