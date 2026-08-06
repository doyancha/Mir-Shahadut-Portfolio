import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type CardSurface = "default" | "muted" | "elevated";
type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  surface?: CardSurface;
  padding?: CardPadding;
};

const surfaceClasses: Record<CardSurface, string> = {
  default: "surface-card",
  muted: "surface-card-muted",
  elevated: "surface-card-elevated",
};

const paddingClasses: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export function Card({
  children,
  className,
  surface = "default",
  padding = "md",
  ...props
}: CardProps) {
  return (
    <div className={cn(surfaceClasses[surface], paddingClasses[padding], className)} {...props}>
      {children}
    </div>
  );
}
