export const projectTypes = [
  "software",
  "analytics",
  "nlp_ml",
  "dashboard",
  "case_study",
  "external_demo",
] as const;

export type ProjectType = (typeof projectTypes)[number];

export const projectStatuses = ["draft", "in_review", "published", "archived"] as const;

export type ProjectStatus = (typeof projectStatuses)[number];

export const projectVisibilities = ["public", "private", "unlisted"] as const;

export type ProjectVisibility = (typeof projectVisibilities)[number];

export const projectSectionTypes = [
  "hero",
  "executive_summary",
  "problem",
  "dataset",
  "preparation",
  "methodology",
  "key_metrics",
  "eda",
  "deep_dive",
  "statistical_model_evaluation",
  "insights",
  "recommendations",
  "limitations",
  "interactive_demo",
  "gallery",
  "technology",
  "source",
  "final_takeaway",
] as const;

export type ProjectSectionType = (typeof projectSectionTypes)[number];

export const projectLinkTypes = [
  "open_report",
  "open_live_app",
  "view_github",
  "source_repository",
  "external",
  "primary",
  "secondary",
] as const;

export type ProjectLinkType = (typeof projectLinkTypes)[number];

export const projectMediaTypes = ["image", "video", "gif", "document"] as const;

export type ProjectMediaType = (typeof projectMediaTypes)[number];

export const userRoles = ["admin", "editor", "reviewer", "viewer"] as const;

export type UserRole = (typeof userRoles)[number];

export const userStatuses = ["active", "invited", "suspended"] as const;

export type UserStatus = (typeof userStatuses)[number];

export type ProjectDomainSection = {
  sectionKey: string;
  sectionType: ProjectSectionType;
  heading: string;
  bodyMarkdown?: string | null;
  content?: unknown;
  sortOrder: number;
  isVisible: boolean;
};

export type ProjectDomainMetric = {
  label: string;
  valueText: string;
  valueNumeric?: number | null;
  unit?: string | null;
  context?: string | null;
  sortOrder: number;
};

export type ProjectDomainMedia = {
  mediaType: ProjectMediaType;
  storageKey: string;
  publicUrl: string;
  altText: string;
  caption: string;
  story: string;
  width: number;
  height: number;
  sortOrder: number;
  isPublic: boolean;
};

export type ProjectDomainLink = {
  linkType: ProjectLinkType;
  label: string;
  url: string;
  isPrimary: boolean;
  sortOrder: number;
};

export type ProjectDomainRevision = {
  revisionNumber: number;
  snapshot: unknown;
};

export type ProjectDomainPublishEvent = {
  fromStatus: ProjectStatus;
  toStatus: ProjectStatus;
  note?: string | null;
};

export type ProjectDomainRecord = {
  slug: string;
  title: string;
  projectType: ProjectType;
  category: string;
  shortSummary: string;
  longSummary: string;
  problemStatement: string;
  businessObjective: string;
  technologies: string[];
  status: ProjectStatus;
  visibility: ProjectVisibility;
  featured: boolean;
  displayOrder: number;
  canonicalRoute: string;
  liveAppUrl?: string | null;
  githubUrl?: string | null;
  reportUrl?: string | null;
  datasetSource?: string | null;
  datasetScale?: string | null;
  metadata?: unknown;
  sections: ProjectDomainSection[];
  metrics: ProjectDomainMetric[];
  media: ProjectDomainMedia[];
  links: ProjectDomainLink[];
  tags: string[];
  revisions: ProjectDomainRevision[];
  publishEvents: ProjectDomainPublishEvent[];
};
