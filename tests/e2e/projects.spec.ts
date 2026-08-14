import { expect, test } from "playwright/test";

const projectCarouselCases = [
  {
    path: "/projects/hrh-shopping",
    label: "HRH Shopping screenshots",
    slides: [
      /HRH Shopping storefront homepage with hero promotion, search, and category shortcuts/,
      /HRH Shopping product listing page with filters, category navigation, and product cards/,
      /HRH Shopping product detail page with image gallery, pricing, and purchase actions/,
      /HRH Shopping order tracking screen with shipment progress and order status details/,
      /HRH Shopping customer account dashboard with profile and order management sections/,
    ],
  },
  {
    path: "/projects/bookeasy",
    label: "BookEasy screenshots",
    slides: [
      /BookEasy homepage with appointment calendar and booking call to action/,
      /BookEasy booking flow showing service selection and available appointment times/,
      /BookEasy services directory with appointment options and pricing cards/,
      /BookEasy service detail page with booking call to action and service details/,
      /BookEasy booking flow with selected service and confirmation summary/,
    ],
  },
  {
    path: "/projects/taskorbit",
    label: "TaskOrbit screenshots",
    slides: [
      /TaskOrbit dashboard with workspace overview and active workspace switching/,
      /TaskOrbit project overview with lifecycle controls, project settings, and project membership/,
      /TaskOrbit project task directory with task filters, counts, and task cards/,
      /TaskOrbit task detail view with task state, dependencies, and update controls/,
      /TaskOrbit workspace team page with members, invitations, and access management/,
    ],
  },
] as const;

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

  test("projects index exposes visible case study CTAs that navigate to the detailed routes", async ({
    page,
  }) => {
    const projects = [
      { name: "HRH Shopping", path: "/projects/hrh-shopping" },
      { name: "BookEasy", path: "/projects/bookeasy" },
      { name: "TaskOrbit", path: "/projects/taskorbit" },
    ] as const;

    for (const project of projects) {
      await page.goto("/projects");

      const row = page
        .getByRole("article")
        .filter({ has: page.getByRole("heading", { name: project.name }) });

      await expect(row.getByRole("link", { name: "View Case Study" })).toBeVisible();
      await expect(row.getByRole("link", { name: "Live Demo" })).toBeVisible();

      await row.getByRole("link", { name: "View Case Study" }).click();

      await expect(page).toHaveURL(project.path);
      await expect(page.getByRole("group", { name: `${project.name} screenshots` })).toHaveCount(1);
    }
  });

  test("each project page renders the shared screenshot carousel with approved images", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });

    for (const project of projectCarouselCases) {
      await page.goto(project.path);

      const gallery = page.getByRole("group", { name: project.label });
      const nextButton = gallery.getByRole("button", { name: "Next screenshot" });
      const previousButton = gallery.getByRole("button", { name: "Previous screenshot" });
      const slideDots = gallery.getByRole("button", { name: /Show screenshot \d of \d/ });

      await expect(gallery).toBeVisible();
      await expect(nextButton).toBeVisible();
      await expect(previousButton).toBeVisible();
      expect(await slideDots.count()).toBe(project.slides.length);
      await expect(gallery.getByText(/\d+ \/ \d+/)).toHaveCount(0);

      for (const [index, slide] of project.slides.entries()) {
        await expect(gallery.getByAltText(slide)).toBeVisible();

        if (index < project.slides.length - 1) {
          await nextButton.click();
        }
      }

      await previousButton.click();
      await expect(gallery.getByAltText(project.slides[project.slides.length - 2])).toBeVisible();

      if (project.path === "/projects/taskorbit") {
        await expect(
          gallery.getByAltText(
            /TaskOrbit workspace projects list with project filters and scoped project cards/
          )
        ).toHaveCount(0);
      }
    }
  });

  test("project galleries honor keyboard navigation and reduced motion", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/projects/bookeasy");

    const gallery = page.getByRole("group", { name: "BookEasy screenshots" });
    const nextButton = gallery.getByRole("button", { name: "Next screenshot" });

    await expect(
      gallery.getByAltText(/BookEasy homepage with appointment calendar and booking call to action/)
    ).toBeVisible();

    await nextButton.focus();
    await page.keyboard.press("Enter");
    await expect(
      gallery.getByAltText(
        /BookEasy booking flow showing service selection and available appointment times/
      )
    ).toBeVisible();

    await page.waitForTimeout(6200);
    await expect(
      gallery.getByAltText(
        /BookEasy booking flow showing service selection and available appointment times/
      )
    ).toBeVisible();
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
