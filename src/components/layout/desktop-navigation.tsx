"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/content/navigation";
import { isNavigationItemActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function DesktopNavigation() {
  const pathname = usePathname();
  const desktopNavigationItems = navigationItems.filter((item) => item.href !== "/contact");

  return (
    <nav aria-label="Primary navigation" className="hidden lg:block">
      <ul className="flex items-center gap-2">
        {desktopNavigationItems.map((item) => {
          const isActive = isNavigationItemActive(pathname, item);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex min-h-[var(--control-height-md)] items-center gap-2 rounded-[var(--radius-md)] border px-3 py-2 text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
                  isActive
                    ? "border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-muted))] text-[hsl(var(--foreground))] shadow-soft"
                    : "border-transparent text-[hsl(var(--foreground-secondary))] hover:border-[hsl(var(--border))] hover:bg-[hsl(var(--surface))] hover:text-[hsl(var(--foreground))]"
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-opacity duration-[var(--motion-fast)]",
                    isActive ? "bg-[hsl(var(--accent))] opacity-100" : "bg-transparent opacity-0"
                  )}
                />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
