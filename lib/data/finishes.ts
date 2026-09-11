export interface SwatchFinish {
  id: string;
  name: string;
  sheen: string;
  description: string;
  gradientClass: string;
  bgStyle?: string;
  icon?: string;
}

export const FINISHES_DATA: SwatchFinish[] = [
  {
    id: "gloss",
    name: "Gloss",
    sheen: "85% GLOSS",
    description: "High shine, smooth wipe-down, brilliant depth.",
    gradientClass: "bg-gradient-to-tr from-surface-container-lowest to-surface-bright",
  },
  {
    id: "satin",
    name: "Satin",
    sheen: "30% SATIN",
    description: "Architectural standard. Balanced sheen & elegance.",
    gradientClass: "bg-surface-variant",
  },
  {
    id: "matt",
    name: "Matt Finish",
    sheen: "MATTE",
    description: "Anti-glare, contemporary architectural look.",
    gradientClass: "bg-surface-container-lowest",
  },
  {
    id: "ripple",
    name: "Ripple / Texture",
    sheen: "TEXTURE",
    description: "High-grip, scratch-hiding for heavy equipment.",
    gradientClass: "bg-surface-bright",
    bgStyle: "radial-gradient(#101419 25%, transparent 25%)",
  },
  {
    id: "pearl",
    name: "Metallic Pearl",
    sheen: "PEARL",
    description: "Fine mica flakes for automotive & facade flair.",
    gradientClass: "bg-gradient-to-r from-tertiary-container via-surface-variant to-tertiary-container",
  },
  {
    id: "custom",
    name: "Custom Match",
    sheen: "MATCH",
    description: "Direct matching to Colorbond, RAL & Dulux codes.",
    gradientClass: "bg-surface-container-high",
    icon: "palette",
  },
];
