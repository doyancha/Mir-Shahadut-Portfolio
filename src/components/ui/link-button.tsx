import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type LinkButtonVariant = "primary" | "secondary" | "ghost";
type LinkButtonSize = "sm" | "md" | "lg";

type LinkButtonBaseProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  external?: boolean;
};

type LinkButtonProps = LinkButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

const variantClasses: Record<LinkButtonVariant, string> = {
  primary:
    "border-[hsl(var(--accent))] bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:border-[hsl(var(--accent-hover))] hover:bg-[hsl(var(--accent-hover))]",
  secondary:
    "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--border-strong))] hover:bg-[hsl(var(--surface-muted))]",
  ghost:
    "border-transparent bg-transparent text-[hsl(var(--foreground-secondary))] hover:border-[hsl(var(--border))] hover:bg-[hsl(var(--surface))] hover:text-[hsl(var(--foreground))]",
};

const sizeClasses: Record<LinkButtonSize, string> = {
  sm: "h-[var(--control-height-sm)] px-3 text-[length:var(--text-body-small)]",
  md: "h-[var(--control-height-md)] px-4 text-[length:var(--text-body)]",
  lg: "h-[var(--control-height-lg)] px-5 text-[length:var(--text-body-large)]",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] disabled:pointer-events-none disabled:opacity-60 shadow-soft";

export function LinkButton({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  external,
  rel,
  target,
  ...props
}: LinkButtonProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

  return (
    <a
      href={href}
      className={classes}
      target={isExternal ? (target ?? "_blank") : target}
      rel={isExternal ? (rel ?? "noreferrer") : rel}
      {...props}
    >
      {children}
    </a>
  );
}
