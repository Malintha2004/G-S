import React from "react";
import { constructMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FinishesSwatches } from "@/components/sections/FinishesSwatches";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Palette } from "lucide-react";

export const metadata = constructMetadata({
  title: "Powder Coating Finishes & Color Swatches | G & S Engineering",
  description:
    "Explore our commercial powder coating library: Gloss, Satin, Matt, Textured Ripple, Metallic Pearl, and custom Colorbond/Dulux matching.",
  path: "/finishes",
});

export default function FinishesPage() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-md">
      <Breadcrumbs items={[{ name: "Finishes", href: "/finishes" }]} />

      <div className="py-space-lg mb-space-xl border-b border-outline-variant/30">
        <div className="inline-flex items-center gap-space-xs text-secondary font-label text-label-sm font-bold uppercase tracking-widest mb-space-xs">
          <Palette className="w-4 h-4" />
          Color & Texture Swatch Library
        </div>
        <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase tracking-tight mb-space-md">
          Commercial Powder Coating Finishes
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Full range of architectural and industrial powders including Dulux ProTech, Interpon D1000, Oxytech, and Colorbond standard palette matches.
        </p>
      </div>

      <FinishesSwatches />
      <CtaBanner />
    </div>
  );
}
