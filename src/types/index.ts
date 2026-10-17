export interface PersonalInfo {
  name: string;
  shortBio: string;
  headline: string;
  supportingIntro: string;
  tagline: string;
  statusIndicator: string;
  signatureQuote: string;
  education: string;
  institution: string;
  location: string;
  period: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeAvailable: boolean;
  resumeFileName?: string;
  profileImage?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: "Core" | "Proficient" | "Basic" | "Practicing";
  category: "programming" | "cs" | "frontend" | "backend" | "databases" | "tools";
  description: string;
  connectedTo?: string[];
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  description: string;
  technologies: string[];
  features: string[];
  developerContribution: string[];
  githubUrl: string;
  hasLiveDemo: boolean;
  demoUrl?: string;
  simulationType: "bank-simulator" | "govassist-ai";
  stats?: { label: string; value: string }[];
}

export interface MilestoneItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "foundations" | "algorithms" | "development" | "projects" | "future";
  highlights: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  score?: string;
  type: "degree" | "intermediate" | "matriculation";
  details?: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  topics: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  verified: boolean;
  credentialUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  type: string;
  description: string;
}
