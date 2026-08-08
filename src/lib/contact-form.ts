export const contactHoneypotFieldName = "companyWebsite";

export const contactFieldOrder = ["name", "email", "subject", "message"] as const;

export type ContactFieldName = (typeof contactFieldOrder)[number];

export type ContactFieldErrors = Partial<Record<ContactFieldName | "form", string>>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: ContactFieldErrors;
};

export type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
};

export const contactFormLimits = {
  nameMinLength: 2,
  nameMaxLength: 80,
  subjectMaxLength: 120,
  messageMinLength: 20,
  messageMaxLength: 4000,
} as const;

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

function normalizeValue(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function parseContactFormData(formData: FormData): ContactFormValues {
  return {
    name: normalizeValue(formData.get("name")),
    email: normalizeValue(formData.get("email")),
    subject: normalizeValue(formData.get("subject")),
    message: normalizeValue(formData.get("message")),
    honeypot: normalizeValue(formData.get(contactHoneypotFieldName)),
  };
}

export function validateContactForm(values: ContactFormValues): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};

  if (!values.name) {
    fieldErrors.name = "Please enter your name.";
  } else if (
    values.name.length < contactFormLimits.nameMinLength ||
    values.name.length > contactFormLimits.nameMaxLength
  ) {
    fieldErrors.name = `Name must be between ${contactFormLimits.nameMinLength} and ${contactFormLimits.nameMaxLength} characters.`;
  }

  if (!values.email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (!isValidEmail(values.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (values.subject.length > contactFormLimits.subjectMaxLength) {
    fieldErrors.subject = `Subject must be ${contactFormLimits.subjectMaxLength} characters or fewer.`;
  }

  if (!values.message) {
    fieldErrors.message = "Please enter a message.";
  } else if (
    values.message.length < contactFormLimits.messageMinLength ||
    values.message.length > contactFormLimits.messageMaxLength
  ) {
    fieldErrors.message = `Message must be between ${contactFormLimits.messageMinLength} and ${contactFormLimits.messageMaxLength} characters.`;
  }

  return fieldErrors;
}

export function hasFieldErrors(fieldErrors: ContactFieldErrors): boolean {
  return Object.keys(fieldErrors).length > 0;
}
