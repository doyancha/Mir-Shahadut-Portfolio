import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type LinkTone = "default" | "muted";

type AppLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "children"
> & {
  href: string;
  children: ReactNode;
  className?: string;
  tone?: LinkTone;
  external?: boolean;
};

const toneClasses: Record<LinkTone, string> = {
  default:
    "text-[hsl(var(--accent))] decoration-[hsl(var(--accent) / 0.38)] hover:text-[hsl(var(--accent-hover))] hover:decoration-[hsl(var(--accent-hover))]",
  muted:
    "text-[hsl(var(--foreground-secondary))] decoration-[hsl(var(--foreground-secondary) / 0.32)] hover:text-[hsl(var(--foreground))] hover:decoration-[hsl(var(--foreground))]",
};

export function AppLink({
  href,
  children,
  className,
  tone = "default",
  external,
  ...props
}: AppLinkProps) {
  const classes = cn(
    "inline-flex items-center gap-1 font-medium underline underline-offset-4 transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
    toneClasses[tone],
    className
  );
  return (
    <a
      href={href}
      className={classes}
      target={external || href.startsWith("http") ? "_blank" : undefined}
      rel={external || href.startsWith("http") ? "noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  );
}
