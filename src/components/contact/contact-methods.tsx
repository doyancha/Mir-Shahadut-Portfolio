import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { AppLink } from "@/components/ui/link";
import { Stack } from "@/components/layout/stack";
import {
  contactMethodsDescription,
  contactMethodsHeading,
  contactMethodEntries,
  contactSecondaryProfileEntries,
  contactSecondaryProfilesHeading,
  contactDirectEmail,
} from "@/content/contact";

type ContactMethodsProps = {
  className?: string;
};

export function ContactMethods({ className }: ContactMethodsProps) {
  return (
    <Card surface="muted" className={className ?? "p-5 md:p-6 lg:p-7"}>
      <Stack gap="lg">
        <div className="space-y-1.5">
          <p className="type-label text-[hsl(var(--accent))]">{contactMethodsHeading}</p>
          <h2 className="type-card-title text-[hsl(var(--foreground))]">Direct contact</h2>
          <p className="type-body-small max-w-[42rem] text-[hsl(var(--foreground-secondary))]">
            {contactMethodsDescription}
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <p className="type-caption uppercase tracking-[0.14em] text-[hsl(var(--foreground-muted))]">
              Email fallback
            </p>
            <LinkButton
              href={`mailto:${contactDirectEmail}`}
              variant="secondary"
              className="w-full whitespace-normal break-words text-center leading-6"
            >
              {contactDirectEmail}
            </LinkButton>
          </div>

          <div className="space-y-3">
            <p className="type-caption uppercase tracking-[0.14em] text-[hsl(var(--foreground-muted))]">
              Verified profiles
            </p>
            <ul className="grid gap-3">
              {contactMethodEntries.map((entry) => (
                <li key={entry.label}>
                  <div className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="space-y-1">
                        <p className="type-card-title text-[hsl(var(--foreground))]">
                          {entry.label}
                        </p>
                        <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                          {entry.note}
                        </p>
                      </div>
                      {entry.href ? (
                        <AppLink
                          href={entry.href}
                          external
                          className="break-all text-sm sm:text-right"
                        >
                          {entry.value}
                        </AppLink>
                      ) : (
                        <span className="text-sm text-[hsl(var(--foreground-muted))]">
                          {entry.value}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="type-caption uppercase tracking-[0.14em] text-[hsl(var(--foreground-muted))]">
              {contactSecondaryProfilesHeading}
            </p>
            <ul className="grid gap-3">
              {contactSecondaryProfileEntries.map((entry) => (
                <li key={entry.label}>
                  <div className="rounded-[var(--radius-md)] border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="space-y-1">
                        <p className="type-card-title text-[hsl(var(--foreground))]">
                          {entry.label}
                        </p>
                        <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
                          {entry.note}
                        </p>
                      </div>
                      {entry.href ? (
                        <AppLink
                          href={entry.href}
                          external
                          className="break-all text-sm sm:text-right"
                        >
                          {entry.value}
                        </AppLink>
                      ) : (
                        <span className="text-sm text-[hsl(var(--foreground-muted))]">
                          {entry.value}
                        </span>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Stack>
    </Card>
  );
}
