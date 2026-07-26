# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing website for Kolom Technologies (https://kolom.ltd). Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4. No test suite.

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (also the best way to typecheck/verify)
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)

## Architecture

**Homepage composition**: `app/page.tsx` is a server component that stacks section components from `components/` in order: Header → HeroSection → ClientLogos → ServicesSection → SolutionsSection → CaseStudiesSection → AboutSection → TeamSection → Footer. ServicesSection/SolutionsSection/AboutSection carry `id="services"` / `id="solutions"` / `id="about"` anchors for in-page nav.

**Subpages** (each composes Header/Footer itself): `/services`, `/solutions`, and `/about` are full marketing pages — stacked `<section>` blocks in `max-w-7xl px-6 md:px-10` containers, opening with a shared hero pattern (`pt-44 sm:pt-52`, radial glow, blueprint grid overlay, watermark logo) — and they reuse homepage sections (`/solutions` embeds SolutionsSection + CaseStudiesSection; `/about` embeds TeamSection + ClientLogos). `/case-studies` and the text pages `/privacy`/`/terms` use the simpler shell `<main className="relative min-h-screen bg-black pt-32 pb-24">` with a top-anchored radial glow and a `max-w-5xl` (`max-w-3xl` for text pages) container.

**Content as typed data**: Site content lives in `lib/` as exported typed arrays — `lib/case-studies.ts` (`CaseStudy[]`) and `lib/team.ts` (`TeamMember[]`). Pages and sections render from these; to add/edit a case study or team member, edit the data file, not the components. Client logos are the exception: their data array lives inside `components/ClientLogos.tsx` (assets in `public/clients/`), with per-logo sizing, a `light` flag for marks that need a white chip, and `x`/`y` coordinates for the desktop dome layout. Case study data references icons by string name (`iconName`), resolved through the `caseStudyIcons` map in `lib/case-study-icons.tsx` so the data stays serializable across the server/client boundary.

**Case study detail pages**: `app/case-studies/[slug]/page.tsx` statically generates one page per entry via `generateStaticParams` + `generateMetadata`. Note `params` is a `Promise` (Next 15+ convention) and must be awaited.

**Server by default, client for motion**: Components are server components unless they need animation or browser APIs, then marked `"use client"` (Header, Preloader, PageTransition, carousels, etc.). Animations use framer-motion. `app/template.tsx` wraps every route in `PageTransition`, so all navigation gets an animated transition.

**WebGL background**: `FloatingLines.tsx` is a three.js shader background. It is never imported directly by pages — always through `FloatingLinesBg.tsx`, a client wrapper that loads it with `next/dynamic` (`ssr: false`), pauses it via IntersectionObserver when off-screen, and fades it in. Keep any new heavy WebGL work behind this same pattern.

**Styling**: Tailwind v4 with CSS-first config — there is no `tailwind.config`; theme tokens live in `app/globals.css` under `@theme inline`. Brand color is `--color-kolom` (#4093FF), usable as `text-kolom`/`bg-kolom` etc. The site is dark-only (`bg-black text-white` on body). Fonts are Geist Sans/Mono via `next/font`, exposed as `--font-geist-sans`/`--font-geist-mono`.

**shadcn/ui**: `components.json` is configured (new-york style, lucide icons, `@react-bits` registry) with the `cn()` helper in `lib/utils.ts`. `components/ui/glow-card.tsx` is the design system's signature card: `GlowCard` (glassy dark surface whose hover adds a kolom-blue border, radial glow overlay, outer shadow, and a bottom gradient accent line) plus the matching `GlowCardIcon` tile. Use it for any new card UI instead of hand-writing the classes; direct children need `relative` to sit above the glow overlay, and `accentClassName` aligns the accent line inset with the card padding. Older section components still carry the same classes inline.

**Copy**: Site copy (headings, body text, `lib/` data strings) never uses em dashes — rewrite with commas, periods, or colons.

**SEO/analytics plumbing**: `app/layout.tsx` holds site-wide metadata (metadataBase, OG/Twitter cards), Google Analytics (gtag), Vercel Analytics and Speed Insights, and the `Preloader`. `app/robots.ts` and `app/sitemap.ts` generate robots.txt and the sitemap — add new public routes to the sitemap.
