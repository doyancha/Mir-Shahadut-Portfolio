import { personalProfile } from "@/content/personal";

export const aboutHeroEyebrow = "ABOUT";
export const aboutHeroHeading = personalProfile.displayName;
export const aboutHeroIntroduction =
  personalProfile.shortIntroduction ??
  "I build modern, responsive, and production-focused web applications with thoughtful user experiences, clean architecture, and maintainable code.";
export const aboutHeroSupport =
  "Based in Dhaka, Bangladesh, I focus on practical full-stack work that keeps interfaces clear, workflows dependable, and implementation easy to maintain.";
export const aboutHeroFacts = [
  {
    label: "Professional title",
    value: personalProfile.professionalTitle ?? "Full Stack Web Developer",
  },
  {
    label: "Location",
    value: personalProfile.location ?? "Dhaka, Bangladesh",
  },
  {
    label: "Professional focus",
    value:
      "Modern full-stack development with responsive interfaces and maintainable application workflows.",
  },
] as const;

export const aboutProfessionalFocusEyebrow = "PROFESSIONAL FOCUS";
export const aboutProfessionalFocusHeading = "What I focus on";
export const aboutProfessionalFocusIntroduction =
  "My work centers on the parts of a product that users can feel directly: the interface, the workflow, and the reliability of the system behind it.";
export const aboutProfessionalFocusCards = [
  {
    title: "Full-stack application work",
    description:
      "I build across the interface, server-side logic, and data layer so the product stays coherent from user action to stored result.",
  },
  {
    title: "Responsive UI implementation",
    description:
      "I shape layouts and interaction states so the experience stays readable and useful across small screens, tablets, and desktop sizes.",
  },
  {
    title: "Maintainable delivery",
    description:
      "I prefer reusable components, clear structure, and predictable patterns that make future updates easier to review and extend.",
  },
] as const;

export const aboutJourneyEyebrow = "PROFESSIONAL JOURNEY";
export const aboutJourneyHeading = "How the path came together";
export const aboutJourneyIntroduction =
  "My background combines computer science and engineering study with earlier project-management experience and later hands-on system and web development work.";
export const aboutJourneyNarrative = [
  "I studied Computer Science and Engineering at Daffodil International University, which gave me a technical foundation for understanding how software systems are structured and how implementation choices affect the final product.",
  "Before the current portfolio work, I worked as a Project Manager at Logic IT Solution and later as a System Developer / Web Developer at Great Printing UK. That combination helps me think about both planning and execution without turning the work into unnecessary process.",
  "The result is a practical development style: start with the user need, keep the structure clear, and build in a way that remains understandable when the project grows.",
] as const;
export const aboutJourneyMilestones = [
  {
    label: "Daffodil International University",
    detail: "Bachelor of Science (B.Sc.), Computer Science and Engineering · CGPA 3.00/4.00",
  },
  {
    label: "Logic IT Solution",
    detail: "Project Manager · Full-time · Onsite · January 2020 – April 2021",
  },
  {
    label: "Great Printing UK",
    detail: "System Developer / Web Developer · Full-time · Remote · June 2025 – April 2026",
  },
] as const;

export const aboutValuesEyebrow = "ENGINEERING VALUES";
export const aboutValuesHeading = "How I evaluate the work";
export const aboutValuesIntroduction =
  "These principles guide how I make technical decisions and shape software that remains clear, usable, and maintainable.";
export const aboutValues = [
  {
    title: "Clarity",
    description:
      "Structure, naming, and copy should make the product easy to understand for both users and maintainers.",
  },
  {
    title: "Maintainability",
    description:
      "Reusable components, strong typing, and consistent patterns help the code stay reviewable as the site grows.",
  },
  {
    title: "Usability",
    description:
      "Interfaces should guide attention naturally, stay readable at different sizes, and keep the next action obvious.",
  },
  {
    title: "Responsible implementation",
    description:
      "I prefer to show what is verified, avoid inflated claims, and keep the delivery aligned with the actual state of the work.",
  },
] as const;

export const aboutCurrentFocusEyebrow = "CURRENT FOCUS";
export const aboutCurrentFocusHeading = "What I'm focused on now";
export const aboutCurrentFocusDescription =
  "My current focus is modern full-stack web development, responsive interfaces, dependable application workflows, and maintainable architecture.";
export const aboutCurrentFocusPoints = [
  "Responsive UI",
  "Application workflows",
  "Maintainable architecture",
  "Technical learning",
] as const;

export const aboutCtaEyebrow = "NEXT STEP";
export const aboutCtaHeading = "Where would you like to go next?";
export const aboutCtaDescription =
  "Review my projects to see the work itself, or open the experience page for a compact factual background summary.";
export const aboutCtaPrimary = {
  label: "View Projects",
  href: "/projects",
} as const;
export const aboutCtaSecondary = {
  label: "View Experience",
  href: "/experience",
} as const;
