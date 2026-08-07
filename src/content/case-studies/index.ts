import { bookEasyCaseStudy } from "./bookeasy";
import { hrhShoppingCaseStudy } from "./hrh-shopping";
import { taskOrbitCaseStudy } from "./taskorbit";

export type CaseStudySlug = "hrh-shopping" | "bookeasy" | "taskorbit";
export type CaseStudyPath = `/projects/${CaseStudySlug}`;

export type CaseStudyTextSection = {
  paragraphs: string[];
};

export type CaseStudyListSection = {
  items: string[];
};

export type CaseStudyArchitectureSection = {
  frontend?: string[];
  backend?: string[];
  data?: string[];
  auth?: string[];
  deployment?: string[];
};

export type CaseStudyWorkflow = {
  title: string;
  steps: string[];
};

export type CaseStudyKeyFact = {
  label: string;
  value: string;
};

export type CaseStudyWorkflowsSection = {
  items: CaseStudyWorkflow[];
};

export type CaseStudyScreenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  viewport?: "mobile" | "tablet" | "desktop";
};

export type CaseStudySections = {
  overview?: CaseStudyTextSection;
  problem?: CaseStudyTextSection;
  goals?: CaseStudyListSection;
  architecture?: CaseStudyArchitectureSection;
  features?: CaseStudyListSection;
  workflows?: CaseStudyWorkflowsSection;
  decisions?: CaseStudyListSection;
  challenges?: CaseStudyListSection;
  solutions?: CaseStudyListSection;
  responsive?: CaseStudyTextSection;
  accessibility?: CaseStudyListSection;
  security?: CaseStudyListSection;
  validation?: CaseStudyListSection;
  testing?: CaseStudyListSection;
  deployment?: CaseStudyTextSection;
  currentStatus?: CaseStudyTextSection;
  limitations?: CaseStudyListSection;
  lessons?: CaseStudyListSection;
  screenshots?: CaseStudyScreenshot[];
};

export type CaseStudy = {
  slug: CaseStudySlug;
  projectSlug: CaseStudySlug;
  title: string;
  description: string;
  canonicalPath: CaseStudyPath;
  liveDemoUrl: string;
  keyFacts: CaseStudyKeyFact[];
  relatedProjectSlug: CaseStudySlug;
  sections?: CaseStudySections;
};

export const caseStudyEntries = [
  hrhShoppingCaseStudy,
  bookEasyCaseStudy,
  taskOrbitCaseStudy,
] as const;

export const caseStudyBySlug = caseStudyEntries.reduce<Record<CaseStudySlug, CaseStudy>>(
  (accumulator, caseStudy) => {
    accumulator[caseStudy.slug] = caseStudy;
    return accumulator;
  },
  {} as Record<CaseStudySlug, CaseStudy>
);

export function getCaseStudyBySlug(slug: string) {
  return caseStudyBySlug[slug as CaseStudySlug] ?? null;
}

export function getCaseStudyStaticParams() {
  return caseStudyEntries.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export function getRelatedProject(projectSlug: CaseStudySlug) {
  return caseStudyBySlug[projectSlug] ?? null;
}
