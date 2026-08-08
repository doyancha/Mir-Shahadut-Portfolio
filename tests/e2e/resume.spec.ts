import { expect, test } from "playwright/test";

test.describe("resume smoke", () => {
  test("resume page exposes the approved download link and PDF asset", async ({ page }) => {
    await page.goto("/resume");

    await expect(page.getByRole("link", { name: "Download Resume" })).toHaveAttribute(
      "href",
      "/documents/resume/mir-shahadut-hossain-resume.pdf"
    );

    const response = await page.request.get("/documents/resume/mir-shahadut-hossain-resume.pdf");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });

  test("/resume/print remains internal and noindex", async ({ page }) => {
    const response = await page.goto("/resume/print");

    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      expect.stringContaining("noindex")
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      expect.stringContaining("nofollow")
    );
  });
});
