import { profileSchema, type Profile } from "@/lib/profile-schema";

const profileData = {
  name: "Parag Palkar",
  headline: "Frontend Engineer",
  summary:
    "React · Vue · TypeScript · Next.js — accessible, performant web UI",
  location: "Mumbai, India · Willing to relocate",
  email: "paragpalkar97@gmail.com",
  phone: "+91-7738054437",
  about:
    "Frontend engineer with 3+ years shipping production web apps. Owns feature delivery from Figma handoff through TypeScript implementation, Playwright coverage, deployment, and production support. Builds component-driven UIs in React, Vue, and Next.js. Partners with designers and backend on accessible interfaces using shared UI libraries and REST APIs across compliance, procurement, and logistics. Japanese learner (NAT Q4; studying for JLPT N2) with delivery across India and the GCC.",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/parag-palkar-453675193",
    },
    {
      label: "GitHub",
      href: "https://github.com/Parag-develop",
    },
  ],
  experience: [
    {
      company: "Softcell Technologies",
      title: "Software Developer (Frontend / Platform UI)",
      location: "Mumbai",
      start: "Jan 2026",
      end: "Present",
      bullets: [
        "Owned the DPDPA compliance platform frontend from scratch: Figma to production Next.js / React / TypeScript — consent collection, tracking, and audit interfaces for enterprise users.",
        "Built reusable, accessible UI patterns for compliance workflows (keyboard-friendly forms, audit-ready states) and integrated backend services via REST APIs.",
        "Added Playwright E2E coverage for critical consent and audit flows; owned debugging and production support with product and platform engineers.",
        "Contributed adjacent Golang service work when frontend ownership needed API-contract and integration context.",
      ],
    },
    {
      company: "Bayanat Technology",
      title: "Software Developer",
      location: "Mumbai (onsite) · GCC client delivery",
      start: "Jan 2025",
      end: "Dec 2025",
      bullets: [
        "Delivered procurement UI in React / TypeScript with Node.js REST APIs for Al Jasra (Qatar): purchase orders, requisitions, and multistep approval workflows.",
        "Built warehouse and logistics frontend for Al Madina Logistics (Oman) covering 2 surfaces — responsive desktop and touch-optimised PDA — with real-time stock sync and dispatch tracking.",
        "Owned feature slices end-to-end across 2 GCC client products; represented Bayanat onsite at COMEX Tech Event, Muscat with live demos.",
      ],
    },
    {
      company: "Moonphase Ltd",
      title: "Front-End Developer",
      location: "Mumbai",
      start: "Nov 2022",
      end: "Dec 2024",
      bullets: [
        "Engineered a Next.js room-booking platform with real-time availability, reducing scheduling conflicts by over 90% in production.",
        "Developed ERP and procurement frontend modules for real-estate operations: approval flows, vendor communication, and shared components reused across modules.",
        "Partnered with product stakeholders to turn UX requirements into modular React / Next.js interfaces across devices.",
      ],
    },
  ],
  skills: [
    {
      group: "Frontend",
      items: [
        "React.js",
        "Vue.js",
        "Next.js (App Router)",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Responsive layouts",
        "Component architecture",
      ],
    },
    {
      group: "UI & craft",
      items: [
        "shadcn/ui",
        "Tailwind CSS",
        "Ant Design",
        "Material UI",
        "Figma-to-production",
        "Accessibility (ARIA, keyboard)",
        "Performance-minded rendering",
      ],
    },
    {
      group: "APIs & platform",
      items: [
        "RESTful APIs",
        "Node.js",
        "Express.js",
        "MySQL (familiar)",
        "AWS (familiar)",
        "Azure (familiar)",
      ],
    },
    {
      group: "Testing & delivery",
      items: [
        "Playwright (E2E)",
        "Git",
        "GitHub",
        "Agile collaboration",
        "Production debugging",
      ],
    },
  ],
  projects: [
    {
      title: "The Odin Project — curriculum fixes",
      description:
        "Merged contributions fixing layout inconsistencies across React Ecosystem lessons and diagnosing a curriculum defect from issue analysis through maintainers to live ship.",
      href: "https://github.com/Parag-develop",
      tags: ["Open source", "React", "Docs"],
    },
    {
      title: "kicksmedia.in",
      description:
        "Shipped a responsive React e-commerce frontend with production-ready flows.",
      href: "https://kicksmedia.in",
      tags: ["React", "E-commerce"],
    },
    {
      title: "samsdiscus.com",
      description:
        "Built a responsive React storefront UI for client web commerce.",
      href: "https://samsdiscus.com",
      tags: ["React", "E-commerce"],
    },
  ],
  education: [
    {
      school: "SIWS College, University of Mumbai",
      degree: "M.Sc. Information Technology",
      period: "2021–2022",
      detail: "CGPI 9.50/10, A+, first rank",
    },
    {
      school: "Siddharth College, University of Mumbai",
      degree: "B.Sc. Information Technology",
      period: "2019–2020",
      detail: "CGPI 8.14/10",
    },
  ],
} satisfies Profile;

export const profile = profileSchema.parse(profileData);
