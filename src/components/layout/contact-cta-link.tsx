"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function ContactCtaLink() {
  const pathname = usePathname();
  const isCurrent = pathname === "/contact";

  return (
    <Link
      href="/contact"
      aria-current={isCurrent ? "page" : undefined}
      className={cn(
        "hidden min-h-[var(--control-height-md)] items-center rounded-[var(--radius-md)] border px-4 text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] lg:inline-flex",
        isCurrent
          ? "border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-muted))] text-[hsl(var(--foreground))] shadow-soft"
          : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground))] hover:border-[hsl(var(--border-strong))] hover:bg-[hsl(var(--surface-muted))]"
      )}
    >
      Contact
    </Link>
  );
}
