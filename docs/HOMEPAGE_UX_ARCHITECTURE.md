# Homepage UX Architecture

## 1. Purpose

This document defines the homepage information architecture and UX strategy for Phase 4 implementation.

It is planning-only. It does not implement homepage code, change the temporary Design System Preview, or authorize Phase 4 work.

## 2. Homepage Goals

### Primary business objective

Convert first-time visitors into high-confidence prospects by showing that Mir Shahadut Hossain can plan, build, document, and ship production-quality software.

### Recruiter objective

Help recruiters and hiring managers quickly confirm:

- The owner identity is clear
- The work is professional and production-minded
- There is credible project evidence
- Resume and contact paths are easy to find

### Freelance-client objective

Help freelance clients quickly confirm:

- Relevant project evidence exists
- The work is visually polished and responsive
- Private repositories do not block evaluation because case studies and screenshots are available
- There is a simple path to contact

### Technical-review objective

Help technical founders and engineering reviewers quickly confirm:

- The homepage is backed by a coherent information architecture
- The project evidence is organized and factual
- Technical depth is visible through case studies, technology lists, and engineering approach

### Primary conversion action

`View Projects`

### Secondary conversion actions

- `View Resume`
- `Contact`
- `Open Live Demo` on a project card when available

### Owner-approved presentation decisions

- Public professional title: `Full Stack Web Developer`
- Working homepage introduction: `I build modern, responsive, and production-focused web applications with thoughtful user experiences, clean architecture, and maintainable code.`
- Primary homepage CTA: `View Projects`
- Secondary homepage CTA: `View Resume`
- Hero visual direction: project-preview composition, not a profile photograph
- Profile photograph: may be used later on the About page
- Availability statement: do not display until explicitly approved
- Hero social-icon row: do not display
- Homepage social visibility: restrained
- GitHub and LinkedIn: may appear in the shell, footer, or contact areas once verified
- Upwork, Fiverr, and email: should primarily belong on the Contact page once verified
- Trust should come from factual project evidence, screenshots, architecture, technologies, case studies, and honest status labels
- Do not use unverified testimonials, metrics, client claims, or achievement claims

### Visitor understanding targets

Within 5 seconds, the visitor should understand:

- This is Mir Shahadut Hossain’s professional portfolio
- The site is serious, technical, and production-oriented
- Featured projects are immediately available

Within 15 seconds, the visitor should understand:

- Which projects are highlighted
- That the repositories are private and the site uses case studies and screenshots instead of public source links
- That the homepage is organized around proof, not marketing noise

Within 30 seconds, the visitor should understand:

- What kinds of work are shown
- How to review the case studies
- How to move to the resume or contact flow

## 3. Audience Journeys

### Recruiter or hiring manager

1. Hero
2. Featured projects
3. Capabilities
4. Resume CTA
5. Contact CTA

What they need:

- Fast confirmation of identity
- Immediate evidence of shipping ability
- A resume path with minimal friction

### Freelance client

1. Hero
2. Featured projects
3. Engineering approach
4. Live demo or case study
5. Contact CTA

What they need:

- Clear project proof
- Confidence in delivery quality
- A direct path to discussion

### Technical founder or engineering reviewer

1. Hero
2. Featured projects
3. Engineering approach
4. Selected technologies
5. Resume or contact

What they need:

- Architecture clarity
- Technology evidence
- Reasoned presentation, not hype

### Visitor arriving from a resume

1. Hero
2. Featured projects
3. Selected technologies
4. Contact CTA

What they need:

- Rapid validation that the resume maps to real project evidence
- Clear next step if they want follow-up

### Visitor arriving from Upwork or Fiverr

1. Hero
2. Capabilities
3. Featured projects
4. Live demo or case study
5. Contact CTA

What they need:

- A fast read on service-fit
- Evidence that the owner can deliver client-facing work
- A simple contact path

## 4. Final Recommended Section Order

1. Hero
2. Compact credibility / positioning strip
3. Featured projects
4. Core capabilities
5. Engineering approach
6. Selected technologies
7. Resume or professional-summary CTA
8. Final contact CTA

### Why this order

- Hero first because the page must establish identity and relevance immediately.
- Featured projects second because project evidence is the strongest trust signal for this portfolio.
- Capabilities and engineering approach follow because they explain how the work is delivered.
- Technologies come after capability context so the list reads as proof, not decoration.
- Resume and contact are placed late so they are available after the visitor has seen evidence.

## 5. Section-by-Section Specification

### 5.1 Hero

Purpose:

- Establish identity and professional positioning
- Give the page a clear headline and first action

Target audience:

- All audiences

Required factual content:

- Public display name
- Approved professional title or descriptor
- Short approved introduction

Primary message:

- Mir Shahadut Hossain is a Full Stack Web Developer who builds professional software with visible project evidence

CTA:

- Primary: `View Projects`
- Secondary: `View Resume`

Responsive behavior:

- Desktop: two-column layout with text and a project preview visual
- Tablet: stacked text over visual or visual over text depending on width
- Mobile: text first, then one compact visual block or no visual if screenshots are not ready

Accessibility considerations:

- One `h1`
- No image-only meaning
- CTA labels must be explicit
- No availability statement until approved
- No hero social-icon row

Essential for version 1:

- Yes

### 5.2 Compact credibility / positioning strip

Purpose:

- Reinforce trust without adding a marketing-heavy section

Target audience:

- Recruiters
- Technical reviewers
- Freelance clients

Required factual content:

- Private repository disclosure
- Project count or project list
- Screenshot or case-study emphasis
- Resume and contact paths
- Restricted social visibility if verified links are available outside the hero

Primary message:

- Evidence is organized and reviewable even when source repositories are private

CTA:

- Optional short link to projects or case studies

Responsive behavior:

- Desktop: inline chips or short proof points
- Mobile: stacked chips or a compact two-line list

Accessibility considerations:

- No icon-only chips
- Labels must remain readable at 320px

Essential for version 1:

- Yes

### 5.3 Featured projects

Purpose:

- Provide the strongest proof of delivery capability

Target audience:

- All audiences

Required factual content:

- Project name
- Honest status label
- Screenshot or screenshot placeholder
- Brief project summary from owner input
- Technology list from owner input
- Live demo URL where available
- Case study CTA
- Private-repository disclosure
- Implementation boundaries
- Known limitations

Primary message:

- These are the portfolio’s main proof artifacts

CTA:

- `Read case study`
- `Open live demo` when available

Responsive behavior:

- Desktop: three cards in a balanced grid, with one screenshot per project
- Tablet: two-up grid with the third card spanning the full row
- Mobile: stacked cards with screenshot first or summary first, depending on image quality

Accessibility considerations:

- Project names must be clear link targets
- Status labels must not rely on color alone
- Screenshot alt text must describe the project state, not decorate it

Essential for version 1:

- Yes

### 5.4 Core capabilities

Purpose:

- Explain what kinds of work the owner is ready to deliver

Target audience:

- Freelance clients
- Recruiters
- Technical founders

Required factual content:

- Approved capability categories
- Short factual descriptions

Primary message:

- The owner can deliver across the approved scope with a strong UI and engineering foundation

CTA:

- Optional `View Resume`

Responsive behavior:

- Desktop: 2-column or 4-card grid, depending on content density
- Mobile: stacked cards

Accessibility considerations:

- Capability names must be concise and scannable
- Do not use percentages or animated meters

Essential for version 1:

- Yes

### 5.5 Engineering approach

Purpose:

- Explain delivery quality, accessibility, and implementation discipline

Target audience:

- Technical reviewers
- Recruiters

Required factual content:

- Approved workflow or delivery principles
- Accessibility and responsive commitments
- Quality signals that are already supported by the project

Primary message:

- The work is intentional, maintainable, and accessibility-aware

CTA:

- Optional `Read case studies`

Responsive behavior:

- Desktop: narrative block plus a short checklist or bullet list
- Mobile: concise stacked text

Accessibility considerations:

- Keep text readable
- Avoid long paragraphs that become dense on mobile

Essential for version 1:

- Yes

### 5.6 Selected technologies

Purpose:

- Show the practical stack without turning the page into a logo wall

Target audience:

- Technical reviewers
- Hiring managers

Required factual content:

- Only verified technologies from the approved stack and case studies

Primary message:

- The implementation stack is modern, focused, and appropriate

CTA:

- Optional `View Projects`

Responsive behavior:

- Desktop: grouped chips or compact rows
- Mobile: wrapped chips with comfortable spacing

Accessibility considerations:

- Use text labels, not logos alone
- Do not overload the section with decorative icons

Essential for version 1:

- Yes

### 5.7 Resume or professional-summary CTA

Purpose:

- Provide a direct path to deeper credibility evidence

Target audience:

- Recruiters
- Hiring managers
- Resume traffic

Required factual content:

- Resume status
- Download or view destination when approved
- Resume destination or PDF remains `Pending owner input`

Primary message:

- The visitor can move from homepage proof to formal professional summary

CTA:

- `View Resume`

Responsive behavior:

- Desktop: prominent inline card or band
- Mobile: compact stacked CTA block

Accessibility considerations:

- The CTA must have a clear destination label
- Do not promise a download until the resume exists

Essential for version 1:

- Yes

### 5.8 Final contact CTA

Purpose:

- Close the page with a clear next step

Target audience:

- All audiences

Required factual content:

- Contact method or methods
- Verified social links if approved
- Upwork, Fiverr, and email primarily belong on the Contact page once verified

Primary message:

- The owner is reachable through approved channels

CTA:

- `Contact`

Responsive behavior:

- Desktop: final compact CTA band
- Mobile: full-width stacked CTA block

Accessibility considerations:

- The CTA must remain visible and easy to tap
- Avoid multiple competing actions in the final band

Essential for version 1:

- Yes

## 6. Hero Architecture

### Recommended hero structure

- Eyebrow or supporting label: `[Approved professional title]`
- Main heading strategy: name-first heading, with the most important approved positioning in the supporting line
- Supporting paragraph: `[Approved short introduction]`
- Primary CTA: `[Primary CTA label]`
- Secondary CTA: `[Secondary CTA label]`
- Optional trust signal: brief factual proof line

### Content placeholders needed from owner

- `[Approved professional title]`
- `[Approved short introduction]`
- `[Primary CTA label]`
- `[Secondary CTA label]`
- `[Approved trust signal if desired]`

### Recommended visual treatment

- Recommended visual type: project preview
- Not recommended by default: profile image
- Acceptable fallback: no visual until approved screenshots exist

### Why project preview is preferred

- The homepage is proof-led, not personality-led
- Private projects need screenshots and case-study framing more than a headshot
- A project preview supports recruiter, founder, and freelance-client trust faster than a decorative visual

### Recommended desktop composition

- Left: text block
- Right: project preview or screenshot montage
- Text width should remain narrower than the visual block

### Recommended tablet composition

- Text first
- Visual second
- Reduce the visual to one dominant preview if space becomes tight

### Recommended mobile composition

- Text first
- One compact visual, if the owner provides approved screenshots
- Otherwise, omit the visual and keep the CTA block strong

### Maximum content width

- Text column: approximately `720px to 800px`
- Hero wrapper: approximately `1500px to 1560px`

## 7. Featured-Project Strategy

### Initial visibility

- All three featured projects should be visible on the homepage at first launch

### Presentation approach

- Use editorial cards with screenshots, not bare text cards
- Keep the three projects visually equal unless owner-approved priorities later require a hierarchy

### Per-project content

- Project name
- Short approved summary
- Honest status label
- Screenshot or screenshot placeholder
- Technology list
- Case-study CTA
- Live-demo CTA when available
- Private repository disclosure

### Status-label strategy

Use factual labels only, such as:

- `Private repository`
- `Live demo available`
- `Case study available`
- `Pending owner input`
- `Production`
- `Frontend-only`
- `Backend-integrated`

Do not imply completion or public availability unless the owner confirms it.

### Screenshot usage

- Use one primary screenshot per project card
- Prefer desktop screenshots if only one image is available
- Add mobile screenshots in the case study, not necessarily in the card
- If a screenshot is missing, show a labeled placeholder instead of leaving a blank area

### Technology display

- Show a short, scannable technology line
- Avoid a long stack dump on the card
- Put the detailed stack in the case study

### Live-demo behavior

- Show the live-demo CTA only when a verified URL exists
- If no live demo exists, the CTA should be omitted or replaced with `Pending owner input`

### Case-study CTA

- Every featured project should link to its case study
- Case studies are the primary proof path because the repositories are private

### Private-repository disclosure

- State this clearly and calmly on the card or within the metadata line
- Do not make the visitor hunt for it

### Mobile stacking behavior

- Cards stack vertically
- Screenshot comes before the longer supporting copy if the screenshot is strong
- CTA buttons stack beneath the copy

## 8. Capability Presentation

### Recommended grouping

- Frontend engineering
- UI/UX implementation
- Full-stack systems
- Quality and delivery

### Optional group

- Databases only if the owner confirms real project evidence for it

### Why this grouping

- It matches the likely proof structure of the portfolio
- It avoids arbitrary percentages
- It avoids oversized technology-logo walls
- It avoids unsupported seniority claims

### Presentation rule

- Present capability groups as short factual cards or sections, not as performance rankings

## 9. CTA Strategy

### Primary homepage CTA

- `View Projects`

### Secondary homepage CTA

- `View Resume`

### Project-level CTAs

- `Read case study`
- `Open live demo` when available

### Resume CTA

- `View Resume`

### Final contact CTA

- `Contact`

### Best CTA by audience

- Recruiters: `View Projects` first, then `View Resume`
- Freelance clients: `View Projects`, then `Contact`
- Technical reviewers: `Read case study` from project cards, then `View Projects`

### CTA rule

- Do not make the page feel like it has multiple competing primary actions

## 10. Responsive Wireframes

### 1440px desktop

```text
Hero:        text left / project preview right
Credibility:  short horizontal proof strip
Projects:     3-column featured cards
Capabilities: 2-column or 4-card grid
Approach:     narrative block + short checklist
Tech:         compact grouped chips
Resume CTA:   wide single band
Contact CTA:  final band with one clear action
```

### 1024px laptop or tablet landscape

```text
Hero:        stacked or 60/40 split
Credibility: compact inline strip
Projects:    2-column cards, third spans full width
Capabilities: 2-column cards
Approach:    stacked narrative
Tech:        wrapped chips
Resume CTA:  compact band
Contact CTA: compact band
```

### 768px tablet

```text
Hero:        stacked
Credibility: stacked proof points
Projects:    single-column stack with short card heights
Capabilities: single-column cards
Approach:    one-column narrative
Tech:        wrapped chips
Resume CTA:  stacked CTA block
Contact CTA: stacked CTA block
```

### 390px mobile

```text
Hero:        name, intro, CTA stack, small visual if available
Credibility:  short stacked proof points
Projects:     one card per row
Capabilities: one card per row
Approach:     concise copy
Tech:         wrapped chips with ample spacing
Resume CTA:   full-width CTA
Contact CTA:  full-width CTA
```

### 320px small mobile

```text
Hero:        concise headline, short intro, stacked CTAs
Credibility:  minimal proof points only
Projects:     one card per row, screenshot may become the lead element
Capabilities: tightly stacked cards
Approach:     shortened copy
Tech:         reduced chip count
Resume CTA:   full-width CTA
Contact CTA:  full-width CTA
```

### Responsive rules

- No document-level horizontal overflow
- Horizontal padding remains consistent on all widths
- CTA buttons stack before they become cramped
- Screenshots can shrink, but text must stay readable
- Long labels should wrap gracefully

## 11. Wider Homepage Container Strategy

The homepage should feel broader and more confident than the current Design System Preview.

### Proposed section-specific widths

- Hero and major visual sections: `96rem` to `97.5rem` max width
- Featured projects and engineering showcase: `96rem` to `97.5rem` max width
- General homepage content sections: `85rem` to `90rem` max width
- About-style or narrative content: `68rem` to `75rem` max width
- Long-form readable text: `45rem` to `50rem` max width

### Proposed breakpoint behavior

- Below `768px`: all sections use the standard page padding and full available width
- `768px` to `1023px`: sections stack and remain content-first; wide sections should not force multi-column layouts too early
- `1024px` to `1279px`: hero and featured sections begin widening, but text remains bounded
- `1280px` to `1535px`: hero and featured sections reach the confident wide layout
- `1536px` and above: caps stay fixed so content does not stretch uncontrollably

### Planning note

- The current Design System Preview width does not need to change during Phase 3B
- The wider homepage strategy is for Phase 4 implementation
- Section-specific width tokens are preferred over a single universal homepage width

### Recommended implementation tokens for Phase 4

- `--container-home-hero`
- `--container-home-featured`
- `--container-home-standard`
- `--container-home-narrative`
- `--container-home-prose`

## 12. Content Requirements

### Overall homepage content checklist

- Professional title: `Pending owner input`
- Short introduction: `Pending owner input`
- Primary CTA destination: `Pending owner input`
- Resume status: `Pending owner input`
- Resume destination or PDF: `Pending owner input`
- Profile photo decision: `Pending owner input`
- Hero visual decision: `Project preview composition`
- Project summaries: `Pending owner input`
- Project screenshots: `Pending owner input`
- Project statuses: `Pending owner input`
- Project technology lists: `Pending owner input`
- Live-demo URLs: `Pending owner input`
- GitHub link: `Pending owner input`
- LinkedIn link: `Pending owner input`
- Upwork link: `Pending owner input`
- Fiverr link: `Pending owner input`
- Professional email: `Pending owner input`
- Trust evidence: `Pending owner input`
- Availability statement: `Pending owner input`
- Hero social-icon row: `Do not display`
- Homepage social visibility: `Restrained`

### Project-specific content checklist

#### HRH Shopping

- Short summary: `Pending owner input`
- Screenshot: `Pending owner input`
- Status label: `Pending owner input`
- Technology list: `Pending owner input`
- Live demo URL: `Pending owner input`
- Implementation boundaries: `Pending owner input`
- Known limitations: `Pending owner input`

#### BookEasy

- Short summary: `Pending owner input`
- Screenshot: `Pending owner input`
- Status label: `Pending owner input`
- Technology list: `Pending owner input`
- Live demo URL: `Pending owner input`
- Implementation boundaries: `Pending owner input`
- Known limitations: `Pending owner input`

#### TaskOrbit

- Short summary: `Pending owner input`
- Screenshot: `Pending owner input`
- Status label: `Pending owner input`
- Technology list: `Pending owner input`
- Live demo URL: `Pending owner input`
- Implementation boundaries: `Pending owner input`
- Known limitations: `Pending owner input`

### Trust evidence checklist

- Private repository disclosure: `Approved`
- Public source-code links: `Do not publish unless approved`
- Testimonials: `Pending owner input`
- Metrics: `Pending owner input`
- Case-study screenshots: `Pending owner input`
- Client or employer proof: `Pending owner input`
- Hero social-icon row: `Not displayed`
- Homepage social visibility: `Restrained`

## 13. Accessibility Plan

### Heading hierarchy

- One `h1` in the hero
- One `h2` per major section
- Use `h3` only for subordinate items inside cards or subsections
- Do not skip heading levels for styling convenience

### Landmark structure

- One main landmark
- Header and footer remain globally consistent
- Sections should have meaningful labels where needed

### Focus order

- Skip link first
- Header navigation next
- Hero CTAs next
- Featured project links next
- Remaining section links in visual order

### Link clarity

- Every link must name its destination
- Avoid ambiguous labels such as `Learn more`
- Case-study and demo links should identify the project

### Image alt text

- Describe the project and purpose of the image
- Do not use decorative alt text for meaningful screenshots
- If an image is purely decorative, it should be omitted or marked decorative

### Reduced motion

- The homepage should respect reduced-motion preferences
- No motion should be required to understand the page

### Mobile touch targets

- CTAs and cards must remain comfortably tappable
- No critical controls should be smaller than the established control heights

### Contrast

- Maintain the approved dark-neutral palette
- Do not rely on color alone for status or selection

## 14. Performance Plan

### Screenshot optimization

- Use appropriately sized screenshots
- Prefer modern formats when available
- Avoid loading oversized artwork into small cards

### Font loading

- Continue using the approved `next/font` setup
- Do not add additional font families for the homepage

### Image loading

- Use responsive image sizing
- Reserve space to avoid layout shift
- Load only the images needed for the visible section

### Client-side JavaScript limits

- Keep the homepage mostly server-rendered
- Reserve client components for interactions that truly require them
- Do not add animation frameworks for the homepage architecture phase

### Avoiding layout shift

- Reserve screenshot and card dimensions
- Avoid late-loading layout changes
- Keep CTA heights stable

### Overall performance rule

- The homepage should feel fast before animation or embellishment

## 15. Phase 4 Implementation Boundaries

Phase 4 may implement:

- The final homepage hero
- The credibility strip
- The featured-project section
- The capabilities section
- The engineering approach section
- The selected technologies section
- Resume and contact CTAs
- Homepage-specific metadata copy

Phase 4 must not:

- Change the global shell established in Phase 3A unless a defect is proven
- Replace the temporary homepage before implementation begins
- Add unverified claims
- Add new dependencies without approval
- Begin case-study implementation beyond the homepage’s approved summary content
- Introduce a database, CMS, analytics, theme switcher, or contact form

## 16. Open Decisions

The following items still require owner input:

- Resume status and destination
- Profile photo decision
- Availability statement
- Exact GitHub, LinkedIn, Upwork, Fiverr, and email links
- Project summaries for HRH Shopping, BookEasy, and TaskOrbit
- Project screenshots
- Project technology lists
- Live demo URLs
- Implementation boundaries for HRH Shopping, BookEasy, and TaskOrbit
- Known limitations for HRH Shopping, BookEasy, and TaskOrbit
- Verified private/public status wording for each project
- Any trust evidence that should be shown on the homepage

## 17. Approval Checklist

- Homepage goals are documented
- Audience journeys are documented
- Final section order is documented
- Hero architecture is documented
- Featured-project strategy is documented
- CTA strategy is documented
- Responsive wireframes are documented
- Owner content checklist is documented
- Accessibility plan is documented
- Performance plan is documented
- Phase 4 boundaries are documented
- Open decisions are explicit
- No homepage implementation was created
- The Design System Preview remains in place
