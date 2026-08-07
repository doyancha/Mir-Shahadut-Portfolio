import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Stack } from "@/components/layout/stack";
import type { CaseStudyScreenshot } from "@/content/case-studies";

type CaseStudyScreenshotsProps = {
  screenshots?: CaseStudyScreenshot[];
};

export function CaseStudyScreenshots({ screenshots }: CaseStudyScreenshotsProps) {
  if (!screenshots?.length) {
    return null;
  }

  return (
    <section className="scroll-mt-28">
      <Card padding="lg" className="rounded-[28px]">
        <Stack gap="md">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Screenshots</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:gap-5">
            {screenshots.map((screenshot) => (
              <figure
                key={`${screenshot.src}-${screenshot.alt}`}
                className="overflow-hidden rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))]"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={screenshot.width}
                  height={screenshot.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full"
                />
                {screenshot.caption ? (
                  <figcaption className="border-t border-[hsl(var(--border))] px-4 py-3 text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
                    {screenshot.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </Stack>
      </Card>
    </section>
  );
}
