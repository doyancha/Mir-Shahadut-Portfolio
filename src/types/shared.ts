export type Nullable<T> = T | null;

export type RepositoryVisibility = "private" | "public" | "draft";

export type ProjectImplementationStatus =
  | "draft"
  | "planned"
  | "implemented"
  | "frontend-only"
  | "backend-integrated"
  | "demo"
  | "production";

export type ProjectDemoStatus = "not-started" | "draft" | "available" | "pending";
