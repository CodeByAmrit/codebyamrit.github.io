<!-- BEGIN:project-agent-rules -->
# Amrit Sharma Portfolio Agent Guide

This repository powers the personal portfolio at `https://amritsharma.dev`.

## Project Identity

- Owner: Amrit Sharma
- Primary site: `https://amritsharma.dev`
- Site type: personal developer portfolio / landing page
- Framework: Next.js `16.2.3` with App Router
- React version: React `19`
- Language: TypeScript
- Styling: Tailwind CSS `4` via `app/globals.css`
- Animation stack: Framer Motion, GSAP, `@gsap/react`, Lenis
- Analytics: Umami loaded in `app/layout.tsx`
- Output mode: static export

## Critical Next.js Rule

This is not older Next.js behavior. Before changing framework-level patterns, read the relevant guide in `node_modules/next/dist/docs/`.

Pay special attention to:

- App Router conventions
- metadata APIs
- static export behavior
- any deprecations or breaking changes in Next 16

## Current Architecture

- `app/`
  - App Router entrypoint and route metadata
  - `layout.tsx` contains global metadata, structured data, and Umami
  - `manifest.ts`, `robots.ts`, and `sitemap.ts` are used for SEO
- `components/`
  - landing page sections such as Hero, About, Projects, Experience, CTA, Footer
  - interactive UI helpers in `components/ui/`
- `public/`
  - static assets
  - `profile.html` is a separate static resume/profile page and should continue working
- `next.config.ts`
  - static export enabled with `output: "export"`
  - `trailingSlash: true`
  - images are currently `unoptimized: true` because of export mode

## Commands

- install: `npm install`
- dev: `npm run dev`
- lint: `npm run lint`
- build: `npm run build`

Always run `npm run lint` after meaningful edits. Run `npm run build` after structural, metadata, routing, animation, or config changes.

## Working Rules For This Repo

- Preserve the portfolio's premium visual style. Avoid replacing it with generic template-looking UI.
- Keep the site focused on Amrit Sharma's personal brand, portfolio, and SEO visibility for the name `Amrit Sharma`.
- Prefer improving existing sections over introducing unnecessary new architecture.
- Keep content aligned with the live brand at `amritsharma.dev`.
- Preserve static export compatibility. Do not introduce server-only features that break `next build` with `output: "export"`.
- Be careful with `next/image` behavior under static export. The repo intentionally uses `images.unoptimized = true`.
- Keep metadata, canonical URLs, sitemap, robots, manifest, structured data, and analytics accurate when editing brand or SEO-related content.
- If you change domain, social links, profile image, or branding, update all related metadata in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, and any affected public assets.
- Maintain `public/profile.html` as a valid secondary page unless explicitly asked to remove or replace it.

## SEO And Branding Expectations

When improving SEO or content, optimize for branded search around:

- `Amrit Sharma`
- `Amrit Sharma developer`
- `Amrit Sharma portfolio`
- `Amrit Sharma full stack developer`

Important files for SEO:

- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/manifest.ts`
- landing page copy in `components/`

Do not keyword stuff. Prefer:

- clear `h1` and section copy
- accurate metadata
- strong internal consistency of name, role, and links
- valid structured data
- stable canonical URLs

## Content And Portfolio Updates

When adding or updating projects:

- keep descriptions concise and recruiter-friendly
- highlight real outcomes, architecture, and stack
- prefer real production links and GitHub links when available
- match the existing card structure in `components/Projects.tsx`

When updating profile content:

- keep naming consistent as `Amrit Sharma`
- keep role positioning aligned with senior full stack development / software architecture
- preserve external links such as GitHub, LinkedIn, WhatsApp, and portfolio references unless asked to change them

## Animation And UX Rules

- Reuse the existing motion language built with Framer Motion, GSAP, Magnetic UI, custom cursor, and Lenis.
- Avoid adding heavy animation that harms readability, performance, or mobile usability.
- Respect mobile behavior. Some effects are intentionally reduced or disabled on smaller screens.
- Preserve accessibility basics even in animated sections: usable links, readable text, and meaningful alt text.

## Editing Safety

- Do not remove analytics, metadata, sitemap, robots, or structured data without a clear reason.
- Do not switch package managers or rename core routes unless requested.
- Do not remove static export settings unless the deployment strategy is intentionally changing.
- Check for broken characters or encoding artifacts if editing older files.

## Definition Of Done

A change is not complete until:

1. The implementation matches the current portfolio setup.
2. `npm run lint` passes.
3. `npm run build` passes for static export.
4. Any related SEO, metadata, and branding references stay consistent.

<!-- END:project-agent-rules -->
