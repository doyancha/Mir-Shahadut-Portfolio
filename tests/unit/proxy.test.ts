import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { withTestEnvironment } from "./test-env";

const { getTokenMock, tokenState } = vi.hoisted(() => {
  const tokenState = {
    value: null as unknown,
  };

  const getTokenMock = vi.fn(async () => tokenState.value);

  return { getTokenMock, tokenState };
});

vi.mock("next-auth/jwt", () => ({
  getToken: getTokenMock,
}));

beforeEach(() => {
  tokenState.value = null;
  getTokenMock.mockClear();
});

describe("admin proxy gate", () => {
  it("redirects unauthenticated admin requests to sign in", async () => {
    tokenState.value = null;

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "allowed-admin",
        ADMIN_ALLOWED_EMAILS: "admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const { proxy } = await import("../../proxy");
        const response = await proxy(new NextRequest("https://example.com/admin/projects"));

        expect(response.status).toBe(307);
        expect(response.headers.get("location")).toBe(
          "https://example.com/admin/sign-in?callbackUrl=%2Fadmin%2Fprojects"
        );
      }
    );
  });

  it("permits ADMIN + ACTIVE sessions into protected routes", async () => {
    tokenState.value = { id: "user-admin", role: "ADMIN", status: "ACTIVE" };

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "allowed-admin",
        ADMIN_ALLOWED_EMAILS: "admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const { proxy } = await import("../../proxy");
        const response = await proxy(new NextRequest("https://example.com/admin/revisions"));

        expect(response.headers.get("x-middleware-next")).toBe("1");
      }
    );
  });

  it("redirects ADMIN users with non-ACTIVE status to unauthorized", async () => {
    tokenState.value = { id: "user-admin", role: "ADMIN", status: "SUSPENDED" };

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "allowed-admin",
        ADMIN_ALLOWED_EMAILS: "admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const { proxy } = await import("../../proxy");
        const response = await proxy(new NextRequest("https://example.com/admin/media"));

        expect(response.status).toBe(307);
        expect(response.headers.get("location")).toBe("https://example.com/admin/unauthorized");
      }
    );
  });

  it("redirects non-admin users to unauthorized", async () => {
    tokenState.value = { id: "user-viewer", role: "VIEWER", status: "ACTIVE" };

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "allowed-admin",
        ADMIN_ALLOWED_EMAILS: "admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const { proxy } = await import("../../proxy");
        const response = await proxy(new NextRequest("https://example.com/admin/audit"));

        expect(response.status).toBe(307);
        expect(response.headers.get("location")).toBe("https://example.com/admin/unauthorized");
      }
    );
  });

  it("rejects truthy auth objects without ADMIN + ACTIVE claims", async () => {
    tokenState.value = { id: "user-bad" };

    await withTestEnvironment(
      {
        AUTH_SECRET: "auth-secret",
        GITHUB_ID: "github-client-id",
        GITHUB_SECRET: "github-client-secret",
        ADMIN_ALLOWED_GITHUB_LOGINS: "allowed-admin",
        ADMIN_ALLOWED_EMAILS: "admin@example.com",
        NODE_ENV: "test",
      },
      async () => {
        const { proxy } = await import("../../proxy");
        const response = await proxy(new NextRequest("https://example.com/admin/secret"));

        expect(response.status).toBe(307);
        expect(response.headers.get("location")).toBe(
          "https://example.com/admin/sign-in?callbackUrl=%2Fadmin%2Fsecret"
        );
      }
    );
  });

  it("keeps the sign-in and unauthorized pages available when auth is disabled", async () => {
    tokenState.value = { id: "user-admin", role: "ADMIN", status: "ACTIVE" };

    await withTestEnvironment(
      {
        AUTH_SECRET: undefined,
        NEXTAUTH_SECRET: undefined,
        GITHUB_ID: undefined,
        GITHUB_SECRET: undefined,
        ADMIN_ALLOWED_GITHUB_LOGINS: undefined,
        ADMIN_ALLOWED_EMAILS: undefined,
        NODE_ENV: "test",
      },
      async () => {
        const { proxy } = await import("../../proxy");
        const signInResponse = await proxy(new NextRequest("https://example.com/admin/sign-in"));
        const unauthorizedResponse = await proxy(new NextRequest("https://example.com/admin/unauthorized"));

        expect(signInResponse.headers.get("x-middleware-next")).toBe("1");
        expect(unauthorizedResponse.headers.get("x-middleware-next")).toBe("1");
      }
    );
  });
});
