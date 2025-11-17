// tests/sample.spec.js
const { test, expect } = require('@playwright/test');

test("My First Test", async ({ page }) => {
  console.log("Running first test");
  expect(12).toBe(12);
});

test("My Second Test", async ({ page }) => {
  console.log("Running second test");
  expect(100).toBe(101);
});

test("My Third Test", async ({ page }) => {
  console.log("Running third test");
  expect(2.0).toBe(2.0);
  expect(true).toBeTruthy()

});

test("My Fourth Test", async ({ page }) => {
  console.log("Running third test");
 
  expect(false).toBeFalsy()

});