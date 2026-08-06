import type { Metadata } from "next";

import { PageContainer } from "@/components/layout/page-container";
import { Prose } from "@/components/layout/prose";
import { Section } from "@/components/layout/section";
import { Stack } from "@/components/layout/stack";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  path: "/contact",
  title: "Contact",
  description: "The full Contact page will be implemented in a later phase.",
});

export default function ContactPage() {
  return (
    <Section>
      <PageContainer size="prose">
        <Stack gap="md">
          <p className="type-label text-[hsl(var(--accent))]">Contact</p>
          <h1 className="type-page-title text-[hsl(var(--foreground))]">Contact</h1>
          <Prose className="p-0">
            <p>The full Contact page will be implemented in a later phase.</p>
          </Prose>
        </Stack>
      </PageContainer>
    </Section>
  );
}
