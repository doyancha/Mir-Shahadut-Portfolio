import { expect, test } from "playwright/test";

const routes = [
  "/",
  "/projects",
  "/contact",
  "/resume",
  "/projects/hrh-shopping",
  "/projects/bookeasy",
  "/projects/taskorbit",
] as const;
const viewports = [
  { width: 390, height: 844 },
  { width: 1440, height: 900 },
] as const;

test.describe("responsive smoke", () => {
  for (const viewport of viewports) {
    for (const route of routes) {
      test(`${route} at ${viewport.width}px`, async ({ page }) => {
        await page.setViewportSize(viewport);
        await page.goto(route);

        const metrics = await page.evaluate(() => ({
          innerWidth: window.innerWidth,
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          bodyScrollWidth: document.body.scrollWidth,
        }));

        expect(metrics.innerWidth).toBe(viewport.width);
        expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth);
        expect(metrics.bodyScrollWidth).toBeLessThanOrEqual(metrics.clientWidth);

        await expect(page.locator("body")).toBeVisible();
      });
    }
  }
});
