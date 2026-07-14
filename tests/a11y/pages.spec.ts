import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { getBlogPosts } from '../../app/blog/utils'

// Fixed routes for this site — extend when a new top-level page is added.
const staticPages = [
  { name: 'home', path: '/' },
  { name: 'blog index', path: '/blog' },
  { name: 'projects', path: '/projects' },
]

for (const { name, path } of staticPages) {
  test(`${name} page should not have any automatically detectable accessibility issues`, async ({
    page,
  }) => {
    await page.goto(path)

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()

    expect(results.violations, formatViolations(results.violations)).toEqual([])
  })
}

// Dynamic /blog/[slug] pages — sample a few real posts rather than all ~40,
// since a violation in the shared MDX renderer will show up on every one.
const sampleSlugs = getBlogPosts()
  .slice(0, 3)
  .map((post) => post.slug)

for (const slug of sampleSlugs) {
  test(`blog post /blog/${slug} should not have any automatically detectable accessibility issues`, async ({
    page,
  }) => {
    await page.goto(`/blog/${slug}`)

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()

    expect(results.violations, formatViolations(results.violations)).toEqual([])
  })
}

// Makes failures readable in the terminal instead of dumping raw JSON —
// shows rule id, impact, and the offending selector for each violation.
function formatViolations(violations: import('axe-core').Result[]): string {
  if (violations.length === 0) return ''
  return violations
    .map((v) => {
      const nodes = v.nodes.map((n) => `    - ${n.target.join(' ')}`).join('\n')
      return `[${v.impact ?? 'unknown'}] ${v.id}: ${v.help}\n${nodes}`
    })
    .join('\n\n')
}
