import React from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config/site";
import { ShieldCheck, Layers, Shield, Sparkles, Sliders } from "lucide-react";

export const TrustSection: React.FC = () => {
  return (
    <section className="w-full py-margin-lg bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-xl overflow-hidden bg-surface-container-high shadow-xl p-space-xs">
              <div className="relative h-[480px] w-full rounded-lg overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTikOX0UNS-R2lhYUbdqSpyezbyBxe27W7m4JX72OtoCilWrMDLnXwKXB4KxUYTd7hug19M_TP4yrfbSVC-WQz1m9SuEfWjAsjx1frgJHjZMYQ7OZ1SAB-zN7rD4ylyL1tp0T88b_m8QwFLXYkcj0o_bzzFkMNoP-0JWss7kEwQg5vNFY-frEG84hEMuWtuyCWg0vRoMOZomzGhN1rPryqSJD9fK3ppfWMOvssbht9_UOFc9KW9_6EmxMpF7C7_6D3Wg"
                  alt="Electrostatic spray gun coating architectural aluminum gate slats"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent" />
                <div className="absolute top-space-md right-space-md px-space-md py-space-xs bg-surface-container-lowest/90 backdrop-blur rounded font-label text-label-sm text-secondary font-bold uppercase tracking-wider">
                  100kV Corona Discharge
                </div>
                <div className="absolute bottom-space-md left-space-md right-space-md p-space-md bg-surface-container-high/90 backdrop-blur rounded-lg">
                  <div className="flex items-center gap-space-xs text-primary mb-1">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="font-label text-label-sm uppercase tracking-widest font-bold">
                      Flawless Wrap-Around
                    </span>
                  </div>
                  <p className="font-body text-body-sm text-on-surface">
                    Every slat, rebate, and corner seam receives targeted electrostatic charge for zero shadow spots and balanced mil thickness.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            <div className="flex items-center gap-space-xs text-secondary mb-space-xs">
              <ShieldCheck className="w-5 h-5 text-secondary" />
              <span className="font-label text-label-sm uppercase tracking-widest font-bold">
                Under One Workshop Roof
              </span>
            </div>
            <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight mb-space-md">
              Quality Finishing. <br className="hidden sm:block" />Built For Industrial Performance.
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-space-md leading-relaxed">
              Eliminate double handling, freight delays, and contractor finger-pointing. At{" "}
              <strong className="text-on-surface">{SITE_CONFIG.name}</strong>, our Campbellfield workshop operates commercial-grade powder coating facilities under a single chain of custody.
            </p>
            <p className="font-body text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
              Whether you require architectural screens, commercial fencing, equipment enclosures, automotive components, or bulk production runs of posts and brackets, our technicians execute precise chemical pretreatment, automated baking, and strict micron verification.
            </p>

            {/* 3 Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
              <div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-space-sm">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-headline text-headline-sm text-on-surface mb-1 font-bold">
                  Professional Finish
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Uniform film build, pinhole-free curing, smooth satin, matte, and ripple textures.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-space-sm">
                  <Shield className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-headline text-headline-sm text-on-surface mb-1 font-bold">
                  Durable Protection
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant">
                  High UV-stability, marine corrosion resistance, and industrial chemical endurance.
                </p>
              </div>

              <div className="p-space-md rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-tertiary flex items-center justify-center mb-space-sm">
                  <Sliders className="w-5 h-5 text-tertiary" />
                </div>
                <h3 className="font-headline text-headline-sm text-on-surface mb-1 font-bold">
                  Surface Integrity
                </h3>
                <p className="font-body text-body-sm text-on-surface-variant">
                  Chemical etching wash and multi-stage pretreatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
