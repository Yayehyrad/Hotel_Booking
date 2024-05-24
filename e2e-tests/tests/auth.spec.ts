import { test, expect } from "@playwright/test";

const FRONT_URI = "http://localhost:5173/";

test("has to allow the user to sign in", async ({ page }) => {
  await page.goto(FRONT_URI);
  await page.getByRole("link", { name: "Sign In" }).click();
  // await expect(page.getByRole("paragraph", { name: "Log In" })).toBeVisible();
  await page.locator("[name=email]").fill("hupuzoz@mailinator.com");
  await page.locator("[name=password]").fill("Pa$$w0rd!");
  await page.getByRole("button", { name: "Sign up →" }).click();
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();
});

test("should allow the user to regerster", async ({ page }) => {
  const testEmail = `test_register_${
    Math.floor(Math.random() * 90000) + 10000
  }@test.com`;
  await page.goto(`${FRONT_URI}/regester`);

  // await expect(
  //   page.getByRole("paragraph", { name: "create an account" })
  // ).toBeVisible();
  await page.locator("[name=firstName]").fill("test_firstName");
  await page.locator("[name=lastName]").fill("test_lastName");
  await page.locator("[name=email]").fill(testEmail);
  await page.locator("[name=password]").fill("password123");
  await page.locator("[name=confirmPassword]").fill("password123");
  await expect(page.getByRole("button", { name: "Sign Out" })).toBeVisible();

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();
});
