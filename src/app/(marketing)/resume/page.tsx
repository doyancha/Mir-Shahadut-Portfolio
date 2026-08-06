import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/page-container";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/resume",
  title: "Resume",
  description: "The full Resume page will be implemented in a later phase.",
});

export default function ResumePage() {
  return (
    <Section>
      <PageContainer size="prose">
        <Stack gap="md">
          <p className="type-label text-[hsl(var(--accent))]">Resume</p>
          <h1 className="type-page-title text-[hsl(var(--foreground))]">Resume</h1>
          <Prose className="p-0">
            <p>The full Resume page will be implemented in a later phase.</p>
          </Prose>
        </Stack>
      </PageContainer>
    </Section>
  );
}
