import React from "react";
import { constructMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Layers } from "lucide-react";

export const metadata = constructMetadata({
  title: "Powder Coating Process & 8m Oven Specs | G & S Engineering",
  description:
    "Learn about our 6-Stage Coating & Curing Protocol: inspection, chemical pretreatment, 100kV electrostatic application, 8.0m batch oven baking, and micron QA testing.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-md">
      <Breadcrumbs items={[{ name: "Process", href: "/process" }]} />

      <div className="py-space-lg mb-space-xl border-b border-outline-variant/30">
        <div className="inline-flex items-center gap-space-xs text-primary font-label text-label-sm font-bold uppercase tracking-widest mb-space-xs">
          <Layers className="w-4 h-4" />
          Engineering QA & Thermal Baking Protocol
        </div>
        <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase tracking-tight mb-space-md">
          The 6-Stage Coating Process
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Adhesion, film thickness, and long-term corrosion resistance are determined by disciplined preparation and thermal accuracy. Here is how G & S Engineering guarantees factory performance on every run.
        </p>
      </div>

      <ProcessTimeline />
      <CtaBanner />
    </div>
  );
}
