import type { Nullable } from "@/types/shared";

export interface ExperienceEntry {
  organization: string;
  role: string;
  startDate: Nullable<string>;
  endDate: Nullable<string>;
  responsibilities: string[];
}

export interface EducationEntry {
  institution: string;
  credential: string;
  startDate: Nullable<string>;
  endDate: Nullable<string>;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  issuedDate: Nullable<string>;
}
