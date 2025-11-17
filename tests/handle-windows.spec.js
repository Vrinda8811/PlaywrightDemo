const { test, expect } = require('@playwright/test');

test('working ith multiple tabs', async ({ browser }) => {
const context= await browser.newContext() //kind of separate env

/*You’re right — your test opens a new tab, not a whole new browser window.
But Playwright’s design requires a context to manage pages (tabs).
Every page must belong to a context — even if it’s just one.

So even when you “open a tab,” it lives inside a context, not directly inside the browser.*/

const page= await context.newPage(); 


await page.goto("https://freelance-learn-automation.vercel.app/login")

const [newPage]=  await Promise.all
([
 context.waitForEvent("page"),
page.locator("div[class='container-child'] a:nth-child(4) svg path").click()
])

await newPage.locator("//input[@id='email']").fill("vrinda.goel@gmail.com")
await newPage.waitForTimeout(5000)
await newPage.close() //closes the current tab

await page.locator("//input[@id='email1']").fill("admin@gmail.com")
await page.waitForTimeout(5000)


})