# Decision Log

## 2026-08-06 - Phase 0 Governance Setup

1. Use Next.js App Router.
2. Use strict TypeScript.
3. Use structured TypeScript content files for version 1.
4. Do not use a CMS in version 1.
5. Use Server Components by default.
6. Use Client Components only where required.
7. Use one polished theme initially.
8. Keep project repositories private.
9. Use live demos, screenshots, and case studies as project evidence.
10. Do not use arbitrary skill percentages.
11. Do not use a database unless a genuine requirement appears.
12. Do not add a contact form until delivery and spam-protection decisions are approved.
13. Do not add analytics until privacy and platform decisions are approved.
14. Use a reusable dynamic case-study route.
15. Prioritize Home, Projects, and Case Studies before secondary pages.
16. Never publish invented or unverified claims.

## 2026-08-06 - Repository And Content Safety

- Preserve all existing files and avoid destructive operations.
- Keep private repository content out of planning documentation.
- Mark unresolved facts and missing content as `Pending owner input`.
- Avoid hardcoding factual content throughout page components in future phases.

## 2026-08-06 - Phase 1 Foundation Toolchain

- Use `npm` as the package manager for the initial foundation.
- Use TypeScript `6.0.3` because it is compatible with the Next.js and ESLint toolchain available in this environment.
- Use ESLint `9.39.5` because it is compatible with `eslint-config-next` in this environment.
- Use `http://localhost:3000` as the temporary site URL fallback until a production domain is approved.
- Initialize Git on the `main` branch.
- Remove `autoprefixer` because the Tailwind v4 PostCSS configuration uses `@tailwindcss/postcss` directly and does not require a separate autoprefixer plugin in this foundation.
