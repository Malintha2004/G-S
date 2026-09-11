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

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="xl:hidden">
      {/* Hamburger / Close Toggle Button in Header */}
      <button
        type="button"
        onClick={toggleMenu}
        className="p-2.5 text-on-surface hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-lg bg-surface-container border border-outline-variant/40 transition-colors relative z-[60] shrink-0 cursor-pointer"
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-secondary" />
        ) : (
          <Menu className="w-6 h-6 text-on-surface" />
        )}
      </button>

      {/* Solid Full-Width Mobile Dropdown Overlay Directly Below Header */}
      {isOpen && (
        <div
          className="fixed inset-x-0 top-[80px] bottom-0 z-[50] bg-[#0a0e13] text-on-surface overflow-y-auto border-t border-outline-variant/30 flex flex-col justify-between p-4 sm:p-6 shadow-2xl"
          role="dialog"
          aria-modal="true"
          style={{ backgroundColor: "#0a0e13", opacity: 1 }}
        >
          <div className="max-w-xl mx-auto w-full flex flex-col justify-between min-h-full py-2">
            <div>
              {/* Menu Section Header */}
              <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3 mb-4">
                <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">
                  Navigation Menu
                </span>
                <span className="font-label text-[11px] text-on-surface-variant uppercase">
                  Campbellfield Workshop
                </span>
              </div>

              {/* Main Vertically Stacked Navigation Links */}
              <nav className="flex flex-col space-y-1.5">
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`font-headline text-lg sm:text-headline-sm uppercase font-bold py-3 px-3.5 rounded-lg flex items-center justify-between transition-all ${
                        isActive
                          ? "bg-primary/15 text-primary border-l-4 border-primary font-bold pl-4"
                          : "text-on-surface bg-surface-container-low/60 hover:bg-surface-container-high hover:text-primary"
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronRight className="w-5 h-5 text-tertiary" />
                    </Link>
                  );
                })}
              </nav>

              {/* Service Quick Links Section */}
              <div className="mt-6 pt-4 border-t border-outline-variant/30">
                <span className="font-label text-xs uppercase tracking-widest text-secondary font-bold block mb-2.5">
                  Specialized Coating Services
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {SERVICE_NAV_ITEMS.map((srv) => (
                    <Link
                      key={srv.href}
                      href={srv.href}
                      onClick={() => setIsOpen(false)}
                      className="font-body text-xs text-on-surface-variant hover:text-primary py-2 px-2.5 rounded bg-surface-container-low/40 hover:bg-surface-container-low transition-colors flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                      {srv.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="mt-8 pt-5 border-t border-outline-variant/40 space-y-4">
              {/* Primary Get a Quote CTA */}
              <Link
                href="/contact#quote"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full py-3.5 bg-secondary-container text-on-secondary-container font-label text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:bg-secondary-bright transition-colors text-center"
              >
                <FileText className="w-4 h-4 mr-2 shrink-0" />
                Get A Direct Workshop Quote
              </Link>

              {/* Direct Phones & Email */}
              <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30 flex flex-col gap-2 font-label text-xs">
                <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
                  Direct Dispatch & Enquiries
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
                  <a
                    href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                    className="font-bold text-on-surface hover:text-primary flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    {SITE_CONFIG.phones.primary}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phones.secondaryRaw}`}
                    className="font-semibold text-on-surface-variant hover:text-primary flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-secondary shrink-0" />
                    Alt: {SITE_CONFIG.phones.secondary}
                  </a>
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-semibold text-on-surface-variant hover:text-primary flex items-center gap-1.5 pt-0.5 break-all"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div className="text-center font-label text-xs text-tertiary">
                {SITE_CONFIG.address.full}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
