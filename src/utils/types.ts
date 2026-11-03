export interface User {
  id: number;
  email: string;
  username: string;
  nickname: string | null;
  createdAt: Date;
  flags: number;
}

export const enum UserFlags {
  OWNER = 1 << 0,
  EMAIL_UNVERIFIED = 1 << 1,
  EMAIL_VERIFICATION_FAILED = 1 << 2,
}

export interface IntroCareer {
  name: string;
  icon: React.ReactElement;
  position: string;
  startDate: string;
  endDate: string;
  links?: CareerLink[];
}

export interface CareerLink {
  url: string;
  icon?: React.ReactElement;
}

export interface IntroSkill {
  name: string;
  items: SkillData[];
  defaultIcon: React.ReactElement;
  forceTextColor?: "white" | "black";
}

export interface SkillData {
  name: string;
  color?: string;
  icon?: React.ReactElement;
}
