import { expect, test } from "playwright/test";

test.describe("navigation smoke", () => {
  test("skip link moves focus to main content", async ({ page }) => {
    await page.goto("/");

    await page.keyboard.press("Tab");

    const skipLink = page.getByRole("link", { name: "Skip to content" });
    await expect(skipLink).toBeFocused();

    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test("desktop navigation keeps the active route visible", async ({ page }) => {
    await page.goto("/projects");

    const projectsLink = page.locator("header").getByRole("link", { name: "Projects" });

    await expect(projectsLink).toHaveAttribute("aria-current", "page");
  });

  test("mobile navigation opens with keyboard, closes with Escape, and restores focus", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const openButton = page.getByRole("button", { name: "Open navigation menu" });
    await openButton.focus();
    await expect(openButton).toBeFocused();

    await page.keyboard.press("Space");

    const dialog = page.getByRole("dialog", { name: "Mobile navigation" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("button", { name: "Close navigation menu" })).toBeFocused();

    await page.keyboard.press("Tab");
    await expect(dialog.getByRole("link", { name: "Home" })).toBeFocused();

    await page.keyboard.press("Escape");

    await expect(dialog).toHaveCount(0);
    await expect(openButton).toBeFocused();
  });
});
