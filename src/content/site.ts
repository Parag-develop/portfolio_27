import { siteSchema, type SiteConfig } from "@/lib/profile-schema";

const siteData = {
  title: "Parag Palkar — Frontend Engineer",
  description:
    "Portfolio and CV of Parag Palkar — frontend engineer building accessible, performant web UIs with React, Vue, TypeScript, and Next.js.",
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
