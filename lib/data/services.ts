export interface ServiceDetail {
  id: string;
  slug: string;
  number: string;
  badge: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "powder-coating",
    slug: "powder-coating",
    number: "01",
    badge: "COATING",
    title: "Powder Coating",
    shortDescription:
      "Durable, consistent coating for metal components, gates, structural frames, perforated panels, and automotive assemblies. High UV and corrosion protection.",
    fullDescription:
      "At G & S Engineering, our Campbellfield facility operates an integrated commercial powder coating setup designed for high-throughput and custom batch specifications. Electrostatic application ensures uniform wrap-around coverage even on complex geometries, while our controlled batch oven cures thermoset polymers for extreme adhesion.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDl883D5_IxFZOsB9lzL23FHvVZxEQimVowffUeoKGcwkhZQmy_Fd6KeOBoTpFmaS1WHXTN3eC4lbOoeXZSRPtIGOv6ubcrNs2_NBCbDcbIw54pDaiGJTLdhPN6Ccz7n0LlyF2DdbvvG-ILk8mwNjPqwQctDBzA6H3sqiyqY89XSrupaLvMek7Qzuf1ZKd_28I_uFY8-WmxhsqOW3nK5d-6A0oZpkd-gIXY8NCGgdXNUal5KNq0rT5BGDojhAetryGA5Q",
    features: [
      "Dulux & Interpon Accredited Powders",
      "Large-Capacity Curing Bay",
      "Chemical Pretreatment Tank Line",
      "Precision Electrostatic Application",
      "Micron Film Thickness Testing",
    ],
    applications: [
      "Architectural Screens & Louvres",
      "Security Gates & Fencing Balustrades",
      "Structural Steel Beams & Columns",
      "Perforated Sheet Metal Panels",
      "Automotive & Ute Canopy Racks",
    ],
    specifications: [
      { label: "Oven Length", value: "8.0 Metres" },
      { label: "Film Thickness Standard", value: "60 – 90 Microns" },
      { label: "Available Finishes", value: "Gloss, Satin, Matt, Ripple, Pearl" },
      { label: "Substrates", value: "Aluminum, Mild Steel, Galvanised Iron" },
    ],
  },
  {
    id: "metal-fabrication",
    slug: "metal-fabrication",
    number: "02",
    badge: "STRUCTURAL",
    title: "Metal Fabrication",
    shortDescription:
      "Precision engineering for structural steelwork, posts, brackets, equipment frames, cages, and industrial infrastructure built to strict specifications.",
    fullDescription:
      "Our fabrication shop in Campbellfield combines full-service welding, plate cutting, section rolling, and mechanical assembly. By handling fabrication and coating under a single roof, we eliminate intermediate freight costs and guarantee perfect fitment prior to surface finishing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCCVpYzLzlHorlGGcJz5P0sqAzMVuDXG9oeMXNzDzrmjLMXvpSTUOtEfU0HLWsgnHfbgHdoyqL8jvgKRsdFagAfBDIwNlodSyCI8QIQ13D6Cwnyr015JCkmceHuMWTCrX8UTov45lIh7Qbw_ztG7a-_5UgskdnLhNBE8hjp53ESF4JAgAf_lnelqZKXUCqvnQQzA8Xx4bvkIYBgnRXWSFBp0_CADj3ma4mxAcNbX_6smIAcU9ROUjGhwZKQcel2b5JMQ",
    features: [
      "Certified MIG & TIG Welding",
      "Plate Cutting & Press Brake Forming",
      "Structural Grade Steel & Alloys",
      "Assembly to Engineering Drawings",
      "Full Pre-assembly Inspection",
    ],
    applications: [
      "Commercial Building Lintels & Posts",
      "Machinery Mounting Racks & Frames",
      "Access Platforms & Stair Stringers",
      "Heavy Duty Mounting Brackets",
      "Warehouse Security Enclosures",
    ],
    specifications: [
      { label: "Welding Types", value: "MIG, TIG, Pulse Arc" },
      { label: "Materials", value: "RHS, SHS, UB, Channel, Plate Steel" },
      { label: "CAD Processing", value: "STEP, DXF, PDF Direct Input" },
      { label: "Compliance", value: "AS/NZS 1554 Weld Quality Standards" },
    ],
  },
  {
    id: "custom-fabrication",
    slug: "custom-fabrication",
    number: "03",
    badge: "BESPOKE",
    title: "Custom Fabrication",
    shortDescription:
      "Tailored engineering solutions manufactured from drawings, sketches, or prototypes. Architectural facades, decorative screens, and one-off components.",
    fullDescription:
      "G & S Engineering provides bespoke custom metalwork for architects, shopfitters, vehicle modifiers, and specialized industrial equipment builders. We turn raw ideas, DXF CAD files, or physical samples into finished metal products ready for deployment.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBANoBURI9JnDOvyplbRliMYCO1t7PbSE3noy7-DD9ixivY2ciJstn65wqv7hdTYOh4eU-l555EhI7ESlzraQWun5vXMh75SXAyXctSKCRMJr9mDoTDfi1vwVQrW1ELKeXY3TQ3y9WR59kE1DqHsPPDrPnZXI8CALrQ3GmOYDAHOhjScL5bJRjJe3x7BhoS6q7mtnYYAtLChP6kNpgOvpL4WHmiq69X8Otw6UHZEgjly2NgyFIO3l_RGBesEJx2Hv1Pvw",
    features: [
      "CAD & DXF Direct Processing",
      "Laser-Cut Sheet Assemblies",
      "Prototyping & Batch Runs",
      "Bespoke Decorative Profiles",
      "Custom Mounting Hardware",
    ],
    applications: [
      "Architectural Facade Feature Panels",
      "Custom 4x4 Canopies & Trays",
      "Retail Shopfitting Displays",
      "Bespoke Metal Furniture Frames",
      "Specialty Prototype Components",
    ],
    specifications: [
      { label: "Sheet Gauges", value: "0.8mm – 16mm Steel & Alloy" },
      { label: "Cutting Methods", value: "CNC Laser & Plasma Processing" },
      { label: "Batch Capability", value: "Single Prototype to Volume Runs" },
      { label: "Finish Customization", value: "Exact Color Matching & Texturing" },
    ],
  },
  {
    id: "industrial-finishing",
    slug: "industrial-finishing",
    number: "04",
    badge: "FINISHING",
    title: "Industrial Metal Finishing",
    shortDescription:
      "Complete surface conditioning: abrasive grit blasting, acid etch wash, zinc-rich primer barrier coats, and high-spec anti-graffiti topcoats.",
    fullDescription:
      "Longevity of powder-coated metal depends heavily on chemical preparation and surface profile. Our industrial finishing department prepares raw, rusted, or mill-scaled metal components through thorough surface cleaning, mechanical profiling, and protective priming before final topcoat curing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMiKIr2ENNocNXWYbn5PbUdQ3V4laA_CajFwDIA6RuPwYOD3iY_oHbofuXH_7MXxGyYyrpUkWf53TWtYyITLThx_mc0S3XOAOh3dQ-IXy-XGWGixdJLVcinOB9Ku7g77UcAsyQhrmF_x8t1l-V1ewYf_LiXXU_sC004zxLuEHtDMNM4BDA8OY-x8VuyscjzKZdgBfC511_rzAEGEcSKCqS1GJpYfE2ZAOkNXRSSfNJE8OjDgP6QZeuUwIaLFCGdD1eDw",
    features: [
      "Zinc Shield Barrier Primer Systems",
      "Degreasing & Mill-Scale Removal",
      "Mechanical Surface Grit Profiling",
      "High-Spec Weathering Protection",
      "C4/C5 Corrosive Environment Spec",
    ],
    applications: [
      "Heavy Machinery Components",
      "Outdoor Infrastructure & Fencing",
      "Marine Exposed Aluminum & Steel",
      "Commercial Dumpster & Bin Frame Lines",
      "Industrial Conveyor & Frame Rails",
    ],
    specifications: [
      { label: "Primer Coat Options", value: "Zinc Shield, Epoxy Barrier" },
      { label: "Corrosion Protection", value: "Commercial Environmental Grade" },
      { label: "Surface Prep", value: "Degreasing & Abrasive Blast Profiling" },
      { label: "Topcoat Systems", value: "High Durability Thermoset Polymers" },
    ],
  },
];
