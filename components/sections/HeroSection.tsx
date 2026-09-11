import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config/site";
import {
  FileText,
  Image as ImageIcon,
  Phone,
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

      <div className="relative max-w-7xl mx-auto px-gutter pt-12 pb-16 lg:pt-16 lg:pb-24">
        {/* Breadcrumb / Location Badge */}
        <div className="flex flex-wrap items-center gap-space-xs mb-space-md">
          <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high text-primary font-label text-label-md tracking-wider uppercase shadow-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            {SITE_CONFIG.address.full}
          </span>
          <span className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container text-tertiary font-label text-label-md tracking-wider uppercase">
            Commercial Fabrication & Industrial Powder Coating
          </span>
        </div>

        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center">
          {/* Left: Headings & Value Prop */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-space-xs font-label text-label-sm text-secondary tracking-widest uppercase mb-space-xs font-bold">
              <Factory className="w-4 h-4 text-secondary" />
              Heavy-Duty Industrial Production
            </div>
            <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface tracking-tight uppercase leading-[1.08] mb-space-md">
              Professional{" "}
              <span className="text-primary underline decoration-secondary-container decoration-4 underline-offset-8">
                Powder Coating
              </span>{" "}
              & Metal Fabrication
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mb-space-lg leading-relaxed">
              Durable finishes. Precision fabrication. Direct workshop quality. Servicing Melbourne’s northern commercial corridor with integrated structural welding, CNC sheet-metal work, and oven curing bays up to 8 metres.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-space-md mb-space-xl">
              <Link
                href="/contact#quote"
                className="inline-flex items-center justify-center px-space-lg py-space-md bg-secondary-container text-on-secondary-container font-label text-label-lg font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-secondary-bright transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-5 h-5 mr-space-xs" />
                Get A Direct Factory Quote
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center justify-center px-space-lg py-space-md bg-surface-container-high text-primary font-label text-label-lg font-bold uppercase tracking-wider rounded-lg hover:bg-surface-bright transition-all"
              >
                <ImageIcon className="w-5 h-5 mr-space-xs" />
                View Our Work
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                className="inline-flex items-center text-on-surface font-label text-label-md hover:text-primary transition-colors py-space-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-secondary mr-space-xs" />
                {SITE_CONFIG.phones.primary}
              </a>
            </div>

            {/* Verified Technical Standards */}
            <div className="pt-space-md border-t border-outline-variant/30 grid grid-cols-2 sm:grid-cols-4 gap-space-sm text-left">
              <div className="flex flex-col">
                <span className="font-headline text-headline-sm font-bold text-on-surface">20+</span>
                <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant">Years Tech Mastery</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-headline-sm font-bold text-primary">8.0m</span>
                <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant">Oven Bay Length</span>
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
              <div className="relative h-[430px] w-full rounded-lg overflow-hidden">
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
                <div className="absolute top-space-md left-space-md bg-surface-container-lowest/90 backdrop-blur-md px-space-md py-space-xs rounded-lg flex items-center gap-space-xs">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="font-label text-label-sm uppercase tracking-widest text-on-surface font-bold">Live Workshop Run</span>
                </div>

                {/* Bottom Content Pill */}
                <div className="absolute bottom-space-md left-space-md right-space-md p-space-md bg-surface-container-lowest/95 backdrop-blur-md rounded-lg flex items-center justify-between">
                  <div>
                    <span className="font-label text-label-sm text-secondary uppercase font-bold tracking-wider block">
                      G&S Main Booth
                    </span>
                    <p className="font-headline text-headline-sm text-on-surface font-semibold">
                      Dual Gantry Long-Bed Line
                    </p>
                    <p className="font-body text-body-sm text-on-surface-variant">
                      Continuous automated ventilation & high-voltage grounding
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center shrink-0">
                    <Wind className="w-7 h-7 text-primary" />
                  </div>
                </div>
              </div>

              {/* Inset Badge with Logo */}
              <div className="mt-space-xs p-space-sm bg-surface-container rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden bg-white shrink-0 flex items-center justify-center p-0.5 border border-outline-variant">
                    <Image
                      src={SITE_CONFIG.logos.main}
                      alt="G&S Fabrication Powder Coating Logo"
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-label text-label-sm uppercase font-bold text-on-surface tracking-wider block">
                      {SITE_CONFIG.legalName}
                    </span>
                    <span className="font-label text-label-sm text-tertiary">
                      Campbellfield Fabrication Center
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center text-primary font-label text-label-sm font-semibold">
                  AS 4506 Grade
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
