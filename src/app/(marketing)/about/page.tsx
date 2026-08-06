import type { Metadata } from "next";

import { AboutCta } from "@/components/about/about-cta";
import { AboutHero } from "@/components/about/about-hero";
import { CurrentFocus } from "@/components/about/current-focus";
import { EngineeringValues } from "@/components/about/engineering-values";
import { JourneySummary } from "@/components/about/journey-summary";
import { ProfessionalFocus } from "@/components/about/professional-focus";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/about",
  title: "About Mir Shahadut Hossain",
  description:
    "Mir Shahadut Hossain is a Full Stack Web Developer based in Dhaka, Bangladesh, with a background in computer science and engineering, project management, and system and web development.",
});

export default function AboutPage() {
  return (
    <div className="pb-16 md:pb-24">
      <AboutHero />
      <ProfessionalFocus />
      <JourneySummary />
      <EngineeringValues />
      <CurrentFocus />
      <AboutCta />
    </div>
  );
}
