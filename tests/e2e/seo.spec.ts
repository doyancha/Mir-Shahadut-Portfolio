import { expect, test } from "playwright/test";

const baseURL = "http://localhost:3000";

async function getMetaContent(page: Parameters<typeof test>[0]["page"], selector: string) {
  return page.locator(selector).getAttribute("content");
}

async function assertMetadata(
  page: Parameters<typeof test>[0]["page"],
  path: string,
  expectations: {
    title: string;
    descriptionIncludes: string;
    canonical: string;
    ogTitle: string;
    ogDescriptionIncludes: string;
  }
) {
  await page.goto(path);
  const expectedUrl =
    expectations.canonical === "/" ? baseURL : `${baseURL}${expectations.canonical}`;

  await expect(page).toHaveTitle(expectations.title);
  expect(await getMetaContent(page, 'meta[name="description"]')).toContain(
    expectations.descriptionIncludes
  );
  expect(await page.locator('link[rel="canonical"]').getAttribute("href")).toBe(expectedUrl);
  expect(await getMetaContent(page, 'meta[property="og:title"]')).toBe(expectations.ogTitle);
  expect(await getMetaContent(page, 'meta[property="og:description"]')).toContain(
    expectations.ogDescriptionIncludes
  );
  expect(await getMetaContent(page, 'meta[property="og:url"]')).toBe(expectedUrl);
  expect(await getMetaContent(page, 'meta[property="og:image"]')).toBe(
    `${baseURL}/social-image.png`
  );
  expect(await getMetaContent(page, 'meta[name="twitter:card"]')).toBe("summary_large_image");
  expect(await getMetaContent(page, 'meta[name="twitter:title"]')).toBe(expectations.ogTitle);
  expect(await getMetaContent(page, 'meta[name="twitter:description"]')).toContain(
    expectations.ogDescriptionIncludes
  );
  expect(await getMetaContent(page, 'meta[name="twitter:image"]')).toBe(
    `${baseURL}/social-image.png`
  );
}

test.describe("seo and indexability smoke", () => {
  test("homepage, projects, case study, and resume carry correct metadata and structured data", async ({
    page,
  }) => {
    await assertMetadata(page, "/", {
      title: "Mir Shahadut Hossain",
      descriptionIncludes: "Full Stack Web Developer",
      canonical: "/",
      ogTitle: "Mir Shahadut Hossain",
      ogDescriptionIncludes: "Full Stack Web Developer",
    });

    const jsonLdScripts = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScripts).toHaveCount(2);
    expect(await jsonLdScripts.nth(0).textContent()).toContain('"@type":"Person"');
    expect(await jsonLdScripts.nth(1).textContent()).toContain('"@type":"WebSite"');

    await assertMetadata(page, "/projects", {
      title: "Projects | Mir-Shahadut-Portfolio",
      descriptionIncludes: "HRH Shopping, BookEasy, and TaskOrbit",
      canonical: "/projects",
      ogTitle: "Projects",
      ogDescriptionIncludes: "HRH Shopping, BookEasy, and TaskOrbit",
    });

    await assertMetadata(page, "/projects/hrh-shopping", {
      title: "HRH Shopping Case Study | Mir-Shahadut-Portfolio",
      descriptionIncludes: "multivendor ecommerce",
      canonical: "/projects/hrh-shopping",
      ogTitle: "HRH Shopping Case Study",
      ogDescriptionIncludes: "multivendor ecommerce",
    });

    await assertMetadata(page, "/resume", {
      title: "Resume | Mir-Shahadut-Portfolio",
      descriptionIncludes: "concise professional resume",
      canonical: "/resume",
      ogTitle: "Resume",
      ogDescriptionIncludes: "concise professional resume",
    });
  });

  test("/resume/print remains noindex, nofollow", async ({ page }) => {
    await page.goto("/resume/print");

    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      expect.stringContaining("noindex")
    );
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      expect.stringContaining("nofollow")
    );
  });

  test("sitemap and robots include the approved public routes only", async ({ page }) => {
    const sitemapResponse = await page.request.get("/sitemap.xml");
    expect(sitemapResponse.status()).toBe(200);

    const sitemapText = await sitemapResponse.text();
    expect(sitemapText).toContain(`${baseURL}/projects/hrh-shopping`);
    expect(sitemapText).toContain(`${baseURL}/projects/bookeasy`);
    expect(sitemapText).toContain(`${baseURL}/projects/taskorbit`);
    expect(sitemapText).not.toContain("/resume/print");

    const robotsResponse = await page.request.get("/robots.txt");
    expect(robotsResponse.status()).toBe(200);

    const robotsText = await robotsResponse.text();
    expect(robotsText).toContain("User-Agent: *");
    expect(robotsText).toContain("Allow: /");
    expect(robotsText).toContain(`${baseURL}/sitemap.xml`);
  });
});
