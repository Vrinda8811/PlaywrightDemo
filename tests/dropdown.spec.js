import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');


await page.locator("//select[@id=\"state\"]").selectOption({label:"Goa"})
  await page.waitForTimeout(2000);
await page.locator("//select[@id=\"state\"]").selectOption({value:"Himachal Pradesh"})
  await page.waitForTimeout(2000);
await page.locator("//select[@id=\"state\"]").selectOption({index:4})
  await page.waitForTimeout(2000);

const value=await page.locator("//select[@id=\"state\"]").textContent()
console.log("All dropdown values"+value);
await expect(value.includes("Goa")).toBeTruthy()
})