export interface PersonalInfo {
  name: string;
  title: string;
  subtitles: string[];
  bio: string;
  status: 'available' | 'busy' | 'open-to-offers';
  location: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
    /** Full click-to-chat URL, e.g. https://wa.me/628xxxxxxxxxx */
    whatsapp?: string;
    twitter?: string;
    website?: string;
  };
  /** Path to a downloadable CV inside /public, e.g. /CV_Name.pdf */
  resumeUrl?: string;
}

export type ProjectCategory =
  | 'uav'
  | 'embedded'
  | 'control'
  | 'robotics'
  | 'electrical'
  | 'iot'
  | 'software'
  | 'fullstack';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  challenge: string;
  solution: string;
  impact?: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
}

export interface Skill {
  name: string;
  /** Optional 1–100 value. When omitted the skill is rendered as a tag instead of a bar. */
  proficiency?: number;
}

export interface SkillGroup {
  category: string;
  icon: string;
  items: Skill[];
}

export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  /** Optional — omitted when the employment type is not stated. */
  type?: 'full-time' | 'contract' | 'freelance' | 'internship' | 'organization';
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface Award {
  id: string;
  rank: string;
  event: string;
  category: string;
  theme?: string;
  location: string;
  date: string;
  credentialUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
  thesis?: string;
  activities: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Metric {
  label: string;
  value: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
