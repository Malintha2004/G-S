export interface NavItem {
  title: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Our Work", href: "/our-work" },
  { title: "Process", href: "/process" },
  { title: "Finishes", href: "/finishes" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact", href: "/contact" },
];

export const SERVICE_NAV_ITEMS: NavItem[] = [
  { title: "Commercial & Batch Powder Coating", href: "/services/powder-coating" },
  { title: "Industrial Powder Coating", href: "/services/industrial-powder-coating" },
  { title: "Architectural Powder Coating", href: "/services/architectural-coating" },
  { title: "Sandblasting & Surface Prep", href: "/services/sandblasting-pretreatment" },
];
