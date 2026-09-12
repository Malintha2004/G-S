import React from "react";
import { Star } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "G & S handled over 40 structural balustrade panels and security gates for our multi-residential site in Broadmeadows. Flawless satin black powder coat, zero defects on handover, and ready 2 days ahead of schedule.",
      name: "Marcus Vance",
      role: "Site Director, Northern Build Group",
    },
    {
      text: "Having chemical wash pretreatment and electrostatic powder coating under the same roof on Barry Road is a game changer. No extra transport fees, no finger-pointing between suppliers. They just get it done right.",
      name: "Damian Ross",
      role: "Operations Lead, Apex Logistics Transport",
    },
    {
      text: "Brought them custom architectural screens and 4x4 canopy frames for powder painting. The adhesion, Colorbond colour match, and satin finish quality are first-class. Highly recommend for commercial powder coating in Melbourne.",
      name: "Terry O’Connor",
      role: "Architectural Coating Client",
    },
  ];

  return (
    <section className="w-full py-margin-lg bg-surface">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">
            Campbellfield Reputation
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
            What Our Commercial Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-space-lg rounded-xl bg-surface-container-low flex flex-col justify-between shadow-md border border-outline-variant/20"
            >
              <div>
                <div className="flex items-center text-secondary mb-space-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="font-body text-body-md text-on-surface mb-space-md italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>
              <div className="border-t border-outline-variant/30 pt-space-sm">
                <span className="font-label text-label-md font-bold text-on-surface block">
                  {rev.name}
                </span>
                <span className="font-label text-label-sm text-on-surface-variant">
                  {rev.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
