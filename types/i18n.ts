export type Locale = "es" | "ca" | "en";

export interface NavTranslations {
  about: string;
  experience: string;
  work: string;
  skills: string;
  contact: string;
  letsTalk: string;
}

export interface HeroTranslations {
  availableBadge: string;
  location: string;
  role: string;
  bio: {
    greeting: string;
    passionate: string;
    experience: string;
    description: string;
  };
  viewWork: string;
  downloadCv: string;
  sideCard: {
    tagline: string;
    description: string;
  };
  stats: {
    yearsOfExperience: string;
    projectsEndToEnd: string;
    developmentTeam: string;
    leadValue: string;
    coffeesConsumed: string;
  };
}

export interface ExperienceRole {
  title: string;
  period: string;
  badge: string;
  badgeColor: string;
  type: string;
  bullets?: string[];
  description?: string;
  technologies: string[];
}

export interface ExperienceTranslations {
  title: string;
  subtitle: string;
  intro: string;
  companyName: string;
  companyLocation: string;
  companyPeriod: string;
  roles: ExperienceRole[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageCover?: boolean;
  badges: string[];
  badgeColor: string;
  technologies: string[];
  liveUrl: string | null;
  ctaText?: string;
}

export interface ProjectsTranslations {
  sectionTag: string;
  title: string;
  projects: ProjectItem[];
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    badgeClass: string;
  }[];
}

export interface SkillsTranslations {
  sectionTag: string;
  title: string;
  categories: {
    frontend: string;
    backend: string;
    tools: string;
  };
}

export interface ContactTranslations {
  badge: string;
  title: string;
  description: string;
  copyEmail: string;
  emailCopied: string;
  directEmail: string;
  resumePdf: string;
  location: string;
  footerRights: string;
  footerCrafted: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  experience: ExperienceTranslations;
  projects: ProjectsTranslations;
  skills: SkillsTranslations;
  contact: ContactTranslations;
}
