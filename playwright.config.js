// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * Uncomment if needed.
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
 retries: process.env.CI ? 2 : 0,
// retries: 2,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: [['html'],['allure-playwright']],

  /* Shared settings for all the projects below */
  use: {
    trace: 'on-first-retry',
    // baseURL: 'http://localhost:3000',
  },

  /* Configure projects for major browsers */
 projects: [
  {
    name: 'chromium',
    use: { 
      ...devices['Desktop Chrome'],
      viewport: { width: 1440, height: 900 },
      screenshot:"on",
      video:"on",
      trace:"on"
    },
  },
],

  
  
});
