import React from "react";
import {
  CheckCircle,
  ShieldAlert,
  Ruler,
  Warehouse,
  Sliders,
  Headphones,
} from "lucide-react";

export const AdvantageBento: React.FC = () => {
  const advantages = [
    {
      num: "[ 01 ]",
      title: "Quality Finish",
      desc: "Consistent, pinhole-free industrial grade results. Every batch is rigorously monitored for cure temperature, adhesion strength, and uniform mil thickness.",
      icon: CheckCircle,
    },
    {
      num: "[ 02 ]",
      title: "Extreme Durability",
      desc: "Formulated to withstand harsh Melbourne weather fluctuations, UV bleaching, chemical washdown, chip impact, and abrasive commercial exposure.",
      icon: ShieldAlert,
    },
    {
      num: "[ 03 ]",
      title: "High Precision",
      desc: "High-tolerance fabrication with clean, de-burred edges, flush welds, exact hole alignments, and precision heat-resistant masking for threads and machined faces.",
      icon: Ruler,
    },
    {
      num: "[ 04 ]",
      title: "Full In-House Facility",
      desc: "End-to-end fabrication, welding, chemical pretreatment, and powder application all at 179 Barry Road. Cuts transport overhead and turnaround time in half.",
      icon: Warehouse,
    },
    {
      num: "[ 05 ]",
      title: "Custom Solutions",
      desc: "No job is too specialized. We handle one-off prototypes, bespoke architectural fixtures, custom vehicle components, as well as ongoing multi-pallet commercial runs.",
      icon: Sliders,
    },
    {
      num: "[ 06 ]",
      title: "Direct Line Service",
      desc: "Speak directly with the fabricator and coater managing your job. Fast RFQ quotes within 24 hours, realistic completion commitments, and clear progress updates.",
      icon: Headphones,
    },
  ];

  return (
    <section className="w-full py-margin-lg bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="max-w-3xl mb-space-xl">
          <span className="font-label text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
            The G & S Advantage
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
            Built on Quality & Mechanical Precision
          </h2>
          <p className="font-body text-body-md text-on-surface-variant mt-space-sm">
            Melbourne contractors, architects, and engineering procurement teams rely on G & S for dependable turnaround and uncompromising adherence to Australian standards.
          </p>
        </div>

        {/* 6 Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {advantages.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="p-space-lg rounded-xl bg-surface-container-low hover:bg-surface-container transition-all border border-outline-variant/20 hover:border-outline-variant/60"
              >
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-label text-label-lg text-primary font-bold">
                    {item.num}
                  </span>
                  <IconComponent className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-headline text-headline-sm text-on-surface uppercase font-bold mb-space-xs">
                  {item.title}
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
