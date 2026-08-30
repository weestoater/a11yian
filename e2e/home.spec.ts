import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render with correct title and heading", async ({ page }) => {
    await expect(page.locator("h1")).toContainText(
      "Accessible, inclusive web experiences",
    );
  });

  test("should display hero image with alt text", async ({ page }) => {
    const heroImg = page.locator("img.heroimg");
    await expect(heroImg).toBeVisible();
  });

  test("should have services section with three items", async ({ page }) => {
    const serviceItems = page.locator(".service-item");
    await expect(serviceItems).toHaveCount(3);
  });

  test("should render blockquote section", async ({ page }) => {
    const blockquote = page.locator("blockquote");
    await expect(blockquote).toBeVisible();
    await expect(blockquote).toContainText("Fixing accessibility");
  });

  test("should have functioning navigation links", async ({ page }) => {
    // Navigation may be in a collapsed menu on small viewports
    const navLinks = page.locator("nav a[href]");
    await expect(navLinks).toHaveCount(2);
  });

  test("should have theme toggle button", async ({ page }) => {
    const themeToggle = page.locator('button[role="switch"]');
    await expect(themeToggle).toBeVisible();
    await expect(themeToggle).toHaveAttribute("aria-checked", /true|false/);
  });

  test("should navigate to About page", async ({ page }) => {
    const aboutLink = page.locator('a:has-text("About")');
    await aboutLink.scrollIntoViewIfNeeded();
    await aboutLink.click();
    await expect(page).toHaveURL("/#/about");
    await expect(page.locator("h1")).toContainText("About A11y");
  });
});
