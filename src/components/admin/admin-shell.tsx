import type { ReactNode } from "react";
import { UserRole, UserStatus } from "@prisma/client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { SkipLink } from "@/components/layout/skip-link";
import { cn } from "@/lib/utils";

import { AdminNavigation } from "./admin-navigation";
import { AdminSignOutButton } from "./admin-sign-out-button";

export type AdminShellIdentity = {
  name: string | null;
  email: string | null;
  image: string | null;
  role: UserRole;
  status: UserStatus;
};

type AdminShellProps = {
  children: ReactNode;
  identity: AdminShellIdentity;
};

function getIdentityInitials(identity: AdminShellIdentity): string {
  const source = identity.name ?? identity.email ?? "A";
  const initials = source
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return initials || "A";
}

export function AdminShell({ children, identity }: AdminShellProps) {
  const displayName = identity.name?.trim() || identity.email?.trim() || "Authenticated admin";
  const secondaryLabel = identity.email?.trim() || "No email recorded";
  const statusTone = identity.status === UserStatus.ACTIVE ? "success" : "warning";

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <SkipLink />

      <header className="border-b border-[hsl(var(--border))] bg-[hsl(var(--background-elevated))]">
        <PageContainer size="wide" className="py-5">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="accent">Private admin</Badge>
                <Badge tone="success">Foundation ready</Badge>
              </div>

              <div className="space-y-2">
                <p className="type-section-heading text-[hsl(var(--foreground))]">Admin shell</p>
                <p className="max-w-2xl text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
                  Protected workspace for content, assets, settings, and system operations. Editing
                  and publishing functionality is not implemented yet.
                </p>
              </div>
            </div>

            <Card surface="elevated" padding="md" className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))] text-sm font-semibold text-[hsl(var(--foreground))]">
                  {getIdentityInitials(identity)}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-[hsl(var(--foreground))]">
                    {displayName}
                  </p>
                  <p className="truncate text-xs text-[hsl(var(--foreground-muted))]">
                    {secondaryLabel}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="neutral">{identity.role}</Badge>
                <Badge tone={statusTone}>{identity.status}</Badge>
              </div>

              <AdminSignOutButton />
            </Card>
          </div>
        </PageContainer>
      </header>

      <PageContainer size="wide" className="grid gap-6 py-6 lg:grid-cols-[18rem_minmax(0,1fr)]">
        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <Card surface="muted" padding="md">
            <AdminNavigation />
          </Card>

          <Card surface="default" padding="md" className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <p className="type-card-title text-[hsl(var(--foreground))]">Scope</p>
              <Badge tone="neutral">Operational</Badge>
            </div>
            <p className="text-sm leading-6 text-[hsl(var(--foreground-secondary))]">
              This shell is intentionally limited to private administration foundations. It is not a
              CMS and does not expose editing or publishing controls yet.
            </p>
          </Card>
        </aside>

        <main
          id="main-content"
          tabIndex={-1}
          className={cn("min-w-0 outline-none", "scroll-mt-6")}
        >
          {children}
        </main>
      </PageContainer>
    </div>
  );
}
