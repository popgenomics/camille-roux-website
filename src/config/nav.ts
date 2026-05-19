export type NavKey = "home" | "research" | "work" | "people" | "contact";

export type NavItem = {
  key: NavKey;
  label: string;
  href: string;
};

/** Primary site navigation (extensible for future Media / Photos pages). */
export const mainNav: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "research", label: "Research", href: "/#research" },
  { key: "work", label: "Work", href: "/work/" },
  { key: "people", label: "People", href: "/people/" },
  { key: "contact", label: "Contact", href: "/#contact" },
];

export function isNavActive(key: NavKey, pathname: string): boolean {
  if (key === "home") return pathname === "/" || pathname === "";
  if (key === "work") return pathname.startsWith("/work");
  if (key === "people") return pathname.startsWith("/people");
  return false;
}
