import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config/site";
import {
  FileText,
  Image as ImageIcon,
  Phone,
  Mail,
  CheckCircle2,
  Wind,
  Factory,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full -mt-20 pt-20 overflow-hidden bg-surface-container-lowest">
      {/* Ambient Workshop Industrial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-2/3 right-10 w-[420px] h-[280px] bg-secondary-container/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-gutter pt-8 sm:pt-12 pb-12 sm:pb-16 lg:pt-16 lg:pb-24">
        {/* Breadcrumb / Location Badge */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-space-xs mb-3 md:mb-space-md">
          <span className="inline-flex items-center gap-space-xs px-2.5 sm:px-space-md py-1 sm:py-space-xs rounded-full bg-surface-container-high text-primary font-label text-[11px] sm:text-label-md tracking-wider uppercase shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary-container animate-pulse shrink-0" />
            {SITE_CONFIG.address.full}
          </span>
          <span className="inline-flex items-center gap-space-xs px-2.5 sm:px-space-md py-1 sm:py-space-xs rounded-full bg-surface-container text-tertiary font-label text-[11px] sm:text-label-md tracking-wider uppercase">
            Commercial & Industrial Powder Coating
          </span>
        </div>

        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-gutter-lg items-center">
          {/* Left: Headings & Value Prop */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-space-xs font-label text-[11px] sm:text-label-sm text-secondary tracking-widest uppercase mb-1.5 md:mb-space-xs font-bold">
              <Factory className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary shrink-0" />
              Professional Powder Coating Specialists
            </div>
            <h1 className="font-headline text-[26px] leading-[32px] xs:text-[30px] xs:leading-[36px] sm:text-[36px] sm:leading-[44px] md:text-headline-hero text-on-surface tracking-tight uppercase mb-3 md:mb-space-md">
              Professional{" "}
              <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-4 sm:underline-offset-8">
                Powder Coating
              </span>
            </h1>

            {/* Mobile concise description (2-3 lines) */}
            <p className="font-body text-body-md text-on-surface-variant max-w-2xl mb-4 leading-relaxed block md:hidden">
              Durable, high-precision commercial powder coating for Melbourne metalwork. Vibrant colour options, custom specifications, and fast workshop turnaround.
            </p>

            {/* Desktop description (full text) */}
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mb-space-lg leading-relaxed hidden md:block">
              Durable finishes. Vibrant colour options. Precision surface preparation. Servicing Melbourne’s northern industrial corridor with high-voltage electrostatic application, abrasive sandblasting, chemical pretreatment, and batch oven curing up to 8 metres.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-space-md mb-4 md:mb-space-xl">
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center px-4 sm:px-space-lg py-3 sm:py-space-md bg-secondary-container text-on-secondary-container font-label text-xs sm:text-label-lg font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-secondary-bright transition-all active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-space-xs shrink-0" />
                Get A Direct Workshop Quote
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center px-4 sm:px-space-lg py-2.5 sm:py-space-md bg-surface-container-high text-primary font-label text-xs sm:text-label-lg font-bold uppercase tracking-wider rounded-lg hover:bg-surface-bright transition-all"
              >
                <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-space-xs shrink-0" />
                View Our Work
              </Link>
              <div className="flex items-center justify-center sm:justify-start gap-4 pt-1 sm:pt-0">
                <a
                  href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                  className="inline-flex items-center text-on-surface font-label text-xs sm:text-label-md hover:text-primary transition-colors py-1 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary mr-1.5 shrink-0" />
                  {SITE_CONFIG.phones.primary}
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex md:hidden items-center text-on-surface font-label text-xs hover:text-primary transition-colors py-1 font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 text-primary mr-1.5 shrink-0" />
                  Email Us
                </a>
              </div>
            </div>

            {/* Verified Technical Standards (Desktop/Tablet) */}
            <div className="pt-space-md border-t border-outline-variant/30 hidden md:grid grid-cols-4 gap-space-sm text-left">
              <div className="flex flex-col">
                <span className="font-headline text-headline-sm font-bold text-on-surface">20+</span>
                <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant">Years Coating Mastery</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-headline-sm font-bold text-primary">8.0m</span>
                <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant">Batch Oven Length</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-headline-sm font-bold text-on-surface">100%</span>
                <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant">Micron Inspected</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-headline-sm font-bold text-secondary">Fast</span>
                <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant">Turnaround VIC</span>
              </div>
            </div>
          </div>

          {/* Right: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden bg-surface-container-high shadow-2xl p-space-xs group">
              <div className="relative h-[260px] sm:h-[380px] lg:h-[430px] w-full rounded-lg overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAarcbBT5ez5RQM9Fh3FFXSwL2P8I_P2JPYeCv-ajWNqsvPTJN5TW2seyXV8beEhCAi23O6wVgxlLpMdjN1f2LkF4QhP7BbSEMIY5QZX5ajC91FWuhuuaycGCzc4o8RVIFw74w34RR80KebIWO1tesAWYetCx5VbAR2BOfFsKVF6FR5JnnacaNdF2Ww_5O7LN3ChyX7NbtH2Kh8VNCRHDGLfAWGXwyCBdjve_acqviRkmbpyfoW93z-30yWx2_k8MUSvQ"
                  alt="G & S Powder Coating Spray Booth Campbellfield"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />
                
                {/* Live Badge */}
                <div className="absolute top-2 sm:top-space-md left-2 sm:left-space-md bg-surface-container-lowest/90 backdrop-blur-md px-2.5 sm:px-space-md py-1 sm:py-space-xs rounded-lg flex items-center gap-1.5 sm:gap-space-xs">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                  <span className="font-label text-[10px] sm:text-label-sm uppercase tracking-widest text-on-surface font-bold">Live Coating Run</span>
                </div>

                {/* Bottom Content Pill */}
                <div className="absolute bottom-2 sm:bottom-space-md left-2 sm:left-space-md right-2 sm:right-space-md p-2.5 sm:p-space-md bg-surface-container-lowest/95 backdrop-blur-md rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-label text-[10px] sm:text-label-sm text-secondary uppercase font-bold tracking-wider block">
                      G&S Main Booth
                    </span>
                    <p className="font-headline text-xs sm:text-headline-sm text-on-surface font-semibold">
                      Dual Gantry Long-Bed Coating Line
                    </p>
                    <p className="font-body text-[11px] sm:text-body-sm text-on-surface-variant hidden sm:block">
                      Continuous automated ventilation & electrostatic grounding
                    </p>
                  </div>
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                    <Wind className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  </div>
                </div>
              </div>

              {/* Inset Badge with Logo */}
              <div className="mt-space-xs p-2 sm:p-space-sm bg-surface-container rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-space-sm">
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden bg-white shrink-0 flex items-center justify-center p-0.5 border border-outline-variant">
                    <Image
                      src={SITE_CONFIG.logos.main}
                      alt="G&S Powder Coating Logo"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-label text-xs sm:text-label-sm uppercase font-bold text-on-surface tracking-wider block">
                      {SITE_CONFIG.legalName}
                    </span>
                    <span className="font-label text-[10px] sm:text-label-sm text-tertiary">
                      Campbellfield Powder Coating Workshop
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center text-primary font-label text-[10px] sm:text-label-sm font-semibold">
                  AS 4506 Grade
                </span>
              </div>
            </div>

            {/* Mobile Statistics Section (below Showcase Card) */}
            <div className="pt-4 mt-4 border-t border-outline-variant/30 grid grid-cols-2 gap-2 text-left md:hidden">
              <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col">
                <span className="font-headline text-lg font-bold text-on-surface">20+</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Years Mastery</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col">
                <span className="font-headline text-lg font-bold text-primary">8.0m</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Oven Length</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col">
                <span className="font-headline text-lg font-bold text-on-surface">100%</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Micron Inspected</span>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/20 flex flex-col">
                <span className="font-headline text-lg font-bold text-secondary">Fast</span>
                <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant">Turnaround VIC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
