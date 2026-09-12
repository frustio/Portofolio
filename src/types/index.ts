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
    twitter?: string;
    website?: string;
  };
  resumeUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'embedded' | 'electrical' | 'software' | 'iot' | 'fullstack';
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
  proficiency: number;
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
  type: 'full-time' | 'contract' | 'freelance' | 'internship';
  description: string;
  achievements: string[];
  techUsed: string[];
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
