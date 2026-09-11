import React from "react";
import { constructMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Wrench } from "lucide-react";

export const metadata = constructMetadata({
  title: "Powder Coating & Surface Finishing Services | G & S Engineering",
  description:
    "Explore our specialized powder coating services: Commercial & Batch Powder Coating, Industrial Powder Coating, Architectural Powder Coating, and Sandblasting & Surface Prep at 179 Barry Road, Campbellfield.",
  path: "/services",
});

export default function ServicesOverviewPage() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-md">
      <Breadcrumbs items={[{ name: "Services", href: "/services" }]} />

      <div className="py-space-lg mb-space-xl border-b border-outline-variant/30">
        <div className="inline-flex items-center gap-space-xs text-secondary font-label text-label-sm font-bold uppercase tracking-widest mb-space-xs">
          <Wrench className="w-4 h-4" />
          Full Powder Coating Spectrum
        </div>
        <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase tracking-tight mb-space-md">
          Commercial Powder Coating Services
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          From abrasive sandblasting surface preparation and chemical wash pretreatment to high-voltage electrostatic powder coating and batch oven curing up to 8.0 metres, G & S Engineering delivers end-to-end industrial coating solutions.
        </p>
      </div>

      <ServicesSection />
      <ProcessTimeline />
      <CtaBanner />
    </div>
  );
}
