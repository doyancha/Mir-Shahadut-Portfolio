import { expect, test } from "playwright/test";

const publicRoutes = [
  {
    path: "/",
    title: "Mir Shahadut Hossain",
    heading: "Mir Shahadut Hossain",
  },
  {
    path: "/about",
    title: "About Mir Shahadut Hossain | Mir-Shahadut-Portfolio",
    heading: "Mir Shahadut Hossain",
  },
  {
    path: "/skills",
    title: "Skills and Capabilities | Mir-Shahadut-Portfolio",
    heading: "Project-applied skills and verified technologies",
  },
  { path: "/projects", title: "Projects | Mir-Shahadut-Portfolio", heading: "Project evidence" },
  {
    path: "/projects/hrh-shopping",
    title: "HRH Shopping Case Study | Mir-Shahadut-Portfolio",
    heading: "HRH Shopping",
  },
  {
    path: "/projects/bookeasy",
    title: "BookEasy Case Study | Mir-Shahadut-Portfolio",
    heading: "BookEasy",
  },
  {
    path: "/projects/taskorbit",
    title: "TaskOrbit Case Study | Mir-Shahadut-Portfolio",
    heading: "TaskOrbit",
  },
  { path: "/experience", title: "Experience | Mir-Shahadut-Portfolio", heading: "Experience" },
  { path: "/resume", title: "Resume | Mir-Shahadut-Portfolio", heading: "Professional resume" },
  {
    path: "/contact",
    title: "Contact | Mir-Shahadut-Portfolio",
    heading: "Let's talk about your next project",
  },
] as const;

test.describe("public route smoke", () => {
  for (const route of publicRoutes) {
    test(route.path, async ({ page }) => {
      const response = await page.goto(route.path);

      expect(response?.ok()).toBeTruthy();
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(route.heading);
      await expect(page).toHaveTitle(route.title);
    });
  }

  test("unknown project slug returns a real 404", async ({ page }) => {
    const response = await page.goto("/projects/not-a-real-project");

    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
  });
});
