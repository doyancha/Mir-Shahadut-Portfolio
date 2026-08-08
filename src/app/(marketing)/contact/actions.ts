"use server";

import { Resend } from "resend";

import { contactFormErrorMessage, contactFormValidationMessage } from "@/content/contact";

import {
  hasFieldErrors,
  parseContactFormData,
  validateContactForm,
  type ContactFormState,
} from "@/lib/contact-form";

function getConfiguredEnvValue(
  name: "RESEND_API_KEY" | "CONTACT_FROM_EMAIL" | "CONTACT_TO_EMAIL"
): string {
  return process.env[name]?.trim() ?? "";
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const values = parseContactFormData(formData);

  if (values.honeypot) {
    return {
      status: "success",
      message: "Your message has been sent. I will respond by email.",
      fieldErrors: {},
    };
  }

  const fieldErrors = validateContactForm(values);

  if (hasFieldErrors(fieldErrors)) {
    return {
      status: "error",
      message: contactFormValidationMessage,
      fieldErrors,
    };
  }

  const resendApiKey = getConfiguredEnvValue("RESEND_API_KEY");
  const fromEmail = getConfiguredEnvValue("CONTACT_FROM_EMAIL");
  const toEmail = getConfiguredEnvValue("CONTACT_TO_EMAIL");

  if (!resendApiKey || !fromEmail || !toEmail) {
    return {
      status: "error",
      message: contactFormErrorMessage,
      fieldErrors: {},
    };
  }

  try {
    const resend = new Resend(resendApiKey);
    const subjectLine = values.subject
      ? `Portfolio contact: ${values.subject}`
      : `Portfolio contact from ${values.name}`;

    const textBody = [
      "New portfolio contact form submission",
      "",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Inquiry type / Subject: ${values.subject || "Not provided"}`,
      "",
      "Message:",
      values.message,
      "",
    ].join("\n");

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: values.email,
      subject: subjectLine,
      text: textBody,
    });

    if (result.error) {
      return {
        status: "error",
        message: contactFormErrorMessage,
        fieldErrors: {},
      };
    }

    return {
      status: "success",
      message: "Your message has been sent. I will respond by email.",
      fieldErrors: {},
    };
  } catch {
    return {
      status: "error",
      message: contactFormErrorMessage,
      fieldErrors: {},
    };
  }
}
