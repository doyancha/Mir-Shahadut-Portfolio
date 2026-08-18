"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import {
  adminDashboardNavigationItem,
  adminNavigationItems,
  type AdminNavigationItem,
} from "@/content/admin";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string | null, href: AdminNavigationItem["href"]) {
  if (!pathname) {
    return false;
  }

  if (href === "/admin") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function AdminNavigationList({ pathname, onNavigate }: { pathname: string | null; onNavigate?: () => void }) {
  return (
    <ul className="grid gap-2">
      {adminNavigationItems.map((item) => {
        const isActive = isActivePath(pathname, item.href);
        const linkProps = onNavigate ? { onClick: onNavigate } : {};

        return (
          <li key={item.id}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              {...linkProps}
              className={cn(
                "flex min-h-[3.25rem] items-start gap-3 rounded-[var(--radius-md)] border px-3 py-3 text-sm font-medium transition-[background-color,border-color,color,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
                isActive
                  ? "border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-muted))] text-[hsl(var(--foreground))] shadow-soft"
                  : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground-secondary))] hover:border-[hsl(var(--border-strong))] hover:text-[hsl(var(--foreground))]"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "mt-1.5 h-1.5 w-1.5 rounded-full transition-opacity duration-[var(--motion-fast)]",
                  isActive ? "bg-[hsl(var(--accent))] opacity-100" : "bg-transparent opacity-0"
                )}
              />
              <span className="min-w-0">
                <span className="block">{item.label}</span>
                <span className="mt-1 block text-[length:var(--text-caption)] font-normal text-[hsl(var(--foreground-muted))]">
                  {item.description}
                </span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function AdminNavigation() {
  const pathname = usePathname();
  const panelId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const previousOpenRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (previousOpenRef.current && !isOpen) {
      triggerRef.current?.focus();
    }

    previousOpenRef.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav aria-label="Admin navigation" className="space-y-4">
      <div className="hidden md:block">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <p className="type-card-title text-[hsl(var(--foreground))]">Workspace</p>
            <span className="inline-flex items-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))] px-2.5 py-1 text-[length:var(--text-caption)] font-medium text-[hsl(var(--foreground-muted))]">
              {adminDashboardNavigationItem.label}
            </span>
          </div>
          <AdminNavigationList pathname={pathname} />
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between gap-3">
          <p className="type-card-title text-[hsl(var(--foreground))]">Navigation</p>
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            onClick={() => setIsOpen((value) => !value)}
            className={cn(
              "inline-flex h-[var(--control-height-sm)] items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-3 text-[length:var(--text-caption)] font-medium text-[hsl(var(--foreground))] transition-[background-color,border-color,color,transform,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
              isOpen && "border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-muted))]"
            )}
          >
            {isOpen ? "Close menu" : "Open menu"}
          </button>
        </div>

        {isOpen ? (
          <div id={panelId} className="mt-4 rounded-[var(--radius-lg)] border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-3 shadow-soft">
            <AdminNavigationList
              pathname={pathname}
              onNavigate={() => {
                setIsOpen(false);
              }}
            />
          </div>
        ) : null}
      </div>
    </nav>
  );
}
