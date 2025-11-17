import { test, expect } from '@playwright/test';

test('Keyboard Events', async ({ page }) => {
   await page.goto("https://www.google.com/");

   await page.waitForTimeout(5000);
   await page.locator("//textarea[@id='APjFqb']").fill("Vrinda Goel");

await page.waitForSelector("//li[@role='presentation']")
   await page.keyboard.press("ArrowDown")

      await page.keyboard.press("ArrowDown")
            await page.keyboard.press("ArrowDown")

       await page.waitForTimeout(5000)

         await page.keyboard.press("Enter");


})


test('Keyboard Events using loop', async ({ page }) => {
   await page.goto("https://www.google.com/");
   await page.locator("//textarea[@id='APjFqb']").fill("Vrinda Goel");


await page.waitForSelector("//li[@role='presentation']")
const elements= page.$$("//li[@role='presentation']")

   for(let i=0; i<elements.length; i++)

    {
const text= await elements[i].textContent() //.textContent() — is a Playwright method that retrieves the text inside 
// that element, just like the DOM property element.textContent in JavaScript.
if(text.textContent('cornell'))
    {

    await elements[i].click()
        break;
    }
          await page.waitForTimeout(5000)
    }
})