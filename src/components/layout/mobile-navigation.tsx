"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { IconButton } from "@/components/ui/icon-button";
import { navigationItems } from "@/content/navigation";
import { isNavigationItemActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M3 5.5H17M3 10H17M3 14.5H17"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const openFrameRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearOpenFrame = useCallback(() => {
    if (openFrameRef.current === null) {
      return;
    }

    window.cancelAnimationFrame(openFrameRef.current);
    openFrameRef.current = null;
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current === null) {
      return;
    }

    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  }, []);

  const closeMenu = useCallback(() => {
    clearOpenFrame();
    clearCloseTimer();
    setIsVisible(false);

    if (prefersReducedMotion) {
      setIsOpen(false);
      setIsRendered(false);
      return;
    }

    closeTimerRef.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsRendered(false);
      closeTimerRef.current = null;
    }, 180);
  }, [clearCloseTimer, clearOpenFrame, prefersReducedMotion]);

  const openMenu = useCallback(() => {
    clearOpenFrame();
    clearCloseTimer();
    setIsRendered(true);
    setIsOpen(true);

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    setIsVisible(false);
    openFrameRef.current = window.requestAnimationFrame(() => {
      setIsVisible(true);
      openFrameRef.current = null;
    });
  }, [clearCloseTimer, clearOpenFrame, prefersReducedMotion]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
      return () => {
        mediaQuery.removeEventListener("change", updatePreference);
      };
    }

    mediaQuery.addListener(updatePreference);
    return () => {
      mediaQuery.removeListener(updatePreference);
    };
  }, []);

  useEffect(() => {
    if (!isRendered) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";

    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;

      if (!panel) {
        return;
      }

      const focusableElements = Array.from(
        panel.querySelectorAll<HTMLElement>(focusableSelector)
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusableElements.length === 0) {
        return;
      }

      const first = focusableElements[0]!;
      const last = focusableElements[focusableElements.length - 1]!;
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === first || activeElement === panel) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearOpenFrame();
      clearCloseTimer();
      window.cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerElement?.focus();
    };
  }, [clearCloseTimer, clearOpenFrame, closeMenu, isRendered]);

  return (
    <div className="lg:hidden">
      <IconButton
        ref={triggerRef}
        label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-panel"
        aria-haspopup="dialog"
        onClick={isOpen ? closeMenu : openMenu}
        className={cn(
          isOpen && "border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-muted))]"
        )}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>

      {isRendered ? (
        <div
          ref={panelRef}
          id="mobile-navigation-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={cn(
            "fixed inset-0 z-50 h-[100dvh] bg-[hsl(var(--background))] transition-opacity duration-[var(--motion-standard)] ease-[var(--ease-standard)] motion-reduce:transition-none",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div
            className={cn(
              "flex h-full flex-col transition-[opacity,transform] duration-[var(--motion-standard)] ease-[var(--ease-standard)] motion-reduce:transform-none motion-reduce:transition-none",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            )}
          >
            <div className="border-b border-[hsl(var(--border))]">
              <div className="container-page flex items-center justify-between py-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="inline-flex items-center rounded-md px-1 py-1 text-sm font-semibold text-[hsl(var(--foreground))] transition-colors duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:text-[hsl(var(--foreground-secondary))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] sm:text-base"
                >
                  Mir Shahadut Hossain
                </Link>
                <IconButton ref={closeButtonRef} label="Close navigation menu" onClick={closeMenu}>
                  <CloseIcon />
                </IconButton>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto overscroll-contain">
              <div className="container-page py-8 pb-[calc(2rem+env(safe-area-inset-bottom))]">
                <nav aria-label="Mobile navigation">
                  <ul className="grid gap-3">
                    {navigationItems.map((item) => {
                      const isActive = isNavigationItemActive(pathname, item);

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            aria-current={isActive ? "page" : undefined}
                            onClick={closeMenu}
                            className={cn(
                              "flex min-h-[3.5rem] items-center gap-3 rounded-[var(--radius-md)] border px-4 py-3 text-base font-medium transition-[background-color,border-color,color,box-shadow] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
                              isActive
                                ? "border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-muted))] text-[hsl(var(--foreground))] shadow-soft"
                                : "border-[hsl(var(--border))] bg-[hsl(var(--surface))] text-[hsl(var(--foreground-secondary))] hover:border-[hsl(var(--border-strong))] hover:text-[hsl(var(--foreground))]"
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={cn(
                                "h-1.5 w-1.5 rounded-full transition-opacity duration-[var(--motion-fast)]",
                                isActive
                                  ? "bg-[hsl(var(--accent))] opacity-100"
                                  : "bg-transparent opacity-0"
                              )}
                            />
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
