import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config/site";
import { FileText, Phone } from "lucide-react";

export const CtaBanner: React.FC = () => {
  return (
    <section className="w-full py-margin-lg bg-surface">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="relative rounded-2xl bg-surface-container-high overflow-hidden shadow-2xl p-space-xl lg:p-margin border border-outline-variant/40">
          {/* Accent Corner Watermark */}
          <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none select-none">
            <span className="font-headline text-[180px] font-bold text-on-surface">
              G&S
            </span>
          </div>

          <div className="relative max-w-3xl">
            <span className="font-label text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
              Direct Dispatch From Campbellfield
            </span>
            <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight mb-space-md">
              Have A Project In Mind? Let’s Coat It Right.
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-space-xl">
              Commercial batch runs, architectural metalwork, or heavy structural steel components. Speak directly with our powder coating specialists today.
            </p>
            <div className="flex flex-wrap items-center gap-space-md">
              <Link
                href="/contact#quote"
                className="px-space-xl py-space-md bg-secondary-container text-on-secondary-container font-label text-label-lg font-bold uppercase tracking-wider rounded-lg hover:bg-secondary-bright transition-all shadow-lg inline-flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Request Workshop Quote
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                className="px-space-xl py-space-md bg-surface text-on-surface font-label text-label-lg font-bold uppercase tracking-wider rounded-lg hover:bg-surface-bright transition-all inline-flex items-center gap-2 border border-outline-variant/50"
              >
                <Phone className="w-5 h-5 text-primary" />
                Call {SITE_CONFIG.phones.primary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
