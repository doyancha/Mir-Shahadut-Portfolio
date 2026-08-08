"use client";

import { useActionState, useEffect, useId, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Stack } from "@/components/layout/stack";
import {
  contactFormDescription,
  contactFormErrorMessage,
  contactFormPendingLabel,
  contactFormSubmitLabel,
  contactFormSuccessMessage,
  contactFormValidationMessage,
} from "@/content/contact";
import {
  contactFieldOrder,
  contactHoneypotFieldName,
  initialContactFormState,
  type ContactFormState,
} from "@/lib/contact-form";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  action: (_previousState: ContactFormState, formData: FormData) => Promise<ContactFormState>;
};

const fieldLabels = {
  name: "Name",
  email: "Email",
  subject: "Inquiry type / Subject",
  message: "Message",
} as const;

function StatusMessage({ state }: { state: ContactFormState }) {
  if (state.status === "idle") {
    return null;
  }

  const isSuccess = state.status === "success";
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] border px-4 py-3 text-sm leading-6",
        isSuccess
          ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent) / 0.08)] text-[hsl(var(--foreground))]"
          : "border-[hsl(var(--border-strong))] bg-[hsl(var(--surface-muted))] text-[hsl(var(--foreground))]"
      )}
      role={isSuccess ? "status" : "alert"}
      aria-live={isSuccess ? "polite" : "assertive"}
      tabIndex={-1}
    >
      {state.message || (isSuccess ? contactFormSuccessMessage : contactFormErrorMessage)}
    </div>
  );
}

export function ContactForm({ action }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(action, initialContactFormState);
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const subjectRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);
  const formId = useId();

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      statusRef.current?.focus();
      return;
    }

    if (state.status !== "error") {
      return;
    }

    const firstFieldWithError = contactFieldOrder.find((field) => state.fieldErrors[field]);

    if (firstFieldWithError === "name") {
      nameRef.current?.focus();
      return;
    }

    if (firstFieldWithError === "email") {
      emailRef.current?.focus();
      return;
    }

    if (firstFieldWithError === "subject") {
      subjectRef.current?.focus();
      return;
    }

    if (firstFieldWithError === "message") {
      messageRef.current?.focus();
      return;
    }

    statusRef.current?.focus();
  }, [state.fieldErrors, state.status]);

  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const subjectErrorId = `${formId}-subject-error`;
  const messageErrorId = `${formId}-message-error`;

  const nameDescribedBy = state.fieldErrors.name ? nameErrorId : undefined;
  const emailDescribedBy = state.fieldErrors.email ? emailErrorId : undefined;
  const subjectDescribedBy = state.fieldErrors.subject ? subjectErrorId : undefined;
  const messageDescribedBy = state.fieldErrors.message ? messageErrorId : undefined;

  return (
    <Card surface="muted" className="min-w-0 p-5 md:p-6 lg:p-7">
      <form
        ref={formRef}
        action={formAction}
        className="space-y-6"
        aria-busy={isPending}
        noValidate
      >
        <Stack gap="sm">
          <p className="type-label text-[hsl(var(--accent))]">Message</p>
          <h2 className="type-card-title text-[hsl(var(--foreground))]">Send a brief message</h2>
          <p className="type-body-small text-[hsl(var(--foreground-secondary))]">
            {contactFormDescription}
          </p>
        </Stack>

        <div ref={statusRef} tabIndex={-1}>
          <StatusMessage state={state} />
        </div>

        {state.status === "error" && !state.fieldErrors.form ? (
          <p className="sr-only">{contactFormValidationMessage}</p>
        ) : null}

        <VisuallyHidden>
          <label htmlFor={`${formId}-${contactHoneypotFieldName}`}>Company website</label>
        </VisuallyHidden>
        <input
          id={`${formId}-${contactHoneypotFieldName}`}
          name={contactHoneypotFieldName}
          type="text"
          autoComplete="off"
          tabIndex={-1}
          className="hidden"
        />

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor={`${formId}-name`}
                className="type-caption uppercase tracking-[0.14em] text-[hsl(var(--foreground-muted))]"
              >
                {fieldLabels.name}
              </label>
              <Input
                ref={nameRef}
                id={`${formId}-name`}
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={80}
                aria-invalid={Boolean(state.fieldErrors.name)}
                aria-describedby={nameDescribedBy}
              />
              {state.fieldErrors.name ? (
                <p
                  id={nameErrorId}
                  className="type-body-small text-[hsl(var(--error))]"
                  role="alert"
                >
                  {state.fieldErrors.name}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor={`${formId}-email`}
                className="type-caption uppercase tracking-[0.14em] text-[hsl(var(--foreground-muted))]"
              >
                {fieldLabels.email}
              </label>
              <Input
                ref={emailRef}
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={120}
                aria-invalid={Boolean(state.fieldErrors.email)}
                aria-describedby={emailDescribedBy}
              />
              {state.fieldErrors.email ? (
                <p
                  id={emailErrorId}
                  className="type-body-small text-[hsl(var(--error))]"
                  role="alert"
                >
                  {state.fieldErrors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor={`${formId}-subject`}
              className="type-caption uppercase tracking-[0.14em] text-[hsl(var(--foreground-muted))]"
            >
              {fieldLabels.subject}
            </label>
            <Input
              ref={subjectRef}
              id={`${formId}-subject`}
              name="subject"
              autoComplete="off"
              maxLength={120}
              aria-invalid={Boolean(state.fieldErrors.subject)}
              aria-describedby={subjectDescribedBy}
            />
            {state.fieldErrors.subject ? (
              <p
                id={subjectErrorId}
                className="type-body-small text-[hsl(var(--error))]"
                role="alert"
              >
                {state.fieldErrors.subject}
              </p>
            ) : (
              <p className="type-body-small text-[hsl(var(--foreground-muted))]">
                Optional. Use this to indicate freelance, hiring, or project discussion.
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor={`${formId}-message`}
              className="type-caption uppercase tracking-[0.14em] text-[hsl(var(--foreground-muted))]"
            >
              {fieldLabels.message}
            </label>
            <Textarea
              ref={messageRef}
              id={`${formId}-message`}
              name="message"
              required
              minLength={20}
              maxLength={4000}
              aria-invalid={Boolean(state.fieldErrors.message)}
              aria-describedby={messageDescribedBy}
            />
            {state.fieldErrors.message ? (
              <p
                id={messageErrorId}
                className="type-body-small text-[hsl(var(--error))]"
                role="alert"
              >
                {state.fieldErrors.message}
              </p>
            ) : (
              <p className="type-body-small text-[hsl(var(--foreground-muted))]">
                Keep it brief, factual, and focused on the work or opportunity.
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-body-small max-w-[34rem] text-[hsl(var(--foreground-muted))]">
            Direct email remains visible above if you prefer to send the first message that way.
          </p>
          <Button
            type="submit"
            size="lg"
            className="w-full sm:w-auto"
            disabled={isPending}
            formNoValidate
          >
            {isPending ? contactFormPendingLabel : contactFormSubmitLabel}
          </Button>
        </div>
      </form>
    </Card>
  );
}
