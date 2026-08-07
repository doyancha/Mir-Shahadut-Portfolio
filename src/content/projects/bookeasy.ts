import type { ProjectRecord } from "@/types/project";

export const bookEasyProject: ProjectRecord = {
  slug: "bookeasy",
  name: "BookEasy",
  homepageSummary:
    "An appointment-booking application with customer scheduling, protected accounts, service administration, business hours, blocked periods, and secure Supabase data access.",
  shortSummary:
    "A responsive appointment-booking application with customer booking flows, protected account experiences, service management, administrative scheduling tools, business hours, blocked periods, and secure Supabase-backed data access.",
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
    "Supabase",
    "PostgreSQL",
    "Zod",
    "Server Actions",
  ],
  homepageTechnologyStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Server Actions"],
  challenges: [],
  solutions: [],
  currentStatus: "Functional Demo",
  implementationStatus: "implemented",
  demoStatus: "available",
  repositoryVisibility: "private",
  repositoryUrl: null,
  liveDemoUrl: "https://bookeasy-topaz.vercel.app/",
  desktopScreenshots: [
    {
      src: "/images/projects/bookeasy/01-primary-desktop.png",
      alt: "BookEasy homepage with appointment calendar and booking call to action.",
      width: 1440,
      height: 900,
    },
  ],
  mobileScreenshots: [
    {
      src: "/images/projects/bookeasy/05-booking-mobile.png",
      alt: "BookEasy mobile booking flow showing service selection on a narrow screen.",
      width: 390,
      height: 844,
    },
  ],
  accessibilityNotes: [],
  performanceNotes: [],
  lessonsLearned: [],
  statusNotes: [
    "Private repository",
    "Customer and administrator workflows are implemented",
    "Supabase authentication, role checks, RLS, scheduling logic, and overlap protection are part of the project",
    "Do not claim commercial production usage",
  ],
  isFeatured: true,
};
