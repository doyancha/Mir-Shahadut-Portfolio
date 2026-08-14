import type { AnalyticsProjectRecord } from "@/types/analytics-project";

export const chatgptPromptBehaviorAnalyticsProject = {
  kind: "analytics",
  slug: "chatgpt-prompt-behavior-analytics",
  canonicalPath: "/projects/chatgpt-prompt-behavior-analytics",
  title: "ChatGPT Prompt Behavior Analytics: Readability, Context, and Response Patterns",
  category: "Prompt Behavior Analytics",
  shortSummary:
    "Analysis of instruction-response behavior across prompt categories, readability, prompt length, and contextual richness.",
  introduction:
    "ChatGPT Prompt Behavior Analytics reviews how prompt structure, readability, and added context influence the response patterns present in a 52,002-row instruction dataset.",
  businessQuestion:
    "How do prompt category, prompt length, and contextual richness affect response readability and behavior?",
  dataset: {
    sourceLabel: "Alpaca-GPT4 instruction-response dataset",
    sourcePath:
      "hf://datasets/vicgalle/alpaca-gpt4/data/train-00000-of-00001-6ef3991c06080e14.parquet",
    scale: "52,002 instruction-response pairs",
    notes:
      "The project uses the curated notebook, README, and supporting dashboard assets derived from the dataset.",
  },
  technologies: ["Python", "pandas", "matplotlib", "seaborn", "wordcloud"],
  methodology: [
    "Prompt category analysis",
    "Readability scoring",
    "Prompt-length versus readability analysis",
    "Context-length versus response analysis",
    "Distribution analysis",
    "Text visualization",
  ],
  keyFindings: [
    "Creative Task prompts are the most common.",
    "Medium readability is the largest response bucket.",
    "Prompt length has near-zero correlation with readability.",
    "More context yields shorter and more readable responses.",
    "Response style is generally professional and moderate.",
  ],
  businessImpact: [
    "Supports prompt engineering and content design decisions.",
    "Shows that context quality matters more than raw prompt length.",
    "Translates well into a clear portfolio narrative about language behavior analysis.",
  ],
  limitations: [
    "The dataset is a proxy for general ChatGPT behavior.",
    "Readability metrics are heuristic.",
    "Causal claims should be avoided.",
  ],
  recommendedDemoArtifact: "/projects/chatgpt-prompt-behavior-analytics#visuals",
  primaryCta: {
    label: "Open Dashboard",
    href: "/projects/chatgpt-prompt-behavior-analytics#visuals",
  },
  secondaryCta: {
    label: "View Notebook",
    href: "/projects/chatgpt-prompt-behavior-analytics#findings",
  },
  media: [
    {
      src: "/images/projects/chatgpt-prompt-behavior-analytics/01-wordcloud.png",
      alt: "Word cloud showing the most common ChatGPT prompt themes.",
      width: 640,
      height: 329,
      caption: "Prompt topic cloud",
      story: "Prompt-topic overview.",
    },
    {
      src: "/images/projects/chatgpt-prompt-behavior-analytics/02-category-distribution.png",
      alt: "Bar chart of ChatGPT prompt category distribution.",
      width: 1038,
      height: 500,
      caption: "Prompt category distribution",
      story: "Prompt category mix.",
    },
    {
      src: "/images/projects/chatgpt-prompt-behavior-analytics/03-readability.png",
      alt: "Chart showing the distribution of ChatGPT response readability levels.",
      width: 1276,
      height: 450,
      caption: "Readability profile",
      story: "Response readability distribution.",
    },
    {
      src: "/images/projects/chatgpt-prompt-behavior-analytics/04-length-vs-readability.png",
      alt: "Scatter plot comparing ChatGPT prompt length and readability score.",
      width: 1276,
      height: 450,
      caption: "Prompt length versus readability",
      story: "Length and readability relationship.",
    },
    {
      src: "/images/projects/chatgpt-prompt-behavior-analytics/05-context-effect.png",
      alt: "Grouped chart showing how extra prompt context changes ChatGPT response length and readability.",
      width: 950,
      height: 600,
      caption: "Context richness and response behavior",
      story: "Context effect and closing takeaway.",
    },
  ],
  publicAssetPaths: [
    "/projects/chatgpt-prompt-behavior-analytics",
    "/images/projects/chatgpt-prompt-behavior-analytics/01-wordcloud.png",
    "/images/projects/chatgpt-prompt-behavior-analytics/02-category-distribution.png",
    "/images/projects/chatgpt-prompt-behavior-analytics/03-readability.png",
    "/images/projects/chatgpt-prompt-behavior-analytics/04-length-vs-readability.png",
    "/images/projects/chatgpt-prompt-behavior-analytics/05-context-effect.png",
  ],
  privateExclusions: [
    "Backup folder and duplicate notebooks",
    "Auxiliary scratch visuals",
    "Any exploratory charts not used in the final story",
  ],
  displayOrder: 3,
} satisfies AnalyticsProjectRecord;
