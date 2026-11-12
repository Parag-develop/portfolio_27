# Parag Palkar — Profile site

Dark, typography-led single-page portfolio inspired by high-end personal sites (structure adapted for a frontend CV). Built with Next.js, TypeScript, and shadcn/ui.

## Edit your content

1. [`src/content/profile.ts`](src/content/profile.ts) — name, tagline, stats, experience, skills, projects, education, links
2. [`src/content/site.ts`](src/content/site.ts) — SEO + section toggles

```ts
sections: {
  about: true,
  experience: true,
  skills: true,
  projects: true,
  education: true,
  contact: true,
}
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```
