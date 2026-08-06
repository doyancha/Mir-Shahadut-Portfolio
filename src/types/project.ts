import type {
  Nullable,
  ProjectDemoStatus,
  ProjectImplementationStatus,
  RepositoryVisibility,
} from "@/types/shared";

export interface ProjectScreenshot {
  alt: string;
  src: Nullable<string>;
  width: Nullable<number>;
  height: Nullable<number>;
}

export interface ProjectFeature {
  name: string;
  implementationStatus: ProjectImplementationStatus;
  details: Nullable<string>;
}

export interface ProjectRecord {
  slug: string;
  name: string;
  shortSummary: Nullable<string>;
  description: Nullable<string>;
  problem: Nullable<string>;
  goals: string[];
  role: Nullable<string>;
  features: ProjectFeature[];
  architecture: Nullable<string>;
  technologyStack: string[];
  challenges: string[];
  solutions: string[];
  currentStatus: Nullable<string>;
  implementationStatus: ProjectImplementationStatus;
  demoStatus: ProjectDemoStatus;
  repositoryVisibility: RepositoryVisibility;
  repositoryUrl: Nullable<string>;
  liveDemoUrl: Nullable<string>;
  desktopScreenshots: ProjectScreenshot[];
  mobileScreenshots: ProjectScreenshot[];
  accessibilityNotes: string[];
  performanceNotes: string[];
  lessonsLearned: string[];
  statusNotes: string[];
  isFeatured: boolean;
}
