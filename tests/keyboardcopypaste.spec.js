import { test, expect } from '@playwright/test';

test('Keyboard Events', async ({ page }) => {
   await page.goto("https://www.google.com/");

   await page.waitForTimeout(5000);

   await page.locator("//textarea[@id='APjFqb']").fill("Vrinda Goel");

   await page.keyboard.press("Meta+A");

      await page.waitForTimeout(2000);
   await page.keyboard.press("Meta+C");
      await page.keyboard.press("Backspace");
      await page.keyboard.press("Meta+V");

await page.waitForTimeout(5000);

})