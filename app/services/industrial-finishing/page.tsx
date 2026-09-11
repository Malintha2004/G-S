import React from "react";
import { constructMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SERVICES_DATA } from "@/lib/data/services";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { RfqQuoteForm } from "@/components/forms/RfqQuoteForm";
import { Check, ShieldCheck, Layers, Sparkles } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = constructMetadata({
  title: "Industrial Metal Finishing Melbourne | G & S Engineering",
  description:
    "Surface preparation, abrasive grit blasting, degreasing, zinc shield primers, and industrial topcoats in Campbellfield, VIC.",
  path: "/services/industrial-finishing",
});

export default function IndustrialFinishingPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "industrial-finishing");
  if (!service) notFound();

  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-md">
      <Breadcrumbs
        items={[
          { name: "Services", href: "/services" },
          { name: "Industrial Finishing", href: "/services/industrial-finishing" },
        ]}
      />

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center py-space-lg mb-space-xl border-b border-outline-variant/30">
        <div className="lg:col-span-7">
          <span className="font-label text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
            04 // Surface Pretreatment & Barrier Systems
          </span>
          <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase tracking-tight mb-space-md">
            Industrial Metal Finishing Melbourne
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mb-space-lg leading-relaxed">
            {service.fullDescription}
          </p>

          <div className="grid grid-cols-2 gap-space-md pt-space-md border-t border-outline-variant/20">
            {service.specifications.map((spec, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-label text-label-sm uppercase text-on-surface-variant">
                  {spec.label}
                </span>
                <span className="font-headline text-headline-sm text-primary font-bold">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[420px] rounded-xl overflow-hidden shadow-2xl border border-outline-variant/40">
          <Image
            src={service.image}
            alt="Dual Booth Industrial Metal Finishing Line"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Features & Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg mb-margin">
        <div className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/30">
          <h3 className="font-headline text-headline-sm text-on-surface font-bold uppercase mb-space-md flex items-center gap-2">
            <Layers className="w-5 h-5 text-secondary" />
            Finishing Capabilities
          </h3>
          <ul className="space-y-space-xs font-body text-body-md text-on-surface-variant">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-space-lg rounded-xl bg-surface-container border border-outline-variant/30">
          <h3 className="font-headline text-headline-sm text-on-surface font-bold uppercase mb-space-md flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Corrosive Protection Applications
          </h3>
          <ul className="space-y-space-xs font-body text-body-md text-on-surface-variant">
            {service.applications.map((app, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-secondary shrink-0" />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-margin" id="quote">
        <RfqQuoteForm />
      </div>

      <CtaBanner />
    </div>
  );
}
