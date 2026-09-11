"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SERVICE_NAV_ITEMS } from "@/lib/config/navigation";
import { SITE_CONFIG } from "@/lib/config/site";
import { Menu, X, Phone, Mail, FileText, ChevronRight } from "lucide-react";

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle ESC key press & lock body scroll when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      {/* Hamburger / Close Toggle Button in Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-on-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg bg-surface-container border border-outline-variant/30 transition-colors relative z-50 shrink-0"
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-secondary" />
        ) : (
          <Menu className="w-5 h-5 text-on-surface" />
        )}
      </button>

      {/* Solid Full-Width Mobile Dropdown Overlay Directly Below Header */}
      {isOpen && (
        <div
          className="fixed top-20 left-0 right-0 bottom-0 z-40 bg-surface-container-lowest w-full overflow-y-auto border-t border-outline-variant/30 flex flex-col justify-between p-4 sm:p-gutter shadow-2xl animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-2xl mx-auto w-full flex flex-col justify-between min-h-full py-2">
            <div>
              {/* Menu Section Header */}
              <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2 mb-3">
                <span className="font-label text-[11px] uppercase tracking-widest text-primary font-bold">
                  Navigation Menu
                </span>
                <span className="font-label text-[10px] text-on-surface-variant uppercase">
                  Campbellfield Workshop
                </span>
              </div>

              {/* Main Vertically Stacked Navigation Links */}
              <nav className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-headline text-base sm:text-headline-sm uppercase font-bold py-2.5 px-3 rounded-lg flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-primary/10 text-primary border-l-4 border-primary font-bold pl-4"
                          : "text-on-surface hover:bg-surface-container-high hover:text-primary"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="w-4 h-4 text-tertiary" />
                    </Link>
                  );
                })}
              </nav>

              {/* Service Quick Links Section */}
              <div className="mt-5 pt-3 border-t border-outline-variant/20">
                <span className="font-label text-[10px] uppercase tracking-widest text-secondary font-bold block mb-2">
                  Specialized Coating Services
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {SERVICE_NAV_ITEMS.map((srv) => (
                    <Link
                      key={srv.href}
                      href={srv.href}
                      onClick={() => setIsOpen(false)}
                      className="font-body text-xs text-on-surface-variant hover:text-primary py-1.5 px-2 rounded hover:bg-surface-container-low transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {srv.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="mt-6 pt-4 border-t border-outline-variant/40 space-y-3">
              {/* Primary Get a Quote CTA */}
              <Link
                href="/contact#quote"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full py-3 bg-secondary-container text-on-secondary-container font-label text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-md hover:bg-secondary-bright transition-colors text-center"
              >
                <FileText className="w-4 h-4 mr-2 shrink-0" />
                Get A Direct Workshop Quote
              </Link>

              {/* Direct Phones & Email */}
              <div className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col gap-1.5 font-label text-xs">
                <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
                  Direct Dispatch & Enquiries
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
                  <a
                    href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                    className="font-bold text-on-surface hover:text-primary flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                    {SITE_CONFIG.phones.primary}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phones.secondaryRaw}`}
                    className="font-semibold text-on-surface-variant hover:text-primary flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-secondary shrink-0" />
                    Alt: {SITE_CONFIG.phones.secondary}
                  </a>
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-semibold text-on-surface-variant hover:text-primary flex items-center gap-1.5 pt-0.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="text-center font-label text-[10px] sm:text-[11px] text-tertiary">
                {SITE_CONFIG.address.full}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
