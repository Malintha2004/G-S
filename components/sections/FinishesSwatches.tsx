import React from "react";
import Link from "next/link";
import { FINISHES_DATA } from "@/lib/data/finishes";
import { Palette, Send } from "lucide-react";

export const FinishesSwatches: React.FC = () => {
  return (
    <section className="w-full py-margin-lg bg-surface-container-low" id="finishes">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div>
            <span className="font-label text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
              Commercial Colour & Texture Library
            </span>
            <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
              Powder Coating Finishes
            </h2>
          </div>
          <p className="font-body text-body-sm text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            We stock and apply the full range of Dulux ProTech, Interpon D1000, and Oxytech industrial powders. Custom colour matching available.
          </p>
        </div>

        {/* Swatch Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-space-md mb-space-xl">
          {FINISHES_DATA.map((swatch) => (
            <div
              key={swatch.id}
              className="p-space-md rounded-xl bg-surface-container flex flex-col items-center text-center group hover:bg-surface-container-high transition-colors border border-outline-variant/20"
            >
              <div
                className={`w-20 h-20 rounded-full mb-space-sm shadow-inner relative overflow-hidden flex items-center justify-center ${swatch.gradientClass}`}
                style={swatch.bgStyle ? { backgroundImage: swatch.bgStyle, backgroundSize: "6px 6px" } : undefined}
              >
                {swatch.icon === "palette" ? (
                  <Palette className="w-8 h-8 text-secondary" />
                ) : (
                  <span className="font-label text-label-sm text-on-surface font-bold px-1 bg-surface-container/80 rounded">
                    {swatch.sheen}
                  </span>
                )}
              </div>
              <h4 className="font-headline text-headline-sm text-on-surface font-bold mb-1">
                {swatch.name}
              </h4>
              <span className="font-body text-body-sm text-on-surface-variant">
                {swatch.description}
              </span>
            </div>
          ))}
        </div>

        {/* Finish Action CTA */}
        <div className="p-space-lg rounded-xl bg-surface flex flex-col sm:flex-row items-center justify-between gap-space-md border border-outline-variant/40">
          <div>
            <h4 className="font-headline text-headline-sm text-on-surface uppercase font-bold">
              Need Color Swatches or Specifier Samples?
            </h4>
            <p className="font-body text-body-sm text-on-surface-variant">
              Our team can provide powder coated aluminum test coupons directly to your site or office.
            </p>
          </div>
          <Link
            href="/contact#quote"
            className="px-space-lg py-space-sm bg-secondary-container text-on-secondary-container font-label text-label-md font-bold uppercase rounded-lg hover:bg-secondary-bright transition-colors whitespace-nowrap inline-flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Ask About Colours & Finishes
          </Link>
        </div>
      </div>
    </section>
  );
};
