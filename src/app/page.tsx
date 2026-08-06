import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/home/home-hero";
import { CredibilityStrip } from "@/components/home/credibility-strip";
import { FeaturedProjects } from "@/components/home/featured-projects";

export const metadata: Metadata = createMetadata({
  title: "Mir Shahadut Hossain",
  description:
    "Mir Shahadut Hossain is a Full Stack Web Developer who builds modern, responsive, and production-focused web applications with thoughtful user experiences, clean architecture, and maintainable code.",
});

export default function HomePage() {
  return (
    <div className="pb-12">
      <HomeHero />
      <CredibilityStrip />
      <FeaturedProjects />
      {/* Phase 4B-2 continues with capabilities, engineering approach, technologies, resume CTA, and contact CTA. */}
    </div>
  );
}
