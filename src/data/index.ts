import resume from "./resume.json";

export type Role = {
  image: string;
  company: string;
  title: string;
  domain: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  techs: string[];
};

export type Education = {
  image: string;
  school: string;
  title: string;
  location: string;
  period: string;
  detail: string;
};

export type Project = {
  name: string;
  description: string;
  url: string;
  techs: string[];
};

export type Fact = { label: string; value: string; status?: boolean };
export type SocialLink = { id: string; label: string; href: string };
export type SkillGroup = { label: string; skills: string[] };

/**
 * One source of truth for both designs — edit resume.json, and the current
 * site and /v1 both pick the change up.
 */
export const PROFILE = resume.profile;
export const FACTS: Fact[] = resume.facts;
export const LINKS: SocialLink[] = resume.links;
export const SKILLS: SkillGroup[] = resume.skills;
export const EXPERIENCE: Role[] = resume.experience;
export const EDUCATION: Education[] = resume.education;
export const PROJECTS: Project[] = resume.projects;
export const WRITING_TOPICS: string[] = resume.writingTopics;

/** Link hosts without the protocol — for print, where a URL must be readable. */
export const LINK_HOSTS = LINKS.map((link) =>
  link.href.replace(/^https?:\/\/(www\.)?/, "")
);
