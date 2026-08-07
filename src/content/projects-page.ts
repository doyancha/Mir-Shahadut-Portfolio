import type { ProjectDemoStatus, RepositoryVisibility } from "@/types/shared";

export interface ProjectsStatusGuideItem {
  title: string;
  description: string;
}

export interface ProjectsEvidenceNoteItem {
  label: string;
}

export const projectsHeroEyebrow = "PROJECTS";
export const projectsHeroHeading = "Project evidence";
export const projectsHeroIntroduction =
  "Current full-stack project work is presented through verified summaries, live demos, and factual status labels.";
export const projectsHeroSupport =
  "Private repositories remain private, and each project below shows the public evidence that is available today.";

export const projectsStatusGuideEyebrow = "STATUS GUIDE";
export const projectsStatusGuideHeading = "How to read each project";
export const projectsStatusGuideIntroduction =
  "These labels explain the public review state without exposing private repository details.";
export const projectsStatusGuideItems: ProjectsStatusGuideItem[] = [
  {
    title: "Active Development",
    description: "The project is still being built and refined.",
  },
  {
    title: "Functional Demo",
    description: "The core experience is implemented and reviewable through a live demo.",
  },
  {
    title: "Private repository",
    description: "Source code remains private and is not linked publicly.",
  },
  {
    title: "Live demo available",
    description: "A verified live demo is linked when the project has one.",
  },
];

export const projectsEvidenceNoteEyebrow = "EVIDENCE";
export const projectsEvidenceNoteHeading = "Evidence through project work";
export const projectsEvidenceNoteSummary =
  "Repositories remain private. Live demos and project summaries provide public evidence. Status labels reflect the current state of each project.";
export const projectsEvidenceNoteItems: ProjectsEvidenceNoteItem[] = [
  { label: "Private repositories" },
  { label: "Live demos available" },
  { label: "Verified technology stacks" },
  { label: "Current project status" },
];

export const projectsCtaEyebrow = "NEXT STEP";
export const projectsCtaHeading = "Review the supporting pages";
export const projectsCtaDescription =
  "Use the project evidence above, then continue to the background summary or contact page if you want the next layer of context.";
export const projectsCtaPrimary = {
  label: "View Experience",
  href: "/experience",
} as const;
export const projectsCtaSecondary = {
  label: "Contact Me",
  href: "/contact",
} as const;

export const projectRepositoryVisibilityLabels: Record<RepositoryVisibility, string> = {
  private: "Private repository",
  public: "Public repository",
  draft: "Draft repository",
};

export const projectDemoStatusLabels: Record<ProjectDemoStatus, string> = {
  "not-started": "Live demo pending",
  draft: "Live demo draft",
  available: "Live demo available",
  pending: "Live demo pending",
};
