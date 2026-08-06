import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, IBM_Plex_Mono } from "next/font/google";

import { createMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = createMetadata();

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">{children}</body>
    </html>
  );
}
