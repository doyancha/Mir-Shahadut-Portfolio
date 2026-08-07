import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import type { CaseStudy } from "@/content/case-studies";
import { getRelatedProject } from "@/content/case-studies";
import { CaseStudyArchitecture } from "./case-study-architecture";
import { CaseStudyCta } from "./case-study-cta";
import { CaseStudyHero } from "./case-study-hero";
import { CaseStudyScreenshots } from "./case-study-screenshots";
import { CaseStudySection } from "./case-study-section";
import { CaseStudyStatus } from "./case-study-status";
import { CaseStudyWorkflows } from "./case-study-workflows";
import { RelatedProject } from "./related-project";

type CaseStudyPageProps = {
  caseStudy: CaseStudy;
};

const orderedSections = [
  ["overview", "Overview"],
  ["problem", "Problem"],
  ["goals", "Goals"],
  ["features", "Features"],
  ["decisions", "Technical decisions"],
  ["challenges", "Challenges"],
  ["solutions", "Solutions"],
  ["responsive", "Responsive"],
  ["accessibility", "Accessibility"],
  ["security", "Security"],
  ["validation", "Validation and data integrity"],
  ["testing", "Testing"],
  ["deployment", "Deployment"],
  ["currentStatus", "Current status"],
  ["limitations", "Limitations"],
  ["lessons", "Lessons"],
] as const;

type OrderedSectionKey = (typeof orderedSections)[number][0];

const proseSectionKeys = new Set<OrderedSectionKey>([
  "overview",
  "problem",
  "responsive",
  "deployment",
]);

function getSectionContainerSize(key: OrderedSectionKey) {
  return proseSectionKeys.has(key) ? "prose" : "content";
}

export function CaseStudyPage({ caseStudy }: CaseStudyPageProps) {
  const relatedProject = getRelatedProject(caseStudy.relatedProjectSlug);
  const currentStatus = caseStudy.sections?.currentStatus;

  return (
    <div className="pb-16 md:pb-24">
      <Section className="pb-0 pt-10 md:pt-16">
        <PageContainer size="wide">
          <CaseStudyHero caseStudy={caseStudy} />
        </PageContainer>
      </Section>

      {currentStatus ? (
        <Section className="pt-8 md:pt-12">
          <PageContainer size="prose">
            <CaseStudyStatus status={currentStatus} />
          </PageContainer>
        </Section>
      ) : null}

      {orderedSections.map(([key, title]) => {
        if (key === "currentStatus") {
          return null;
        }

        const section = caseStudy.sections?.[key as keyof typeof caseStudy.sections];

        if (!section) {
          return null;
        }

        return (
          <Section key={key} className="pt-8 md:pt-12">
            <PageContainer size={getSectionContainerSize(key)}>
              <CaseStudySection
                id={key}
                title={title}
                section={section as Parameters<typeof CaseStudySection>[0]["section"]}
              />
            </PageContainer>
          </Section>
        );
      })}

      {caseStudy.sections?.architecture ? (
        <Section className="pt-8 md:pt-12">
          <PageContainer size="wide">
            <CaseStudyArchitecture architecture={caseStudy.sections.architecture} />
          </PageContainer>
        </Section>
      ) : null}

      {caseStudy.sections?.workflows ? (
        <Section className="pt-8 md:pt-12">
          <PageContainer size="wide">
            <CaseStudyWorkflows workflows={caseStudy.sections.workflows} />
          </PageContainer>
        </Section>
      ) : null}

      {caseStudy.sections?.screenshots?.length ? (
        <Section className="pt-8 md:pt-12">
          <PageContainer size="wide">
            <CaseStudyScreenshots screenshots={caseStudy.sections.screenshots} />
          </PageContainer>
        </Section>
      ) : null}

      <Section className="pt-8 md:pt-12">
        <PageContainer size="wide">
          <CaseStudyCta liveDemoUrl={caseStudy.liveDemoUrl} />
        </PageContainer>
      </Section>

      {relatedProject ? (
        <Section className="pt-8 md:pt-12">
          <PageContainer size="wide">
            <RelatedProject relatedProject={relatedProject} />
          </PageContainer>
        </Section>
      ) : null}
    </div>
  );
}
