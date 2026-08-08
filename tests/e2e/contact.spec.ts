import { expect, test } from "playwright/test";

test.describe("contact form smoke", () => {
  test("exposes the approved labels and validation errors for empty submission", async ({
    page,
  }) => {
    await page.goto("/contact");

    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Inquiry type / Subject")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();

    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Please enter your email address.")).toBeVisible();
    await expect(page.getByText("Please enter a message.")).toBeVisible();
    await expect(page.getByLabel("Name")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("Email")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("Message")).toHaveAttribute("aria-invalid", "true");
  });

  test("flags invalid email and too-short message", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("Name").fill("Mir Shahadut Hossain");
    await page.getByLabel("Email").fill("not-an-email");
    await page.getByLabel("Inquiry type / Subject").fill("Project discussion");
    await page.getByLabel("Message").fill("Too short.");
    await page.getByRole("button", { name: "Send message" }).click();

    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
    await expect(page.getByText("Message must be between 20 and 4000 characters.")).toBeVisible();
    await expect(page.getByLabel("Email")).toHaveAttribute("aria-invalid", "true");
    await expect(page.getByLabel("Message")).toHaveAttribute("aria-invalid", "true");
  });
});
