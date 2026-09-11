export const SITE_CONFIG = {
  name: "G & S Engineering",
  legalName: "Prime Age Industries Pty Ltd",
  brandName: "G&S Fabrication | Powder Coating",
  description:
    "Professional commercial powder coating & structural metal fabrication facility in Campbellfield, Victoria. 8.0m batch oven bay, MIG/TIG welding, CNC sheet metal fabrication, and industrial finishing.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.gsengineering.com.au",
  address: {
    street: "179 Barry Road",
    suburb: "Campbellfield",
    state: "VIC",
    postcode: "3061",
    country: "Australia",
    full: "179 Barry Road, Campbellfield, VIC, Australia",
  },
  phones: {
    primary: "0415 668 527",
    primaryRaw: "0415668527",
    secondary: "0493 627 019",
    secondaryRaw: "0493627019",
  },
  email: "Sales@primeageindustries.com.au",
  operatingHours: {
    weekdays: "Monday – Friday: 06:30 AM – 5:00 PM AEST",
    saturday: "Saturday: By Appointment",
    sunday: "Sunday: Closed",
  },
  keywords: [
    "powder coating Campbellfield",
    "powder coating Melbourne",
    "powder coating Victoria",
    "metal fabrication Campbellfield",
    "powder coating services Melbourne",
    "industrial powder coating Melbourne",
    "commercial powder coating VIC",
    "custom metal fabrication Campbellfield",
    "steel fabrication Melbourne",
    "batch oven powder coating",
  ],
  logos: {
    main: "/images/logo.jpg",
  },
};
