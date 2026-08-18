import { describe, expect, it } from "vitest";

import {
  isAllowedAdminIdentity,
  normalizeGitHubSubject,
  parseAllowlist,
} from "@/lib/admin/allowlist";

describe("admin allowlist helpers", () => {
  it("parses comma-separated allowlists defensively", () => {
    expect(parseAllowlist("  Doyancha , admin@example.com ,, ")).toEqual([
      "doyancha",
      "admin@example.com",
    ]);
  });

  it("matches either github login or email", () => {
    expect(
      isAllowedAdminIdentity(
        { githubLogin: "doyancha", email: "other@example.com" },
        ["doyancha"],
        []
      )
    ).toBe(true);

    expect(
      isAllowedAdminIdentity(
        { githubLogin: "someoneelse", email: "admin@example.com" },
        [],
        ["admin@example.com"]
      )
    ).toBe(true);

    expect(
      isAllowedAdminIdentity({ githubLogin: "someoneelse", email: "else@example.com" }, [], [])
    ).toBe(false);
  });

  it("builds a stable auth subject label", () => {
    expect(normalizeGitHubSubject(" Doyancha ", null)).toBe("github:doyancha");
    expect(normalizeGitHubSubject(null, "ADMIN@example.com")).toBe("email:admin@example.com");
  });
});
