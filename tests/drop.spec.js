import { test, expect } from '@playwright/test';

test('Verify Rajasthan or Kerala exists in the state dropdown', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');

  // Wait for the dropdown to be visible
  const dropdown = page.locator('#state');
  await dropdown.waitFor({ state: 'visible' });

  // Get all option elements under dropdown
  const allOptions = await dropdown.locator('option').elementHandles();  //Gets all <option> elements as handles (like WebElements).

  let ddStatus = false;

  // Loop through all <option> elements
  for (let i = 0; i < allOptions.length; i++) {
    const option = allOptions[i];
    const text = await option.textContent();

    console.log('Dropdown option:', text);

    // Check if text includes Rajasthan or Kerala
    if (text && (text.includes('Rajasthan') || text.includes('Kerala'))) {
      ddStatus = true;
      break;
    }
  }

  // Final assertion
  expect(ddStatus).toBeTruthy();
await page.locator("#hobbies").selectOption(['Playing', 'Reading'])
  await page.waitForTimeout(5000);


});
