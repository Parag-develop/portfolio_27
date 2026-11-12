import { siteSchema, type SiteConfig } from "@/lib/profile-schema";

const siteData = {
  title: "Parag Palkar · Software Developer",
  description:
    "Software developer who ships accessible, performant web UI — React, Vue, TypeScript, Next.js. Mumbai · open to relocate.",
  yearLabel: "Portfolio 2026",
  sections: {
    about: true,
    experience: true,
    skills: true,
    projects: true,
    education: true,
    contact: true,
  },
} satisfies SiteConfig;

export const site = siteSchema.parse(siteData);
