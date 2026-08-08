import { educationRecord, experienceEntries } from "@/content/experience";
import { personalProfile } from "@/content/personal";
import { projectBySlug } from "@/content/projects";
import { socialLinks } from "@/content/social-links";

export type ResumePdfSkillGroup = {
  title: string;
  technologies: string[];
};

export type ResumePdfProject = {
  slug: string;
  name: string;
  summary: string;
  technologies: string[];
  status: string;
  liveDemoUrl: string;
};

export type ResumePdfContactLink = {
  label: string;
  href: string;
};

export const resumePdfFileName = "mir-shahadut-hossain-resume.pdf";
export const resumePdfPath = `/documents/resume/${resumePdfFileName}`;

export const resumePdfName = personalProfile.displayName;
export const resumePdfTitle = personalProfile.professionalTitle ?? "Full Stack Web Developer";
export const resumePdfLocation = personalProfile.location ?? "Dhaka, Bangladesh";
export const resumePdfEmail = personalProfile.email ?? "sujon6901@gmail.com";
export const resumePdfSummary =
  "Full Stack Web Developer based in Dhaka, Bangladesh, with experience in system development, web development, and project management. Builds responsive, type-safe web applications using modern frontend, server-side, validation, and relational-data workflows.";

const githubLink = socialLinks.find((link) => link.label === "GitHub")?.href ?? null;
const linkedInLink = socialLinks.find((link) => link.label === "LinkedIn")?.href ?? null;
const upworkLink = socialLinks.find((link) => link.label === "Upwork")?.href ?? null;

export const resumePdfContactLinks: ResumePdfContactLink[] = [
  {
    label: "Email",
    href: `mailto:${resumePdfEmail}`,
  },
  ...(githubLink
    ? [
        {
          label: "GitHub",
          href: githubLink,
        },
      ]
    : []),
  ...(linkedInLink
    ? [
        {
          label: "LinkedIn",
          href: linkedInLink,
        },
      ]
    : []),
  ...(upworkLink
    ? [
        {
          label: "Upwork",
          href: upworkLink,
        },
      ]
    : []),
];

export const resumePdfSkillGroups: ResumePdfSkillGroup[] = [
  {
    title: "Frontend",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Application Logic",
    technologies: ["Node.js", "NestJS", "Server Actions", "Zod"],
  },
  {
    title: "Data & Platform",
    technologies: ["PostgreSQL", "MySQL", "Supabase", "Prisma", "Vercel"],
  },
];

export const resumePdfSupportingSkills = [
  "Git / GitHub",
  "Responsive Web Development",
  "Accessibility",
  "API Integration",
  "Database Design",
] as const;

export const resumePdfExperience = experienceEntries;
export const resumePdfEducation = educationRecord;

export const resumePdfProjects: ResumePdfProject[] = [
  {
    slug: "hrh-shopping",
    name: projectBySlug["hrh-shopping"]!.name,
    summary:
      "A multi-vendor e-commerce platform with responsive storefronts, product discovery, customer accounts, cart, checkout, reviews, and scalable marketplace foundations.",
    technologies: ["Next.js", "TypeScript", "NestJS", "Prisma", "MySQL"],
    status: projectBySlug["hrh-shopping"]!.currentStatus ?? "Active Development",
    liveDemoUrl: projectBySlug["hrh-shopping"]!.liveDemoUrl ?? "https://hrh-shopping.vercel.app/",
  },
  {
    slug: "bookeasy",
    name: projectBySlug["bookeasy"]!.name,
    summary:
      "Appointment-booking application with customer scheduling, protected accounts, service administration, business hours, blocked periods, and Supabase/PostgreSQL-backed data workflows.",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Server Actions"],
    status: projectBySlug["bookeasy"]!.currentStatus ?? "Functional Demo",
    liveDemoUrl: projectBySlug["bookeasy"]!.liveDemoUrl ?? "https://bookeasy-topaz.vercel.app/",
  },
  {
    slug: "taskorbit",
    name: projectBySlug["taskorbit"]!.name,
    summary:
      "Workspace-based productivity platform for managing projects, tasks, teams, invitations, permissions, and protected application workflows.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"],
    status: projectBySlug["taskorbit"]!.currentStatus ?? "Active Development",
    liveDemoUrl: projectBySlug["taskorbit"]!.liveDemoUrl ?? "https://taskorbit-mu.vercel.app/",
  },
];
