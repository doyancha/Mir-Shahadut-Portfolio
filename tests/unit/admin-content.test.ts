import { describe, expect, it } from "vitest";

import { adminNavigationItems, adminSections, getAdminSection, isAdminSectionId } from "@/content/admin";

describe("admin content registry", () => {
  it("exposes the expected private admin sections in order", () => {
    expect(adminSections.map((section) => section.id)).toEqual([
      "content",
      "assets",
      "settings",
      "system",
    ]);
  });

  it("supports typed section lookup for valid section ids", () => {
    expect(getAdminSection("content")).toMatchObject({
      id: "content",
      href: "/admin/content",
    });

    expect(getAdminSection("system")).toMatchObject({
      id: "system",
      href: "/admin/system",
    });
  });

  it("rejects unknown section ids", () => {
    expect(isAdminSectionId("not-a-real-section")).toBe(false);
    expect(getAdminSection("not-a-real-section")).toBeUndefined();
  });

  it("drives navigation from the registry", () => {
    expect(adminNavigationItems.map((item) => item.href)).toEqual([
      "/admin",
      "/admin/content",
      "/admin/assets",
      "/admin/settings",
      "/admin/system",
    ]);
  });
});
