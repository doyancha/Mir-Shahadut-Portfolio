"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";
import type { ProjectScreenshot } from "@/types/project";

const AUTOPLAY_DELAY_MS = 5600;

function ChevronLeftIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="M12.75 4.75 7.5 10l5.25 5.25"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path
        d="m7.25 4.75 5.25 5.25-5.25 5.25"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ProjectMediaGalleryProps = {
  screenshots: ProjectScreenshot[];
  ariaLabel: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  variant?: "featured" | "case-study";
};

export function ProjectMediaGallery({
  screenshots,
  ariaLabel,
  className,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 58vw",
  variant = "featured",
}: ProjectMediaGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const activeSlideIndex =
    screenshots.length === 0 ? 0 : Math.min(activeIndex, screenshots.length - 1);

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
    if (screenshots.length < 2 || prefersReducedMotion || isHovering || isFocusWithin) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % screenshots.length);
    }, AUTOPLAY_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeSlideIndex, isFocusWithin, isHovering, prefersReducedMotion, screenshots.length]);

  if (screenshots.length === 0) {
    return null;
  }

  const moveToSlide = (nextIndex: number) => {
    const normalizedIndex = (nextIndex + screenshots.length) % screenshots.length;
    setActiveIndex(normalizedIndex);
  };

  return (
    <Card
      surface="default"
      padding="none"
      className={cn("overflow-hidden rounded-[28px] border-[hsl(var(--border-strong))]", className)}
    >
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={ariaLabel}
        className="relative isolate"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onFocusCapture={() => setIsFocusWithin(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsFocusWithin(false);
          }
        }}
      >
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden",
            variant === "case-study" ? "bg-[hsl(var(--surface-muted))]" : "bg-[hsl(var(--surface))]"
          )}
        >
          {screenshots.map((screenshot, index) => {
            if (!screenshot.src || !screenshot.width || !screenshot.height) {
              return null;
            }

            const isActive = index === activeSlideIndex;
            const shouldPrioritize = priority && index === 0;

            return (
              <div
                key={`${screenshot.src}-${index}`}
                aria-hidden={!isActive}
                className={cn(
                  "absolute inset-0 transition-[opacity,transform] duration-[var(--motion-standard)] ease-[var(--ease-standard)] motion-reduce:transition-none",
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "pointer-events-none opacity-0 translate-x-1"
                )}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  priority={shouldPrioritize}
                  loading={shouldPrioritize ? "eager" : "lazy"}
                  fetchPriority={shouldPrioritize ? "high" : "auto"}
                  sizes={sizes}
                  className={
                    variant === "case-study" ? "object-contain object-center" : "object-cover"
                  }
                />
              </div>
            );
          })}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--background)/0.08)_0%,transparent_28%,transparent_58%,hsl(var(--background)/0.68)_100%)]" />

          <p className="sr-only" aria-live="polite">
            Showing screenshot {activeSlideIndex + 1} of {screenshots.length} in {ariaLabel}.
          </p>

          {screenshots.length > 1 ? (
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
              <IconButton
                label="Previous screenshot"
                size="sm"
                variant="secondary"
                onClick={() => moveToSlide(activeSlideIndex - 1)}
                className="border-white/10 bg-[hsl(var(--background)/0.78)] text-white shadow-none backdrop-blur-md hover:bg-[hsl(var(--background)/0.9)]"
              >
                <ChevronLeftIcon />
              </IconButton>

              <div className="flex items-center gap-2">
                {screenshots.map((screenshot, index) => {
                  const isActive = index === activeSlideIndex;

                  return (
                    <button
                      key={`${screenshot.src}-${screenshot.alt}`}
                      type="button"
                      aria-label={`Show screenshot ${index + 1} of ${screenshots.length}`}
                      aria-pressed={isActive}
                      onClick={() => moveToSlide(index)}
                      className={cn(
                        "h-2.5 w-2.5 rounded-full border transition-[transform,background-color,border-color,opacity] duration-[var(--motion-fast)] ease-[var(--ease-standard)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--focus-ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
                        isActive
                          ? "border-white/80 bg-white/90"
                          : "border-white/30 bg-white/20 hover:bg-white/45"
                      )}
                    />
                  );
                })}
              </div>

              <IconButton
                label="Next screenshot"
                size="sm"
                variant="secondary"
                onClick={() => moveToSlide(activeSlideIndex + 1)}
                className="border-white/10 bg-[hsl(var(--background)/0.78)] text-white shadow-none backdrop-blur-md hover:bg-[hsl(var(--background)/0.9)]"
              >
                <ChevronRightIcon />
              </IconButton>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
