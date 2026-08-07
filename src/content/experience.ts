import { personalProfile } from "@/content/personal";

export type ExperienceRoleEntry = {
  organization: string;
  role: string;
  employmentType: string;
  workArrangement: string;
  startDate: string;
  endDate: string;
};

export type EducationRecord = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  gpa: string;
};

export const experiencePageEyebrow = "EXPERIENCE";
export const experiencePageHeading = "Experience";
export const experiencePageDescription =
  "An overview of my professional experience, technical background, and computer science education.";

export const experienceHeroIntroduction =
  "A concise overview of my professional experience, technical background, and computer science education.";

export const experienceHeroFacts = [
  {
    label: "Professional title",
    value: personalProfile.professionalTitle ?? "Full Stack Web Developer",
  },
  {
    label: "Location",
    value: personalProfile.location ?? "Dhaka, Bangladesh",
  },
  {
    label: "Profile focus",
    value: "Structured career and education record",
  },
] as const;

export const experienceOverviewHeading = "Professional overview";
export const experienceOverviewDescription =
  "My background brings together system and web development, project management experience, computer science study, and hands-on portfolio work across modern web applications.";

export const experienceEntries: ExperienceRoleEntry[] = [
  {
    organization: "Great Printing UK",
    role: "System Developer / Web Developer",
    employmentType: "Full-time",
    workArrangement: "Remote",
    startDate: "June 2025",
    endDate: "April 2026",
  },
  {
    organization: "Logic IT Solution",
    role: "Project Manager",
    employmentType: "Full-time",
    workArrangement: "Onsite",
    startDate: "January 2020",
    endDate: "April 2021",
  },
];

export const educationHeading = "Education";
export const educationDescription =
  "My academic background in Computer Science and Engineering supports the technical foundation behind my current development work.";

export const educationRecord: EducationRecord = {
  institution: "Daffodil International University",
  degree: "Bachelor of Science (B.Sc.)",
  fieldOfStudy: "Computer Science and Engineering",
  gpa: "CGPA: 3.00/4.00",
};

export const supportingContextHeading = "Supporting professional context";
export const supportingContextDescription =
  "This background combines study, planning-oriented work, and applied development experience.";

export const experienceCtas = {
  primary: {
    label: "View Projects",
    href: "/projects",
  },
  secondary: {
    label: "View Resume",
    href: "/resume",
  },
} as const;
