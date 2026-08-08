import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactMethods } from "@/components/contact/contact-methods";
import { PageContainer } from "@/components/layout/page-container";
import { Section } from "@/components/layout/section";
import { createMetadata } from "@/lib/metadata";

import { submitContactForm } from "./actions";

export const metadata: Metadata = createMetadata({
  path: "/contact",
  title: "Contact",
  description:
    "Contact Mir Shahadut Hossain about freelance work, job opportunities, or project discussions.",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section className="pt-10 pb-16 md:pt-12 md:pb-20">
        <PageContainer size="wide">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <ContactMethods />
            <ContactForm action={submitContactForm} />
          </div>
        </PageContainer>
      </Section>
    </>
  );
}
