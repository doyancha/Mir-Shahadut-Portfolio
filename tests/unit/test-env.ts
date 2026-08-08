import { vi } from "vitest";

const trackedEnvKeys = [
  "NODE_ENV",
  "NEXT_PUBLIC_SITE_URL",
  "RESEND_API_KEY",
  "CONTACT_FROM_EMAIL",
  "CONTACT_TO_EMAIL",
] as const;

export type TrackedEnvKey = (typeof trackedEnvKeys)[number];

export async function withTestEnvironment<T>(
  overrides: Partial<Record<TrackedEnvKey, string | undefined>>,
  callback: () => Promise<T> | T
): Promise<T> {
  const previousValues = new Map<TrackedEnvKey, string | undefined>();

  for (const key of trackedEnvKeys) {
    previousValues.set(key, process.env[key]);
  }

  for (const key of trackedEnvKeys) {
    if (!Object.prototype.hasOwnProperty.call(overrides, key)) {
      continue;
    }

    const value = overrides[key];

    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }

  vi.resetModules();

  try {
    return await callback();
  } finally {
    for (const key of trackedEnvKeys) {
      const value = previousValues.get(key);

      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }

    vi.resetModules();
  }
}
