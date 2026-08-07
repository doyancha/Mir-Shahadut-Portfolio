import type { Metadata } from "next";

import { ResumeCta } from "@/components/resume/resume-cta";
import { ResumeEducation } from "@/components/resume/resume-education";
import { ResumeExperienceSnapshot } from "@/components/resume/resume-experience-snapshot";
import { ResumeHero } from "@/components/resume/resume-hero";
import { ResumeProjects } from "@/components/resume/resume-projects";
import { ResumeSkills } from "@/components/resume/resume-skills";
import { ResumeSummary } from "@/components/resume/resume-summary";
import { resumePageDescription } from "@/content/resume";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/resume",
  title: "Resume",
  description: resumePageDescription,
});

export default function ResumePage() {
  return (
    <>
      <ResumeHero />
      <ResumeSummary />
      <ResumeSkills />
      <ResumeExperienceSnapshot />
      <ResumeEducation />
      <ResumeProjects />
      <ResumeCta />
    </>
  );
}
