# Changelog

## 2026-08-06

### Phase 0 Documentation Synchronization

- Reviewed the provisional Phase 0 documents
- Synchronized all planning documents with the approved baseline
- Recorded the initial empty-folder inspection state
- Updated the specification, roadmap, design system, content requirements, project status, and decision log
- Kept all work within documentation only
- No application code was created
- No dependencies were installed
- No Git repository was initialized
- No deployment was performed

### Phase 1 Foundation Implementation

- Initialized the Next.js App Router foundation in the project root
- Added strict TypeScript and the `@/*` alias to `src/*`
- Configured ESLint, Prettier, `.gitignore`, and `.prettierignore`
- Added the minimal App Router files for layout, homepage, 404, robots, sitemap, and global styles
- Created typed content models and supporting content files for future phases
- Added shared metadata and site URL utilities
- Created the Phase 1 folder architecture and retained empty directories with `.gitkeep` files where needed
- Initialized Git on `main`
- Verified `npm run typecheck`, `npm run lint`, `npm run format:check`, and `npm run build`
- No application design work or later-phase page work was started

### Phase 1 Review Cleanup

- Removed `autoprefixer` after confirming it is not referenced by the current Tailwind v4 PostCSS configuration
- Added `*.tsbuildinfo` to `.gitignore` and removed the generated `tsconfig.tsbuildinfo` artifact
- Re-ran the full verification suite after the cleanup
- Confirmed the foundation is ready to be locked and committed
