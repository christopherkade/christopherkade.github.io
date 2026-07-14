# Common axe-core violations and their root-cause fixes

Read this when a scan comes back with violations. Each entry gives the axe rule ID you'll see in the test output, why the quick ARIA patch is the wrong instinct, and what to actually change.

## `button-name` / `link-name` — Button or link has no accessible name

**Wrong fix:** `<div onClick={...} aria-label="Submit">Submit</div>`
**Right fix:** Use a real `<button>` or `<a>` element. Native elements are keyboard-focusable and announced correctly by every screen reader by default — a `div` with `onClick` isn't even reachable via Tab without also adding `tabIndex`, `role="button"`, and manual `onKeyDown` handling for Enter/Space. You'd be reimplementing what `<button>` already does for free, and it's easy to miss a case (like Space-bar activation).

## `label` — Form input has no associated label

**Wrong fix:** `aria-label="Email"` on the input, with no visible label in the UI.
**Right fix:** A real `<label htmlFor="email">Email</label>` paired with `<input id="email">`. This benefits sighted users too (larger click target, visible instructions) — `aria-label` should be reserved for cases where a visible label genuinely can't fit (e.g., an icon-only search button), not as a substitute for one that's just inconvenient to lay out.

## `color-contrast` — Insufficient contrast between text and background

**Wrong fix:** Don't add ARIA at all for this one — it's tempting to treat every violation as an ARIA problem, but this is purely a design-token issue. Adjust the color values (text or background) until the contrast ratio meets 4.5:1 for normal text or 3:1 for large text (WCAG AA).
**Right fix:** Adjust the actual color values. If the project uses a design system or Tailwind config, fix it at the token level so the whole app benefits, not just the one component that got scanned.

## `image-alt` — Image missing alt text

**Wrong fix:** `alt=""` on every image just to silence the scanner.
**Right fix:** `alt=""` is only correct for genuinely decorative images (a background flourish, an icon next to text that already says the same thing). For anything that conveys information — a chart, a product photo, an avatar — write a real description of what the image shows or means in context.

## `aria-*-valid-attr-value` / `aria-required-attr` / `aria-allowed-attr` — Malformed or misused ARIA

This category is a strong signal that ARIA was added by pattern-matching rather than understanding the spec — usually from a previous over-correction (see the SKILL.md section on this). The fix is almost never "add another ARIA attribute" — it's to look at what the element already has and either remove the incorrect attribute or replace the whole pattern with the native element it was trying to imitate (e.g., a custom `role="checkbox"` div that's missing `aria-checked` state management → just use `<input type="checkbox">`).

## `landmark-one-main` / `region` — Content not contained in a landmark region

**Wrong fix:** Wrapping everything in a single `<div role="main">` without checking whether the rest of the page structure makes sense.
**Right fix:** Use native landmark elements — `<main>`, `<nav>`, `<header>`, `<footer>`, `<aside>` — which map to ARIA landmarks automatically. In a Next.js App Router layout, this usually means checking that `layout.tsx` wraps page content in a single `<main>` and that repeated navigation lives in a `<nav>`.

## `heading-order` — Heading levels skip (e.g. h1 straight to h3)

**Wrong fix:** Changing an `<h3>` to `<h2>` purely to satisfy the linter, without checking if it actually represents that level of the document outline.
**Right fix:** Check the actual document outline your page renders. Headings should nest in order because screen reader users frequently navigate by jumping between headings — a skipped level makes them think content is missing. If a component (like a Card) is reused at different heading depths on different pages, make the heading level a prop rather than hardcoding it.

## `focus-order-semantics` / keyboard-trap issues (often not caught by axe — flag for manual review)

axe-core is weak at detecting focus order and keyboard traps because it can't simulate real Tab navigation across a full interaction. If you built anything with a custom focus management pattern (a modal, a dropdown, a multi-step form), call this out explicitly in the manual review handoff (step 6 of the main loop) rather than assuming a clean axe run covers it.