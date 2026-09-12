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
    badge: "BATCH COATING",
    title: "Commercial & Batch Powder Coating",
    shortDescription:
      "Durable, consistent electrostatic powder coating for commercial metal components, posts, panels, and volume production runs up to 8 metres in length.",
    fullDescription:
      "At G & S Engineering, our Campbellfield workshop operates a specialized commercial powder coating line built for high volume production runs and custom batch orders. Our precision electrostatic powder application delivers uniform wrap-around coverage across complex geometry, cured in our 8.0-metre batch oven for maximum adhesion, film thickness, and impact resistance.",
    image: "/images/canopy-black-stacked.jpg",
    features: [
      "Dulux & Interpon Accredited Powders",
      "8.0m Batch Oven Curing Bay",
      "Multi-Stage Chemical Wash & Pretreatment",
      "Precision Electrostatic Application",
      "Micron Film Thickness Inspection",
    ],
    applications: [
      "Commercial Fencing & Security Gates",
      "Perforated Sheet Metal Panels",
      "Automotive & Trailer Components",
      "Warehouse Storage & Display Racks",
      "Outdoor Structural Metalwork",
    ],
    specifications: [
      { label: "Oven Capacity", value: "8.0 Metres Batch Bay" },
      { label: "Film Thickness Standard", value: "60 – 90 Microns" },
      { label: "Finishes Available", value: "Gloss, Satin, Matt, Ripple, Pearl" },
      { label: "Substrates Coated", value: "Aluminum, Mild Steel, Galvanised Iron" },
    ],
  },
  {
    id: "industrial-powder-coating",
    slug: "industrial-powder-coating",
    number: "02",
    badge: "HEAVY DUTY",
    title: "Industrial Powder Coating",
    shortDescription:
      "Heavy-duty powder coating systems with zinc barrier primers for industrial machinery, agricultural equipment, outdoor infrastructure, and extreme environments.",
    fullDescription:
      "Engineered for demanding commercial and industrial applications, our industrial powder coating solutions incorporate epoxy zinc shield primers, multi-stage chemical pretreatment, and heavy-duty thermoset powder topcoats. We protect industrial metal assets against severe weather, corrosion, UV degradation, and chemical exposure.",
    image: "/images/canopy-black-brackets.jpg",
    features: [
      "Zinc Shield Anti-Corrosion Primers",
      "Heavy Duty Thermoset Polymer Powder",
      "Salt Spray & UV Weathering Resistance",
      "Commercial Equipment & Housing Protection",
      "AS 4506 Industrial Compliance",
    ],
    applications: [
      "Agricultural & Mining Equipment",
      "Industrial Conveyors & Mounting Frames",
      "Outdoor Machinery Housings",
      "Commercial Storage Containers & Bins",
      "Heavy Steel Post & Rail Assemblies",
    ],
    specifications: [
      { label: "Primer System", value: "Zinc Shield Barrier Primer" },
      { label: "Corrosion Class", value: "C3 - C5 Industrial Rated" },
      { label: "Compliance", value: "AS 4506 Metal Surface Coating" },
      { label: "Curing Temp", value: "180°C - 200°C Thermo Cured" },
    ],
  },
  {
    id: "architectural-coating",
    slug: "architectural-coating",
    number: "03",
    badge: "ARCHITECTURAL",
    title: "Architectural Powder Coating",
    shortDescription:
      "Premium decorative powder coating with exact Colorbond & RAL colour matching for facade screens, louvres, balustrades, and custom metalwork.",
    fullDescription:
      "G & S Engineering delivers premium architectural powder painting for architects, shopfitters, and facade specialists. Utilizing Dulux and Interpon premium architectural powder lines, we guarantee vibrant colour consistency, smooth satin/matt texture finishes, and long-term colour retention for decorative aluminum and steel elements.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBANoBURI9JnDOvyplbRliMYCO1t7PbSE3noy7-DD9ixivY2ciJstn65wqv7hdTYOh4eU-l555EhI7ESlzraQWun5vXMh75SXAyXctSKCRMJr9mDoTDfi1vwVQrW1ELKeXY3TQ3y9WR59kE1DqHsPPDrPnZXI8CALrQ3GmOYDAHOhjScL5bJRjJe3x7BhoS6q7mtnYYAtLChP6kNpgOvpL4WHmiq69X8Otw6UHZEgjly2NgyFIO3l_RGBesEJx2Hv1Pvw",
    features: [
      "Exact Colorbond & RAL Colour Matching",
      "Ultra-Durable Architectural Powder Series",
      "Smooth Matte, Satin & Textured Effects",
      "High UV Stability for Exposed Facades",
      "Custom Batch Runs & Sample Swatches",
    ],
    applications: [
      "Architectural Screens & Window Louvres",
      "Balustrades & Security Screen Panels",
      "Retail Interior & Exterior Displays",
      "Custom Aluminium Extrusions & Trim",
      "Feature Decorative Metal Panels",
    ],
    specifications: [
      { label: "Colour Range", value: "Full Colorbond, Dulux & RAL Matrix" },
      { label: "UV Durability", value: "High Retention Exterior Grade" },
      { label: "Substrate Compatibility", value: "Extruded Aluminium & Sheet Metal" },
      { label: "Quality Inspection", value: "Visual & Gloss Meter Verification" },
    ],
  },
];
