
const { test, expect } = require('@playwright/test');
test("Verify Application Title", async ({ page }) => {
 await page.goto("https://www.google.com/")
  const url = await page.url();
  console.log(url)
  await expect(page).toHaveTitle("Yahoo")
});
