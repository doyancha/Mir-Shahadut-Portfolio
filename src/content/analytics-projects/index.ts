import { chatgptPromptBehaviorAnalyticsProject } from "@/content/analytics-projects/chatgpt-prompt-behavior-analytics";
import { foodExpressProject } from "@/content/analytics-projects/foodexpress";
import { youtubeEngagementIntelligenceProject } from "@/content/analytics-projects/youtube-engagement-intelligence";
import type { AnalyticsProjectRecord } from "@/types/analytics-project";

export const analyticsProjectEntries: AnalyticsProjectRecord[] = [
  foodExpressProject,
  youtubeEngagementIntelligenceProject,
  chatgptPromptBehaviorAnalyticsProject,
];

export const analyticsProjectBySlug = analyticsProjectEntries.reduce<
  Record<string, AnalyticsProjectRecord>
>((accumulator, project) => {
  accumulator[project.slug] = project;
  return accumulator;
}, {});

export function getAnalyticsProjectBySlug(slug: string) {
  return analyticsProjectBySlug[slug] ?? null;
}

export function getAnalyticsProjectStaticParams() {
  return analyticsProjectEntries.map((project) => ({
    slug: project.slug,
  }));
}
