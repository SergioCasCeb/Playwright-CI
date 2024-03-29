// @ts-check
const { test, expect } = require('@playwright/test');

//Open the playground app before any test is runned
test.beforeEach(async ({ page }) => {
  await page.goto('/')
});

test('has title', async ({ page }) => {
  // await page.goto('http://localhost:5100');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Test page/);
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
