export type AdminIdentity = {
  githubLogin?: string | null;
  email?: string | null;
};

function normalizeEntry(value: string | null | undefined): string | null {
  const trimmed = value?.trim().toLowerCase();
  return trimmed ? trimmed : null;
}

export function parseAllowlist(value: string | undefined | null): string[] {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((entry) => normalizeEntry(entry))
    .filter((entry): entry is string => Boolean(entry));
}

export function isAllowedAdminIdentity(
  identity: AdminIdentity,
  allowedGithubLogins: readonly string[],
  allowedEmails: readonly string[]
): boolean {
  const githubLogin = normalizeEntry(identity.githubLogin);
  if (githubLogin && allowedGithubLogins.includes(githubLogin)) {
    return true;
  }

  const email = normalizeEntry(identity.email);
  if (email && allowedEmails.includes(email)) {
    return true;
  }

  return false;
}

export function normalizeGitHubSubject(githubLogin: string | null | undefined, email: string | null | undefined) {
  const login = normalizeEntry(githubLogin);
  if (login) {
    return `github:${login}`;
  }

  const normalizedEmail = normalizeEntry(email);
  return normalizedEmail ? `email:${normalizedEmail}` : null;
}
