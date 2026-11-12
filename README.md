# Parag Palkar — Profile site

Single-page portfolio / CV built with Next.js, TypeScript, and shadcn/ui.

## Edit your content

All copy lives in two files:

1. [`src/content/profile.ts`](src/content/profile.ts) — name, about, experience, skills, projects, education, links
2. [`src/content/site.ts`](src/content/site.ts) — page title/description and **section toggles**

Turn a section off without deleting data:

```ts
sections: {
  about: true,
  experience: true,
  skills: true,
  projects: false, // hidden
  education: true,
  contact: true,
}
```

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

Ready for Vercel: import the repo and deploy.
