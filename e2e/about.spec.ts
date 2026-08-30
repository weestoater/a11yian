import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#/about");
  });

  test("should render with correct heading", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toContainText("About A11y");

    const ian = page.locator("h1 .ian");
    await expect(ian).toContainText("ian");
  });

  test("should display full-width image", async ({ page }) => {
    const img = page.locator("img.img-full");
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute("alt", /A11y is a numeronym/);
  });

  test("should have lede paragraph", async ({ page }) => {
    const lede = page.locator("p.lede");
    await expect(lede).toContainText("Accessibility subject matter expert");
  });

  test("should have multiple paragraphs of content", async ({ page }) => {
    const paragraphs = page.locator("section.hero p");
    await expect(paragraphs).toHaveCount(2);
  });

  test("should navigate back to Home", async ({ page }) => {
    const homeLink = page.locator('a:has-text("Home")');
    await homeLink.scrollIntoViewIfNeeded();
    await homeLink.click();
    await expect(page).toHaveURL("/#/");
    await expect(page.locator("h1")).toContainText(
      "Accessible, inclusive web experiences",
    );
  });
});
