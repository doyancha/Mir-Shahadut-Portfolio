import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/admin/unauthorized",
  title: "Unauthorized",
  description: "Access is restricted to allowlisted admin accounts.",
  robots: {
    index: false,
    follow: false,
  },
});

export default function AdminUnauthorizedPage() {
  return (
    <Section className="py-12 md:py-16">
      <PageContainer size="prose">
        <Stack gap="lg">
          <SectionHeader
            eyebrow="Access denied"
            title="This account is not permitted to enter the admin shell"
            description="The protected admin area only accepts allowlisted admin identities. Use the approved GitHub account or return to the public portfolio."
          />

          <Card surface="muted" padding="lg">
            <Stack gap="md">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone="error">Unauthorized</Badge>
                <Badge tone="neutral">Role check failed</Badge>
              </div>

              <p className="text-sm text-[hsl(var(--foreground-secondary))]">
                The public portfolio remains unchanged. If you expected access, confirm the admin
                allowlist and GitHub identity configuration in the environment before trying again.
              </p>

              <div className="flex flex-wrap gap-3">
                <LinkButton href="/admin/sign-in" variant="primary">
                  Try again
                </LinkButton>
                <LinkButton href="/" variant="secondary">
                  Return home
                </LinkButton>
              </div>
            </Stack>
          </Card>
        </Stack>
      </PageContainer>
    </Section>
  );
}
