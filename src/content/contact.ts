import { personalProfile } from "@/content/personal";
import { socialLinks } from "@/content/social-links";

const socialLinkMap = new Map(socialLinks.map((link) => [link.label, link.href] as const));

function getSocialLink(label: string): string | null {
  return socialLinkMap.get(label) ?? null;
}

export const contactPageEyebrow = "CONTACT";
export const contactPageHeading = "Let's talk about your next project";
export const contactPageDescription =
  "Reach out about freelance work, job opportunities, project discussions, or general professional contact. Email is the quickest way to start, and the verified profiles below are available for a quick review.";

export const contactDirectEmail = personalProfile.email ?? "sujon6901@gmail.com";

export const contactHeroCtas = [
  {
    label: "View Resume",
    href: "/resume",
  },
  {
    label: "View Projects",
    href: "/projects",
  },
] as const;

export const contactMethodsHeading = "CONTACT METHODS";
export const contactMethodsDescription =
  "Email is the best first step. Public profiles are listed below for quick review and verification.";

export const contactMethodEntries = [
  {
    label: "Email",
    value: contactDirectEmail,
    href: `mailto:${contactDirectEmail}`,
    note: "Best for direct inquiries",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn profile",
    href: getSocialLink("LinkedIn"),
    note: "Professional profile",
  },
  {
    label: "GitHub",
    value: "GitHub profile",
    href: getSocialLink("GitHub"),
    note: "Project evidence and code history",
  },
  {
    label: "Upwork",
    value: "Upwork profile",
    href: getSocialLink("Upwork"),
    note: "Freelance profile",
  },
] as const;

export const contactSecondaryProfilesHeading = "Additional profile";
export const contactSecondaryProfileEntries = [
  {
    label: "Fiverr",
    value: "Fiverr profile",
    href: getSocialLink("Fiverr"),
    note: "Secondary profile",
  },
] as const;

export const contactFormEyebrow = "MESSAGE";
export const contactFormHeading = "Send a brief message";
export const contactFormDescription =
  "Tell me what you are building, the role you are hiring for, or the problem you want to discuss. I review each message through email.";
export const contactFormSubmitLabel = "Send message";
export const contactFormPendingLabel = "Sending...";
export const contactFormSuccessMessage = "Your message has been sent. I will respond by email.";
export const contactFormErrorMessage =
  "I couldn't send your message right now. Please try again or use the email link above.";
export const contactFormValidationMessage = "Please correct the highlighted fields.";
