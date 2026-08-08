import { expect, test } from "playwright/test";

test.describe("projects and case-study smoke", () => {
  test("projects index exposes the approved projects and live demo destinations", async ({
    page,
  }) => {
    await page.goto("/projects");

    await expect(page.getByRole("heading", { name: "HRH Shopping" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "BookEasy" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "TaskOrbit" })).toBeVisible();

    await expect(page.locator('a[href="https://hrh-shopping.vercel.app/"]')).toHaveCount(1);
    await expect(page.locator('a[href="https://bookeasy-topaz.vercel.app/"]')).toHaveCount(1);
    await expect(page.locator('a[href="https://taskorbit-mu.vercel.app/"]')).toHaveCount(1);
  });

  test("TaskOrbit preview image renders and the case study does not show an empty gallery", async ({
    page,
  }) => {
    await page.goto("/projects/taskorbit");

    const previewImage = page.getByAltText(/TaskOrbit/i).first();
    await expect(previewImage).toBeVisible();
    expect(
      await previewImage.evaluate(
        (image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0
      )
    ).toBe(true);

    await expect(page.getByRole("heading", { name: "Screenshots" })).toHaveCount(0);
  });

  test("case-study links resolve to the approved related projects", async ({ page }) => {
    await page.goto("/projects/hrh-shopping");
    await expect(page.getByRole("link", { name: "Open related case study" })).toHaveAttribute(
      "href",
      "/projects/bookeasy"
    );

    await page.goto("/projects/bookeasy");
    await expect(page.getByRole("link", { name: "Open related case study" })).toHaveAttribute(
      "href",
      "/projects/taskorbit"
    );

    await page.goto("/projects/taskorbit");
    await expect(page.getByRole("link", { name: "Open related case study" })).toHaveAttribute(
      "href",
      "/projects/bookeasy"
    );
  });
});
