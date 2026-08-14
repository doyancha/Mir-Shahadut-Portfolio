# Changelog

### Admin + Dynamic Projects Phase 1

- Added the PostgreSQL + Prisma foundation for the future Admin + Dynamic Projects architecture.
- Defined the unified project domain enums and records for software, analytics, and future project types.
- Added the database client singleton, environment placeholder, and verification scripts needed for future admin and dynamic-project phases.
- Preserved the existing public portfolio behavior, static registries, and current routes without wiring the database into public rendering yet.

### Phase 18

- Recorded Phase 18 as the ongoing post-launch maintenance and monitoring program.
- Documented the recurring production checks, deferred operational items, and incident-response boundaries without adding new product scope.
- Preserved the live production release state and the locked Phase 17 deployment baseline.

### Phase 17

- Completed the controlled production deployment to the approved Vercel origin `https://mir-shahadut-portfolio.vercel.app`.
- Locked the production release after smoke QA confirmed routes, metadata, media, sitemap, robots, resume PDF, and 404 behavior.
- Recorded the deferred production contact sender verification boundary and the deferred Node runtime alignment maintenance item.

### Phase 16

- Tightened the case-study CTA language to remove internal-sounding wording while keeping the approved live-demo flow intact.
- Refined the Resume page introduction and summary so the hero positioning and resume background context read as distinct copy.
- Updated the phase-tracking documents and site configuration to reflect Phase 16 as complete and locked.

### Phase 15

- Added a small Vitest layer for contact validation, contact server-action behavior, metadata helpers, case-study lookup helpers, and the approved resume PDF.
- Added a focused Playwright layer for route smoke checks, navigation behavior, case-study links, contact validation, resume download behavior, SEO/indexability, and responsive smoke coverage.
- Added lightweight CI workflow support so the same high-value checks can run consistently in automation.
- Updated the phase-tracking documents and site configuration to reflect Phase 15 as complete and locked.

### Phase 13

- Updated the shared metadata helper so page titles, descriptions, and canonical paths now drive the default Open Graph and Twitter text metadata.
- Added a single global social preview image for the portfolio and wired the site to use the richer social-card presentation.
- Extended the sitemap to include the public case-study routes while preserving `/resume/print` as a non-indexable internal preview.
- Added conservative JSON-LD for the person and website identities using only verified public facts.
- Finalized the Phase 13 SEO and social-sharing lock state.

### Phase 14

- Narrowed the project preview image loading strategy so only the first visible preview in each list can retain priority loading.
- Preserved case-study hero image behavior and the approved shared preview architecture while reducing unnecessary eager requests for non-critical previews.
- Updated the phase-tracking documents and site configuration to reflect Phase 14 as complete and locked.

### Phase 12

- Remediated the locked accessibility audit findings by splitting the shared accent tokens for text and primary surfaces so contrast meets WCAG AA.
- Removed the unstable mobile-navigation `aria-controls` relationship so the trigger keeps a clear accessible name and state without axe noise.
- Updated the phase-tracking documents and site configuration to reflect Phase 12 as complete and locked.

# 2026-08-08

### Phase 11

- Implemented restrained CSS-only motion and interaction polish for shared controls, mobile navigation, contact feedback, and project media.
- Preserved the motion-light editorial layout while adding subtle press, reveal, and hover feedback with reduced-motion support.
- Updated the phase-tracking documents and site configuration to reflect Phase 11 as complete and locked.

### Phase 10A

- Implemented the Contact page foundation with a professional hero, curated contact methods, and a server-action submission form.
- Added Resend-based transactional email delivery with server-side validation, a honeypot field, and plain-text message handling.
- Updated the phase-tracking documents and site configuration to reflect Phase 10A as the active contact-system baseline.

### Phase 10B

- Finalized the Phase 10 contact-system lock state after verifying the existing contact experience, Resend delivery path, and responsive behavior.
- Updated the phase-tracking documents and site configuration to reflect Phase 10A and Phase 10B as complete and locked.
- Marked the complete Phase 10 contact system as locked.

### Phase 9D

- Normalized the locked Phase 9 baseline so Phase 9A, Phase 9B, and Phase 9C are reflected as locked in the phase-tracking docs and site configuration.
- Hardened canonical URL handling so production no longer falls back to localhost when `NEXT_PUBLIC_SITE_URL` is missing.
- Finalized the Phase 9D lock state across the tracking docs and site configuration.

### Phase 9C

- Added the dedicated one-page resume PDF generation flow and the internal print-focused `/resume/print` preview route.
- Linked the public Resume page to the downloadable PDF while keeping the web resume structure intact.
- Kept the PDF content driven by canonical identity, experience, skills, education, and selected-project data.
- Updated the phase-tracking documents to reflect the Phase 9C implementation baseline.

### Phase 9B

- Implemented the Resume web page as a recruiter-friendly summary of verified identity, skills, experience, education, and selected project evidence.
- Added a compact resume-specific content layer and small server-rendered sections while keeping the PDF download boundary closed for a later phase.
- Kept the Resume page distinct from the Experience page and synchronized the site phase state to Phase 9B.

### Phase 9A

- Implemented the Experience page as a factual professional-background view using verified employment and education details only.
- Added structured experience, education, and supporting-context content for the new page while keeping the Resume route unchanged.
- Synchronized the site phase status to Phase 9A and kept the resume PDF pending owner approval.

### Phase 8F

- Finalized the Phase 8 governance documents to reflect the locked Phase 8A-F baseline.
- Removed stale BookEasy and TaskOrbit screenshot-gallery wording now that approved media is rendered.
- Normalized case-study hero image loading to match the shared eager-loading strategy used by project previews.

### Phase 8E

- Added approved project screenshots for HRH Shopping, BookEasy, and TaskOrbit to the public media library.
- Rendered approved media in the homepage featured projects, Projects index, and locked case-study pages with next/image and optional gallery behavior.
- Preserved the locked Phase 8A–8D case-study structure while keeping rejected authentication fallback screenshots out of the portfolio.

### Phase 8D

- Authored the HRH Shopping case-study narrative from verified customer-facing implementation evidence only.
- Added HRH Shopping overview, architecture, workflow, responsive, accessibility, testing, limitations, and lessons sections to the reusable case-study content layer.
- Preserved the locked Key Facts shell, optional-section behavior, and screenshot-free presentation while keeping the backend and schema boundary explicit.

### Phase 8C

- Authored the TaskOrbit case-study narrative from verified implementation evidence only.
- Added TaskOrbit overview, architecture, workflow, authorization, validation, testing, deployment, limitations, and lessons sections to the reusable case-study content layer.
- Preserved the locked Key Facts shell, optional-section behavior, and screenshot-free presentation while widening the reusable section shell for structured evidence at large desktop widths.

### Phase 8A

- Implemented the reusable case-study system foundation with static-first routing, per-project metadata, optional section rendering, and related-project navigation.
- Added the approved case-study content index and the three minimal project scaffolds without authoring full case-study narratives.
- Kept unsupported sections hidden and left the live-demo architecture ready for future approved screenshots.

### Phase 8B

- Authored the BookEasy case-study narrative from verified implementation evidence only.
- Added BookEasy overview, architecture, workflow, security, testing, deployment, limitations, and lessons sections to the reusable case-study content layer.
- Preserved the locked Key Facts shell, optional-section behavior, and screenshot-free presentation.

### Phase 7

- Implemented the Projects Index page as an evidence-led public view of HRH Shopping, BookEasy, and TaskOrbit.
- Added structured Projects page content for the hero, status guide, evidence note, CTA, and public label mappings.
- Kept repositories private, used verified live-demo buttons, and replaced missing screenshots with polished placeholders.

### Phase 6

- Implemented the Skills and Capabilities page as a verified-only inventory of project-applied capabilities and technologies.
- Added structured Skills content for capability groups, technology groups, evidence notes, and the next-step CTA.
- Kept the page factual, concise, and free of percentages, ratings, and unsupported learning claims.

### Phase 5

- Implemented the About page as a text-led, factual, professional section stack using the approved About architecture.
- Added structured About content for the professional focus, journey, values, current focus, background preview, and next-step CTA sections.
- Preserved the homepage layout and avoided introducing a profile image or unsupported claims.
- Kept the page aligned to the approved navigation path into Projects and Experience.

## 2026-08-06

### Homepage Final QA & Polish

- Corrected the generated Next.js type imports in `next-env.d.ts` so the project typecheck resolves the app router route types cleanly.

### Phase 4B-2

- Implemented the remaining homepage sections: core capabilities, engineering approach, selected technologies, resume CTA, and final contact CTA.
- Refined the homepage rhythm so the new sections read as a continuous product-like flow after the approved homepage core.
- Added structured homepage content for the new capability, principle, technology, and CTA sections.
- Kept the locked hero, credibility strip, and featured projects unchanged.
- No dependency was installed.

### Phase 4B-1

- Implemented the approved homepage core: wider homepage containers, hero, credibility strip, and featured projects.
- Replaced the temporary Design System Preview homepage with a production-facing homepage foundation.
- Added structured homepage content for the approved profile and the three verified projects.
- Used intentional preview surfaces because approved screenshots are not yet available.
- Rendered the featured-project case-study action as a disabled placeholder instead of a dead link.
- Kept the remaining homepage sections for a later phase.
- No dependency was installed.

### Phase 4A

- Added the homepage visual blueprint for implementation planning only.
- Defined the exact homepage container widths, rhythm, hero composition, section blueprints, responsive wireframes, accessibility rules, media standards, motion opportunities, and performance constraints.
- Preserved the temporary Design System Preview homepage.
- Marked all unresolved facts as `Pending owner input`.
- No homepage implementation was created.

### Phase 3B

- Documented the homepage UX architecture for the future homepage.
- Recorded the owner-approved homepage title, intro, CTA labels, hero visual direction, and restrained social-link policy.
- Defined homepage goals, audience journeys, section order, hero structure, featured-project strategy, CTA strategy, responsive wireframes, accessibility plan, performance plan, and Phase 4 boundaries.
- Added a homepage-specific content checklist with `Pending owner input` markers for missing facts.
- Kept the temporary Design System Preview homepage unchanged.
- No homepage implementation was created.

### Phase 3A

- Implemented the reusable global application shell.
- Added the skip-to-content link, site header, desktop navigation, mobile navigation, and site footer.
- Added route-aware active navigation states with exact Home matching and prefix support for nested project routes later.
- Added minimal route foundations for the authorized public routes.
- Extended the metadata foundation with canonical and Open Graph URL support.
- Kept the temporary homepage as the Design System Preview.
- Added no new dependency.
- Phase 3A was approved and locked after review.

### Phase 2

- Implemented the reusable design system foundation.
- Added the dark-neutral semantic token set.
- Added typography, spacing, container, radius, border, shadow, and motion primitives.
- Added foundation UI and layout components for later phases.
- Converted the temporary homepage into a `Design System Preview`.
- Kept the design system intentionally reusable and phase-appropriate.
- No final navigation, homepage, project case studies, or other later-phase pages were built.
- No package was added for this phase.

### Phase 1 Review Baseline

- Initial application foundation was established and verified.
- TypeScript, linting, formatting, and production build checks passed.
- Git was initialized on `main`.
- The first foundation commit was created and tagged.

### Phase 0 Documentation Setup

- Inspected the empty project folder.
- Created the governance documentation set.
- Synchronized the docs with the approved planning baseline.
- Preserved all owner-input placeholders and avoided invented claims.
