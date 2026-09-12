export interface GalleryProject {
  id: string;
  category: "commercial" | "industrial" | "architectural";
  categoryName: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  spanClass: string;
}

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "proj-1",
    category: "commercial",
    categoryName: "Commercial Batch",
    title: "Satin Black Ute Canopy Enclosures",
    subtitle: "Electrostatic Powder Coating & Curing — Campbellfield Workshop",
    description: "Stack of commercial aluminium checkerplate ute toolboxes finished in satin black thermoset powder.",
    image: "/images/canopy-black-stacked.jpg",
    spanClass: "lg:col-span-8",
  },
  {
    id: "proj-2",
    category: "industrial",
    categoryName: "Industrial Batch",
    title: "Checkerplate Panels & Mounting Brackets",
    subtitle: "High-Durability Micron Film Build — Campbellfield",
    description: "Palletized custom brackets and black powder-coated aluminium panels ready for final dispatch.",
    image: "/images/canopy-black-brackets.jpg",
    spanClass: "lg:col-span-4",
  },
  {
    id: "proj-3",
    category: "industrial",
    categoryName: "Industrial Frames",
    title: "Heavy Steel Subframes & Rack Assemblies",
    subtitle: "High-Voltage Powder Coating & Oven Curing",
    description: "Stack of fabricated steel subframes finished in industrial satin black powder coating.",
    image: "/images/steel-frames-black.jpg",
    spanClass: "lg:col-span-6",
  },
  {
    id: "proj-4",
    category: "commercial",
    categoryName: "Accredited Finish",
    title: "Interpon Powder Coated Wheel Arch Flares",
    subtitle: "Dulux & Interpon Accredited Powder Application",
    description: "Batch coated aluminium checkerplate mudguards and wheel flares using Interpon satin black powder.",
    image: "/images/interpon-flares-black.jpg",
    spanClass: "lg:col-span-6",
  },
];
