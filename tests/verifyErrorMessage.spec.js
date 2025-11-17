const { test, expect } = require('@playwright/test');
test.use({viewport:{width:1200, height:1000}})
test("Verify Error Message", async ({ page }) => {
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

 console.log(await page.viewportSize().width)
 console.log(await page.viewportSize().height)

await page.getByPlaceholder("Username").fill("Admin",{delay:7000});
  await page.getByPlaceholder("Password").fill("admin129000993",{delay:100});
await page.locator("//button[@type='submit']").click();

const errorMessage= await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()  //capture error
console.log("Error is:",errorMessage);

expect(errorMessage.includes("Invalid")).toBeTruthy();
expect(errorMessage==="Invalid credentials").toBeTruthy();;


})