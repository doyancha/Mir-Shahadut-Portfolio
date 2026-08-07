import Image from "next/image";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { ProjectScreenshot } from "@/types/project";

type ProjectMediaPreviewProps = {
  screenshot: ProjectScreenshot | undefined;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function ProjectMediaPreview({
  screenshot,
  priority = false,
  className,
  sizes = "(max-width: 1024px) 100vw, 58vw",
}: ProjectMediaPreviewProps) {
  if (!screenshot?.src || !screenshot.width || !screenshot.height) {
    return null;
  }

  return (
    <Card
      surface="default"
      padding="none"
      className={cn("overflow-hidden rounded-[28px] border-[hsl(var(--border-strong))]", className)}
    >
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
        className="h-auto w-full"
      />
    </Card>
  );
}
