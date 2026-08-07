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
          <div className="grid gap-4 xl:grid-cols-2">
            {screenshots.map((screenshot) => (
              <figure
                key={`${screenshot.src}-${screenshot.alt}`}
                className="overflow-hidden rounded-[24px] border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))]"
              >
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
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
