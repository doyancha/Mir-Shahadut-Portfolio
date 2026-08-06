# Homepage Visual Blueprint

## Status

- Phase 4A is planning only.
- No homepage implementation was created.
- The temporary `Design System Preview` remains the homepage.
- Phase 4B implementation is not authorized.
- This blueprint is the implementation-ready visual specification for the eventual homepage build.

## Pre-Planning Findings

- `docs/CHANGELOG.md`, `docs/CONTENT_REQUIREMENTS.md`, `docs/DECISION_LOG.md`, `docs/DESIGN_SYSTEM.md`, `docs/HOMEPAGE_UX_ARCHITECTURE.md`, `docs/PROJECT_SPECIFICATION.md`, `docs/PROJECT_STATUS.md`, and `docs/ROADMAP.md` were read in full.
- The locked design system, shell, and temporary homepage were inspected in `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx`, and the shared layout and UI primitives.
- The working tree was clean at the start of this task.
- No dependency was installed.
- No React, CSS, configuration, or content file was modified during review.
- Material contradiction found: the roadmap and status docs still describe Phase 3B as pending owner approval, while this task frames Phase 3B as a locked baseline. This blueprint resolves that by treating the existing UX architecture as the planning reference and by keeping implementation out of scope.
- No other contradiction blocks Phase 4A planning.

## Final Visual Strategy

The homepage is proof-led rather than marketing-led.

It should feel:

- Wider and more confident than the temporary preview on large displays
- Editorial, not generic-card-grid
- Technical, but calm
- Evidence-first, not claim-first
- Minimal in surface treatment, with borders doing most of the separation

The homepage should visually privilege:

1. The hero statement
2. Proof through project evidence
3. Capability and engineering credibility
4. Resume and contact conversion

The homepage should not visually privilege:

- Decorative graphics
- Social icon rows
- Profile photography in the hero
- Unsupported trust badges
- Metrics or testimonials that have not been verified

## Exact Container Widths

The homepage must use section-specific widths instead of one universal container.

| Area                     | Selected width | Purpose                                                                |
| ------------------------ | -------------- | ---------------------------------------------------------------------- |
| Hero                     | `97.5rem`      | Lets the hero breathe on 1440px+ while keeping the text column bounded |
| Featured projects        | `97.5rem`      | Supports editorial case-study rows and wide screenshots                |
| Engineering showcase     | `97.5rem`      | Keeps the proof-heavy section broad without becoming full-bleed        |
| General homepage content | `88rem`        | Gives narrative sections room without overexpansion                    |
| Narrative sections       | `74rem`        | Holds readable explanation, approach, and resume support content       |
| Long-form prose          | `48rem`        | Keeps paragraph-based reading comfortable                              |

### Container rules

- The page padding remains the Phase 2 `--page-padding` clamp.
- The current preview width remains unchanged during Phase 4A.
- Phase 4B should add homepage-specific width tokens rather than changing the global container tokens.
- No section may exceed its selected width on ultrawide screens.
- No section may overflow horizontally at any breakpoint.

### Recommended phase 4 width tokens

- `--container-home-hero: 97.5rem`
- `--container-home-featured: 97.5rem`
- `--container-home-standard: 88rem`
- `--container-home-narrative: 74rem`
- `--container-home-prose: 48rem`

## Global Homepage Rhythm

All spacing below is derived from the Phase 2 spacing system:

- `--page-padding`
- `--section-spacing`
- `Stack` gaps
- `Cluster` gaps

### Exact rhythm

| Rhythm point                  | Desktop                  | Tablet                      | Mobile                    | Role                                                                       |
| ----------------------------- | ------------------------ | --------------------------- | ------------------------- | -------------------------------------------------------------------------- |
| Hero top spacing under header | `2rem`                   | `1.5rem`                    | `1.25rem`                 | Keeps the hero visually tied to the shell without crowding the header      |
| Hero bottom spacing           | `4.75rem`                | `4rem`                      | `3rem`                    | Separates the hero from the proof strip and preserves the first impression |
| Major section spacing         | `var(--section-spacing)` | `clamp(2.25rem, 4vw, 4rem)` | `clamp(2rem, 4vw, 3rem)`  | Default rhythm for the large sections                                      |
| Compact-section spacing       | `2.25rem`                | `1.75rem`                   | `1.25rem`                 | Used for resume CTA and final contact CTA                                  |
| Heading to supporting text    | `0.75rem`                | `0.75rem`                   | `0.625rem`                | Keeps headings readable without collapsing the hierarchy                   |
| Section intro to content grid | `1.5rem`                 | `1.25rem`                   | `1rem`                    | Prevents intro copy from feeling detached from the grid                    |
| Project row spacing           | `2rem`                   | `1.5rem`                    | `1.25rem`                 | Supports editorial pacing between case-study rows                          |
| CTA gap inside a row          | `0.75rem`                | `0.75rem`                   | `0.625rem`                | Keeps action buttons close enough to read as a pair                        |
| CTA block spacing             | `1rem` above and below   | `1rem` above and below      | `0.75rem` above and below | Keeps CTA bands compact and legible                                        |

### Rhythm rules

- The hero should feel spacious but not empty.
- Major sections should use the full `section-spacing`.
- Resume and contact bands should be noticeably tighter than the proof sections.
- Tablet rhythm should stay nearly identical to desktop until columns collapse.
- Mobile rhythm should compress vertical whitespace, not content density.
- No ad hoc spacing values should be introduced during implementation without a reason tied to reading flow or visual balance.

## Hero Blueprint

### Purpose

- Establish identity immediately
- State the professional title
- Set the proof-led tone for the page
- Launch the primary conversion path to projects

### Required factual content

- Name: `Mir Shahadut Hossain`
- Professional title: `Full Stack Web Developer`
- Introduction: `I build modern, responsive, and production-focused web applications with thoughtful user experiences, clean architecture, and maintainable code.`

### Visual layout

- Desktop composition: two-column hero with text on the left and project-preview composition on the right
- Left/right split: `44% / 56%`
- Main heading maximum width: `12ch`
- Introduction maximum width: `40rem`
- CTA row layout: two buttons inline on desktop; stacked only when the available width becomes tight
- Supporting metadata or trust area: none by default
- Surface treatment: text on the background, preview on a bordered elevated surface
- Border strategy: 1px border on the preview frame, stronger border only on hover or focus

### Desktop size

- Recommended minimum hero height: `44rem`
- Preferred hero height on 1440px+: `48rem` to `52rem` depending on screenshot availability
- Top alignment: content should start just below the global header, aligned to the top third of the section rather than vertically centered

### Screenshot layering strategy

- Use a project-preview composition built from real screenshots only.
- Prefer one lead screenshot with a second, slightly offset supporting frame behind it.
- The offset should be subtle, roughly `8px` to `12px`.
- The layers should share the same radius and a thin border.
- Do not use fake browser chrome.
- Do not add floating technology icons or decorative glow.
- Do not use a profile photograph.

### Optional accent treatment

- A thin accent border or a small accent label may appear on the preview surface.
- Accent usage should remain restrained.
- The preview should still read primarily as a professional evidence panel, not a decorative hero graphic.

### Trust area

- No social-icon row.
- No availability statement.
- No unsupported badges.
- If an owner-approved factual trust line is later added, it must remain a single muted sentence under the CTA row, not a chip cluster.

### What to do when screenshots are not available

- Render a neutral bordered placeholder surface.
- Label it `Pending owner input`.
- Keep the hero text and CTAs fully functional.
- Show the three featured project names in a compact evidence list if that is the only approved content available.
- Do not generate synthetic imagery.

### Desktop wireframe

```text
[Eyebrow: Full Stack Web Developer]
[H1: Mir Shahadut Hossain]
[Intro paragraph]
[View Projects] [View Resume]

                                             [Lead project screenshot]
                                             [Offset supporting frame]
                                             [Small factual label strip]
```

### Tablet transformation

- The hero should collapse to a stacked layout at tablet widths where the preview would squeeze the text column.
- The text block remains first.
- The preview moves below the text.
- The preview should still be a real screenshot or a labeled placeholder.
- CTA buttons remain paired unless they become too wide for the viewport.

### Mobile stacking order

1. Eyebrow
2. Name heading
3. Introduction
4. Primary CTA
5. Secondary CTA
6. Preview or placeholder

### 320px behavior

- The name may wrap into two lines.
- The introduction should remain short and readable.
- The CTA buttons should stack full width.
- The preview should shrink to a single compact frame if screenshots exist.
- If screenshots are absent, the placeholder should remain compact and clearly labeled.

### Heading wrapping rules

- The hero heading should not become a long single line.
- The heading should wrap naturally after the first name or between name segments if needed.
- Avoid line lengths that create a flat banner feel.

### CTA stacking behavior

- Primary and secondary CTA remain side-by-side down to the point where they no longer fit cleanly.
- At narrow mobile widths, stack them full width.
- The primary action should keep visual precedence.

## Credibility / Positioning Strip

### Recommended composition

- Use a compact bordered strip.
- Keep the strip factual and restrained.
- Use three short proof pillars and one muted note.

### Approved wording

- `Production-focused development`
- `Responsive implementation`
- `Maintainable architecture`
- `Private repositories with project evidence below`

### Layout

- Desktop: single horizontal strip with three equal cells and one short note
- Tablet: two rows if needed, but keep the strip compact
- Mobile: stacked items inside the same bordered surface

### Surface treatment

- Muted surface or default surface with a strong border
- No nested cards
- No icons required

### Accessibility notes

- Do not rely on color alone to imply credibility.
- Keep each pillar readable at 320px.
- Do not turn the strip into a badge wall.

## Featured Projects Blueprint

### Objective

- Present the three initial projects as editorial proof, not generic portfolio cards.

### Approved default order

1. HRH Shopping
2. BookEasy
3. TaskOrbit

### Priority rule

- No project should be declared stronger unless owner evidence supports that claim.
- The default order is neutral and matches the approved project list.
- If the owner later wants a different priority, the order can change in Phase 4B.

### Presentation model

- Use a case-study-led editorial layout.
- Do not use a generic three-card grid.
- Use one row per project on desktop.
- Alternate the side of the screenshot from row to row to create rhythm.
- Keep visual prominence equal across the three projects unless owner input later proves otherwise.

### Desktop composition

- Row structure: screenshot panel plus text panel
- Default split: `58%` media / `42%` text
- Alternate the split direction on each row so the page feels editorial, not repetitive
- Project number or eyebrow treatment: `01`, `02`, `03` in monospace or small label form
- Status placement: in the text panel, near the title, not buried at the end
- Summary length: 2 to 3 lines on desktop
- Technology presentation: compact text tags, not a logo wall
- Private-repository disclosure: explicit and visible in the metadata line

### Card composition

Each project row should contain:

- Project number or small eyebrow
- Project title
- Status label
- Short summary
- Technology tags
- Case study CTA
- Live demo CTA if available
- Private repository disclosure
- One lead screenshot or a labeled placeholder

### Status labels

Use only factual labels such as:

- `Private repository`
- `Case study available`
- `Live demo available`
- `Pending owner input`
- `Production`
- `Frontend-only`
- `Backend-integrated`

Do not invent completion status or public source availability.

### Live demo behavior

- Show the live-demo CTA only when a verified URL exists.
- If there is no verified URL, omit the button and show `Live demo: Pending owner input` as muted metadata.

### Case-study behavior

- In Phase 4B-1, render `Read case study` as a disabled placeholder button.
- Do not create a dead link before the case-study route exists.
- Keep the control visually consistent with the homepage CTA system so the later route can swap in without redesign.

### Screenshot behavior

- Use one primary screenshot per project row.
- If a screenshot is unavailable, show a labeled placeholder instead of empty space.
- The placeholder must still reserve the same media height so layout shift does not occur.

### Border and surface treatment

- Media frames should use the default card surface with a thin border.
- Text panels can use a muted surface to distinguish them from the media surface.
- The outer row should still read as a single editorial unit.
- Avoid stacking too many nested surfaces inside a single row.

### Inter-project spacing

- Use `2rem` between rows on desktop.
- Use `1.5rem` at tablet widths.
- Use `1.25rem` on mobile.

### Mobile stacking order

1. Project number
2. Status
3. Title
4. Screenshot or placeholder
5. Summary
6. Technology tags
7. Case study CTA
8. Live demo CTA if available
9. Private-repository disclosure

### Behavior when screenshots are pending

- Keep the row structure intact.
- Replace the image with a clear placeholder surface.
- Use `Pending owner input` in the placeholder.
- Keep the CTAs and metadata visible.

### Behavior when live demo is unavailable

- Omit the live-demo button.
- Do not link to a dead destination.
- Use muted text metadata if the homepage needs to state the missing state.

### 1440px wireframe

```text
[Project 01 | HRH Shopping]     [screenshot frame 58%]
[status / summary / tech / CTA]  [private repo note]

[screenshot frame 58%]          [Project 02 | BookEasy]
[private repo note]             [status / summary / tech / CTA]

[Project 03 | TaskOrbit]        [screenshot frame 58%]
[status / summary / tech / CTA]  [private repo note]
```

### 1024px wireframe

```text
[Project 01]
[screenshot frame]
[status / summary / tech / CTA]

[Project 02]
[screenshot frame]
[status / summary / tech / CTA]

[Project 03]
[screenshot frame]
[status / summary / tech / CTA]
```

### 768px wireframe

```text
[Project 01]
[screenshot frame or placeholder]
[status]
[summary]
[tech tags]
[case study CTA]
[private repo note]

[Project 02]
[screenshot frame or placeholder]
...
```

### 390px wireframe

```text
[01]
[HRH Shopping]
[status]
[screenshot]
[summary]
[tech tags]
[Read case study]
[Open live demo / Pending owner input]
[Private repository]
```

### 320px wireframe

```text
[01]
[HRH Shopping]
[status]
[screenshot / placeholder]
[summary trimmed to 2 lines]
[tech tags trimmed to 3 labels]
[Read case study]
[Live demo: Pending owner input or hidden]
```

## Core Capabilities Blueprint

### Objective

- Explain what kinds of work the owner is ready to deliver.
- Avoid generic skill cards.
- Avoid arbitrary proficiency values.

### Supported categories

- Frontend Engineering
- Full-Stack Systems
- UI/UX Implementation
- Quality and Delivery
- Database Design only if owner evidence is later verified

### Layout

- Desktop: 2-column grid with balanced cards
- Tablet: 2-column until the cards become too narrow, then collapse to 1 column
- Mobile: single-column stack

### Card treatment

- Use default or muted cards, not heavily elevated panels
- Keep each card visually consistent in height where possible
- Do not exceed three visible technology labels per card

### Heading hierarchy

- Section eyebrow: `Capabilities`
- Section heading: short and factual
- Card title: category name
- Card body: 1 to 2 sentences

### Supporting description length

- Keep each category description to 2 lines on desktop.
- Keep each description to 3 lines at tablet width.
- Trim to 2 short lines on mobile.

### Technology-label placement

- Place labels below the description.
- Keep labels compact and scannable.
- Use no more than 3 labels per card on the homepage.

### Links to the Skills page

- A subtle `View Skills` text link is allowed in the section header only if the Skills page has verified content by implementation time.
- If the Skills page remains incomplete, omit the link rather than exposing an empty destination.

## Engineering Approach Blueprint

### Objective

- Communicate how Mir approaches software work without inventing seniority claims or process theater.

### Presentation model

- Use a compact narrative block plus a short principle list.
- Do not use a long essay.
- Do not use a checklist that reads like a resume bullet dump.

### Width tier

- Use the `74rem` narrative width.

### Recommended principle count

- Four principles on desktop.
- Three principles may be used on tablet if density becomes tight.

### Approved principles

- Thoughtful user experience
- Clean architecture
- Maintainable code
- Responsive implementation
- Production-focused development

### Visual treatment

- One bordered narrative surface and one short principle cluster
- Minimal shadow
- Borders should do the separation work

### CTA

- No dedicated CTA is required in this section.
- If a link is later added, it should point to About or Experience only after those pages are ready.

### Relationship to About and Experience pages

- This section should act as a homepage summary of working principles.
- It should not duplicate a full biography.
- It should not promise process details that do not exist elsewhere yet.

### Mobile behavior

- Stack the narrative and principles vertically.
- Keep each principle short enough to scan quickly.
- Avoid dense paragraphs on 320px screens.

## Selected Technologies Blueprint

### Objective

- Show the stack in a restrained way.
- Avoid a logo wall.
- Avoid finalizing unverified technology data.

### Presentation model

- Use compact text labels.
- Group them into small thematic clusters.
- No oversized logos unless later approved.

### Grouping strategy

- Use 2 or 3 small groups rather than one long cloud.
- Recommended group labels: `Core`, `Interface`, `Delivery`
- If a project-specific stack differs, show only the verified overlap on the homepage and move the rest to the relevant case study.

### Number of technologies shown

- Show up to 8 verified technologies on the homepage.
- If fewer than 8 are verified, do not pad the list.
- If more than 8 are verified, keep the homepage to the most relevant 8 and link to the Skills page when ready.

### Responsive behavior

- Desktop: grouped rows or chips
- Tablet: wrapped chips
- Mobile: tightly wrapped chips with comfortable spacing

### Wrapping rules

- Do not force a single-line row that causes overflow.
- Allow labels to wrap naturally.
- Keep group headings above the labels, not inline with them.

### How visitors reach the full Skills page

- A small muted text link may appear in the section header once the Skills page content is verified.
- Until then, do not expose a link that leads to an unfinished skills experience.

### Project mismatch rule

- When technology lists differ between projects, show the verified shared stack on the homepage.
- Keep per-project differences inside the featured project rows and later case studies.

## Resume CTA Blueprint

### Objective

- Give recruiters a direct path to a formal professional summary without duplicating the final contact CTA.

### Layout

- Use a concise bordered band.
- Desktop: text left, CTA right
- Mobile: stacked text and full-width button

### Heading strategy

- Use a direct heading such as `Resume` or `Professional summary`.
- Do not over-explain the section.

### Supporting copy type

- One short sentence, no more than two lines on desktop.
- The copy should state that the resume is the next credibility step after the homepage proof.

### Button treatment

- Use a secondary-style button or strong text-link CTA.
- The button should remain visually distinct from the primary hero CTA.

### Destination behavior

- If a verified resume PDF exists, link to it directly or to the approved resume page.
- If the destination is still pending, do not fabricate a download action.

### Behavior while the resume is `Pending owner input`

- Show `Pending owner input` in muted text.
- Replace the button with a non-clickable label or hide the button entirely.
- Do not point to a placeholder file.

### Desktop and mobile distinction

- This section should feel like a professional utility band, not another hero.
- Keep it smaller and more compressed than the final contact CTA.

## Final Contact CTA Blueprint

### Objective

- Close the homepage with a clear professional next step.

### Heading strategy

- Use `Contact` or a similarly direct phrase.
- Avoid `Hire Me` unless later explicitly approved.
- Avoid availability claims.

### Supporting text

- Short, factual, and calm.
- Do not mention response times or schedules.
- Do not invent availability.

### CTA label

- `Contact`

### Surface treatment

- Use a restrained bordered band with a muted or elevated surface.
- The band should be visually distinct from the resume CTA.
- Borders should remain the primary separation device.

### Width

- Use the `74rem` narrative tier.

### Vertical spacing

- Give the contact band compact spacing so it reads like a closing action.
- Keep the band slightly tighter than the hero and featured projects.

### Mobile behavior

- Stack the heading, supporting text, and CTA vertically.
- Keep the CTA full width.
- Avoid secondary actions inside the band.

### Alternative contact channels

- Do not add alternative channels in the homepage closing band by default.
- Keep verified social and email details for the Contact page and shell/footer areas when approved.

### Footer relationship

- The final CTA must not duplicate the footer.
- The footer should remain a factual global shell element, not a second call-to-action band.

## Typography Blueprint

The homepage should continue using the approved `Geist` and `IBM Plex Mono` system.

| Homepage role        | Design-system role                           | Desktop behavior                       | Tablet behavior          | Mobile behavior                              | Max lines                 | Monospace use                         |
| -------------------- | -------------------------------------------- | -------------------------------------- | ------------------------ | -------------------------------------------- | ------------------------- | ------------------------------------- |
| Hero eyebrow         | `type-label`                                 | Uppercase, small, muted or accent      | Same                     | Same                                         | 1                         | No                                    |
| Hero heading         | `type-display`                               | Large, name-first, may wrap to 2 lines | Slightly smaller scaling | Wrap naturally, 2-3 lines                    | 2 on desktop, 3 on mobile | No                                    |
| Hero body            | `type-body-large`                            | 1 or 2 paragraphs max                  | Same                     | Shortened, one paragraph preferred           | 3                         | No                                    |
| Section eyebrow      | `type-label`                                 | Accent blue                            | Same                     | Same                                         | 1                         | No                                    |
| Section heading      | `type-section-title`                         | Short and strong                       | Same                     | Slightly smaller by clamp                    | 2                         | No                                    |
| Section introduction | `type-body`                                  | Readable intro copy                    | Same                     | Trimmed to preserve rhythm                   | 3                         | No                                    |
| Project title        | `type-subsection-title` or `type-card-title` | Strong but not oversized               | Same                     | Can step down to `type-card-title` if needed | 2                         | No                                    |
| Project summary      | `type-body-small`                            | 2-3 lines                              | 2-3 lines                | 2 lines preferred on 320px                   | 3                         | No                                    |
| Technology label     | `type-metadata` or `type-caption`            | Small, compact, scannable              | Same                     | Wraps naturally                              | 1-2                       | Only when label is technical metadata |
| Status metadata      | `type-metadata`                              | Monospace, calm, factual               | Same                     | Same                                         | 1                         | Yes                                   |
| CTA text             | button text                                  | Clear and direct                       | Same                     | Full-width when stacked                      | 1                         | No                                    |
| Caption              | `type-caption`                               | Small supporting note                  | Same                     | Same                                         | 2                         | No                                    |

### Wrapping rules

- Headings may wrap, but they should not become long wall text.
- Project summaries should be trimmed before they become dense.
- Technology labels should wrap before they cause overflow.
- No monospace styling should be used for promotional copy.

### Readable line lengths

- Hero intro: about `38rem` max width
- Section intros: about `48rem` max width
- Project summaries: roughly `32rem` to `36rem`
- Narrative body: about `48rem` max width

## Surface, Border, and Accent Rules

### Main background

- Keep the approved dark-neutral background.
- Preserve the subtle radial and linear background treatment from the design system.

### Elevated surface

- Use for the hero preview and any high-priority CTA band.
- Use sparingly.

### Muted surface

- Use for credibility strips, metadata surfaces, and supporting text panels.
- Avoid putting every section inside a muted card.

### Borders

- Borders provide most of the homepage separation.
- Default border color is for structural separation.
- Strong borders are reserved for emphasis, active states, and hover feedback.

### Accent blue

- Restrained only.
- Use for primary action emphasis, section eyebrow accents, and small proof highlights.
- Do not flood the page with blue.

### Status colors

- Use only for explicit status labels.
- Never let color replace text.
- Keep the labels factual.

### Shadows

- Keep shadows minimal.
- Use soft shadows only on buttons, cards, and the hero preview if needed.
- Do not introduce glow.

### Selection and focus styles

- Keep the current selection treatment.
- Keep the focus ring highly visible.
- Do not replace focus states with subtle color changes.

### Surface hierarchy rule

- Not every section should live inside a card.
- Avoid excessive nested surfaces.
- Avoid alternating full-bleed backgrounds without a reason tied to information hierarchy.

## Media and Screenshot Standards

### Preferred file types

- Prefer `WebP` or `AVIF` when the source is available and text remains legible.
- Use `PNG` when sharp interface detail matters.
- Do not fabricate image assets.

### Homepage aspect ratios

- Hero lead screenshot: `16:10`
- Featured project screenshot: `16:10`
- Supplemental mobile screenshot: `9:16`
- Do not stretch screenshots to force a ratio.

### Minimum source dimensions

- Desktop screenshot source: at least `1600px` wide
- Mobile screenshot source: at least `1170px` wide
- Higher source resolution is acceptable if the file is still optimized

### Desktop versus mobile screenshots

- Desktop screenshots should be the primary homepage proof asset.
- Mobile screenshots are secondary evidence and fit better inside case studies.

### Cropping rules

- Crop from the top or center depending on the most meaningful content.
- Preserve the visible UI structure.
- Do not crop away the feature the user needs to judge the project.

### Border treatment

- Screenshots should live inside a thin border with a radius matching the card system.
- No fake browser chrome.
- No thick device mockups unless later approved.

### Background treatment

- Put screenshots on a muted or default surface.
- Keep the background simple so the UI itself remains the focus.

### Alt text requirements

- Describe the project and the visible state.
- Mention whether the screenshot is desktop or mobile when helpful.
- Do not write decorative alt text for meaningful proof images.

### Loading strategy

- Hero screenshot: eager and high priority only if approved screenshots exist
- Featured project screenshots: lazy load below the fold
- Reserve space before the image arrives

### Responsive image behavior

- Use responsive sizes that match the selected container widths.
- Prevent layout shift by reserving aspect-ratio boxes.
- Avoid oversized images on mobile.

### Placeholder behavior

- Use a labeled placeholder if a screenshot is not yet approved.
- Do not leave an empty box.

### Montage imagery

- A montage is acceptable only if it is composed of approved screenshots.
- The montage should stay restrained and should not become decorative collage art.

## Motion Opportunities

Motion is planning only. No motion should be required to understand the homepage.

| Motion opportunity           | Purpose                                            | Duration category | Reduced-motion fallback                       | CSS sufficient?         | Defer?                                 |
| ---------------------------- | -------------------------------------------------- | ----------------- | --------------------------------------------- | ----------------------- | -------------------------------------- |
| Hero preview hover lift      | Give the screenshot frame a small tactile response | Fast              | Keep the frame static                         | Yes                     | No                                     |
| Project media hover          | Indicate that the case-study row is interactive    | Fast              | Remove the lift and maintain the border state | Yes                     | No                                     |
| CTA feedback                 | Reinforce clickability on buttons                  | Fast              | Keep only color and border change             | Yes                     | No                                     |
| Section entrance             | Add a subtle reveal if later needed                | Standard          | No entrance motion                            | Maybe, but not required | Yes, unless a later phase proves value |
| Technology-label interaction | Light hover and focus feedback on labels or links  | Fast              | Static labels with clear focus ring           | Yes                     | No                                     |

### Motion rules

- Motion must never be decorative alone.
- Motion must never block content comprehension.
- Reduced-motion preferences must keep the page fully understandable.
- Large animation libraries are not justified for this phase.

## Accessibility Blueprint

### Heading hierarchy

- One `h1` in the hero.
- One `h2` for each major section.
- `h3` only for subordinate card titles or embedded subsections.
- No heading levels should be skipped for style reasons.

### Landmark usage

- Keep the global header, main, and footer landmarks intact.
- Sections should have meaningful headings.
- Do not introduce duplicate landmarks.

### Reading order

- Hero
- Credibility strip
- Featured projects
- Capabilities
- Engineering approach
- Selected technologies
- Resume CTA
- Final contact CTA

### Focus order

- Skip link first
- Header navigation next
- Hero CTAs next
- Project links next
- Remaining links in the same order they appear visually

### CTA naming

- Use explicit names only.
- `View Projects`
- `View Resume`
- `Read case study`
- `Open live demo`
- `Contact`

### Image alt text

- Every meaningful screenshot needs an informative alt description.
- Decorative images should not be added if they do not carry information.

### Status-label semantics

- Status labels should be text-first, not color-first.
- If an icon is used later, it must not replace the label.

### Contrast

- Keep the Phase 2 dark-neutral palette.
- Ensure text and borders remain readable at all widths.

### Touch targets

- Keep interactive controls at or above the established control heights.
- Buttons should remain easy to tap on 320px screens.

### Reduced motion

- Respect reduced-motion at the CSS level.
- No essential information may depend on animation.

### Keyboard behavior

- Every homepage action must be reachable by keyboard.
- Hover-only affordances are not acceptable for essential content.

### Link distinction

- Links must look like links.
- Buttons must look like buttons.
- Case-study and demo actions must be visually distinct from passive metadata.

### Content at 200% zoom

- Sections must reflow without horizontal scroll.
- CTA rows should stack before they become cramped.
- Project rows should collapse cleanly.

### Small-screen reading order

- Keep the DOM order aligned with the visual order.
- Do not place critical proof after unrelated filler.

## Performance Blueprint

### Server Component boundaries

- The homepage should remain server-rendered by default.
- No new client component is needed for the homepage sections themselves.
- Keep interactive shell behavior in the shell, not the page.

### Client Component limits

- Avoid introducing client state unless a section truly needs it.
- Do not add motion libraries for the homepage blueprint phase.

### Image loading priorities

- Only the above-the-fold hero screenshot may be prioritized.
- All other screenshots should lazy-load.
- Reserve dimensions before load.

### Hero image priority rules

- Use `priority` only when a real, approved hero screenshot exists.
- If screenshots are pending, do not prioritize a placeholder.

### Lazy-loading strategy

- Featured project screenshots below the hero should lazy-load.
- Do not load more than the visible proof assets early.

### Font usage

- Keep `Geist` and `IBM Plex Mono`.
- Do not add extra homepage font families.

### Avoiding layout shift

- Reserve screenshot aspect ratios.
- Keep CTA heights stable.
- Keep card padding stable across states.

### Avoiding unnecessary JavaScript

- Prefer static composition.
- Avoid animation libraries and client-side state that do not improve the proof flow.

### Screenshot compression

- Compress screenshots aggressively enough to keep them fast, but not so much that UI text becomes illegible.
- Prefer modern image formats where possible.

### Lighthouse expectations

- The homepage should continue to support very strong Lighthouse results.
- Performance should be protected by static rendering, reserved image sizes, and limited client-side logic.

## Exact Responsive Wireframes

### 1536px and wider

| Width   | Container                                                                           | Padding                     | Hero                          | Projects                   | Capabilities | Technology wrapping        | Footer relationship                    | Shortening rules                   | Never hide                         |
| ------- | ----------------------------------------------------------------------------------- | --------------------------- | ----------------------------- | -------------------------- | ------------ | -------------------------- | -------------------------------------- | ---------------------------------- | ---------------------------------- |
| 1536px+ | Hero and featured: `97.5rem`; standard: `88rem`; narrative: `74rem`; prose: `48rem` | `clamp(1rem, 2vw, 1.75rem)` | `44% / 56%` split, two-column | Alternating editorial rows | 2 columns    | 2-3 rows of compact labels | Footer remains separate and full width | Long summaries may trim to 2 lines | Project names, status labels, CTAs |

```text
[Header]
[Hero text block]                               [Project-preview composition]
[Credibility strip]
[Row 1: HRH Shopping screenshot/text]
[Row 2: BookEasy screenshot/text]
[Row 3: TaskOrbit screenshot/text]
[Capabilities 2-up]
[Engineering approach]
[Technology groups]
[Resume CTA]
[Final contact CTA]
[Footer]
```

### 1440px

| Width  | Container          | Padding                     | Hero              | Projects                                              | Capabilities | Technology wrapping        | Footer relationship                   | Shortening rules              | Never hide                        |
| ------ | ------------------ | --------------------------- | ----------------- | ----------------------------------------------------- | ------------ | -------------------------- | ------------------------------------- | ----------------------------- | --------------------------------- |
| 1440px | Same caps as above | `clamp(1rem, 2vw, 1.75rem)` | `44% / 56%` split | Alternating editorial rows with `58% / 42%` row split | 2 columns    | 2 rows or 3 compact groups | Footer stays below a full section gap | Summaries may trim to 2 lines | Project names, CTAs, proof labels |

```text
[Hero left text]                                [Hero right preview]
[Credibility strip]
[Project 01 row]
[Project 02 row]
[Project 03 row]
[Capabilities]
[Engineering approach]
[Technologies]
[Resume CTA]
[Contact CTA]
[Footer]
```

### 1280px

| Width  | Container                                              | Padding                    | Hero                                     | Projects                                         | Capabilities                       | Technology wrapping | Footer relationship | Shortening rules                         | Never hide                |
| ------ | ------------------------------------------------------ | -------------------------- | ---------------------------------------- | ------------------------------------------------ | ---------------------------------- | ------------------- | ------------------- | ---------------------------------------- | ------------------------- |
| 1280px | Same caps, but hero and featured sections remain broad | `clamp(1rem, 2vw, 1.5rem)` | Slightly tighter split, still two-column | Rows can stack text under media sooner if needed | 2 columns if cards remain readable | Tags wrap earlier   | Footer unchanged    | Project summaries may shorten to 2 lines | Screenshots, labels, CTAs |

```text
[Hero]
[Credibility strip]
[Project row 1]
[Project row 2]
[Project row 3]
[Capabilities 2-up]
[Approach]
[Technologies]
[Resume CTA]
[Contact CTA]
[Footer]
```

### 1024px

| Width  | Container                                                                             | Padding                                             | Hero                                    | Projects                                                                                           | Capabilities                                               | Technology wrapping        | Footer relationship                    | Shortening rules                                           | Never hide                                      |
| ------ | ------------------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------- | -------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------- |
| 1024px | Hero and featured sections still use the broad caps, but content collapses more often | `1.25rem` effective minimum from the existing clamp | Stacked or near-stacked with text first | Each project becomes a vertical row with image first or text first depending on screenshot quality | 2 columns if the cards remain balanced, otherwise 1 column | Tags wrap to multiple rows | Footer remains below the last CTA band | Summary text may shorten and project metadata may compress | Project numbers, status labels, case-study CTAs |

```text
[Hero text]
[Hero preview]
[Credibility strip]
[Project 01]
[image]
[text]
[Project 02]
[image]
[text]
[Project 03]
[image]
[text]
[Capabilities]
[Approach]
[Technologies]
[Resume CTA]
[Contact CTA]
[Footer]
```

### 768px

| Width | Container                                   | Padding   | Hero    | Projects                    | Capabilities        | Technology wrapping                            | Footer relationship   | Shortening rules                                      | Never hide                                              |
| ----- | ------------------------------------------- | --------- | ------- | --------------------------- | ------------------- | ---------------------------------------------- | --------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| 768px | Standard page padding, full available width | `1.25rem` | Stacked | Single-column project stack | Single-column cards | Wrapped tags with more vertical breathing room | Footer stays separate | Headings and summaries may shorten, but not disappear | Screenshot placeholders, case-study CTAs, status labels |

```text
[Hero]
[Preview]
[Credibility strip]
[Project 01]
[Screenshot]
[Summary]
[CTAs]
[Project 02]
[Screenshot]
[Summary]
[CTAs]
[Project 03]
[Screenshot]
[Summary]
[CTAs]
[Capabilities]
[Approach]
[Technologies]
[Resume CTA]
[Contact CTA]
[Footer]
```

### 430px

| Width | Container                                  | Padding        | Hero                           | Projects            | Capabilities | Technology wrapping | Footer relationship                     | Shortening rules              | Never hide                                          |
| ----- | ------------------------------------------ | -------------- | ------------------------------ | ------------------- | ------------ | ------------------- | --------------------------------------- | ----------------------------- | --------------------------------------------------- |
| 430px | Full width with the standard clamp padding | `1rem` minimum | Stacked with tight CTA spacing | One project per row | One column   | Compact tag wrap    | Footer remains after a full section gap | Summaries may trim to 2 lines | Project title, status, screenshot placeholder, CTAs |

```text
[Hero]
[Preview or placeholder]
[Credibility strip]
[Project 01]
[Project 02]
[Project 03]
[Capabilities]
[Approach]
[Technologies]
[Resume CTA]
[Contact CTA]
[Footer]
```

### 390px

| Width | Container                     | Padding | Hero                                      | Projects                                               | Capabilities | Technology wrapping             | Footer relationship | Shortening rules                                   | Never hide                                         |
| ----- | ----------------------------- | ------- | ----------------------------------------- | ------------------------------------------------------ | ------------ | ------------------------------- | ------------------- | -------------------------------------------------- | -------------------------------------------------- |
| 390px | Full width with clamp padding | `1rem`  | Name, intro, stacked CTA, compact preview | One project per row with screenshot first if available | One column   | Tags wrap to 2-3 rows as needed | Footer unchanged    | Hero intro may shorten, project summaries may trim | Project titles, case-study CTA, private repo label |

```text
[Eyebrow]
[H1]
[Intro]
[View Projects]
[View Resume]
[Preview]
[Credibility strip]
[Project 01]
[Project 02]
[Project 03]
[Capabilities]
[Approach]
[Technologies]
[Resume CTA]
[Contact CTA]
[Footer]
```

### 360px

| Width | Container                     | Padding | Hero                  | Projects            | Capabilities | Technology wrapping                        | Footer relationship | Shortening rules                             | Never hide                                   |
| ----- | ----------------------------- | ------- | --------------------- | ------------------- | ------------ | ------------------------------------------ | ------------------- | -------------------------------------------- | -------------------------------------------- |
| 360px | Full width with clamp padding | `1rem`  | Tightest stacked hero | One project per row | One column   | Tags wrap aggressively but remain readable | Footer unchanged    | Reduce nonessential copy before hiding proof | Status labels, CTAs, screenshot placeholders |

```text
[Hero]
[CTA stack]
[Preview]
[Credibility strip]
[Project 01]
[Project 02]
[Project 03]
[Capabilities]
[Approach]
[Technologies]
[Resume CTA]
[Contact CTA]
[Footer]
```

### 320px

| Width | Container                     | Padding | Hero                 | Projects                                               | Capabilities                | Technology wrapping                                 | Footer relationship | Shortening rules                                                      | Never hide                                                   |
| ----- | ----------------------------- | ------- | -------------------- | ------------------------------------------------------ | --------------------------- | --------------------------------------------------- | ------------------- | --------------------------------------------------------------------- | ------------------------------------------------------------ |
| 320px | Full width with clamp padding | `1rem`  | Minimal but complete | One project per row with the screenshot still reserved | One column, tightly stacked | Only the most relevant labels should remain visible | Footer unchanged    | Shorten summaries first, then group labels, never hide CTAs or status | Name, title, project proof, CTA labels, pending placeholders |

```text
[Eyebrow]
[H1]
[Intro trimmed]
[View Projects]
[View Resume]
[Preview or Pending owner input]
[Credibility strip]
[Project 01]
[Project 02]
[Project 03]
[Capabilities]
[Approach]
[Technologies]
[Resume CTA]
[Contact CTA]
[Footer]
```

## Required Owner Assets and Content

Everything below is needed before Phase 4B can be implemented cleanly.

| Item                                    | State                                   |
| --------------------------------------- | --------------------------------------- |
| Approved project display order          | `Pending owner input`                   |
| Proposed neutral project order          | `HRH Shopping`, `BookEasy`, `TaskOrbit` |
| HRH Shopping summary                    | `Pending owner input`                   |
| HRH Shopping status                     | `Pending owner input`                   |
| HRH Shopping technology list            | `Pending owner input`                   |
| HRH Shopping cover screenshot           | `Pending owner input`                   |
| HRH Shopping live-demo URL              | `Pending owner input`                   |
| HRH Shopping implementation limitations | `Pending owner input`                   |
| BookEasy summary                        | `Pending owner input`                   |
| BookEasy status                         | `Pending owner input`                   |
| BookEasy technology list                | `Pending owner input`                   |
| BookEasy cover screenshot               | `Pending owner input`                   |
| BookEasy live-demo URL                  | `Pending owner input`                   |
| BookEasy implementation limitations     | `Pending owner input`                   |
| TaskOrbit summary                       | `Pending owner input`                   |
| TaskOrbit status                        | `Pending owner input`                   |
| TaskOrbit technology list               | `Pending owner input`                   |
| TaskOrbit cover screenshot              | `Pending owner input`                   |
| TaskOrbit live-demo URL                 | `Pending owner input`                   |
| TaskOrbit implementation limitations    | `Pending owner input`                   |
| Resume PDF or destination               | `Pending owner input`                   |
| Verified social links                   | `Pending owner input`                   |
| Professional email                      | `Pending owner input`                   |
| Optional trust evidence                 | `Pending owner input`                   |
| Any approved status labels              | `Pending owner input`                   |

## Phase 4B Implementation Boundaries

### Phase 4B may implement

- The final homepage hero
- The credibility / positioning strip
- The featured-project section
- The capabilities section
- The engineering approach section
- The selected technologies section
- The resume CTA band
- The final contact CTA band
- Homepage-specific metadata copy for the homepage only

### Phase 4B remains prohibited from implementing

- About page implementation
- Full Skills page implementation
- Projects index page implementation
- Case-study pages
- Resume page implementation
- Contact form implementation
- Testimonials
- Analytics
- CMS
- Authentication
- Database
- Unverified content
- New dependencies without approval

### Phase 4B must preserve

- The locked global shell from Phase 3A
- The approved Phase 2 design system
- The proof-led homepage direction
- `Pending owner input` placeholders where evidence is missing
- The temporary preview only until implementation is explicitly authorized

## Phase 4A Readiness Check

- Homepage composition is defined.
- Section rhythm is defined.
- Width strategy is defined.
- Hero strategy is defined.
- Featured-project strategy is defined.
- Capability and technology presentation are defined.
- Accessibility and performance constraints are defined.
- Responsive behavior is defined.
- Owner-input checklist is defined.
- Phase 4B boundaries are explicit.
- No invented content was added.

## Summary

This blueprint is now ready to guide Phase 4B implementation once the owner inputs are filled and implementation is explicitly authorized.
