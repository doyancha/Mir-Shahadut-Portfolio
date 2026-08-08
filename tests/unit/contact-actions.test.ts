import { beforeEach, describe, expect, it, vi } from "vitest";

import { contactFormErrorMessage } from "@/content/contact";
import { initialContactFormState } from "@/lib/contact-form";
import { withTestEnvironment } from "./test-env";

const { sendMock, resendCtorMock, ResendMock } = vi.hoisted(() => {
  const sendMock = vi.fn();
  const resendCtorMock = vi.fn();

  class ResendMock {
    emails = {
      send: sendMock,
    };

    constructor(apiKey: string) {
      resendCtorMock(apiKey);
    }
  }

  return { sendMock, resendCtorMock, ResendMock };
});

vi.mock("resend", () => ({
  Resend: ResendMock,
}));

function buildFormData(entries: Record<string, string>): FormData {
  const formData = new FormData();

  for (const [key, value] of Object.entries(entries)) {
    formData.set(key, value);
  }

  return formData;
}

beforeEach(() => {
  sendMock.mockReset();
  resendCtorMock.mockClear();
});

describe("submitContactForm", () => {
  it("sends one email with approved envelope values", async () => {
    sendMock.mockResolvedValue({ data: { id: "msg_123" }, error: null });

    await withTestEnvironment(
      {
        NODE_ENV: "production",
        RESEND_API_KEY: "resend_test_key",
        CONTACT_FROM_EMAIL: "Mir Shahadut Portfolio <onboarding@resend.dev>",
        CONTACT_TO_EMAIL: "sujon6901@gmail.com",
      },
      async () => {
        const { submitContactForm } = await import("@/app/(marketing)/contact/actions");

        const result = await submitContactForm(
          initialContactFormState,
          buildFormData({
            name: "Mir Shahadut Hossain",
            email: "visitor@example.com",
            subject: "Freelance inquiry",
            message: "I would like to discuss a project opportunity.",
            companyWebsite: "",
          })
        );

        expect(result.status).toBe("success");
        expect(resendCtorMock).toHaveBeenCalledTimes(1);
        expect(resendCtorMock).toHaveBeenCalledWith("resend_test_key");
        expect(sendMock).toHaveBeenCalledTimes(1);

        const payload = sendMock.mock.calls[0]?.[0];

        expect(payload).toMatchObject({
          from: "Mir Shahadut Portfolio <onboarding@resend.dev>",
          to: ["sujon6901@gmail.com"],
          replyTo: "visitor@example.com",
          subject: "Portfolio contact: Freelance inquiry",
        });
        expect(payload.text).toContain("Mir Shahadut Hossain");
        expect(payload.text).toContain("I would like to discuss a project opportunity.");
        expect(payload.text).not.toContain("resend_test_key");
      }
    );
  });

  it("does not call Resend when validation fails", async () => {
    await withTestEnvironment(
      {
        NODE_ENV: "production",
        RESEND_API_KEY: "resend_test_key",
        CONTACT_FROM_EMAIL: "Mir Shahadut Portfolio <onboarding@resend.dev>",
        CONTACT_TO_EMAIL: "sujon6901@gmail.com",
      },
      async () => {
        const { submitContactForm } = await import("@/app/(marketing)/contact/actions");

        const result = await submitContactForm(
          initialContactFormState,
          buildFormData({
            name: "Mir Shahadut Hossain",
            email: "not-an-email",
            subject: "",
            message: "I would like to discuss a project opportunity.",
            companyWebsite: "",
          })
        );

        expect(result.status).toBe("error");
        expect(resendCtorMock).not.toHaveBeenCalled();
        expect(sendMock).not.toHaveBeenCalled();
      }
    );
  });

  it("treats honeypot submissions as safe no-op success responses", async () => {
    await withTestEnvironment(
      {
        NODE_ENV: "production",
        RESEND_API_KEY: "resend_test_key",
        CONTACT_FROM_EMAIL: "Mir Shahadut Portfolio <onboarding@resend.dev>",
        CONTACT_TO_EMAIL: "sujon6901@gmail.com",
      },
      async () => {
        const { submitContactForm } = await import("@/app/(marketing)/contact/actions");

        const result = await submitContactForm(
          initialContactFormState,
          buildFormData({
            name: "Mir Shahadut Hossain",
            email: "visitor@example.com",
            subject: "Project discussion",
            message: "I would like to discuss a project opportunity.",
            companyWebsite: "https://spam.example",
          })
        );

        expect(result.status).toBe("success");
        expect(resendCtorMock).not.toHaveBeenCalled();
        expect(sendMock).not.toHaveBeenCalled();
      }
    );
  });

  it("returns a generic error when environment configuration is missing", async () => {
    await withTestEnvironment(
      {
        NODE_ENV: "production",
        RESEND_API_KEY: undefined,
        CONTACT_FROM_EMAIL: undefined,
        CONTACT_TO_EMAIL: undefined,
      },
      async () => {
        const { submitContactForm } = await import("@/app/(marketing)/contact/actions");

        const result = await submitContactForm(
          initialContactFormState,
          buildFormData({
            name: "Mir Shahadut Hossain",
            email: "visitor@example.com",
            subject: "Project discussion",
            message: "I would like to discuss a project opportunity.",
            companyWebsite: "",
          })
        );

        expect(result).toEqual({
          status: "error",
          message: contactFormErrorMessage,
          fieldErrors: {},
        });
        expect(resendCtorMock).not.toHaveBeenCalled();
        expect(sendMock).not.toHaveBeenCalled();
      }
    );
  });

  it("returns a generic failure response when the provider rejects the request", async () => {
    sendMock.mockResolvedValue({ error: { message: "provider failed" }, data: null });

    await withTestEnvironment(
      {
        NODE_ENV: "production",
        RESEND_API_KEY: "resend_test_key",
        CONTACT_FROM_EMAIL: "Mir Shahadut Portfolio <onboarding@resend.dev>",
        CONTACT_TO_EMAIL: "sujon6901@gmail.com",
      },
      async () => {
        const { submitContactForm } = await import("@/app/(marketing)/contact/actions");

        const result = await submitContactForm(
          initialContactFormState,
          buildFormData({
            name: "Mir Shahadut Hossain",
            email: "visitor@example.com",
            subject: "Project discussion",
            message: "I would like to discuss a project opportunity.",
            companyWebsite: "",
          })
        );

        expect(result).toEqual({
          status: "error",
          message: contactFormErrorMessage,
          fieldErrors: {},
        });
        expect(sendMock).toHaveBeenCalledTimes(1);
      }
    );
  });
});
