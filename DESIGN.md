# Design Brief: Shail Hikers — Summer Breeze

## Overview
Shail Hikers website: world-class Himalayan trekking and yatra experiences. Summer Breeze light palette with clean, airy, premium aesthetic. White primary backgrounds, warm sand alternates, coral dominant accent, sun highlights, sky blue nature elements, ink-black text. Premium editorial tone conveying adventure, trust, and warmth.

## Color Palette
| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Primary BG | white | #FFFFFF | Main page backgrounds, maximum clean space |
| Alternate BG | sand | #E6D8C4 | Section alternates every other section, card surfaces, warm depth |
| Primary Accent | coral | #F88379 | All primary CTAs, active states, key badges, links |
| Hover State | coral-deep | #D9604F | CTA hover, interactive feedback |
| Pressed | coral-blood | #B84030 | CTA active/pressed state |
| Light Accent | coral-light | #FBBCB5 | Tags, chips, subtle backgrounds |
| Highlight | sun | #FFEB3B | Hero accents, season badges, "BEST" callouts, feature highlights |
| Sun Hover | sun-deep | #F5C800 | Hover on sun elements |
| Sun Light | sun-light | #FFF9C4 | Light yellow backgrounds, hero overlay wash |
| Nature/Weather | sky | #82C8E5 | Altitude indicators, weather icons, map accents, secondary icons |
| Sky Hover | sky-deep | #5BAED0 | Hover on sky elements |
| Sky Light | sky-light | #D6EFF8 | Light blue backgrounds, altitude section washes |
| Body Text | ink | #1A1A1A | All body text, headings on light backgrounds |
| Secondary Text | charcoal | #2E2E2E | Subheadings, secondary content |
| Muted Text | graphite | #4A4A4A | Muted text, labels |
| Placeholder | ash | #7A7A7A | Placeholder text, secondary labels |
| Dividers | stone | #B0A898 | Subtle dividers on white backgrounds |
| Eco/Nature | forest | #2D6A4F | Nature tags, eco badges, Leave No Trace |
| Eco Text | forest-light | #52B788 | Eco tag text, success states |
| Premium/Pricing | gold | #D4A843 | Pricing text, star ratings, premium highlights only |
| Gold Hover | gold-light | #F0C869 | Hover on gold elements |

## Typography
- Display: Cormorant Garamond (400, 700, 400i, 700i) — headings, hero text, luxury editorial
- Body: DM Sans (400, 500, 600) — body text, UI labels, modern clean
- Accent: Italiana (serif) — hero taglines, premium moments

## Structural Zones
| Zone | Background | Border | Depth |
|------|-----------|--------|-------|
| Navbar | white | stone bottom | card elevation |
| Hero | white+sand blur overlay | none | full-screen |
| Content Section (odd) | white | none | flat |
| Content Section (even) | sand | none | warm layer |
| Cards | white | sand-deep | elevated |
| Footer | white | stone top | flat |
| Map Section | dark overlay on map | none | exception: semi-transparent dark only |
| Video Overlay | dark semi-transparent | none | exception: semi-transparent dark only |

## Layout Approach
Card-based, editorial, clean grid. Generous whitespace. Sections alternate white ↔ sand for rhythm. No dark backgrounds except semi-transparent overlays on hero/video/maps. Mobile-first responsive. Navbar sticky on scroll with minimal elevation.

## Component Patterns
- CTAs: coral background, white text, rounded-md, hover→coral-deep with shadow lift
- Badges: coral-light background, coral text, rounded-full, compact padding
- Cards: white bg, sand border, rounded-lg, hover→shadow-md + subtle lift
- Inputs: white bg, stone border, rounded-sm, focus→coral ring
- Alerts/Warnings: sun-light background, gold text on pricing, forest-light on success

## Motion & Animation
- Page transitions: GSAP curtain wipe in coral
- Scroll reveals: Framer Motion y:40→0, opacity 0→1, 0.3s ease-out
- Interactive elements: smooth color transition 0.2s ease
- Cherry blossom petals (hero only): subtle float animation, 30 petals, coral-light+sand opacity 0.15–0.3
- Micro-interactions: button press scale 0.95, card hover shadow lift

## Constraints
- NEVER use dark backgrounds globally (only semi-transparent overlays on hero, video, map sections)
- NEVER use grey as primary text (always ink #1A1A1A for contrast)
- NEVER mix color families (no coral + sky in same component unless semantic)
- Gold reserved EXCLUSIVELY for pricing and star ratings
- Stick to 3–5 core colors per section

## Key Differentiators
- Premium light aesthetic unlike any Indian travel site
- Coral warmth + sun highlights create optimism and energy
- Editorial typography (Cormorant Garamond) elevates perceived quality
- Section alternation (white/sand) creates visual rhythm without clutter
- Sky blue ties abstract altitude/weather to real mountain experience

## Favicon & Metadata
- Favicon: mountain peak SVG in coral #F88379 on white
- Theme-color: coral #F88379
- Mobile status bar: light (white theme)

## Accessibility
- AA+ contrast: ink on white (13.5:1), ink on sand (11.2:1), coral on white (5.8:1)
- Prefers-reduced-motion: respected (animations disabled)
- Text colors never rely on opacity alone
- Interactive elements: 48×48px minimum tap targets

## Anti-Patterns to Avoid
- Generic safe blue (#3B82F6) for CTAs — use coral exclusively
- Dark backgrounds on main content — save for overlays only
- Uniform rounded corners — vary by context (0, 4px, 12px, 24px, full)
- Default Tailwind shadows — use custom shadow hierarchy if needed
- Hero text in anything but sun yellow + white + coral
- Price text in anything but gold #D4A843
