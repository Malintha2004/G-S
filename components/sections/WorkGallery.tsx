"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { GALLERY_PROJECTS, GalleryProject } from "@/lib/data/gallery";
import { Maximize2, X } from "lucide-react";

export const WorkGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activeLightbox, setActiveLightbox] = useState<GalleryProject | null>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "powder", label: "Powder Coating" },
    { id: "fabrication", label: "Metal Fabrication" },
    { id: "industrial", label: "Industrial Dual Booth" },
    { id: "custom", label: "Architectural Custom" },
  ];

  const isFiltered = activeFilter !== "all";
  const filteredProjects = isFiltered
    ? GALLERY_PROJECTS.filter((p) => p.category === activeFilter)
    : GALLERY_PROJECTS;

  const getColSpanClass = (item: GalleryProject) => {
    if (isFiltered) {
      return filteredProjects.length === 1 ? "lg:col-span-12" : "lg:col-span-6";
    }
    if (item.id === "proj-1") return "lg:col-span-8";
    if (item.id === "proj-2") return "lg:col-span-4";
    return "lg:col-span-6";
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightbox(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="w-full py-margin-lg bg-surface" id="work">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
          <div>
            <span className="font-label text-label-sm uppercase tracking-widest text-secondary font-bold block mb-space-xs">
              Proof of Craftsmanship
            </span>
            <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
              See Our Work In The Factory
            </h2>
          </div>
          <p className="font-body text-body-sm text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            Unfiltered photographs from our Campbellfield shop floor showing real commercial fabrication and high-specification coatings.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-space-xs mb-space-xl">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-space-md py-space-xs rounded-full font-label text-label-md uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                  isActive
                    ? "bg-secondary-container text-on-secondary-container font-bold"
                    : "bg-surface-container-high text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          {filteredProjects.map((item) => {
            const colSpanClass = getColSpanClass(item);
            return (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className={`${colSpanClass} rounded-xl overflow-hidden bg-surface-container-low group cursor-pointer shadow-lg relative border border-outline-variant/20 hover:border-primary/50 transition-all`}
              >
                <div className="relative h-[380px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent" />
                  
                  <div className="absolute top-space-md left-space-md">
                    <span className="px-space-md py-space-xs rounded bg-surface-container-lowest/90 backdrop-blur font-label text-label-sm text-primary font-bold uppercase tracking-wider">
                      {item.categoryName}
                    </span>
                  </div>

                  <div className="absolute bottom-space-md left-space-md right-space-md flex items-end justify-between">
                    <div>
                      <h3 className="font-headline text-headline-sm text-on-surface font-bold uppercase">
                        {item.title}
                      </h3>
                      <p className="font-body text-body-sm text-on-surface-variant">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container-high text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-surface-container-lowest/95 backdrop-blur-lg flex flex-col items-center justify-center p-gutter animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveLightbox(null)}
        >
          <button
            onClick={() => setActiveLightbox(null)}
            className="absolute top-space-lg right-space-lg w-12 h-12 rounded-full bg-surface-container-high text-on-surface hover:text-primary flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] h-[550px] w-full rounded-lg overflow-hidden shadow-2xl mb-space-md">
              <Image
                src={activeLightbox.image}
                alt={activeLightbox.title}
                fill
                sizes="1200px"
                className="object-contain"
              />
            </div>
            <h4 className="font-headline text-headline-md text-on-surface font-bold uppercase">
              {activeLightbox.title}
            </h4>
            <p className="font-body text-body-md text-on-surface-variant mt-1 text-center max-w-2xl">
              {activeLightbox.subtitle} — {activeLightbox.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
