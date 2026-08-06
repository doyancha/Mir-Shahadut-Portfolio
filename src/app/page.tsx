import type { Metadata } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconButton } from "@/components/ui/icon-button";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { AppLink } from "@/components/ui/link";
import { PageContainer } from "@/components/layout/page-container";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { SectionHeader } from "@/components/layout/section-header";
import { Stack } from "@/components/layout/stack";
import { Cluster } from "@/components/layout/cluster";
import { createMetadata } from "@/lib/metadata";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

export const metadata: Metadata = createMetadata({
  title: "Design System Preview",
  description: "Phase 2 Design System Preview for Mir-Shahadut-Portfolio.",
});

const colorSwatches = [
  ["Background", "--background", "Deep navy-charcoal"],
  ["Elevated surface", "--background-elevated", "Raised shell surfaces"],
  ["Surface", "--surface", "Primary card fill"],
  ["Muted surface", "--surface-muted", "Subtle supporting fill"],
  ["Foreground", "--foreground", "Primary readable text"],
  ["Secondary text", "--foreground-secondary", "Supporting text"],
  ["Muted text", "--foreground-muted", "Low emphasis text"],
  ["Border", "--border", "Default structural border"],
  ["Strong border", "--border-strong", "Interactive border"],
  ["Accent", "--accent", "Primary action blue"],
  ["Accent hover", "--accent-hover", "Hover state blue"],
  ["Success", "--success", "Positive state green"],
  ["Warning", "--warning", "Caution state amber"],
  ["Error", "--error", "Error state red"],
] as const;

function Swatch({
  label,
  token,
  description,
}: {
  label: string;
  token: string;
  description: string;
}) {
  return (
    <Card padding="none" className="overflow-hidden">
      <div
        className="h-24 border-b border-[hsl(var(--border))]"
        style={{ background: `hsl(var(${token}))` }}
      />
      <div className="space-y-2 p-4">
        <div className="space-y-1">
          <p className="type-card-title text-[hsl(var(--foreground))]">{label}</p>
          <p className="type-metadata text-[hsl(var(--foreground-muted))]">{token}</p>
        </div>
        <p className="type-body-small text-[hsl(var(--foreground-secondary))]">{description}</p>
      </div>
    </Card>
  );
}

function MetricCard({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <Card surface="muted" className="space-y-3">
      <div className="space-y-1">
        <p className="type-label text-[hsl(var(--accent))]">{title}</p>
        <p className="type-page-title text-[hsl(var(--foreground))]">{value}</p>
      </div>
      <p className="type-body-small text-[hsl(var(--foreground-secondary))]">{note}</p>
    </Card>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PageContainer className="pb-12 pt-8">
        <Section className="pt-4">
          <Stack gap="lg">
            <Cluster justify="between" gap="md">
              <Badge tone="accent">Design System Preview</Badge>
              <Tag tone="subtle">Phase 2 Design System Preview</Tag>
            </Cluster>

            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:items-end">
              <Stack gap="md" className="max-w-[var(--container-prose)]">
                <p className="type-label text-[hsl(var(--foreground-muted))]">
                  Mir-Shahadut-Portfolio
                </p>
                <h1 className="type-display max-w-[12ch] text-[hsl(var(--foreground))]">
                  Mir Shahadut Hossain
                </h1>
                <Prose className="container-prose p-0">
                  <p>
                    This page previews the reusable design system foundation for
                    Mir-Shahadut-Portfolio. It is intentionally not the final homepage.
                  </p>
                </Prose>
              </Stack>

              <Card surface="elevated" className="space-y-4">
                <Stack gap="sm">
                  <p className="type-label text-[hsl(var(--accent))]">Preview status</p>
                  <p className="type-body-large text-[hsl(var(--foreground))]">
                    Phase 2 Design System Preview
                  </p>
                  <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                    Premium dark-neutral theme, semantic tokens, and reusable primitives.
                  </p>
                </Stack>
                <Separator />
                <Cluster gap="sm">
                  <Badge tone="success">Accessible</Badge>
                  <Badge tone="warning">Responsive</Badge>
                  <Badge tone="neutral">Server-first</Badge>
                </Cluster>
              </Card>
            </div>
          </Stack>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Typography"
            title="A readable, slightly technical type system"
            description="One primary sans-serif font, paired with a monospaced code face for metadata and technical labels."
          />
          <div className="mt-8 grid gap-4">
            <Card className="space-y-6">
              <div className="space-y-3">
                <p className="type-label text-[hsl(var(--foreground-muted))]">Display heading</p>
                <h2 className="type-display text-[hsl(var(--foreground))]">Premium clarity</h2>
              </div>
              <Separator />
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <p className="type-label text-[hsl(var(--accent))]">Page heading</p>
                    <h3 className="type-page-title text-[hsl(var(--foreground))]">
                      Readable scale
                    </h3>
                  </div>
                  <div>
                    <p className="type-label text-[hsl(var(--foreground-muted))]">
                      Section heading
                    </p>
                    <h4 className="type-section-title text-[hsl(var(--foreground))]">
                      Semantic hierarchy
                    </h4>
                  </div>
                  <div>
                    <p className="type-label text-[hsl(var(--foreground-muted))]">Subsection</p>
                    <h5 className="type-subsection-title text-[hsl(var(--foreground))]">
                      Calm and precise
                    </h5>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="type-body-large text-[hsl(var(--foreground-secondary))]">
                    Body large is used for intro copy and stronger explanatory text.
                  </p>
                  <p className="type-body text-[hsl(var(--foreground-secondary))]">
                    Body text remains readable, balanced, and comfortable at every preview width.
                  </p>
                  <p className="type-body-small text-[hsl(var(--foreground-muted))]">
                    Body small supports annotations, captions, and secondary explanations.
                  </p>
                  <p className="type-metadata text-[hsl(var(--foreground-muted))]">
                    METADATA 2026 / SYSTEM ROLE / TECHNICAL LABEL
                  </p>
                  <code className="type-code rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--surface-muted))] px-2 py-1 text-[hsl(var(--foreground-secondary))]">
                    npm run build
                  </code>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Section id="tokens">
          <SectionHeader
            eyebrow="Color"
            title="Semantic dark-neutral palette"
            description="All colors are exposed as semantic tokens so the later page layers can stay consistent and accessible."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {colorSwatches.map(([label, token, description]) => (
              <Swatch key={label} label={label} token={token} description={description} />
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Components"
            title="Reusable primitives for later phases"
            description="These are the only foundation components added in Phase 2."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card className="space-y-5">
              <p className="type-card-title text-[hsl(var(--foreground))]">Controls</p>
              <Cluster gap="sm">
                <Button size="md">Primary action</Button>
                <Button variant="secondary" size="md">
                  Secondary action
                </Button>
                <Button variant="ghost" size="md">
                  Ghost action
                </Button>
                <IconButton label="Open preview" size="md" variant="secondary">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M6 14L14 6M14 6H8M14 6V12"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <VisuallyHidden>Open preview</VisuallyHidden>
                </IconButton>
              </Cluster>
              <Cluster gap="sm">
                <AppLink href="#tokens">Semantic link</AppLink>
                <AppLink href="#preview-note" tone="muted">
                  Muted link
                </AppLink>
              </Cluster>
              <Cluster gap="sm">
                <Badge tone="accent">Accent badge</Badge>
                <Badge tone="success">Success</Badge>
                <Badge tone="warning">Warning</Badge>
                <Badge tone="error">Error</Badge>
                <Tag>Neutral tag</Tag>
                <Tag tone="subtle">Subtle tag</Tag>
              </Cluster>
            </Card>

            <Card className="space-y-5">
              <p className="type-card-title text-[hsl(var(--foreground))]">Surface levels</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card surface="default" padding="sm">
                  <Stack gap="xs">
                    <p className="type-label text-[hsl(var(--accent))]">Default</p>
                    <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                      Primary card surface.
                    </p>
                  </Stack>
                </Card>
                <Card surface="muted" padding="sm">
                  <Stack gap="xs">
                    <p className="type-label text-[hsl(var(--accent))]">Muted</p>
                    <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                      Secondary supporting surface.
                    </p>
                  </Stack>
                </Card>
                <Card surface="elevated" padding="sm">
                  <Stack gap="xs">
                    <p className="type-label text-[hsl(var(--accent))]">Elevated</p>
                    <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                      Highest emphasis in the preview.
                    </p>
                  </Stack>
                </Card>
                <div className="rounded-[var(--radius-lg)] border border-dashed border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-muted))] p-4">
                  <p className="type-caption text-[hsl(var(--foreground-muted))]">
                    Borders, not shadows, do most of the separation work.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Section>
          <SectionHeader
            eyebrow="Layout"
            title="Containers and rhythm"
            description="Controlled widths and page padding keep the preview readable from mobile to wide desktop."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <MetricCard
              title="Page container"
              value="72rem"
              note="Default readable content width."
            />
            <MetricCard
              title="Wide container"
              value="84rem"
              note="Used where media or grids need breathing room."
            />
            <MetricCard
              title="Prose width"
              value="42rem"
              note="Long-form text stays comfortably narrow."
            />
          </div>
        </Section>

        <Section>
          <Card id="preview-note" className="space-y-3">
            <p className="type-label text-[hsl(var(--accent))]">Design system note</p>
            <p className="type-body text-[hsl(var(--foreground-secondary))]">
              This preview is a temporary validation surface for Phase 2. It is not the final
              homepage and will be replaced in later phases.
            </p>
          </Card>
        </Section>
      </PageContainer>
    </main>
  );
}
