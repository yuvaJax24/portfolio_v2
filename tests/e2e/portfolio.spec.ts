import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.route('https://api.github.com/**', (route) => route.abort())
  await page.goto('/')
})

test('renders the full portfolio and uses verified GitHub fallback', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Building Digital Experiences That Matter.' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Intelligent Airport Smart Gate System' })).toBeAttached()
  await expect(page.getByText('Verified fallback snapshot')).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth)).toBe(true)
})

test('navigation and external profile links are correct', async ({ page, isMobile }) => {
  if (isMobile) await page.getByRole('button', { name: 'Open menu' }).click()
  await page.getByRole('button', { name: 'Projects', exact: true }).click()
  await expect(page.locator('#projects')).toBeInViewport()
  await expect(page.getByRole('link', { name: /@yuvaJax24/ })).toHaveAttribute('href', 'https://github.com/yuvaJax24')
  await expect(page.getByRole('link', { name: /LinkedIn/ }).last()).toHaveAttribute('href', 'https://www.linkedin.com/in/yuvaprasathg')
})

test('gallery is keyboard accessible', async ({ page }) => {
  const gallery = page.getByLabel(/Featured project gallery/)
  await gallery.focus(); await gallery.press('ArrowRight')
  await expect(page.getByText('02 / 05')).toBeVisible()
})

test('animated section headings remain visible while scrolling', async ({ page }) => {
  for (const name of ['Ideas into reliable products.', 'Experience through real products.', 'Selected work.', 'The tools I use.']) {
    const heading = page.getByRole('heading', { name })
    await heading.scrollIntoViewIfNeeded()
    await expect(heading).toBeVisible()
    await expect(heading).not.toHaveCSS('opacity', '0')
  }
})

test('reduced motion is respected without console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (message) => message.type() === 'error' && !message.text().includes('Failed to load resource') && errors.push(message.text()))
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.reload()
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto')
  expect(errors).toEqual([])
})
