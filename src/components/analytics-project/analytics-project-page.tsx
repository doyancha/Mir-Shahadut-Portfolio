import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import type { AnalyticsProjectRecord } from "@/types/analytics-project";
import { AnalyticsProjectHero } from "./analytics-project-hero";
import { AnalyticsProjectSection } from "./analytics-project-section";

type AnalyticsProjectPageProps = {
  project: AnalyticsProjectRecord;
};

export function AnalyticsProjectPage({ project }: AnalyticsProjectPageProps) {
  return (
    <div className="pb-16 md:pb-24">
      <Section className="pb-0 pt-10 md:pt-16">
        <PageContainer size="wide">
          <AnalyticsProjectHero project={project} />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="prose">
          <AnalyticsProjectSection
            id="overview"
            title="Overview"
            section={{ paragraphs: [project.introduction] }}
          />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="prose">
          <AnalyticsProjectSection
            id="question"
            title="Business question"
            section={{ paragraphs: [project.businessQuestion] }}
          />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="prose">
          <AnalyticsProjectSection
            id="dataset"
            title="Dataset"
            section={{
              paragraphs: [
                project.dataset.sourceLabel,
                project.dataset.sourcePath,
                project.dataset.scale,
                project.dataset.notes ?? "",
              ].filter(Boolean),
            }}
          />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="content">
          <AnalyticsProjectSection
            id="methodology"
            title="Methodology"
            section={{ items: project.methodology }}
          />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="content">
          <AnalyticsProjectSection
            id="findings"
            title="Key findings"
            section={{ items: project.keyFindings }}
          />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="content">
          <AnalyticsProjectSection
            id="impact"
            title="Business impact"
            section={{ items: project.businessImpact }}
          />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="content">
          <AnalyticsProjectSection
            id="limitations"
            title="Limitations"
            section={{ items: project.limitations }}
          />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="wide">
          <AnalyticsProjectSection
            id="visuals"
            title="Visual evidence"
            section={{
              items: project.media.map((media) => `${media.caption} - ${media.story}`),
            }}
          />
        </PageContainer>
      </Section>

      <Section className="pt-8 md:pt-12">
        <PageContainer size="wide">
          <AnalyticsProjectSection
            id="private"
            title="Public and private boundaries"
            section={{ items: [...project.publicAssetPaths, ...project.privateExclusions] }}
          />
        </PageContainer>
      </Section>
    </div>
  );
}
