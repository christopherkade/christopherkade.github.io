---
name: a11y-shift-left-testing
description: Use whenever UI in this Next.js portfolio/blog is built, edited, or reviewed and accessibility hasn't been verified yet — after changes to app/page.tsx, app/blog/, app/projects/, or app/components/*, or when asked to check accessibility, run a11y tests, audit for WCAG, or review a component/page. Also trigger on mentions of Playwright + axe-core, screen readers, ARIA, or WCAG. Proactively suggest a scan after any non-trivial JSX change rather than waiting to be asked.
---

# Shift-Left Accessibility Testing (Playwright + axe-core)

Automated axe-core checks catch ~1/3 of WCAG issues (missing labels, bad contrast, invalid ARIA, missing landmarks). They don't catch reading order, focus-trap feel, or whether a real screen reader experience makes sense. Run the automated pass first as a fast filter, then hand off for manual review — never present a clean axe run as "fully accessible."

## Project setup (already wired up)

- Config: [playwright.config.ts](../../playwright.config.ts) — chromium only, `webServer` auto-starts `npm run dev` against `http://localhost:3000`.
- Tests: [tests/a11y/pages.spec.ts](../../tests/a11y/pages.spec.ts).
- Run via `npm run test:a11y` (or `npx playwright test`). UI mode: `npm run test:a11y:ui`.

If `@playwright/test` or `@axe-core/playwright` are ever missing from `package.json`, reinstall with:

```bash
npm install -D @playwright/test @axe-core/playwright
npx playwright install --with-deps chromium
```

This repo pins `next: "canary"`, which can trigger a false-positive `ERESOLVE` against `@vercel/analytics`'s peer range even though it's satisfied. If that happens, use `--legacy-peer-deps` for that one install — it's a pre-existing floating-version quirk, not a real conflict.

## Routes to cover

Static-ish Next.js App Router site (deployed via [.github/workflows/nextjs.yml](../../.github/workflows/nextjs.yml)). Known routes:

- `/` — home ([app/page.tsx](../../app/page.tsx))
- `/blog` — post index ([app/blog/page.tsx](../../app/blog/page.tsx))
- `/blog/[slug]` — dynamic, one page per MDX file in [app/blog/posts/](../../app/blog/posts/). Don't hardcode slugs — pull them from `getBlogPosts()` in [app/blog/utils.ts](../../app/blog/utils.ts) and sample rather than scanning all ~40 posts every run.
- `/projects` — [app/projects/page.tsx](../../app/projects/page.tsx)

Shared components live in [app/components/](../../app/components/) (`nav.tsx`, `footer.tsx`, `mdx.tsx`, `posts.tsx`, `projects.tsx`, `ThemeSwitch.tsx`). A violation in one of these shows up on every page that renders it — if you touched one, re-scan all four routes above, not just the page you were editing.

## The loop

1. **Identify what changed** — which route(s) or shared component were touched this session.
2. **Run the scan**: `npm run test:a11y` (edit [tests/a11y/pages.spec.ts](../../tests/a11y/pages.spec.ts) if a new route needs coverage).
3. **Triage by impact**: fix `critical`/`serious` violations first (unlabeled inputs, insufficient contrast, keyboard traps) before `moderate`/`minor`.
4. **Fix the root cause, not the symptom.** Reach for the correct native HTML element first (`<button>` not `<div onClick>`, real `<label>` not a floating span). Only add ARIA when no native element expresses the same semantics — see [references/common-fixes.md](references/common-fixes.md) for the specific rule IDs you'll hit most and the preferred fix for each. Needing more than one or two ARIA attributes to silence a single violation is a sign you're patching the wrong layer.
5. **Re-run** until `npm run test:a11y` is green for everything touched.
6. **Hand off for manual review**: tabbing through focus order, an actual screen reader pass (VoiceOver) on the changed UI, and checking dynamic content/error messages read sensibly aloud. A clean axe run means the mechanical checks passed, nothing more.

## Adding a new test case

Follow the existing pattern in [tests/a11y/pages.spec.ts](../../tests/a11y/pages.spec.ts): a loop over fixed routes, plus a separate loop/sample over `getBlogPosts()` for dynamic `/blog/[slug]` pages. Use `AxeBuilder({ page }).analyze()` and assert `violations` equals `[]`.

## CI

[.github/workflows/nextjs.yml](../../.github/workflows/nextjs.yml) only builds/deploys — it does not run a11y tests. To gate PRs, add a separate workflow (only if the user asks for it):

```yaml
# .github/workflows/a11y.yml
name: Accessibility
on: [pull_request]
jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci --legacy-peer-deps
      - run: npx playwright install --with-deps chromium
      - run: npm run test:a11y
```

## Pitfalls specific to this repo

- **Syntax-highlighted code blocks** (via `sugar-high`, rendered through [app/components/mdx.tsx](../../app/components/mdx.tsx)) are a recurring source of `color-contrast` violations in token colors, and `scrollable-region-focusable` violations on horizontally-scrolling `<pre>` blocks missing `tabindex="0"`. Check these first when a blog post page fails.
- **Empty/loading/error states** aren't a major concern here (mostly static MDX content), but if `ThemeSwitch.tsx` or any future interactive component gains one, scan that state too, not just the happy path.
- **Over-fixing with ARIA to make the scanner pass** is the most common way this goes wrong — check [references/common-fixes.md](references/common-fixes.md) before adding a second ARIA attribute to satisfy one violation.