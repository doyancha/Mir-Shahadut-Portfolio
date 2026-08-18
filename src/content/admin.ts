export type AdminSectionStatus = "available";

export type AdminSectionDefinition = {
  id: "content" | "assets" | "settings" | "system";
  label: string;
  description: string;
  href: `/admin/${string}`;
  status?: AdminSectionStatus;
};

export type AdminNavigationItem = {
  id: "dashboard" | AdminSectionDefinition["id"];
  label: string;
  description: string;
  href: `/admin${string}`;
  status?: AdminSectionStatus;
};

export const adminDashboardNavigationItem = {
  id: "dashboard",
  label: "Dashboard",
  description: "Private admin shell overview and readiness status.",
  href: "/admin",
} as const satisfies AdminNavigationItem;

export const adminSections = [
  {
    id: "content",
    label: "Content",
    description: "Placeholder surface for editorial planning, case-study outlines, and copy updates.",
    href: "/admin/content",
    status: "available",
  },
  {
    id: "assets",
    label: "Assets",
    description: "Placeholder surface for media, uploads, and asset coordination work.",
    href: "/admin/assets",
    status: "available",
  },
  {
    id: "settings",
    label: "Settings",
    description: "Placeholder surface for site configuration, policies, and admin preferences.",
    href: "/admin/settings",
    status: "available",
  },
  {
    id: "system",
    label: "System",
    description: "Placeholder surface for operational status, guardrails, and maintenance views.",
    href: "/admin/system",
    status: "available",
  },
] as const satisfies readonly AdminSectionDefinition[];

export const adminNavigationItems = [
  adminDashboardNavigationItem,
  ...adminSections,
] as const satisfies readonly AdminNavigationItem[];

export type AdminSectionId = (typeof adminSections)[number]["id"];

const adminSectionLookup: Readonly<Record<AdminSectionId, AdminSectionDefinition>> =
  adminSections.reduce(
    (lookup, section) => {
      lookup[section.id] = section;
      return lookup;
    },
    {} as Record<AdminSectionId, AdminSectionDefinition>
  );

export function isAdminSectionId(value: string): value is AdminSectionId {
  return Object.prototype.hasOwnProperty.call(adminSectionLookup, value);
}

export function getAdminSection(section: string | null | undefined): AdminSectionDefinition | undefined {
  if (!section || !isAdminSectionId(section)) {
    return undefined;
  }

  return adminSectionLookup[section];
}
