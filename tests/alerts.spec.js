import { test, expect } from '@playwright/test';

test.skip('Handle Alert', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on('dialog', async (d) => //page on is an event listener that triggers whenever a JavaScript dialog box appears on a web page
{
expect(d.type()).toContain("alert")
expect(d.message()).toContain("I am a JS Alert")
await page.waitForTimeout(5000)
await d.accept()
})
   await page.locator("button[onclick='jsAlert()']").click()
})





test('Handle Confirm Box', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on('dialog', async (dialogWindow) => //page on is an event listener that triggers whenever a JavaScript dialog box appears on a web page
{
expect(dialogWindow.type()).toContain("confirm")
expect(dialogWindow.message()).toContain("I am a JS Confirm")
await page.waitForTimeout(5000)
await dialogWindow.dismiss()
})
   await page.locator("button[onclick='jsConfirm()']").click()
})






test('Handle prompt Box', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
page.on('dialog', async (dialogWindow) => //page on is an event listener that triggers whenever a JavaScript dialog box appears on a web page
{
expect(dialogWindow.type()).toContain("prompt")
expect(dialogWindow.message()).toContain("I am a JS prompt")
await dialogWindow.accept("Vrinda")
})
   await page.locator("button[onclick='jsPrompt()']").click()
   await page.waitForTimeout(5000)

})