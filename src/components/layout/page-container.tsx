import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerSize = "content" | "wide" | "prose";

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  content: "max-w-[var(--container-content)]",
  wide: "max-w-[var(--container-wide)]",
  prose: "max-w-[var(--container-prose)]",
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
