# Design System

## 1. Status

Phase 2 design system is implemented as a reusable foundation and validated through the temporary `Design System Preview` homepage.

## 2. Visual Direction

- Premium
- Modern
- Calm
- Confident
- Technical
- Precise
- Minimal
- Trustworthy

The theme is a single dark-neutral palette. It uses layered navy, charcoal, and slate values rather than pure black.

## 3. Semantic Color Tokens

All component-facing styling uses semantic CSS variables.

### Colors

- `--background`: `222 31% 8%`
- `--background-elevated`: `223 28% 11%`
- `--surface`: `223 27% 14%`
- `--surface-muted`: `223 23% 17%`
- `--foreground`: `220 38% 97%`
- `--foreground-secondary`: `215 23% 83%`
- `--foreground-muted`: `215 13% 63%`
- `--border`: `219 16% 24%`
- `--border-strong`: `219 17% 35%`
- `--accent`: `217 100% 62%`
- `--accent-hover`: `217 100% 68%`
- `--accent-foreground`: `220 38% 97%`
- `--success`: `158 64% 47%`
- `--warning`: `39 92% 59%`
- `--error`: `4 89% 67%`
- `--focus-ring`: `217 100% 70%`
- `--selection`: `217 100% 62%`

## 4. Typography

The implementation uses `next/font` with:

- Primary font: `Geist`
- Monospace font: `IBM Plex Mono`

Typography roles:

- `--text-display`: `clamp(2.75rem, 7vw, 5rem)`
- `--text-page-title`: `clamp(2rem, 4vw, 3.25rem)`
- `--text-section-title`: `clamp(1.4rem, 2.25vw, 1.9rem)`
- `--text-subsection-title`: `clamp(1.1rem, 1.6vw, 1.35rem)`
- `--text-card-title`: `clamp(1rem, 1.25vw, 1.1rem)`
- `--text-body-large`: `clamp(1rem, 1.15vw, 1.125rem)`
- `--text-body`: `1rem`
- `--text-body-small`: `0.9375rem`
- `--text-label`: `0.8125rem`
- `--text-caption`: `0.75rem`
- `--text-metadata`: `0.8125rem`
- `--text-code`: `0.875rem`

Supporting typography rules:

- Line height is intentionally generous for readability.
- Letter spacing is tightened on display text and widened on labels.
- Monospace is used only for metadata and code-style labels.
- Responsive scaling is capped to keep mobile headings readable.

## 5. Spacing

Spacing is controlled by semantic tokens and compact utility groups.

### Layout Spacing Tokens

- `--page-padding`: `clamp(1rem, 2vw, 1.75rem)`
- `--section-spacing`: `clamp(2.5rem, 5vw, 4.75rem)`

### Component Gaps

- `Stack`: `xs`, `sm`, `md`, `lg`, `xl`
- `Cluster`: `xs`, `sm`, `md`, `lg`
- Button and card spacing use component-level padding tokens rather than ad hoc values.

## 6. Containers

Container strategy:

- `--container-prose`: `42rem`
- `--container-content`: `72rem`
- `--container-wide`: `84rem`

Utility classes:

- `.container-prose`
- `.container-page`
- `.container-wide`

Usage:

- `container-prose` for readable long-form copy.
- `container-page` for standard page content.
- `container-wide` for broader media or denser preview layouts.

## 7. Radius

Radius is restrained and intentionally not pill-heavy.

- `--radius-sm`: `0.5rem`
- `--radius-md`: `0.85rem`
- `--radius-lg`: `1.15rem`
- `--radius-xl`: `1.5rem`

Usage:

- Small radius for compact controls.
- Medium radius for buttons and icon buttons.
- Large radius for cards and major surfaces.

## 8. Borders And Shadows

Border policy:

- Default separation relies on borders.
- Strong borders are reserved for emphasis and interaction.
- Accent borders are used only where they clarify a state.

Shadow tokens:

- `--shadow-soft`
- `--shadow-lift`

Shadow policy:

- Soft and low opacity only.
- Shadows support elevation, not decoration.
- No glow effects.

## 9. Motion

Motion tokens:

- `--motion-fast`: `140ms`
- `--motion-standard`: `220ms`
- `--motion-slow`: `320ms`
- `--ease-standard`: `cubic-bezier(0.2, 0, 0, 1)`

Motion principles:

- Fast
- Subtle
- Purposeful
- Interruptible
- Performance-conscious
- Reduced-motion aware

Implemented motion:

- Button hover state transitions
- Focus-state transitions
- Small surface and border feedback

Not implemented in Phase 2:

- Page transitions
- Section reveal animations
- Motion-heavy interactions

## 10. Accessibility Behavior

The design system supports:

- Visible `:focus-visible` states
- WCAG AA contrast goals for text and controls
- Reduced-motion preferences
- Comfortable touch targets
- Semantic disabled states
- No color-only meaning
- Readable line height
- Selection styling
- Keyboard-accessible controls

## 11. Foundation Components

Implemented Phase 2 primitives:

- `Button`
- `AppLink`
- `IconButton`
- `Badge`
- `Tag`
- `Card`
- `Separator`
- `VisuallyHidden`
- `PageContainer`
- `Section`
- `SectionHeader`
- `Stack`
- `Cluster`
- `Prose`

Usage rules:

- Use semantic HTML first.
- Prefer server-rendered markup unless interactivity requires a client component.
- Keep variants predictable and minimal.
- Do not introduce decorative complexity without content need.
- Avoid adding more primitives until a later phase genuinely requires them.

## 12. Responsive Principles

The design system is validated across:

- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px
- Wide desktop screens

Responsive rules:

- Preserve readable line lengths.
- Avoid document-level horizontal overflow.
- Keep controls comfortably tappable.
- Allow preview content to compress cleanly on mobile.
- Maintain controlled width on large displays.

## 13. Package Policy

No additional Phase 2 package was required.

This phase deliberately deferred:

- `shadcn/ui`
- `Framer Motion`
- `lucide-react`

Reason:

- The foundation requirements were satisfied with the existing stack plus CSS and typed primitives.

## 14. Pending Owner Inputs

The following remain pending owner input and are intentionally not invented in Phase 2:

- Final portfolio content
- Final case-study facts
- Final resume content
- Final social links
- Final project evidence
- Final brand imagery
- Final accent preference beyond the approved direction
