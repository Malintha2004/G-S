"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/config/navigation";
import { SITE_CONFIG } from "@/lib/config/site";
import { MobileNav } from "./MobileNav";
import { Phone, Mail, FileText } from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant/30">
      <div className="h-20 max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Brand Logo & Title */}
        <div className="flex items-center gap-space-md shrink-0">
          <Link href="/" className="flex items-center gap-space-sm group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white border border-outline-variant shrink-0 flex items-center justify-center shadow-md">
              <Image
                src={SITE_CONFIG.logos.main}
                alt="G&S Fabrication Powder Coating Logo"
                fill
                sizes="44px"
                className="object-cover p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline text-headline-sm font-bold tracking-tight text-on-surface uppercase">
                G & S Engineering
              </span>
              <span className="font-label text-label-sm tracking-widest text-on-surface-variant uppercase">
                Fab & Powder Coating
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-md">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label text-label-md uppercase tracking-wider py-space-xs transition-colors ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-space-md shrink-0">
          <div className="hidden md:flex flex-col text-right">
            <span className="font-label text-label-sm uppercase tracking-widest text-on-surface-variant">
              Dispatch & Enquiries
            </span>
            <div className="flex items-center justify-end gap-space-xs">
              <a
                href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                className="font-label text-label-md text-on-surface font-semibold hover:text-primary transition-colors flex items-center gap-space-xs"
              >
                <Phone className="w-4 h-4 text-primary" />
                {SITE_CONFIG.phones.primary}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-label text-label-md text-on-surface hover:text-primary transition-colors flex items-center p-1 rounded hover:bg-surface-container-high ml-1"
                aria-label={`Email ${SITE_CONFIG.email}`}
                title={`Email ${SITE_CONFIG.email}`}
              >
                <Mail className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>

          <Link
            href="/contact#quote"
            className="inline-flex items-center justify-center px-space-md py-space-sm bg-secondary-container text-on-secondary-container font-label text-label-md font-bold uppercase tracking-wider rounded-lg hover:bg-secondary-bright transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4 mr-1" />
            Get a Quote
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
};
