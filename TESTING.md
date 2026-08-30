# Playwright Testing Guide

This project uses [Playwright](https://playwright.dev/) for regression testing across multiple browsers.

## Setup

Playwright is already configured in this project. To install dependencies:

```bash
npm install
```

## Running Tests

### Run all tests

```bash
npm test
```

### Run tests in UI mode (interactive)

```bash
npm run test:ui
```

### Run tests in headed mode (see browser)

```bash
npm run test:headed
```

### Debug tests

```bash
npm run test:debug
```

### Run specific test file

```bash
npx playwright test e2e/home.spec.ts
```

### Run tests on specific browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Organization

Tests are organized in the `e2e/` directory:

- **home.spec.ts** — Home page rendering and navigation
- **about.spec.ts** — About page rendering and navigation
- **accessibility.spec.ts** — Accessibility features (skip link, navigation, landmarks)
- **theme.spec.ts** — Theme toggle functionality and persistence

## How Tests Work

1. **Dev Server**: Tests automatically start the dev server (`npm run dev`) before running
2. **Base URL**: All tests use `http://localhost:5173` as the base URL
3. **Screenshots**: Failures automatically capture screenshots for debugging
4. **Traces**: On first retry, full traces are captured for debugging
5. **HTML Report**: After tests complete, view the report with `npx playwright show-report`

## Writing New Tests

Create a new `.spec.ts` file in the `e2e/` directory:

```typescript
import { test, expect } from "@playwright/test";

test.describe("Feature Name", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/path");
  });

  test("should do something", async ({ page }) => {
    await expect(page.locator("selector")).toContainText("text");
  });
});
```

## Common Selectors

- Page navigation: `a[href="/path"]`
- Skip link: `.skip-link`
- Header: `header.site-header`
- Main content: `main#main`
- Theme toggle: `button[aria-label*="theme"]`
- Service items: `.service-item`

## CI/CD Integration

The `playwright.config.ts` includes CI-specific settings:

- Retries set to 2 on CI
- Single worker to avoid conflicts
- Screenshots and traces saved on failure

To run in CI mode:

```bash
CI=true npm test
```

## Debugging Failed Tests

1. **View screenshots**: Check the `test-results/` directory
2. **View HTML report**: Run `npx playwright show-report`
3. **Run in debug mode**: Use `npm run test:debug` to step through tests
4. **Run headed**: Use `npm run test:headed` to see the browser during test execution
5. **Run with traces**: Re-run failed tests and check the `.zip` files in results

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [Selectors](https://playwright.dev/docs/locators)
- [Assertions](https://playwright.dev/docs/test-assertions)
