import { describe, expect, it } from "vitest";

import {
  contactFieldOrder,
  contactFormLimits,
  contactHoneypotFieldName,
  hasFieldErrors,
  parseContactFormData,
  validateContactForm,
} from "@/lib/contact-form";

function createFormData(entries: Record<string, string>): FormData {
  const formData = new FormData();

  for (const [key, value] of Object.entries(entries)) {
    formData.set(key, value);
  }

  return formData;
}

describe("contact form validation", () => {
  it("parses trimmed valid input", () => {
    const values = parseContactFormData(
      createFormData({
        name: "  Mir Shahadut Hossain  ",
        email: "  mir@example.com  ",
        subject: "  Freelance inquiry  ",
        message: "  I would like to discuss a project opportunity.  ",
        [contactHoneypotFieldName]: "",
      })
    );

    expect(values).toEqual({
      name: "Mir Shahadut Hossain",
      email: "mir@example.com",
      subject: "Freelance inquiry",
      message: "I would like to discuss a project opportunity.",
      honeypot: "",
    });
    expect(hasFieldErrors(validateContactForm(values))).toBe(false);
  });

  it("rejects whitespace-only name", () => {
    const values = parseContactFormData(
      createFormData({
        name: "   ",
        email: "mir@example.com",
        subject: "",
        message: "This message is long enough to pass the minimum length check.",
        [contactHoneypotFieldName]: "",
      })
    );

    const errors = validateContactForm(values);

    expect(errors.name).toBe("Please enter your name.");
    expect(hasFieldErrors(errors)).toBe(true);
  });

  it("rejects invalid email and too-short message", () => {
    const values = parseContactFormData(
      createFormData({
        name: "Mir Shahadut Hossain",
        email: "not-an-email",
        subject: "Project discussion",
        message: "Short message.",
        [contactHoneypotFieldName]: "",
      })
    );

    const errors = validateContactForm(values);

    expect(errors.email).toBe("Please enter a valid email address.");
    expect(errors.message).toBe(
      `Message must be between ${contactFormLimits.messageMinLength} and ${contactFormLimits.messageMaxLength} characters.`
    );
  });

  it("accepts approved maximum boundaries", () => {
    const values = parseContactFormData(
      createFormData({
        name: "A".repeat(contactFormLimits.nameMaxLength),
        email: "mir@example.com",
        subject: "B".repeat(contactFormLimits.subjectMaxLength),
        message: "C".repeat(contactFormLimits.messageMaxLength),
        [contactHoneypotFieldName]: "",
      })
    );

    const errors = validateContactForm(values);

    expect(values.name).toHaveLength(contactFormLimits.nameMaxLength);
    expect(values.subject).toHaveLength(contactFormLimits.subjectMaxLength);
    expect(values.message).toHaveLength(contactFormLimits.messageMaxLength);
    expect(errors).toEqual({});
    expect(contactFieldOrder).toEqual(["name", "email", "subject", "message"]);
  });
});
