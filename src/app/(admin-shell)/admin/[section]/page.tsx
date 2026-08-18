import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { adminSections, getAdminSection } from "@/content/admin";
import { createMetadata } from "@/lib/metadata";

type AdminSectionPageProps = {
  params:
    | {
        section: string;
      }
    | Promise<{
        section: string;
      }>;
};

async function resolveParams(params: AdminSectionPageProps["params"]) {
  return Promise.resolve(params);
}

export async function generateStaticParams() {
  return adminSections.map((section) => ({ section: section.id }));
}

export async function generateMetadata({ params }: AdminSectionPageProps): Promise<Metadata> {
  const resolvedParams = await resolveParams(params);
  const section = getAdminSection(resolvedParams.section);

  if (!section) {
    return createMetadata({
      path: `/admin/${resolvedParams.section}`,
      title: "Admin section",
      description: "Protected admin section placeholder.",
      robots: {
        index: false,
        follow: false,
      },
    });
  }

  return createMetadata({
    path: section.href,
    title: `${section.label} admin`,
    description: section.description,
    robots: {
      index: false,
      follow: false,
    },
  });
}

export default async function AdminSectionPage({ params }: AdminSectionPageProps) {
  const resolvedParams = await resolveParams(params);
  const section = getAdminSection(resolvedParams.section);

  if (!section) {
    notFound();
  }

  return (
    <section className="space-y-6">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">{section.label}</Badge>
          <Badge tone="neutral">Placeholder</Badge>
        </div>

        <div className="space-y-2">
          <h2 className="type-section-heading text-[hsl(var(--foreground))]">{section.label}</h2>
          <p className="max-w-2xl text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
            {section.description}
          </p>
        </div>
      </section>

      <Card surface="muted" padding="md" className="space-y-3">
        <p className="type-card-title text-[hsl(var(--foreground))]">
          {section.label} placeholder
        </p>
        <p className="text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
          This route exists so the private admin shell can be navigated and verified end to end.
          CRUD, publishing, and any real content editing remain out of scope for Step 2.
        </p>
      </Card>

      <Card surface="default" padding="md" className="space-y-3">
        <p className="text-sm font-medium text-[hsl(var(--foreground))]">Current route</p>
        <p className="text-sm text-[hsl(var(--foreground-secondary))]">{section.href}</p>
      </Card>
    </section>
  );
}
