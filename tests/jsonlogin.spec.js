const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../testlogin.json"))); // stringify converts JS object to string

test.describe("Data Driven Login Test", () => {

  for (const data of testdata) {

    test.describe(`Login test for user: ${data.username}`, () => {

    test(`Login test for user ID: ${data.id}`, async ({ page }) => 
         {
        await page.goto("https://freelance-learn-automation.vercel.app/login");

        await page.locator("//input[@id='email1']").fill(data.username);
        await page.locator("//input[@id='password1']").fill(data.password);

//        await page.pause(); // for debugging, remove when done
      });

    });

  }

});
