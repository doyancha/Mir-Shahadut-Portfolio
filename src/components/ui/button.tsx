import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-[hsl(var(--accent-surface))] bg-[hsl(var(--accent-surface))] text-[hsl(var(--accent-foreground))] hover:border-[hsl(var(--accent-surface-hover))] hover:bg-[hsl(var(--accent-surface-hover))]",
  secondary:
    "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--border-strong))] hover:bg-[hsl(var(--surface-muted))]",
  ghost:
    "border-transparent bg-transparent text-[hsl(var(--foreground-secondary))] hover:border-[hsl(var(--border))] hover:bg-[hsl(var(--surface))] hover:text-[hsl(var(--foreground))]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-[var(--control-height-sm)] px-3 text-[length:var(--text-body-small)]",
  md: "h-[var(--control-height-md)] px-4 text-[length:var(--text-body)]",
  lg: "h-[var(--control-height-lg)] px-5 text-[length:var(--text-body-large)]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-standard)] active:scale-[0.985] active:shadow-none motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] disabled:pointer-events-none disabled:opacity-60";

function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className?: string): string {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], "shadow-soft", className);
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const classes = getButtonClasses(variant, size, className);
  return (
    <button type={props.type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
