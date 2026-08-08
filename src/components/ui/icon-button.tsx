import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type IconButtonVariant = "primary" | "secondary" | "ghost";
type IconButtonSize = "sm" | "md";

type IconButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  label: string;
};

type IconButtonProps = IconButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<IconButtonVariant, string> = {
  primary:
    "border-[hsl(var(--accent-surface))] bg-[hsl(var(--accent-surface))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent-surface-hover))]",
  secondary:
    "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--border-strong))] hover:bg-[hsl(var(--surface-muted))]",
  ghost:
    "border-transparent bg-transparent text-[hsl(var(--foreground-secondary))] hover:border-[hsl(var(--border))] hover:bg-[hsl(var(--surface))] hover:text-[hsl(var(--foreground))]",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "h-[var(--control-height-sm)] w-[var(--control-height-sm)]",
  md: "h-[var(--control-height-md)] w-[var(--control-height-md)]",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-[var(--radius-md)] border transition-[background-color,border-color,color,transform,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-standard)] active:scale-[0.985] active:shadow-none motion-reduce:active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] disabled:pointer-events-none disabled:opacity-60";

function getIconButtonClasses(
  variant: IconButtonVariant,
  size: IconButtonSize,
  className?: string
): string {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], "shadow-soft", className);
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { children, className, variant = "secondary", size = "md", label, ...props },
  ref
) {
  const classes = getIconButtonClasses(variant, size, className);

  return (
    <button
      ref={ref}
      type={props.type ?? "button"}
      className={classes}
      aria-label={label}
      title={label}
      {...props}
    >
      {children}
    </button>
  );
});
