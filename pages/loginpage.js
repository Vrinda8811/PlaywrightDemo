import {expect} from '@playwright/test';

class LoginPage
{
constructor(page)
{
    this.page=page
this.header = "//h2[normalize-space()='Sign In']"
    this.username="#email1"
    this.password="#password1"
    this.loginButton="button[type='submit']"
}

async loginToApplication()
{
    await this.page.fill(this.username, "admin@email.com")
    await this.page.fill(this.password, "admin@123")
    await this.page.click(this.loginButton)
}
async verifySignin() {
  await expect(this.page.locator(this.header)).toBeVisible();
}



}

module.exports= LoginPage;
