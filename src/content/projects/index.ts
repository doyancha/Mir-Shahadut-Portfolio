import { bookEasyProject } from "@/content/projects/bookeasy";
import { hrhShoppingProject } from "@/content/projects/hrh-shopping";
import { taskOrbitProject } from "@/content/projects/taskorbit";
import type { ProjectRecord } from "@/types/project";

export const projectEntries: ProjectRecord[] = [
  hrhShoppingProject,
  bookEasyProject,
  taskOrbitProject,
];

export const projectBySlug = projectEntries.reduce<Record<string, ProjectRecord>>(
  (accumulator, project) => {
    accumulator[project.slug] = project;
    return accumulator;
  },
  {}
);
