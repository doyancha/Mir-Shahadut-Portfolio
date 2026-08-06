# Decision Log

## Phase 0 Decisions

1. Use Next.js App Router.
2. Use strict TypeScript.
3. Use structured TypeScript content files for version 1.
4. Do not use a CMS in version 1.
5. Use Server Components by default.
6. Use Client Components only where required.
7. Use one polished theme initially.
8. Keep showcased project repositories private.
9. Use live demos, screenshots, and case studies as project evidence.
10. Do not use arbitrary skill percentages.
11. Do not use a database unless a genuine requirement appears.
12. Do not add a contact form until delivery and spam-protection decisions are approved.
13. Do not add analytics until privacy and platform decisions are approved.
14. Use a reusable dynamic case-study route.
15. Prioritize Home, Projects, and Case Studies before secondary pages.
16. Never publish invented or unverified claims.

## Phase 1 Decisions

1. Initialize the application at the project root rather than creating a nested folder.
2. Use npm as the package manager.
3. Keep the foundation dependency set minimal.
4. Use the `@/*` import alias for `src/*`.
5. Keep the root layout and content architecture server-first.
6. Preserve private or draft status for incomplete project records.
7. Keep `NEXT_PUBLIC_SITE_URL` optional with a local fallback for metadata generation.

## Phase 2 Decisions

1. Use a single dark-neutral theme for version 1.
2. Use semantic CSS custom properties as the styling API.
3. Use `Geist` as the primary font and `IBM Plex Mono` for technical metadata.
4. Keep shadows minimal and rely primarily on borders for separation.
5. Use CSS transitions for foundational interaction feedback.
6. Respect reduced-motion preferences at the CSS layer.
7. Keep the preview homepage explicitly labeled `Design System Preview`.
8. Defer `shadcn/ui` initialization because it was not required for the Phase 2 foundation.
9. Install no new package for Phase 2 because the existing stack was sufficient.
10. Keep `Button`, `AppLink`, `IconButton`, `Badge`, `Tag`, `Card`, `Separator`, `VisuallyHidden`, `PageContainer`, `Section`, `SectionHeader`, `Stack`, `Cluster`, and `Prose` as the only Phase 2 primitives.
11. Wire the global stylesheet into the root layout so the semantic tokens are actually applied.

## Phase 3A Decisions

1. Keep the root header non-sticky to avoid obscuring anchor targets and to keep the shell visually stable.
2. Use a route-aware client navigation layer for the desktop and mobile menus, with exact matching for Home and prefix matching for `Projects`.
3. Use a lightweight controlled mobile overlay with body scroll lock, Escape-to-close behavior, and keyboard focus restoration without adding a dialog or sheet dependency.
4. Keep the footer concise and factual, rendering navigation links only when verified social links are absent.
5. Extend the metadata helper to derive canonical URLs and Open Graph URLs from the current route path, while preserving the localhost fallback.
6. Keep `shadcn/ui` deferred because the shell requirements were satisfied with the approved primitives and native browser behavior.

## Phase 3A Correction Pass Decisions

1. Keep the build-only `tsconfig.build.json` and route Next production type checking through it, because this Next 16 environment generates a `.next/dev/types` tree that otherwise collides with the normal app types during build-time checking.
2. Keep `tsconfig.json` focused on editor and local type checking, explicitly excluding `.next/dev` generated output so the repository does not depend on stale build artifacts.
3. Keep `next-env.d.ts` as the standard Next-generated file that references `.next/types`; do not treat the generated dev variant as a source change.

## Phase 3B Decisions

1. Put featured projects directly after the hero because project evidence is the strongest conversion proof for this portfolio.
2. Use `View Projects` as the primary homepage CTA and `View Resume` as the secondary CTA to avoid competing primary actions.
3. Present the three initial projects as editorial case-study cards with screenshots, status labels, and private-repository disclosure instead of source-code links.
4. Keep capabilities grouped by capability category rather than by arbitrary percentages or oversized technology-logo clouds.
5. Use a wider, section-specific homepage container strategy so hero and project sections can expand on large displays while narrative text remains readable.
6. Keep profile imagery optional and avoid inventing a hero headshot requirement until the owner approves one.
7. Keep the homepage planning phase strictly documentation-only; do not begin Phase 4 implementation until owner approval is received.
8. Use `Full Stack Web Developer` as the public professional title and the approved homepage intro: `I build modern, responsive, and production-focused web applications with thoughtful user experiences, clean architecture, and maintainable code.`
9. Do not display an availability statement or hero social-icon row on the homepage until the owner explicitly approves them.
10. Keep homepage social visibility restrained, with GitHub and LinkedIn only in shell, footer, or contact areas once verified, and keep Upwork, Fiverr, and email primarily on the Contact page once verified.
11. Keep trust signals factual and evidence-based: project screenshots, architecture, technologies, case studies, and honest status labels only.

## Phase 4A Decisions

1. Keep the homepage proof-led and editorial rather than marketing-led or card-grid generic.
2. Use section-specific homepage widths: `97.5rem` for hero and featured projects, `88rem` for general content, `74rem` for narrative sections, and `48rem` for long-form prose.
3. Keep the hero name-first, left-aligned, project-preview right, with no profile photo, no social-icon row, and no availability statement.
4. Use a neutral featured-project order of `HRH Shopping`, `BookEasy`, `TaskOrbit` until the owner approves a different priority.
5. Treat `Pending owner input` as the required fallback for missing screenshots, resume destination, social links, technology data, and project facts.
6. Keep the current temporary Design System Preview homepage unchanged during planning.
7. Keep Phase 4B as a separate implementation phase that remains unauthorized until the planning blueprint is approved.
