import React from "react";
import { constructMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HelpCircle } from "lucide-react";

export const metadata = constructMetadata({
  title: "Powder Coating FAQ | G & S Engineering",
  description:
    "Get answers to common industrial powder coating questions: oven capacities, sandblasting prep, substrates, turnaround times, and Colorbond matching.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-md">
      <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />

      <div className="py-space-lg mb-space-xl border-b border-outline-variant/30">
        <div className="inline-flex items-center gap-space-xs text-primary font-label text-label-sm font-bold uppercase tracking-widest mb-space-xs">
          <HelpCircle className="w-4 h-4" />
          Technical Specifications & Answers
        </div>
        <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase tracking-tight mb-space-md">
          Frequently Asked Questions
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Detailed technical answers regarding our Campbellfield plant capabilities, oven sizing limits, substrate pretreatments, sandblasting, and turnaround options.
        </p>
      </div>

      <FaqAccordion />
      <CtaBanner />
    </div>
  );
}
