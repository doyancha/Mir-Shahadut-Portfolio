import type { ProjectRecord } from "@/types/project";

export const taskOrbitProject: ProjectRecord = {
  slug: "taskorbit",
  name: "TaskOrbit",
  homepageSummary:
    "A SaaS productivity platform with authentication, protected workflows, structured task management, and scalable application foundations.",
  shortSummary:
    "A full-stack SaaS management platform focused on structured workflows, authentication, protected application experiences, and scalable task and productivity foundations.",
  description: null,
  problem: null,
  goals: [],
  role: null,
  features: [],
  architecture: null,
  technologyStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Database-backed application architecture",
  ],
  homepageTechnologyStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js"],
  challenges: [],
  solutions: [],
  currentStatus: "Active Development",
  implementationStatus: "backend-integrated",
  demoStatus: "available",
  repositoryVisibility: "private",
  repositoryUrl: null,
  liveDemoUrl: "https://taskorbit-mu.vercel.app/",
  desktopScreenshots: [
    {
      src: "/images/projects/taskorbit/01-primary-desktop.png",
      alt: "TaskOrbit landing page with workspace operations overview and login actions.",
      width: 1440,
      height: 900,
    },
  ],
  mobileScreenshots: [],
  accessibilityNotes: [],
  performanceNotes: [],
  lessonsLearned: [],
  statusNotes: [
    "Private repository",
    "Authentication foundations and core SaaS application experiences are implemented",
    "Do not invent collaboration statistics, organizations, users, revenue, or production adoption",
  ],
  isFeatured: true,
};
