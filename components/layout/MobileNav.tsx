"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/config/navigation";
import { SITE_CONFIG } from "@/lib/config/site";
import { Menu, X, Phone, Mail, FileText } from "lucide-react";

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-on-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg bg-surface-container"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 top-20 z-40 bg-surface-container-lowest/95 backdrop-blur-xl flex flex-col justify-between p-gutter overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200"
          role="dialog"
          aria-modal="true"
        >
          <nav className="flex flex-col space-y-space-md pt-space-md">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-headline text-headline-sm uppercase font-semibold py-space-xs border-b border-outline-variant/30 transition-colors ${
                    isActive
                      ? "text-primary border-primary font-bold"
                      : "text-on-surface hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="pt-space-xl pb-space-lg space-y-space-md border-t border-outline-variant/40">
            <div className="flex flex-col gap-1">
              <span className="font-label text-label-sm uppercase tracking-widest text-on-surface-variant">
                Direct Dispatch & Enquiries
              </span>
              <a
                href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                className="font-label text-label-lg font-bold text-on-surface hover:text-primary flex items-center gap-space-xs py-1"
              >
                <Phone className="w-4 h-4 text-primary" />
                {SITE_CONFIG.phones.primary}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-label text-label-md font-semibold text-on-surface hover:text-primary flex items-center gap-space-xs py-1"
              >
                <Mail className="w-4 h-4 text-primary" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phones.secondaryRaw}`}
                className="font-label text-label-sm font-semibold text-on-surface-variant hover:text-primary flex items-center gap-space-xs py-1"
              >
                <Phone className="w-4 h-4 text-secondary" />
                Alt: {SITE_CONFIG.phones.secondary}
              </a>
            </div>

            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center w-full py-space-md bg-secondary-container text-on-secondary-container font-label text-label-lg font-bold uppercase tracking-wider rounded-lg shadow-md hover:bg-secondary-bright transition-colors"
            >
              <FileText className="w-5 h-5 mr-2" />
              Get A Quote
            </Link>

            <div className="text-center">
              <span className="font-label text-label-sm text-tertiary">
                179 Barry Road, Campbellfield, VIC
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
