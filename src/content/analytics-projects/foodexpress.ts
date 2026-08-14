import type { AnalyticsProjectRecord } from "@/types/analytics-project";

export const foodExpressProject = {
  kind: "analytics",
  slug: "foodexpress",
  canonicalPath: "/projects/foodexpress",
  title: "FoodExpress Operations Analytics: Delivery Performance, Customer Satisfaction, and Revenue",
  category: "Operations Analytics",
  shortSummary:
    "Delivery operations analysis covering fulfillment time, customer satisfaction, city revenue, cuisine mix, payment behavior, and campaign impact.",
  introduction:
    "FoodExpress is an operations analytics case study that turns one month of delivery records into a decision-oriented review of service quality, city performance, payment mix, and promotional impact.",
  businessQuestion:
    "Which delivery, customer, and revenue factors most clearly explain FoodExpress operational performance, and where should management focus first?",
  dataset: {
    sourceLabel: "FoodExpress delivery operations dataset",
    sourcePath:
      "C:\\Users\\MIR SHAHADUT HOSSAIN\\DATA ANALYTICS PROJECTS\\foodexpress_data_uncleaned .csv",
    scale: "1,000 orders, 990 clean records, 24 columns, 4 city zones",
    notes:
      "One-month operational snapshot analyzed through a cleaned working table and a published HTML report.",
  },
  technologies: ["Python", "pandas", "scipy", "seaborn", "statsmodels"],
  methodology: [
    "Data cleaning and missing-value handling",
    "Rating normalization and feature engineering",
    "Net revenue derivation",
    "Exploratory data analysis",
    "One-sample, independent-samples, chi-square, ANOVA, and paired t-tests",
    "Operational and business interpretation",
  ],
  keyFindings: [
    "North Zone misses the 30-minute delivery target.",
    "Delivery-partner rating is the strongest satisfaction driver.",
    "The promotional campaign does not show a statistically significant effect on average order value.",
    "City net revenue ranking is clear and measurable after applying the net revenue formula.",
    "Cuisine and payment patterns are informative but not the main driver of the operational gap.",
  ],
  businessImpact: [
    "Prioritize delivery-time reduction in North Zone.",
    "Use delivery-partner quality as a satisfaction lever.",
    "Shift promotions from flat discounting toward volume-driving mechanics.",
    "Use net revenue rather than raw revenue for city performance review.",
  ],
  limitations: [
    "The analysis covers a single month of activity.",
    "The campaign test window is short and should not be overstated as causal proof.",
    "The raw uncleaned CSV should remain private.",
  ],
  recommendedDemoArtifact: "/documents/analytics/foodexpress-report.html",
  primaryCta: {
    label: "Open Report",
    href: "/documents/analytics/foodexpress-report.html",
  },
  secondaryCta: {
    label: "View Analysis",
    href: "/projects/foodexpress#visuals",
  },
  media: [
    {
      src: "/images/projects/foodexpress/01-hero-kpis.png",
      alt: "FoodExpress report hero showing total orders, clean records, total revenue, and city count.",
      width: 1440,
      height: 1200,
      caption: "FoodExpress at a glance",
      story: "Project framing and headline operational metrics.",
    },
    {
      src: "/images/projects/foodexpress/02-data-cleaning.png",
      alt: "FoodExpress report section showing the data cleaning and preparation pipeline.",
      width: 1100,
      height: 1433,
      caption: "Data preparation and quality cleanup",
      story: "Cleaning, normalization, and feature preparation.",
    },
    {
      src: "/images/projects/foodexpress/03-eda-viz.png",
      alt: "FoodExpress report charts showing order distribution, cuisine mix, payment behavior, and delivery performance.",
      width: 1100,
      height: 1444,
      caption: "Exploratory analysis and visual patterns",
      story: "Core EDA and business-facing visual patterns.",
    },
    {
      src: "/images/projects/foodexpress/04-stat-tests.png",
      alt: "FoodExpress report section showing statistical tests for delivery targets, customer satisfaction, and campaign impact.",
      width: 1100,
      height: 1591,
      caption: "Statistical tests and target checks",
      story: "Inferential tests and operational threshold checks.",
    },
    {
      src: "/images/projects/foodexpress/05-business-insights.png",
      alt: "FoodExpress report section showing business recommendations and operational conclusions.",
      width: 1100,
      height: 2042,
      caption: "Business recommendations",
      story: "Executive interpretation and actions.",
    },
  ],
  publicAssetPaths: [
    "/documents/analytics/foodexpress-report.html",
    "/images/projects/foodexpress/01-hero-kpis.png",
    "/images/projects/foodexpress/02-data-cleaning.png",
    "/images/projects/foodexpress/03-eda-viz.png",
    "/images/projects/foodexpress/04-stat-tests.png",
    "/images/projects/foodexpress/05-business-insights.png",
  ],
  privateExclusions: [
    "Raw uncleaned CSV and notebook scratch work",
    "Redundant exercise-style notebook cells",
    "Any unsupported causal claims from the campaign analysis",
  ],
  displayOrder: 1,
} satisfies AnalyticsProjectRecord;
