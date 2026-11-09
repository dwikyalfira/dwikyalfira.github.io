---
name: Muhammad Dwiky Alfira
description: A low-key personal website where one warm light sits on a calm blue-and-paper field.
colors:
  signal-blue: "#1f4fb4"
  marker-red: "#c8322c"
  ring-red: "#e0302b"
  orb-pink: "#ff3d7f"
  orb-blush: "#f5b8c4"
  orb-cream: "#f3efd0"
  paper: "#f6f4ef"
  ink: "#0f1a33"
  slate: "#5a6378"
  hairline: "rgba(15, 26, 51, 0.12)"
  night: "#0a0f1e"
  night-ink: "#edf0f7"
  night-slate: "#98a2b8"
  night-hairline: "rgba(237, 240, 247, 0.12)"
  night-blue: "#86a8ff"
  night-red: "#e0453e"
typography:
  display:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(1.8rem, 3.4vw, 2.4rem)"
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  statement:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.75rem)"
    fontWeight: 400
    lineHeight: 1.4
  body:
    fontFamily: "'DM Sans Variable', system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, Consolas, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.08em"
rounded:
  tile: "10px"
  card: "14px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(64px, 10vw, 120px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.2em"
  button-primary-hover:
    backgroundColor: "{colors.signal-blue}"
    textColor: "#ffffff"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.7em 1.2em"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.75em"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "36px"
  nav-link:
    textColor: "{colors.slate}"
    typography: "{typography.body}"
  nav-link-active:
    textColor: "{colors.ink}"
  project-frame:
    backgroundColor: "{colors.signal-blue}"
    rounded: "{rounded.card}"
  marker:
    backgroundColor: "{colors.marker-red}"
    textColor: "#ffffff"
---

# Design System: Muhammad Dwiky Alfira

## Overview

**Creative North Star: "The Warm Signal"**

A plain, quiet surface with one warm source of light on it. Blue is the identity and paper is the room; the pink-to-cream orb is the small sign that a person is behind the page. It comes straight from the owner's portfolio document, where a field of blue holds a single glow in the corner.

The system is low-key by intent. Large serif headlines do the talking, a single red marker picks out one word, and everything else stays out of the way. Density is low and the pages breathe. Components are soft and tactile: they rest flat, then lift when approached and give slightly when pressed.

Motion is small and has a job. The owner has rejected moving text marquees, 3D tilt on cards, mouse-following effects, and JavaScript cursors that feel heavy, and those rejections are part of the system.

**Key Characteristics:**
- Blue carries the identity; paper and ink carry the reading.
- One red marker per heading, one orb per section.
- Serif display over a humanist sans, with monospace for small labels.
- Flat at rest, tactile on interaction.
- A light film grain over everything, in both themes.
- Light and dark themes share the same structure.

## Colors

A calm paper-and-ink base with blue as the identity colour, red as a sparing marker, and a three-stop warm gradient as the signature light.

### Primary
- **Signal Blue**: The identity colour. Fills project frames and the project detail stage, anchors the logo gradient, colours italic emphasis, and is the hover state of the primary button and links. In dark mode it shifts to **Night Blue** so it stays legible as text.

### Secondary
- **Marker Red**: The highlighter. Sits behind one word or number in a heading, and marks the active navigation underline and small arrows. Dark mode uses **Night Red**.
- **Ring Red**: Reserved for the ring in the logo and favicon.

### Tertiary
- **Orb Pink, Orb Blush, Orb Cream**: The three stops of the orb, always used together as a radial gradient from pink at the centre through blush and cream, fading out through blue. Never used as flat fills or for text.

### Neutral
- **Paper**: Page background in light mode, and text on the primary button.
- **Ink**: Headlines and body text, and the primary button fill. A deep navy rather than black.
- **Slate**: Secondary text, navigation at rest, labels, and chips.
- **Hairline**: Every border and divider, 1px.
- **Night, Night Ink, Night Slate, Night Hairline**: The dark-mode counterparts of Paper, Ink, Slate, and Hairline.

### Named Rules
**The Blue Identity Rule.** When a surface needs to feel like Dwiky's, it turns blue. Red and the orb support blue; they never replace it as the large field.

**The One Marker Rule.** A heading carries at most one red marker, on one word or number. If two things are highlighted, neither is.

**The One Orb Rule.** A section or frame holds at most one orb. It is a light source, not a pattern.

## Typography

**Display Font:** DM Serif Display (with Georgia)
**Body Font:** DM Sans Variable (with system-ui)
**Label/Mono Font:** JetBrains Mono (with ui-monospace)

**Character:** A warm, high-contrast serif set large against a friendly, even sans. The monospace appears only at small sizes, as a quiet technical note.

### Hierarchy
- **Display** (400): Page and hero headlines. Deliberately kept moderate; the owner asked for it to be less bold. Italic in Signal Blue is used for emphasis, as in "Software engineer."
- **Headline** (400): Section headings on the home and about pages, usually with one marker.
- **Title** (400): Project card names and timeline entries.
- **Statement** (400): Single serif lines that list facts, such as strengths and languages.
- **Body** (400): Paragraphs, held to roughly 42 to 62 characters per line depending on context.
- **Label** (400, uppercase): Section tags, metadata, and small captions. Set in sentence case only for the camera note on the gallery page.

### Named Rules
**The Weight Comes From Size Rule.** Headlines stay at weight 400. Hierarchy comes from size and the serif, never from bolding.

**The Monospace Is Small Rule.** JetBrains Mono never appears above label size.

## Layout

A single centred column capped at 1120px with fluid side gutters. Sections are separated by generous vertical space rather than boxes or background changes.

On screens wider than 640px the hero fills most of the first screen, with the orb's core about two-thirds down, bleeding off the right and fading out at the bottom so there is no hard edge. At 640px and below it sizes to its content and aligns to the top, so the first project shows on the first screen. There the orb sits on the right edge just below the buttons. At every width its bright centre stays clear of the text. Project cards sit two across, and on the home page the first card spans the full width. The gallery is a masonry of about three columns; its home page preview drops to two columns on phones. The about highlights divide into three columns separated by hairlines.

Layouts collapse to one column at 820px. Smaller adjustments happen at 720px, 640px, 520px, and 420px, where the logo name is dropped. The sticky header stays 68px tall at every size.

## Elevation & Depth

Flat at rest. Depth comes from hairlines, the blue frames, and the orb's glow. Shadows appear in two situations only: as a response to interaction, and under product screenshots so they read as objects sitting on the blue.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 24px 48px -24px rgba(15, 26, 51, 0.45)`): A project frame on hover or keyboard focus.
- **Screenshot** (`box-shadow: 0 20px 40px -18px rgba(0, 0, 0, 0.55)`): Phone and web screenshots inside a project frame.
- **Floating control** (`box-shadow: 0 10px 30px -16px rgba(15, 26, 51, 0.45)`): The back-to-top button, the one element that always floats over content.
- **Lens** (`box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5)`): The gallery magnifier.

The sticky header and back-to-top button use a translucent page-coloured background with a soft blur instead of a heavy shadow.

### Named Rules
**The Flat-At-Rest Rule.** Interface surfaces carry no shadow until touched. Screenshots are content, so they are exempt.

## Shapes

Soft and friendly, built from three forms: gently rounded frames (14px), fully rounded pills and icon buttons, and true circles for the orb and the logo ring. Screenshots sit at 8 to 14px. Borders are always 1px Hairline. The logo is a rounded square (10px) holding a gradient and a red ring, with no letters.

## Components

Soft and tactile: quiet at rest, responsive to the hand.

### Buttons
- **Shape:** Fully rounded pills.
- **Primary:** Ink fill with Paper text. Used for one main action per view.
- **Ghost:** Transparent with a Hairline border and Ink text.
- **Hover / Focus:** Lifts 2px. The primary fill turns Signal Blue; the ghost border darkens to Ink. Focus shows a 2px Signal Blue outline with a 3px offset.
- **Press:** Scales to 97% over 160ms, combined with any hover lift rather than replacing it.

### Chips
- **Style:** Transparent, Hairline border, Slate text, in monospace at 0.72rem.
- **State:** Static tags for technologies. They are not interactive.

### Cards / Containers
- **Corner Style:** Gently rounded (14px).
- **Background:** Signal Blue, with one orb tucked into the lower right corner.
- **Shadow Strategy:** Flat at rest, Card lift on hover.
- **Behaviour:** Only the frame moves, rising 8px on hover. The screenshots and orb inside stay still.
- **Content:** Up to three phone screens or one web screenshot, with the title, summary, and chips below the frame rather than inside it.

### Navigation
- Slate body-size links at rest, turning Ink on hover and when current. The current page gets a 2px Marker Red underline. The header is sticky, translucent, and blurred, and stays in one row on phones, with the theme toggle as the last item.

### The Orb (signature)
A radial gradient from Orb Pink through Blush and Cream, fading through blue to transparent. In the hero it fades in once, then breathes over 14 seconds, and pauses when off screen. Smaller static versions sit inside project frames and behind the footer.

### The Marker (signature)
Red fill behind white type, tight horizontal padding, square corners. It behaves like a highlighter stroke on a single word or number, and is the only square-cornered element in the system.

### Lightbox (signature)
A near-black full-screen viewer. It fades in over 200ms as the photo settles from 97% scale. Photos can be magnified with a circular lens on click, and the page behind stays locked.

### Grain
A fixed noise layer at 5% opacity over the whole page, in both themes, that takes the digital edge off flat colour.

## Do's and Don'ts

### Do:
- **Do** use Signal Blue for any large identity surface, such as project frames.
- **Do** limit each heading to one Marker Red word or number.
- **Do** keep headlines at weight 400 and build hierarchy through size.
- **Do** keep surfaces flat at rest, and let them lift on hover and give on press.
- **Do** use 1px Hairline borders for structure instead of filled panels.
- **Do** keep motion short and functional, and respect reduced-motion preferences.
- **Do** define colours for both light and dark themes.

### Don't:
- **Don't** add moving text marquees, 3D tilt on cards, or mouse-following effects.
- **Don't** add JavaScript-driven custom cursors. The cursor is a lightweight CSS image.
- **Don't** animate imagery inside a card; only the card itself moves.
- **Don't** use a portrait of the owner anywhere in the design.
- **Don't** put letters back in the logo.
- **Don't** make display headlines louder than the current scale.
- **Don't** use the orb colours as flat fills or text.
