import { expect, test } from "playwright/test";

test.describe("homepage presentation", () => {
  test("hero renders real project screenshots and the footer stays compact", async ({ page }) => {
    await page.goto("/");

    const heroSection = page
      .locator("section")
      .filter({ has: page.getByRole("heading", { name: "Mir Shahadut Hossain" }) })
      .first();
    const heroPreviewGroup = heroSection.getByRole("group", { name: "Featured project previews" });

    await expect(heroPreviewGroup).toBeVisible();
    await expect(heroSection.getByAltText(/HRH Shopping storefront homepage/)).toBeVisible();
    await expect(
      heroSection.getByAltText(/BookEasy homepage with appointment calendar/)
    ).toBeVisible();
    await expect(
      heroSection.getByAltText(
        /TaskOrbit dashboard with workspace overview and active workspace switching/
      )
    ).toBeVisible();

    await expect(
      page.getByText("Official professional portfolio and personal-brand website.")
    ).toHaveCount(0);

    const footerNavigation = page.getByRole("navigation", { name: "Footer navigation" });

    await expect(footerNavigation.getByRole("link", { name: "Projects" })).toBeVisible();
    await expect(footerNavigation.getByRole("link", { name: "Experience" })).toBeVisible();
    await expect(footerNavigation.getByRole("link", { name: "Resume" })).toBeVisible();
    await expect(footerNavigation.getByRole("link", { name: "Contact" })).toBeVisible();

    const footer = page.locator("footer");
    await expect(footer.getByRole("link", { name: "GitHub" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "LinkedIn" })).toBeVisible();
  });

  test("featured project galleries support buttons, dots, and keyboard navigation", async ({
    page,
  }) => {
    await page.goto("/");

    const gallery = page.getByRole("group", { name: "BookEasy screenshots" });
    const nextButton = gallery.getByRole("button", { name: "Next screenshot" });
    const previousButton = gallery.getByRole("button", { name: "Previous screenshot" });
    const slideDots = gallery.getByRole("button", { name: /Show screenshot \d of \d/ });

    await expect(nextButton).toBeVisible();
    await expect(previousButton).toBeVisible();
    await expect(slideDots).toHaveCount(5);

    await expect(gallery.getByText(/\d+ \/ \d+/)).toHaveCount(0);

    await expect(gallery.getByAltText(/BookEasy homepage with appointment calendar/)).toBeVisible();

    await nextButton.click();
    await expect(
      gallery.getByAltText(
        /BookEasy booking flow showing service selection and available appointment times/
      )
    ).toBeVisible();

    await nextButton.focus();
    await page.keyboard.press("Enter");
    await expect(
      gallery.getByAltText(/BookEasy services directory with appointment options and pricing cards/)
    ).toBeVisible();
  });

  test("galleries respect reduced motion by not autoplaying", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");

    const gallery = page.getByRole("group", { name: "BookEasy screenshots" });

    await expect(gallery.getByAltText(/BookEasy homepage with appointment calendar/)).toBeVisible();

    await page.waitForTimeout(6200);

    await expect(gallery.getByAltText(/BookEasy homepage with appointment calendar/)).toBeVisible();
  });
});
