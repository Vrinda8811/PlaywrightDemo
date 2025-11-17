const { test, expect } = require('@playwright/test');

test('Handle frames', async ({ page }) => {
   await page.goto("https://docs.oracle.com/javase/8/docs/api/");

   //await page.locator("a[href='java/applet/package-frame.html']").click() //Here we have directly click the element wdout entering in frame

const iframe= await page.frameLocator("//frame[@name='packageListFrame']")
await iframe.locator("a[href='java/applet/package-frame.html']").click()
await page.pause()

})