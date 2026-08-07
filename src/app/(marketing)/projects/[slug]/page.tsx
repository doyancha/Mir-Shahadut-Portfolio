import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { getCaseStudyBySlug, getCaseStudyStaticParams } from "@/content/case-studies";
import { createMetadata } from "@/lib/metadata";

type ProjectCaseStudyPageProps = {
  params:
    | {
        slug: string;
      }
    | Promise<{
        slug: string;
      }>;
};

async function resolveParams(params: ProjectCaseStudyPageProps["params"]) {
  return Promise.resolve(params);
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getCaseStudyStaticParams();
}

export async function generateMetadata({ params }: ProjectCaseStudyPageProps): Promise<Metadata> {
  const resolvedParams = await resolveParams(params);
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug);

  if (!caseStudy) {
    return createMetadata({
      path: `/projects/${resolvedParams.slug}`,
      title: "Project case study",
      description:
        "A factual, content-driven project case study page in the portfolio project system.",
    });
  }

  return createMetadata({
    path: caseStudy.canonicalPath,
    title: `${caseStudy.title} Case Study`,
    description: caseStudy.description,
  });
}

export default async function ProjectCaseStudyRoute({ params }: ProjectCaseStudyPageProps) {
  const resolvedParams = await resolveParams(params);
  const caseStudy = getCaseStudyBySlug(resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyPage caseStudy={caseStudy} />;
}
