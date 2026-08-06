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
