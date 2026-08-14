import type { AnalyticsProjectRecord } from "@/types/analytics-project";

export const youtubeEngagementIntelligenceProject = {
  kind: "analytics",
  slug: "youtube-engagement-intelligence",
  canonicalPath: "/projects/youtube-engagement-intelligence",
  title: "YouTube Engagement Intelligence: Reach, Creator Performance, and Audience Sentiment",
  category: "Audience & Creator Analytics",
  shortSummary:
    "Large-scale engagement analysis of trending videos and comments across categories, channels, sentiment, and language patterns.",
  introduction:
    "YouTube Engagement Intelligence is a dashboard-led analytics project that examines reach, creator concentration, comment sentiment, and language signals across a large trending-video dataset.",
  businessQuestion:
    "Which content patterns, creators, and audience signals best explain engagement on trending YouTube videos?",
  dataset: {
    sourceLabel: "YouTube trending videos and comment sentiment data",
    sourcePath:
      "C:\\Users\\MIR SHAHADUT HOSSAIN\\DATA ANALYTICS PROJECTS\\YOUTUBE DATA ANALYSIS\\enhanced\\data\\youtube_videos.parquet",
    scale: "679,050 trending video records, 691,400 comment records, 18 categories, 48,183 channels",
    notes:
      "The curated dashboard uses prepared parquet outputs plus a supporting README and notebook for review.",
  },
  technologies: ["Python", "Streamlit", "pandas", "seaborn", "WordCloud"],
  methodology: [
    "Data ingestion and consolidation",
    "Engagement aggregation and ranking",
    "Sentiment classification",
    "Correlation analysis",
    "Word-frequency and emoji/punctuation analysis",
    "Dashboard storytelling",
  ],
  keyFindings: [
    "Views and likes correlate strongly at about 0.78.",
    "Howto & Style leads like-rate performance.",
    "The Late Show with Stephen Colbert is a repeated channel leader.",
    "NickyJamTV leads accumulated views.",
    "Positive sentiment outweighs negative sentiment.",
    "Punctuation matters, but it is not the primary engagement driver.",
  ],
  businessImpact: [
    "Identifies the content categories and creators that are structurally strong, not just viral.",
    "Supports creator strategy using engagement and language signals together.",
    "Provides a defensible dashboard for presenting audience and creator performance.",
  ],
  limitations: [
    "Sentiment is inferred rather than ground truth.",
    "Correlation does not prove causation.",
    "The conclusions should not be generalized to every YouTube niche without care.",
  ],
  recommendedDemoArtifact: "/projects/youtube-engagement-intelligence#visuals",
  primaryCta: {
    label: "Open Dashboard",
    href: "/projects/youtube-engagement-intelligence#visuals",
  },
  secondaryCta: {
    label: "Read Analysis Notes",
    href: "/projects/youtube-engagement-intelligence#findings",
  },
  media: [
    {
      src: "/images/projects/youtube-engagement-intelligence/01-overview.png",
      alt: "YouTube analytics overview with top-level performance metrics.",
      width: 2521,
      height: 1181,
      caption: "Overview and KPI summary",
      story: "Dashboard hero and top-level metrics.",
    },
    {
      src: "/images/projects/youtube-engagement-intelligence/02-category-creator.png",
      alt: "YouTube analytics chart showing category and channel performance.",
      width: 2530,
      height: 1237,
      caption: "Category and creator performance",
      story: "Channel and category explorer.",
    },
    {
      src: "/images/projects/youtube-engagement-intelligence/03-sentiment.png",
      alt: "YouTube analytics view of sentiment distribution and related commentary patterns.",
      width: 2202,
      height: 1105,
      caption: "Audience sentiment",
      story: "Comment sentiment and distribution analysis.",
    },
    {
      src: "/images/projects/youtube-engagement-intelligence/04-language-patterns.png",
      alt: "YouTube analytics visualizations showing word clouds and language frequency patterns.",
      width: 2531,
      height: 1229,
      caption: "Language and word patterns",
      story: "Language exploration across comments.",
    },
    {
      src: "/images/projects/youtube-engagement-intelligence/05-punctuation-impact.png",
      alt: "YouTube analytics chart showing punctuation impact on engagement.",
      width: 2529,
      height: 1221,
      caption: "Punctuation and engagement",
      story: "Punctuation impact analysis and closing takeaway.",
    },
  ],
  publicAssetPaths: [
    "/projects/youtube-engagement-intelligence",
    "/images/projects/youtube-engagement-intelligence/01-overview.png",
    "/images/projects/youtube-engagement-intelligence/02-category-creator.png",
    "/images/projects/youtube-engagement-intelligence/03-sentiment.png",
    "/images/projects/youtube-engagement-intelligence/04-language-patterns.png",
    "/images/projects/youtube-engagement-intelligence/05-punctuation-impact.png",
  ],
  privateExclusions: [
    "Duplicate notebooks and scratch artifacts",
    "Temporary folders and build leftovers",
    "Any raw intermediate files not needed for the dashboard",
  ],
  displayOrder: 2,
} satisfies AnalyticsProjectRecord;
