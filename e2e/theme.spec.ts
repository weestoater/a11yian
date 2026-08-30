import { test, expect } from "@playwright/test";

test.describe("Theme Toggle", () => {
  test("should toggle theme and persist", async ({ page }) => {
    // Start with light theme
    await page.goto("/");

    const themeToggle = page.locator('button[role="switch"]');
    const htmlElement = page.locator("html");

    // Check initial theme (default: light)
    let theme = await htmlElement.getAttribute("data-theme");
    expect(["light", "dark"]).toContain(theme);

    // Toggle theme
    await themeToggle.click();
    await page.waitForTimeout(100); // Wait for state update

    const newTheme = await htmlElement.getAttribute("data-theme");
    expect(newTheme).not.toBe(theme);

    // Reload and verify persistence
    await page.reload();
    const persistedTheme = await htmlElement.getAttribute("data-theme");
    expect(persistedTheme).toBe(newTheme);
  });

  test("should have visible theme toggle button", async ({ page }) => {
    await page.goto("/");

    const themeToggle = page.locator('button[role="switch"]');
    await expect(themeToggle).toBeVisible();

    // Button should have track and thumb elements
    const track = themeToggle.locator(".theme-toggle-track");
    const thumb = themeToggle.locator(".theme-toggle-thumb");

    await expect(track).toBeVisible();
    await expect(thumb).toBeVisible();
  });

  test("theme toggle should be accessible", async ({ page }) => {
    await page.goto("/");

    const themeToggle = page.locator('button[role="switch"]');

    // Should have aria-checked attribute
    const ariaChecked = await themeToggle.getAttribute("aria-checked");
    expect(["true", "false"]).toContain(ariaChecked);

    // Should be keyboard accessible
    await themeToggle.focus();
    await page.keyboard.press("Enter");
    await page.waitForTimeout(100); // Wait for state update

    const newAriaChecked = await themeToggle.getAttribute("aria-checked");
    expect(newAriaChecked).not.toBe(ariaChecked);
  });
});
