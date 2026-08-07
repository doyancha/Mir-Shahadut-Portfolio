export interface SkillsHeroProofPoint {
  label: string;
}

export interface SkillsCapabilityGroup {
  title: string;
  description: string;
  focusAreas: string[];
  evidence: string;
}

export interface SkillsTechnologyGroup {
  title: string;
  description: string;
  technologies: string[];
  evidence: string;
}

export const skillsHeroEyebrow = "SKILLS AND CAPABILITIES";
export const skillsHeroHeading = "Project-applied skills and verified technologies";
export const skillsHeroIntroduction =
  "This page groups the capabilities and technologies demonstrated across the featured projects.";
export const skillsHeroSupport =
  "Private repositories remain private. Live demos and project summaries provide the public proof.";
export const skillsHeroProofPoints: SkillsHeroProofPoint[] = [
  { label: "Project-applied" },
  { label: "Private repositories" },
  { label: "Live demos available" },
];

export const skillsCapabilityEyebrow = "CAPABILITY GROUPS";
export const skillsCapabilityHeading = "What I can build";
export const skillsCapabilityIntroduction =
  "These groups summarize the work I can support today, based on verified implementation across the featured projects.";
export const skillsCapabilityGroups: SkillsCapabilityGroup[] = [
  {
    title: "Frontend Engineering",
    description:
      "Responsive interfaces built with semantic structure, clear hierarchy, and maintainable component patterns.",
    focusAreas: ["Semantic structure", "Responsive layouts", "Accessibility"],
    evidence: "Applied across HRH Shopping, BookEasy, and TaskOrbit.",
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Application behavior that connects user interfaces, server-side logic, APIs, authentication, and persistent data.",
    focusAreas: ["Server-side logic", "API integration", "Authentication", "Persistent data"],
    evidence:
      "Demonstrated through booking workflows, authenticated application experiences, APIs, and backend-integrated features.",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Practical translation of product requirements into clear, usable interfaces and interaction states.",
    focusAreas: ["Design systems", "Interaction states", "Mobile-first refinement"],
    evidence: "Applied across responsive storefront, booking, dashboard, and SaaS workflows.",
  },
  {
    title: "Quality and Delivery",
    description:
      "Structured TypeScript, reusable patterns, version control, and verification practices that keep implementation predictable.",
    focusAreas: ["TypeScript", "Reusable patterns", "Verification"],
    evidence:
      "Applied through typed implementation, reusable components, version control, and verification workflows.",
  },
];

export const skillsTechnologyEyebrow = "VERIFIED TECHNOLOGIES";
export const skillsTechnologyHeading = "Technologies used in the featured projects";
export const skillsTechnologyIntroduction =
  "Only verified technologies used in the featured projects are shown here.";
export const skillsTechnologyGroups: SkillsTechnologyGroup[] = [
  {
    title: "Frontend",
    description: "Technologies used to build responsive, component-driven user interfaces.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    evidence: "Used across HRH Shopping, BookEasy, and TaskOrbit.",
  },
  {
    title: "Backend and Application Logic",
    description:
      "Tools used for server-side workflows, validation, APIs, and application behavior.",
    technologies: ["Node.js", "NestJS", "Server Actions", "Zod"],
    evidence:
      "Applied in authentication, APIs, booking workflows, server actions, and application logic across current projects.",
  },
  {
    title: "Data and Platform",
    description:
      "Technologies used for persistent data, ORM workflows, managed backend services, and deployment.",
    technologies: ["PostgreSQL", "MySQL", "Supabase", "Prisma", "Vercel"],
    evidence:
      "Used for relational data, ORM workflows, managed backend services, and Vercel deployment.",
  },
];

export const skillsEvidenceEyebrow = "EVIDENCE";
export const skillsEvidenceHeading = "Evidence through project work";
export const skillsEvidenceSummary =
  "These capabilities are demonstrated through responsive storefronts, booking workflows, authenticated application experiences, server-side features, and data-backed functionality across HRH Shopping, BookEasy, and TaskOrbit.";
export const skillsEvidencePoints = [
  "Applied across current full-stack projects",
  "Live demonstrations available",
  "Private repositories remain private",
  "Percentage-based ratings are intentionally not used",
] as const;

export const skillsCtaEyebrow = "NEXT STEP";
export const skillsCtaHeading = "Where should you review next?";
export const skillsCtaDescription =
  "Review the projects for implementation evidence, or open the experience page for a compact professional background summary.";
export const skillsCtaPrimary = {
  label: "View Projects",
  href: "/projects",
} as const;
export const skillsCtaSecondary = {
  label: "View Experience",
  href: "/experience",
} as const;
