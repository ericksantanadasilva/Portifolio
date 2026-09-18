export type Locale = "pt" | "en";

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email" | "twitter" | "discord" | "instagram" | "youtube" | "twitch";
  label: string;
  url: string;
  username?: string;
}

export interface StatusWidget {
  enabled: boolean;
  type: "spotify" | "status" | "working_on";
  text: LocalizedString;
  subtext?: LocalizedString;
  link?: string;
  isLive?: boolean;
}

export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "tools";
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: LocalizedString;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: LocalizedString;
  company: string;
  companyUrl?: string;
  period: LocalizedString;
  location?: LocalizedString;
  description: LocalizedString;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    alias?: string;
    tagline: LocalizedString;
    terminalRole: string;
    bio: LocalizedString;
    location: LocalizedString;
    avatarUrl: string;
    availableForHire: boolean;
    nameAnimationMode?: "typewriter" | "scramble";
  };
  statusWidget: StatusWidget;
  socials: SocialLink[];
  techStack: TechItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  contact: {
    email: string;
    telegram?: string;
    discord?: string;
    calendlyUrl?: string;
  };
}
