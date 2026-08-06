import type { Metadata } from "next";
import type { ReactNode } from "react";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata();

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
