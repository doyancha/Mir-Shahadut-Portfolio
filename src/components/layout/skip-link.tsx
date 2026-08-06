"use client";

import { useCallback } from "react";

export function SkipLink() {
  const handleClick = useCallback(() => {
    window.requestAnimationFrame(() => {
      const main = document.getElementById("main-content");

      if (main instanceof HTMLElement) {
        main.focus();
      }
    });
  }, []);

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className="fixed left-4 top-4 z-[60] -translate-y-16 rounded-md border border-[hsl(var(--border-strong))] bg-[hsl(var(--background-elevated))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] opacity-0 shadow-lift transition-[transform,opacity,background-color,border-color] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]"
    >
      Skip to content
    </a>
  );
}
