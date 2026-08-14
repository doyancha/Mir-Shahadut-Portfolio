import type { Nullable } from "@/types/shared";

export type AnalyticsProjectMedia = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  story: string;
};

export type AnalyticsProjectRecord = {
  kind: "analytics";
  slug: string;
  canonicalPath: `/projects/${string}`;
  title: string;
  category: string;
  shortSummary: string;
  introduction: string;
  businessQuestion: string;
  dataset: {
    sourceLabel: string;
    sourcePath: string;
    scale: string;
    notes: Nullable<string>;
  };
  technologies: string[];
  methodology: string[];
  keyFindings: string[];
  businessImpact: string[];
  limitations: string[];
  recommendedDemoArtifact: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  media: AnalyticsProjectMedia[];
  publicAssetPaths: string[];
  privateExclusions: string[];
  displayOrder: number;
};
