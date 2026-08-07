import type { Metadata } from "next";

import { CapabilityGroups } from "@/components/skills/capability-groups";
import { SkillsCta } from "@/components/skills/skills-cta";
import { SkillsEvidenceNote } from "@/components/skills/skills-evidence-note";
import { SkillsHero } from "@/components/skills/skills-hero";
import { TechnologyGroups } from "@/components/skills/technology-groups";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/skills",
  title: "Skills and Capabilities",
  description:
    "Project-applied full-stack development capabilities and verified technologies used across current web application work.",
});

export default function SkillsPage() {
  return (
    <div className="pb-16 md:pb-24">
      <SkillsHero />
      <CapabilityGroups />
      <TechnologyGroups />
      <SkillsEvidenceNote />
      <SkillsCta />
    </div>
  );
}
