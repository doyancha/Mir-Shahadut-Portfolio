import type { Nullable } from "@/types/shared";

export interface PersonalProfile {
  displayName: string;
  projectName: string;
  professionalTitle: Nullable<string>;
  shortIntroduction: Nullable<string>;
  fullAbout: Nullable<string>;
  location: Nullable<string>;
  email: Nullable<string>;
  availability: Nullable<string>;
  resumeUrl: Nullable<string>;
  profilePhotoUrl: Nullable<string>;
}
