const { test, expect } = require('@playwright/test');

test('working with Load States', async ({ page }) => {

await page.goto("https://freelance-learn-automation.vercel.app/login")
await page.getByText("New user? Signup").click()
//we need add some loader wait state here if we do not do that- our count will will be 0 and test will fail

await page.waitForLoadState("networkidle")

const count=await page.locator("//input[@type='checkbox']").count() //no of elemnents matching the target

expect(count).toBe(6)










})