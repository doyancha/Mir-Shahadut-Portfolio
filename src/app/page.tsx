import type { Metadata } from "next";

import { createMetadata } from "@/lib/metadata";
import { HomeHero } from "@/components/home/home-hero";
import { CredibilityStrip } from "@/components/home/credibility-strip";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { CoreCapabilities } from "@/components/home/core-capabilities";
import { EngineeringApproach } from "@/components/home/engineering-approach";
import { SelectedTechnologies } from "@/components/home/selected-technologies";
import { ResumeCtaSection } from "@/components/home/resume-cta";
import { ContactCtaSection } from "@/components/home/contact-cta";

export const metadata: Metadata = createMetadata({
  title: "Mir Shahadut Hossain",
  description:
    "Mir Shahadut Hossain is a Full Stack Web Developer who builds modern, responsive, and production-focused web applications with thoughtful user experiences, clean architecture, and maintainable code.",
});

export default function HomePage() {
  return (
    <div className="pb-16 md:pb-24">
      <HomeHero />
      <CredibilityStrip />
      <FeaturedProjects />
      <CoreCapabilities />
      <EngineeringApproach />
      <SelectedTechnologies />
      <ResumeCtaSection />
      <ContactCtaSection />
    </div>
  );
}
