import { AppLink } from "@/components/ui/link";
import { PageContainer } from "@/components/layout/page-container";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";

export default function NotFound() {
  return (
    <Section>
      <PageContainer size="prose">
        <Stack gap="lg">
          <div className="space-y-3">
            <p className="type-label text-[hsl(var(--accent))]">404</p>
            <h1 className="type-page-title text-[hsl(var(--foreground))]">Page not found</h1>
          </div>
          <Prose className="p-0">
            <p>The requested page could not be found.</p>
          </Prose>
          <div className="flex flex-wrap gap-3">
            <AppLink href="/">Return home</AppLink>
            <AppLink href="/projects" tone="muted">
              View projects
            </AppLink>
          </div>
        </Stack>
      </PageContainer>
    </Section>
  );
}
