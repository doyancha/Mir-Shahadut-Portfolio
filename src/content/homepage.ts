import { personalProfile } from "@/content/personal";
import { projectBySlug } from "@/content/projects";

export const homepageHeroContent = {
  eyebrow: "Proof-led portfolio",
  name: personalProfile.displayName,
  title: personalProfile.professionalTitle ?? "Full Stack Web Developer",
  introduction:
    personalProfile.shortIntroduction ??
    "I build modern, responsive, and production-focused web applications with thoughtful user experiences, clean architecture, and maintainable code.",
  primaryCta: {
    label: "View Projects",
    href: "/projects",
  },
  secondaryCta: {
    label: "View Resume",
    href: "/resume",
  },
} as const;

export const homepageCredibilityItems = [
  "Production-focused development",
  "Responsive implementation",
  "Maintainable architecture",
] as const;

export const homepageCredibilityLabel = "ENGINEERING FOCUS";

export const homepageCredibilityNote =
  "Evidence is presented through live demos and detailed case studies. Repositories remain private.";

export const homepageFeaturedProjectSlugs = ["hrh-shopping", "bookeasy", "taskorbit"] as const;

export const homepageFeaturedEyebrow = "SELECTED WORK";
export const homepageFeaturedHeading = "Featured projects";
export const homepageFeaturedIntroduction =
  "Three full-stack applications demonstrating responsive product design, maintainable architecture, and practical development across different business domains.";

export const homepageFeaturedProjects = homepageFeaturedProjectSlugs.map((slug) => {
  const project = projectBySlug[slug];

  if (!project) {
    throw new Error(`Missing homepage project record for slug: ${slug}`);
  }

  return project;
});
