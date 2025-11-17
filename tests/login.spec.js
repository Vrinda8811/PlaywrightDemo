const { test, expect } = require('@playwright/test');
test("Valid Login", async ({ page }) => {
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  const url = await page.url();
  await page.getByPlaceholder("Username").fill("Admin",{delay:7000});
  await page.getByPlaceholder("Password").fill("admin123",{delay:100});
await page.locator("//button[@type='submit']").click();
await page.waitForTimeout(5000);
await expect(page).toHaveURL(/dashboard/);
await page.locator("//img[@class='oxd-userdropdown-img']").click();
await page.getByText("Logout").click();
})