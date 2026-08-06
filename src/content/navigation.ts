import type { NavigationItem } from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    exact: true,
  },
  {
    label: "About",
    href: "/about",
    exact: true,
  },
  {
    label: "Skills",
    href: "/skills",
    exact: true,
  },
  {
    label: "Projects",
    href: "/projects",
    exact: false,
  },
  {
    label: "Experience",
    href: "/experience",
    exact: true,
  },
  {
    label: "Resume",
    href: "/resume",
    exact: true,
  },
  {
    label: "Contact",
    href: "/contact",
    exact: true,
  },
];
