import { educationRecord, experienceEntries } from "@/content/experience";
import { personalProfile } from "@/content/personal";
import { projectEntries } from "@/content/projects";

export interface ResumeSkillGroup {
  title: string;
  technologies: string[];
}

export interface ResumeProjectHighlight {
  slug: string;
  name: string;
  status: string;
  summary: string;
  technologies: string[];
  liveDemoUrl: string | null;
}

export const resumePageEyebrow = "RESUME";
export const resumePageHeading = "Professional resume";
export const resumePageDescription =
  "A concise professional resume covering background, technical skills, experience, education, and selected projects.";

export const resumePdfFileName = "mir-shahadut-hossain-resume.pdf";
export const resumePdfPath = `/documents/resume/${resumePdfFileName}`;
export const resumePdfDownloadLabel = "Download Resume";

export const resumeHeroIntroduction =
  "Full Stack Web Developer based in Dhaka, Bangladesh, with experience in system and web development, project management, computer science study, and hands-on development of modern web applications.";

export const resumeHeroFacts = [
  {
    label: "Name",
    value: personalProfile.displayName,
  },
  {
    label: "Professional title",
    value: personalProfile.professionalTitle ?? "Full Stack Web Developer",
  },
  {
    label: "Location",
    value: personalProfile.location ?? "Dhaka, Bangladesh",
  },
  {
    label: "Contact",
    value: personalProfile.email ?? "sujon6901@gmail.com",
  },
] as const;

export const resumeSummaryHeading = "Professional summary";
export const resumeSummaryDescription =
  "My background brings together system and web development, project management experience, computer science study, and hands-on portfolio work across modern web applications.";

export const resumeSkillHeading = "Technical skills";
export const resumeSkillDescription =
  "Technologies I use across modern full-stack web application development.";
export const resumeSkillGroups: ResumeSkillGroup[] = [
  {
    title: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Application and backend",
    technologies: ["Node.js", "NestJS", "Server Actions", "Zod"],
  },
  {
    title: "Data and platform",
    technologies: ["PostgreSQL", "MySQL", "Supabase", "Prisma", "Vercel"],
  },
];

export const resumeExperienceHeading = "Professional experience";
export const resumeExperienceDescription =
  "Roles that shaped my background in development and project-focused work.";
export const resumeExperienceEntries = experienceEntries;

export const resumeEducationHeading = "Education";
export const resumeEducationDescription =
  "My academic background in Computer Science and Engineering supports the technical foundation behind my current development work.";
export const resumeEducationRecord = educationRecord;

export const resumeProjectsHeading = "Selected projects";
export const resumeProjectsDescription =
  "Selected applications that highlight my current full-stack development work.";
export const resumeProjectHighlights: ResumeProjectHighlight[] = projectEntries.map((project) => ({
  slug: project.slug,
  name: project.name,
  status: project.currentStatus ?? "",
  summary: project.homepageSummary ?? project.shortSummary ?? "",
  technologies: (project.homepageTechnologyStack ?? project.technologyStack).slice(0, 5),
  liveDemoUrl: project.liveDemoUrl ?? null,
}));

export const resumeCtaHeading = "Continue reviewing the portfolio";
export const resumeCtaDescription =
  "Explore selected projects, review my professional experience, or get in touch to discuss an opportunity.";
export const resumeCtaPrimary = {
  label: "View Projects",
  href: "/projects",
} as const;
export const resumeCtaSecondary = {
  label: "View Experience",
  href: "/experience",
} as const;
export const resumeCtaTertiary = {
  label: "Contact Me",
  href: "/contact",
} as const;
