import { test, expect } from '@playwright/test';

test('Verify file upload', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');
//await page.locator("#file-upload").setInputFiles("/Users/B0316759/Desktop/KB.png");
await page.locator("#file-upload").setInputFiles("./uploads/KB.png");

await page.locator("//input[@id='file-submit']").click();

expect (await page.locator("//h3")).toHaveText("File Uploaded!");

  await page.waitForTimeout(4000);

})