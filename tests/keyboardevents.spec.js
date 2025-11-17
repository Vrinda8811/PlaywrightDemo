import { test, expect } from '@playwright/test';

test('Keyboard Events in Playwright', async ({ page }) => {
   await page.goto("https://www.google.com/");

   await page.locator("//textarea[@id='APjFqb']").fill("Vrinda Goel");

   await page.keyboard.press("Enter");

await page.waitForTimeout(5000);

})