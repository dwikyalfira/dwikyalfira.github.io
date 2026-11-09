# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mixed audience with no single primary group: recruiters and hiring managers, potential freelance clients, fellow developers, and friends or acquaintances. They mostly arrive with no fixed task, to find out who Dwiky is and what he has made. Treat the site as a personal home on the internet rather than a page aimed at one buyer.

## Product Purpose

The personal website of Muhammad Dwiky Alfira, a software engineering graduate who builds Android apps and websites and also works on design. It brings together his projects, background, and photography in one place.

Success is any of these: a visitor gets a clear picture of who he is, looks through his work (opens a project, tries TPLive, reads the code on GitHub), or gets in touch by email or LinkedIn. None of them is ranked above the others.

## Positioning

Undecided. The owner chose not to state what sets him apart. Do not invent a differentiator or a positioning line. Describe him through plain facts and the work itself.

## Operating Context

- Live at https://dwikyalfira.github.io, hosted on GitHub Pages and built with Astro. The site rebuilds every day, so external data stays current.
- Site copy is in English.
- Gallery photos come from the owner's Pexels collection and are fetched at build time, so adding a photo to that collection is the way to publish it.
- Duolingo streak, Padang weather, and air quality are live data from external sources. Each is hidden or left blank if its source fails.

## Capabilities and Constraints

- Pages: home, work (project list and project detail), about, gallery, 404.
- Gallery viewer with a click-to-magnify lens and swipe navigation on touch screens.
- The Pexels API provides no camera data, so photo-level camera details are not shown. The gallery carries one general note about the cameras used instead.
- The owner's Pexels profile cannot be read automatically, only a named collection through the API.
- The Duolingo endpoint is unofficial and may stop working without notice.
- Deploy only when the owner says the batch of changes is complete. Do not push after each change.

## Brand Commitments

- **Voice:** low-key, plain, and factual. Never bold or overclaiming. Avoid marketing language such as "seamless", "user-centric", or "crafting". Modest statements such as "I'm still learning a lot" are welcome.
- **Identity on the page:** no personal photo of the owner, on the site or in project imagery. The logo is an icon with no letters.
- **Hero:** states his name and "Software engineer." with no mention of where he is from and no availability status. Padang appears only in the footer.
- **Privacy:** no phone number or home address anywhere. The CV is source material only and is never published or offered for download. `_referensi/` stays out of the repository.
- **Motion:** simple, minimal, and light. The owner has rejected moving text marquees, 3D tilt on cards, mouse-following effects, and custom JS cursors that feel heavy. On cards, only the card itself moves, never the imagery inside it.
- **Visual constraints stated by the owner:** simple, abstract, and aesthetic, with reference to gedearya.com, devanshusharma.com, and tibudiyanto.club.

## Evidence on Hand

- **Projects** in `src/content/projects/`: TPLive (open-source TransPadang bus tracker, live web app and GitHub), KataMata (final thesis, cataract detection on Android, GitHub), BSK Web (live company website for PT Batusangkar Indah Transport), BCare (Bangkit Academy capstone, Android, GitHub), PNP Mobile (UI/UX redesign exercise in Figma).
- **Background** in `src/data/site.ts`: Software Engineering at Politeknik Negeri Padang (GPA 3.73 / 4.00), Bangkit Academy 2023 Mobile Development (graduated with distinction), IISMA exchange at ISEP, Portugal (Sep 2024 to Feb 2025).
- **Languages:** Indonesian (native), English (professional), German (beginner).
- **Photography:** the owner's own photos on Pexels, mostly shot on a Lumix GX85, with a few from a Pixel 8 and a Xiaomi 12 Lite.
- **Source documents** (local only, private): CV and portfolio PDF in `_referensi/`.
- **Absent, and must not be fabricated:** testimonials, client quotes, employment history beyond what is listed, user or download counts, performance metrics for any project, press, and awards beyond those listed.

## Product Principles

1. Let the work speak. State what was built and what it does, and leave the judgment to the visitor.
2. Accuracy over impressiveness. Every claim must trace back to the CV, portfolio, a repository, or the owner's own words.
3. Serve every visitor equally. Do not reorganize the site around one audience or one conversion goal.
4. Keep it personal. Photography and small live details are part of who he is, and they sit alongside the professional work without apology.
5. Restraint by default. When in doubt, remove rather than add.
