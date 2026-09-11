import React from "react";
import { constructMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Image as ImageIcon } from "lucide-react";

export const metadata = constructMetadata({
  title: "Our Work & Portfolio | G & S Engineering Campbellfield",
  description:
    "Explore our commercial powder coating and metal fabrication project portfolio. Real shop-floor photos from 179 Barry Road, Campbellfield.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-md">
      <Breadcrumbs items={[{ name: "Our Work", href: "/our-work" }]} />

      <div className="py-space-lg mb-space-xl border-b border-outline-variant/30">
        <div className="inline-flex items-center gap-space-xs text-secondary font-label text-label-sm font-bold uppercase tracking-widest mb-space-xs">
          <ImageIcon className="w-4 h-4" />
          Campbellfield Workshop Portfolio
        </div>
        <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase tracking-tight mb-space-md">
          Our Fabrication & Coating Work
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Real factory photos showcasing structural beam lines, electrostatic security gates, cantilever RHS frames, perforated facade panels, and heavy commercial assemblies.
        </p>
      </div>

      <WorkGallery />
      <BeforeAfterSlider />
      <CtaBanner />
    </div>
  );
}
