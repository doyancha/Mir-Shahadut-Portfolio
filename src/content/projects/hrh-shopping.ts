import type { ProjectRecord } from "@/types/project";

export const hrhShoppingProject: ProjectRecord = {
  slug: "hrh-shopping",
  name: "HRH Shopping",
  homepageSummary:
    "A multi-vendor e-commerce platform with responsive storefronts, product discovery, customer accounts, cart, checkout, reviews, and scalable marketplace foundations.",
  shortSummary:
    "A full-stack multi-vendor e-commerce platform designed around scalable marketplace architecture, responsive storefront experiences, customer account workflows, product discovery, cart, checkout, reviews, notifications, and seller-oriented commerce foundations.",
  description: null,
  problem: null,
  goals: [],
  role: null,
  features: [],
  architecture: null,
  technologyStack: ["Next.js", "React", "TypeScript", "NestJS", "Prisma", "MySQL", "Tailwind CSS"],
  homepageTechnologyStack: ["Next.js", "TypeScript", "NestJS", "Prisma", "MySQL"],
  challenges: [],
  solutions: [],
  currentStatus: "Active Development",
  implementationStatus: "backend-integrated",
  demoStatus: "available",
  repositoryVisibility: "private",
  repositoryUrl: null,
  liveDemoUrl: "https://hrh-shopping.vercel.app/",
  desktopScreenshots: [
    {
      src: "/images/projects/hrh-shopping/01-primary-desktop.png",
      alt: "HRH Shopping storefront homepage with hero promotion, search, and category shortcuts.",
      width: 1440,
      height: 900,
    },
  ],
  mobileScreenshots: [
    {
      src: "/images/projects/hrh-shopping/06-checkout-mobile.png",
      alt: "HRH Shopping mobile checkout view with cart summary and purchase actions.",
      width: 390,
      height: 844,
    },
  ],
  accessibilityNotes: [],
  performanceNotes: [],
  lessonsLearned: [],
  statusNotes: [
    "Private repository",
    "Full-stack modular-monolith architecture",
    "Public storefront and customer-facing experiences are substantially implemented",
    "Some marketplace capabilities and later production integrations remain under development",
  ],
  isFeatured: true,
};
