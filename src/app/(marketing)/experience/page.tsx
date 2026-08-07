import type { Metadata } from "next";

import { ExperienceHero } from "@/components/experience/experience-hero";
import { ExperienceOverview } from "@/components/experience/experience-overview";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { EducationSection } from "@/components/experience/education-section";
import { ExperienceCta } from "@/components/experience/experience-cta";
import { createMetadata } from "@/lib/metadata";
import { experiencePageDescription } from "@/content/experience";

export const metadata: Metadata = createMetadata({
  path: "/experience",
  title: "Experience",
  description: experiencePageDescription,
});

export default function ExperiencePage() {
  return (
    <>
      <ExperienceHero />
      <ExperienceOverview />
      <ExperienceTimeline />
      <EducationSection />
      <ExperienceCta />
    </>
  );
}
