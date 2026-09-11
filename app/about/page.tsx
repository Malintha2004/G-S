import React from "react";
import { constructMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TrustSection } from "@/components/sections/TrustSection";
import { AdvantageBento } from "@/components/sections/AdvantageBento";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { SITE_CONFIG } from "@/lib/config/site";
import { Factory, ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = constructMetadata({
  title: "About G & S Engineering | Campbellfield Metalwork Facility",
  description:
    "Learn about G & S Engineering at 179 Barry Road, Campbellfield. Full-service commercial powder coating and heavy metal fabrication under one roof.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-md">
      <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />

      {/* Hero Header */}
      <div className="py-space-lg mb-space-xl border-b border-outline-variant/30">
        <div className="inline-flex items-center gap-space-xs text-secondary font-label text-label-sm font-bold uppercase tracking-widest mb-space-xs">
          <Factory className="w-4 h-4" />
          Workshop & Facility Overview
        </div>
        <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase tracking-tight mb-space-md">
          About {SITE_CONFIG.name}
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Located in the heart of Campbellfield&apos;s manufacturing corridor, {SITE_CONFIG.name} provides integrated commercial metal fabrication and electrostatic powder coating services under one factory roof.
        </p>
      </div>

      {/* Facility Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-center mb-margin">
        <div className="space-y-space-md">
          <div className="flex items-center gap-space-xs text-primary font-label text-label-sm uppercase font-bold tracking-wider">
            <ShieldCheck className="w-5 h-5 text-primary" />
            Campbellfield Industrial Standard
          </div>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
            Integrated Chain of Custody
          </h2>
          <p className="font-body text-body-md text-on-surface-variant leading-relaxed">
            By operating full fabrication, welding, chemical pretreatment, and powder application facilities at 179 Barry Road, we remove intermediate transport overheads and eliminate inter-supplier disputes over quality or tolerances.
          </p>
          <ul className="space-y-space-xs font-label text-label-md text-on-surface">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <span>8.0 Metre Batch Curing Oven for Oversized Assemblies</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <span>Full MIG & TIG Welding Bays for Mild Steel, Alloy & Stainless</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <span>Dulux & Interpon Accredited Powder Systems</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
              <span>100% Micron Film Thickness Inspection Protocol</span>
            </li>
          </ul>
        </div>

        <div className="relative h-[420px] rounded-xl overflow-hidden shadow-2xl border border-outline-variant/40">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAarcbBT5ez5RQM9Fh3FFXSwL2P8I_P2JPYeCv-ajWNqsvPTJN5TW2seyXV8beEhCAi23O6wVgxlLpMdjN1f2LkF4QhP7BbSEMIY5QZX5ajC91FWuhuuaycGCzc4o8RVIFw74w34RR80KebIWO1tesAWYetCx5VbAR2BOfFsKVF6FR5JnnacaNdF2Ww_5O7LN3ChyX7NbtH2Kh8VNCRHDGLfAWGXwyCBdjve_acqviRkmbpyfoW93z-30yWx2_k8MUSvQ"
            alt="G & S Engineering Campbellfield Plant Facility"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>

      <TrustSection />
      <AdvantageBento />
      <CtaBanner />
    </div>
  );
}
