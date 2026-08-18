import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { adminSections } from "@/content/admin";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/admin",
  title: "Admin dashboard",
  description: "Private admin dashboard placeholder for the Mir Shahadut Portfolio foundation.",
  robots: {
    index: false,
    follow: false,
  },
});

export default function AdminDashboardPage() {
  return (
    <section className="space-y-6">
      <section className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="accent">Dashboard</Badge>
          <Badge tone="neutral">Placeholder</Badge>
        </div>

        <div className="space-y-2">
          <h2 className="type-section-heading text-[hsl(var(--foreground))]">
            Admin foundation dashboard
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
            This is the authenticated landing page for the private admin shell. Editing,
            publishing, analytics, and CMS workflows are not implemented yet.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="type-card-title text-[hsl(var(--foreground))]">Placeholder sections</h3>
          <Badge tone="success">Foundation ready</Badge>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {adminSections.map((section) => (
            <Link key={section.id} href={section.href} className="block h-full">
              <Card
                surface="muted"
                padding="md"
                className="h-full transition-[background-color,border-color,transform] duration-[var(--motion-fast)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-[hsl(var(--border-strong))]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-[hsl(var(--foreground))]">
                      {section.label}
                    </p>
                    <p className="text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
                      {section.description}
                    </p>
                  </div>
                  <Badge tone="neutral">Available</Badge>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Card surface="default" padding="md" className="space-y-3">
        <p className="type-card-title text-[hsl(var(--foreground))]">What this shell is for</p>
        <p className="text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
          The private admin area is ready for future operational work, but it intentionally avoids
          exposing live content tools until the next step is explicitly authorized.
        </p>
      </Card>
    </section>
  );
}
