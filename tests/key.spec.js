import { test, expect } from '@playwright/test';

test('Keyboard Events', async ({ page }) => {
   await page.goto("https://www.google.com/");

   await page.waitForTimeout(5000);
   await page.locator("//textarea[@id='APjFqb']").fill("Vrinda Goelya!");

   await page.keyboard.press("ArrowLeft")
   await page.keyboard.down("Shift");
      for (let i = 0; i <6; i++)
      {
      await page.keyboard.press('ArrowLeft');
}
await page.keyboard.up('Shift');
await page.waitForTimeout(5000);
})