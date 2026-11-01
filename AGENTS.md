<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# my-portfolio

Single Next.js App Router portfolio site (no backend, no tests). Package manager is npm (`package-lock.json`). `README.md` is unmodified create-next-app boilerplate — trust this file and `package.json` instead.

## Commands

- `npm run dev` — dev server on :3000 (Turbopack).
- `npm run build` / `npm run start` — production build / serve.
- `npm run lint` — runs `eslint` directly (not `next lint`, which no longer exists).
- `npx tsc --noEmit` — typecheck. There is no script and no test runner; do not invent one.
- `npm run resume` — regenerates `public/resume.pdf` from `scripts/generate-resume.mjs` (dev-only `pdfkit`; the PDF is committed).

## Next 16 / toolchain gotchas

- Version-matched docs live in `node_modules/next/dist/docs/`. This is Next 16.4 + React 19.3; APIs may differ from training data.
- `next.config.ts` enables `cacheComponents`, `partialPrefetching`, `reactCompiler` (React Compiler is on — avoid adding manual `useMemo`/`useCallback`), and `experimental.agentFeedback` (Next may append its own managed feedback block to this file; leave managed blocks alone).
- `cacheComponents` rejects `new Date()`/`Date.now()`, `Math.random()`, and `crypto.randomUUID()` during prerender. Cache the value with `"use cache"` (the function must be `async`, see `CopyrightYear.tsx`) or defer to the client. It also makes the `dynamicParams` segment config unsupported — call `notFound()` in the page for unknown params instead.
- `src/app/projects/[slug]/page.tsx` opens with `export const instant = false;` — an intentional opt-out of Next's `instant` navigation validation (the `instant` export only exists because `cacheComponents` is on). Don't delete it as dead code.
- Route types (`PageProps`/`LayoutProps`) are generated. Run `npx next typegen` before `npx tsc --noEmit` on a clean checkout, or `tsc` fails on the missing globals.
- Tailwind v4 is wired through the Turbopack loader rule in `next.config.ts` (`@tailwindcss/turbopack`), **not** PostCSS. There is no `postcss.config.*` or `tailwind.config.*` — do not add one. `src/app/globals.css` holds the Tailwind import, the `@theme` design tokens (`ink`/`surface`/`accent`/`line`, `font-display`), keyframes and `.reveal`/`.animate-*` motion primitives, plus print and `prefers-reduced-motion` overrides. Use those tokens instead of new hex colors, and put shared animation CSS there rather than adding an animation library.
- `LayoutProps<"/">` in `src/app/layout.tsx` is a Next-generated global route type, not an import. Don't "fix" it.

## Layout

The site is multi-page: `Navbar` and `Footer` live in `src/app/layout.tsx` (wrapped around `<main className="flex-1">`) and must never be duplicated per page.

- `src/app/page.tsx` — home; `Banner` + `LatestProjects` only. Keep it minimal.
- Dedicated routes: `/about` (`About` + `Education`), `/projects`, `/projects/[slug]`, `/skills`, `/resume`, `/contact`.
- `src/app/components/` — one server component per section, rendered by its page. Only `Navbar`, `Contact`, `Reveal`, and `Typewriter` are `"use client"`; the rest are server components (`CopyrightYear` is `async` + `"use cache"`). `ProjectCard`/`SectionHeading`/`PageHeader`/`ProfilePortrait` are shared. Keep `Reveal` a thin wrapper so section content stays server-rendered.
- Shared styling lives in `src/app/lib/styles.ts` (`buttonStyles`, `sectionPadding`, `buttonArrow`); use `ui/Button`'s `Button`/`ButtonLink` instead of re-creating button classes. `src/app/lib/motion.ts` exports `revealDelay(ms)` for inline `--reveal-delay` values.
- Animations are zero-dependency: keyframes and the `--reveal-delay`/`--ease-out-expo`/`--ease-out-quint` tokens live in `globals.css`, `Reveal` (IntersectionObserver) drives scroll reveals, and everything is neutralised under `prefers-reduced-motion`. `layout.tsx` carries a `<noscript>` fallback so `.reveal` content stays visible without JavaScript.
- Section components that lead a page render an `h1` (via `PageHeader`, `SectionHeading as="h1"`, or a literal `<h1>`); sub-sections stay `h2`. Keep exactly one `h1` per page.
- `src/app/data/projects.ts` — the single typed source for the four projects (plus `latestProjectSlugs` for the home section), consumed by the cards and `/projects/[slug]`. Edit projects there, not in components.
- `src/app/projects/[slug]/page.tsx` — project case-study route (`generateStaticParams` + `notFound()`). Dynamic `params` are Promises in this version: `await props.params`.
- `src/app/not-found.tsx` — custom 404. Unmatched paths keep the global Navbar/Footer, but a `notFound()` from the PPR `[slug]` route is served 404 in Next's error document without the layout (framework behavior).
- Navbar links are route paths (not `#anchors`) with an active state from `usePathname`; update `links` there and in `Footer`'s `quickLinks` together.
- The contact form has no backend: `Contact.tsx` validates client-side and hands the message to a `mailto:` URL. Don't add an API route or claim the message was delivered.
- `public/` — static assets. `portrait.jpg` is the source portrait used by `Banner`/`About` through `ProfilePortrait`; `my.png` is the PNG copy used by the Resume page and embedded in `resume.pdf`. Regenerate the PDF (photo + skills come from `scripts/generate-resume.mjs`) with `npm run resume`; it expects `public/my.png` to exist.
