import { describe, expect, it } from "vitest";

import {
  caseStudyEntries,
  getCaseStudyBySlug,
  getCaseStudyStaticParams,
} from "@/content/case-studies";

describe("case study content lookup", () => {
  it("contains exactly the approved public slugs", () => {
    expect(caseStudyEntries.map((caseStudy) => caseStudy.slug)).toEqual([
      "hrh-shopping",
      "bookeasy",
      "taskorbit",
    ]);
    expect(getCaseStudyStaticParams()).toEqual([
      { slug: "hrh-shopping" },
      { slug: "bookeasy" },
      { slug: "taskorbit" },
    ]);
  });

  it("returns the approved records for the known slugs", () => {
    expect(getCaseStudyBySlug("hrh-shopping")?.title).toBe("HRH Shopping");
    expect(getCaseStudyBySlug("bookeasy")?.title).toBe("BookEasy");
    expect(getCaseStudyBySlug("taskorbit")?.title).toBe("TaskOrbit");
  });

  it("returns null for unknown slugs", () => {
    expect(getCaseStudyBySlug("not-a-real-project")).toBeNull();
  });
});
