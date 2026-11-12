import { z } from "zod";

export const linkSchema = z.object({
  label: z.string(),
  href: z.string().url(),
});

export const experienceSchema = z.object({
  company: z.string(),
  title: z.string(),
  location: z.string(),
  start: z.string(),
  end: z.string(),
  bullets: z.array(z.string()).min(1),
});

export const educationSchema = z.object({
  school: z.string(),
  degree: z.string(),
  period: z.string(),
  detail: z.string().optional(),
});

export const skillGroupSchema = z.object({
  group: z.string(),
  items: z.array(z.string()).min(1),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  href: z.string().url().optional(),
  tags: z.array(z.string()).optional(),
});

export const techStackItemSchema = z.object({
  name: z.string(),
  /** simple-icons slug, e.g. "react", "nextdotjs", "typescript" */
  slug: z.string(),
});

export const profileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  tagline: z.string(),
  summary: z.string(),
  location: z.string(),
  timezone: z.string(),
  availability: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  about: z.string(),
  techStack: z.array(techStackItemSchema).min(1),
  links: z.array(linkSchema),
  cvHref: z.string().optional(),
  experience: z.array(experienceSchema),
  skills: z.array(skillGroupSchema),
  projects: z.array(projectSchema),
  education: z.array(educationSchema),
});

export const siteSchema = z.object({
  title: z.string(),
  description: z.string(),
  yearLabel: z.string(),
  sections: z.object({
    about: z.boolean(),
    experience: z.boolean(),
    skills: z.boolean(),
    projects: z.boolean(),
    education: z.boolean(),
    contact: z.boolean(),
  }),
});

export type Profile = z.infer<typeof profileSchema>;
export type SiteConfig = z.infer<typeof siteSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Education = z.infer<typeof educationSchema>;
export type ProfileLink = z.infer<typeof linkSchema>;
export type TechStackItem = z.infer<typeof techStackItemSchema>;
