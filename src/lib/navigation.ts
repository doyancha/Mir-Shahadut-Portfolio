import type { NavigationItem } from "@/types/navigation";

export function isNavigationItemActive(pathname: string, item: NavigationItem): boolean {
  if (item.exact ?? false) {
    return pathname === item.href;
  }

  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
