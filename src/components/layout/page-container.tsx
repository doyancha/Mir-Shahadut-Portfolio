import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerSize =
  | "content"
  | "wide"
  | "prose"
  | "home-hero"
  | "home-featured"
  | "home-standard"
  | "home-narrative"
  | "home-prose";

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  content: "max-w-[var(--container-content)]",
  wide: "max-w-[var(--container-wide)]",
  prose: "max-w-[var(--container-prose)]",
  "home-hero": "max-w-[var(--container-home-hero)]",
  "home-featured": "max-w-[var(--container-home-featured)]",
  "home-standard": "max-w-[var(--container-home-standard)]",
  "home-narrative": "max-w-[var(--container-home-narrative)]",
  "home-prose": "max-w-[var(--container-home-prose)]",
};

export function PageContainer({
  children,
  className,
  size = "content",
  ...props
}: PageContainerProps) {
  return (
    <div className={cn("container-page", sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
}
