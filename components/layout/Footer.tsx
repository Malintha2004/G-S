import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/config/site";
import { SERVICE_NAV_ITEMS } from "@/lib/config/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Send,
  Wrench,
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-gutter pt-margin pb-space-lg">
        {/* Top CTA Banner in Footer */}
        <div className="p-space-lg mb-margin bg-surface-container-low border border-outline-variant rounded-xl flex flex-col lg:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs mb-space-xs">
              <Wrench className="w-5 h-5 text-secondary-container" />
              <span className="font-label text-label-sm uppercase tracking-widest text-secondary-container font-bold">
                Direct Workshop Quote
              </span>
            </div>
            <h3 className="font-headline text-headline-sm font-bold text-on-surface">
              Ready for Industrial Powder Coating & Surface Finishing?
            </h3>
            <p className="font-body text-body-sm text-on-surface-variant">
              Commercial batches, architectural runs, and custom colour coats delivered from Campbellfield.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-sm w-full lg:w-auto">
            <a
              href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
              className="inline-flex items-center justify-center px-space-md py-space-sm bg-surface-container-high text-on-surface border border-outline-variant font-label text-label-md uppercase tracking-wider rounded-lg hover:bg-surface-container hover:text-on-surface transition-colors"
            >
              <Phone className="w-4 h-4 mr-1 text-primary" />
              {SITE_CONFIG.phones.primary}
            </a>
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center px-space-md py-space-sm bg-secondary-container text-on-secondary-container font-label text-label-md font-bold uppercase tracking-wider rounded-lg hover:bg-secondary-bright transition-colors"
            >
              <Send className="w-4 h-4 mr-1" />
              Submit RFQ
            </Link>
          </div>
        </div>

        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-margin">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white shrink-0 flex items-center justify-center p-0.5 border border-outline-variant">
                <Image
                  src={SITE_CONFIG.logos.main}
                  alt="G&S Powder Coating Logo"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="font-headline text-headline-sm font-bold text-on-surface uppercase">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="font-body text-body-sm text-on-surface-variant mb-space-md">
              Commercial powder coating and protective surface finishing servicing Melbourne&apos;s northern industrial corridor.
            </p>
            <div className="flex flex-col gap-space-xs font-label text-label-sm text-on-surface-variant">
              <span className="flex items-center gap-space-xs">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                {SITE_CONFIG.address.full}
              </span>
              <span className="flex items-center gap-space-xs">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                {SITE_CONFIG.email}
              </span>
            </div>
          </div>

          {/* Col 2: Capabilities */}
          <div className="flex flex-col">
            <span className="font-label text-label-md uppercase tracking-widest text-primary mb-space-md font-bold">
              Capabilities
            </span>
            <ul className="flex flex-col gap-space-xs font-body text-body-sm text-on-surface-variant">
              {SERVICE_NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-on-surface transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/finishes" className="hover:text-on-surface transition-colors">
                  Dulux & Interpon Finish Library
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-on-surface transition-colors">
                  Surface Pretreatment & Chemical Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="flex flex-col">
            <span className="font-label text-label-md uppercase tracking-widest text-primary mb-space-md font-bold">
              Quick Links
            </span>
            <ul className="flex flex-col gap-space-xs font-body text-body-sm text-on-surface-variant">
              <li>
                <Link href="/about" className="hover:text-on-surface transition-colors">
                  Plant & Equipment Overview
                </Link>
              </li>
              <li>
                <Link href="/our-work" className="hover:text-on-surface transition-colors">
                  Recent Projects Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-on-surface transition-colors">
                  Quality Assurance Protocol
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-on-surface transition-colors">
                  Coatings & Sizing FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-on-surface transition-colors">
                  Dispatch & Factory Location
                </Link>
              </li>
              <li>
                <Link href="/contact#quote" className="hover:text-on-surface transition-colors">
                  Request Commercial Spec Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Dispatch & Direct Lines */}
          <div className="flex flex-col">
            <span className="font-label text-label-md uppercase tracking-widest text-primary mb-space-md font-bold">
              Dispatch & Direct Lines
            </span>
            <div className="p-space-md bg-surface-container border border-outline-variant rounded-lg flex flex-col gap-space-xs mb-space-md">
              <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant">
                Powder Coating Bay
              </span>
              <a
                href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                className="font-label text-label-md text-on-surface font-semibold hover:text-primary transition-colors"
              >
                {SITE_CONFIG.phones.primary}
              </a>
              <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant mt-space-xs">
                Coating Operations
              </span>
              <a
                href={`tel:${SITE_CONFIG.phones.secondaryRaw}`}
                className="font-label text-label-md text-on-surface font-semibold hover:text-primary transition-colors"
              >
                {SITE_CONFIG.phones.secondary}
              </a>
            </div>
            <div className="flex items-center gap-space-xs text-on-surface-variant">
              <Clock className="w-4 h-4 text-tertiary shrink-0" />
              <span className="font-label text-label-sm">
                Mon - Fri: 06:30 - 17:00 AEST
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Compliance Bar */}
        <div className="pt-space-md border-t border-outline-variant/30 flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-wrap items-center gap-space-md">
            <span className="inline-flex items-center gap-space-xs font-label text-label-sm uppercase tracking-widest text-tertiary">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Quality Workmanship
            </span>
            <span className="inline-flex items-center gap-space-xs font-label text-label-sm uppercase tracking-widest text-tertiary">
              <Award className="w-4 h-4 text-primary" />
              Commercial & Industrial Grade
            </span>
            <span className="inline-flex items-center gap-space-xs font-label text-label-sm uppercase tracking-widest text-tertiary">
              <ShieldCheck className="w-4 h-4 text-primary" />
              AS 4506 Compliant Curing
            </span>
          </div>
          <div className="font-label text-label-sm text-on-surface-variant text-center md:text-right">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. Campbellfield, Victoria.
          </div>
        </div>
      </div>
    </footer>
  );
};
