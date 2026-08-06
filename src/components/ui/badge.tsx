import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "accent" | "success" | "warning" | "error";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
  tone?: BadgeTone;
};

const toneClasses: Record<BadgeTone, string> = {
  neutral:
    "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground-secondary))]",
  accent:
    "border-[hsl(var(--accent) / 0.45)] bg-[hsl(var(--accent) / 0.14)] text-[hsl(var(--accent-hover))]",
  success:
    "border-[hsl(var(--success) / 0.35)] bg-[hsl(var(--success) / 0.12)] text-[hsl(var(--success))]",
  warning:
    "border-[hsl(var(--warning) / 0.35)] bg-[hsl(var(--warning) / 0.12)] text-[hsl(var(--warning))]",
  error: "border-[hsl(var(--error) / 0.35)] bg-[hsl(var(--error) / 0.12)] text-[hsl(var(--error))]",
};

export function Badge({ children, className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[length:var(--text-caption)] font-medium",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
