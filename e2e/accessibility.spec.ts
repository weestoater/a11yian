import { test, expect } from "@playwright/test";

test.describe("Accessibility & Navigation", () => {
  test("should have skip link", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.locator(".skip-link");
    await expect(skipLink).toBeVisible();
    await expect(skipLink).toHaveText("Skip to main content");
  });

  test("should have main content landmark", async ({ page }) => {
    await page.goto("/");
    const main = page.locator("main#main");
    await expect(main).toBeVisible();
  });

  test("should have header with navigation", async ({ page }) => {
    await page.goto("/");
    const header = page.locator("header.site-header");
    await expect(header).toBeVisible();

    const nav = page.locator('nav[aria-label="Primary"]');
    await expect(nav).toBeVisible();
  });

  test("should display current page in navigation", async ({ page }) => {
    await page.goto("/");
    // NavLink sets aria-current="page" for active links
    const navLinks = page.locator('nav a[aria-current="page"]');
    await expect(navLinks).toHaveCount(1);
  });

  test("should update current page indicator on navigation", async ({
    page,
  }) => {
    await page.goto("/");

    // Home should be current
    let currentLinks = page.locator('nav a[aria-current="page"]');
    await expect(currentLinks).toHaveCount(1);
    await expect(currentLinks).toHaveText("Home");

    // Navigate to About
    const aboutLink = page.locator('a:has-text("About")');
    await aboutLink.scrollIntoViewIfNeeded();
    await aboutLink.click();

    // About should be current
    currentLinks = page.locator('nav a[aria-current="page"]');
    await expect(currentLinks).toHaveCount(1);
    await expect(currentLinks).toHaveText("About");
  });

  test("should have footer", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    const currentYear = new Date().getFullYear();
    await expect(footer).toContainText(currentYear.toString());
  });
});

test.describe("Axe Accessibility Scans", () => {
  const scanForA11yViolations = async (page: any) => {
    // Inject axe-core via CDN
    await page.addScriptTag({
      url: "https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.0/axe.min.js",
    });

    // Run axe accessibility scan and get results
    const violations = await page.evaluate(() => {
      return new Promise<any[]>((resolve) => {
        (window as any).axe.run((error: any, results: any) => {
          if (error) throw error;
          resolve(results.violations);
        });
      });
    });

    return violations;
  };

  test("should not have accessibility violations on home page", async ({
    page,
  }) => {
    await page.goto("/");
    const violations = await scanForA11yViolations(page);
    expect(violations).toHaveLength(0);
  });

  test("should not have accessibility violations on about page", async ({
    page,
  }) => {
    await page.goto("/about");
    const violations = await scanForA11yViolations(page);
    expect(violations).toHaveLength(0);
  });

  test("should not have accessibility violations on guide page", async ({
    page,
  }) => {
    await page.goto("/guide");
    const violations = await scanForA11yViolations(page);
    expect(violations).toHaveLength(0);
  });

  test("should not have accessibility violations on tools page", async ({
    page,
  }) => {
    await page.goto("/tools");
    const violations = await scanForA11yViolations(page);
    expect(violations).toHaveLength(0);
  });

  test("should not have accessibility violations in theme toggle", async ({
    page,
  }) => {
    await page.goto("/");
    const violations = await scanForA11yViolations(page);
    expect(violations).toHaveLength(0);
  });
});
