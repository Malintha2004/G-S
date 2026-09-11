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
  { title: "Powder Coating", href: "/services/powder-coating" },
  { title: "Metal Fabrication", href: "/services/metal-fabrication" },
  { title: "Custom Fabrication", href: "/services/custom-fabrication" },
  { title: "Industrial Finishing", href: "/services/industrial-finishing" },
];
