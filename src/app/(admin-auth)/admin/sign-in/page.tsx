import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import {
  adminAuthWarning,
  hasConfiguredAdminAuth,
  getAdminSession,
} from "@/lib/admin/auth";
import { isAdminSessionAuthorized } from "@/lib/admin/auth-policy";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/admin/sign-in",
  title: "Admin sign in",
  description: "Authenticated access point for the Mir Shahadut Portfolio admin shell.",
  robots: {
    index: false,
    follow: false,
  },
});

type SignInPageProps = {
  searchParams?:
    | {
        callbackUrl?: string;
        error?: string;
      }
    | Promise<{
        callbackUrl?: string;
        error?: string;
      }>;
};

function resolveSearchParams(searchParams: SignInPageProps["searchParams"]) {
  return Promise.resolve(searchParams ?? {});
}

export default async function AdminSignInPage({ searchParams }: SignInPageProps) {
  const session = await getAdminSession();
  const params = await resolveSearchParams(searchParams);
  const callbackUrl = params.callbackUrl ?? "/admin";
  const error = params.error ?? null;

  if (isAdminSessionAuthorized(session)) {
    redirect("/admin");
  }

  const signInHref = `/api/auth/signin/github?callbackUrl=${encodeURIComponent(callbackUrl)}`;

  return (
    <Section className="py-12 md:py-16">
      <PageContainer size="prose">
        <Stack gap="lg">
          <SectionHeader
            eyebrow="Admin access"
            title="Sign in to the protected admin shell"
            description="This route is reserved for allowlisted GitHub identities only. Public portfolio routes remain unchanged."
          />

          <Card surface="muted" padding="lg">
            <Stack gap="md">
              <div className="flex flex-wrap items-center gap-3">
                <Badge tone={hasConfiguredAdminAuth ? "success" : "warning"}>
                  {hasConfiguredAdminAuth ? "GitHub OAuth ready" : "Admin auth unavailable"}
                </Badge>
                <Badge tone="neutral">JWT session</Badge>
                <Badge tone="neutral">Role-gated</Badge>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-[hsl(var(--foreground-secondary))]">
                  Only GitHub accounts explicitly listed in the environment allowlist can enter the
                  admin shell. The sign-in flow persists identity data to the Prisma user domain
                  and keeps the public portfolio untouched.
                </p>

                {adminAuthWarning ? (
                  <p className="text-sm font-medium text-[hsl(var(--warning))]">{adminAuthWarning}</p>
                ) : null}

                {error ? (
                  <p className="text-sm font-medium text-[hsl(var(--error))]">
                    Sign-in error: {error}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-wrap gap-3">
                {hasConfiguredAdminAuth ? (
                  <LinkButton href={signInHref} variant="primary">
                    Continue with GitHub
                  </LinkButton>
                ) : (
                  <span className="inline-flex min-h-[var(--control-height-md)] items-center rounded-[var(--radius-md)] border border-[hsl(var(--warning) / 0.35)] bg-[hsl(var(--warning) / 0.12)] px-4 text-sm font-medium text-[hsl(var(--warning))]">
                    Add the missing admin auth secrets to enable sign-in
                  </span>
                )}

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
