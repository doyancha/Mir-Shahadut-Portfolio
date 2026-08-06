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

export const homepageCapabilitiesEyebrow = "CAPABILITIES";
export const homepageCapabilitiesHeading = "Core capabilities";
export const homepageCapabilitiesIntroduction =
  "Practical full-stack development capabilities demonstrated across responsive interfaces, application workflows, data-backed features, and maintainable delivery.";

export const homepageCapabilityCards = [
  {
    title: "Frontend Engineering",
    description:
      "Responsive, accessible interfaces built with semantic structure, clear visual hierarchy, and maintainable component architecture.",
    tags: ["React and Next.js", "Responsive layouts", "Accessibility"],
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Application workflows that connect user interfaces, server-side logic, APIs, authentication, and persistent data.",
    tags: ["Server-side logic", "API integration", "Authentication"],
  },
  {
    title: "UI/UX Implementation",
    description:
      "Thoughtful translation of product requirements into clear, consistent, and usable interfaces across screen sizes.",
    tags: ["Design systems", "Interaction states", "Mobile-first refinement"],
  },
  {
    title: "Quality and Delivery",
    description:
      "Structured TypeScript, reusable patterns, version control, and verification practices that keep development predictable and maintainable.",
    tags: ["TypeScript", "Git workflow", "Testing and verification"],
  },
] as const;

export const homepageEngineeringEyebrow = "ENGINEERING APPROACH";
export const homepageEngineeringHeading = "How I approach development";
export const homepageEngineeringIntroduction =
  "I focus on building software that is clear for users, maintainable for developers, and dependable across devices.";

export const homepageEngineeringPrinciples = [
  {
    title: "Thoughtful user experience",
    description:
      "Interfaces should guide users clearly, reduce unnecessary friction, and remain usable across devices.",
  },
  {
    title: "Clean architecture",
    description:
      "Content, presentation, application logic, and data access should have clear responsibilities.",
  },
  {
    title: "Maintainable code",
    description:
      "Strong typing, reusable components, and consistent patterns make software easier to extend and review.",
  },
  {
    title: "Responsive implementation",
    description:
      "Layouts and interactions should adapt deliberately without hiding essential content or weakening usability.",
  },
] as const;

export const homepageTechnologiesEyebrow = "TECHNOLOGIES";
export const homepageTechnologiesHeading = "Selected technologies";
export const homepageTechnologiesIntroduction =
  "A focused selection of technologies used across my current full-stack projects.";

export const homepageTechnologyGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Technologies used to build responsive, component-driven user interfaces.",
  },
  {
    title: "Backend and Application Logic",
    items: ["Node.js", "NestJS", "Server Actions", "Zod"],
    description:
      "Tools used for server-side workflows, APIs, validation, and application behavior.",
  },
  {
    title: "Data and Platform",
    items: ["PostgreSQL", "MySQL", "Supabase", "Prisma", "Vercel"],
    description:
      "Technologies used for persistent data, managed backend services, ORM workflows, and deployment.",
  },
] as const;

export const homepageProfileEyebrow = "PROFESSIONAL PROFILE";
export const homepageProfileHeading = "Experience and background";
export const homepageProfileDescription =
  "Review my professional experience, education, and project-based development work.";
export const homepageProfileCta = {
  label: "View Experience",
  href: "/experience",
} as const;

export const homepageContactEyebrow = "LET'S CONNECT";
export const homepageContactHeading = "Have a project or opportunity in mind?";
export const homepageContactDescription =
  "Share what you are building, the role you are hiring for, or the problem you need help solving.";
export const homepageContactCta = {
  label: "Contact Me",
  href: "/contact",
} as const;
