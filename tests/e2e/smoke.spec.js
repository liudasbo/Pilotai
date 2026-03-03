const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;

test("main navigation works", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Built around the aircraft");

  await page.getByRole("link", { name: "Activities", exact: true }).first().click();
  await expect(page).toHaveURL(/\/activities$/);

  await page.getByRole("link", { name: "Aircraft", exact: true }).first().click();
  await expect(page).toHaveURL(/\/aircraft$/);
});

test("contact form validates on empty submit", async ({ page }) => {
  await page.goto("/contact-us");

  await page.getByRole("button", { name: "Send" }).click();

  await expect(page.getByText("Please fix the highlighted fields.")).toBeVisible();
});

test("newsletter rejects invalid email", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/activities");

  await page
    .getByRole("heading", { name: "Our Newsletter" })
    .first()
    .scrollIntoViewIfNeeded();

  const newsletterInput = page.getByPlaceholder("Email Address").first();
  await newsletterInput.fill("invalid");
  await page.getByRole("button", { name: "Subscribe to newsletter" }).first().click();

  await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
});

test("home page has no critical accessibility violations", async ({ page }) => {
  await page.goto("/");

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa"])
    .analyze();

  const criticalViolations = accessibilityScanResults.violations.filter(
    (violation) => violation.impact === "critical"
  );

  expect(criticalViolations).toEqual([]);
});
