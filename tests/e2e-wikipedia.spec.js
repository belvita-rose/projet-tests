const { test, expect } = require('@playwright/test');

test('Recherche sur Wikipedia', async ({ page }) => {
    await page.goto('https://www.wikipedia.org/');
    await page.locator('input[name="search"]').fill('Playwright');
    await page.locator('button[type="submit"]').click();
    const title = await page.title();
    expect(title).toContain('Playwright');
});
