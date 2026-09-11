export interface GalleryProject {
  id: string;
  category: "powder" | "fabrication" | "industrial" | "custom";
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
    category: "industrial",
    categoryName: "Industrial Dual Booth",
    title: "Heavy Structural Beam Line",
    subtitle: "Long-Bed Dual Booth Electrostatic Application — Campbellfield",
    description: "Dual-operator ventilated bay handling large architectural spans up to 8m length.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdoJEPzly-DUgN9R_xX5e4K0ORwdXd93JAm_Rqx-yCDKmWU_Ms2erxnr3moJ6RQDY9DBHR8QAOSycA2phUzZjqhcmHjbQeHq5p5fUV_ScrWrc9zjtGw7Wg0S_ceiOBUo_K7b71-XqIwKGUlcOBrFdGigX3TggJU1b9rz8LBGFt3PY3BV74sC1vCEB5iukzusHU9WHTKRU313_GTQpSYJGoJwTrIVisFu_zhyMsgcONqEd_IdFa69pSGlZk7Q9N3ErQBA",
    spanClass: "lg:col-span-8",
  },
  {
    id: "proj-2",
    category: "powder",
    categoryName: "Powder Coating",
    title: "Architectural Slat Coating",
    subtitle: "Electrostatic Precision Coating — Satin Finish",
    description: "100kV corona charge ensuring uniform mil coverage across slat profiles.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmD2DxWZvhRSWvWdvCqdJ8gFjjKDZiT3SxZl5kiWUvPGGm1KM91JRc7Lz36vvXlFz7MP9nJAZh8iP8KXp0_SeHuJbiekpw0sjZyMgEB0deACXYKwdHvmmFXNWQ_iq4iVbc7Q6oEWREsgpKwYORfvPIUwmygLLhzfGoF0E4N9BAc0a8BxRapy5qCAOSJk96p5VUNUC0_e9xN5DDk4u6I3vdJwGp3EXN6wzUlvub_X0ZX8XqrTdeVXtv7ToGoHZ9mZpvhg",
    spanClass: "lg:col-span-4",
  },
  {
    id: "proj-3",
    category: "fabrication",
    categoryName: "Metal Fabrication",
    title: "Cantilever Steel Frames",
    subtitle: "MIG Welded RHS Assemblies Ready for Pretreatment",
    description: "Full fabrication, gusset welding, mounting flanges, and satin black coat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7AmRTSv8Yl9pTYh8Wtwvf5rAYwptW6AnQxLBglftjcGEdFCOZkfBLn_wGBJeu-U_-MfoX8zgHZhdkO4bmvqEWT_cFbOsdRXq95brQXGqIo3QyjKt1WKqIdqmBRAQXkZLpEcFcQbGRctPHgzk4cibBR_dFQA8Z3Bh9Qq0DJXi625ZSTt-Oy5HGIUr2ts4mX0iRSCmahcWCaHNukTYdP-Fo3fc1hDNfR9Ws3Rdbkn0FBKiVFbGwgr_JoartGu0jGcyuJA",
    spanClass: "lg:col-span-6",
  },
  {
    id: "proj-4",
    category: "custom",
    categoryName: "Architectural Custom",
    title: "Perforated Facade Panels",
    subtitle: "Custom Laser-Cut Cross Pattern Louvre Panels",
    description: "Bespoke cross-punched sheet with satin UV-durable architectural coat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrNdyrknrOKKigdoU6jAHU672N4O7NrWBnk6wYLoc5wSu40Axklynjgy7Oc3SAVRJ8cCbHIhge1VNoGEB52coINXXo1Ihh0sHzn7oDFXT62RWs1GtGrSxTYidL8YS6kjEFhWFqlS_7oPe0r38rEN-E74vYChzPq1zwcd2G0EyYACOmdgjErPI5_u2akmB_xy4zKnLNAYliDr0Lu00Nbf7gi0-dgpnV4cdkFLcCTQnSmEA3m0WyU9t1AUN479wAgFANZg",
    spanClass: "lg:col-span-6",
  },
];
