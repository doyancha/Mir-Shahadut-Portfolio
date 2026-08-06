import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SeparatorProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

export function Separator({ className, orientation = "horizontal", ...props }: SeparatorProps) {
  return (
    <hr
      aria-hidden="true"
      className={cn(
        orientation === "horizontal" ? "h-px w-full border-0" : "h-full w-px border-0",
        "surface-divider",
        className
      )}
      {...props}
    />
  );
}
