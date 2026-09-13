import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SERVICES_DATA } from "@/lib/data/services";
import { Check, ArrowRight } from "lucide-react";

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-margin-lg bg-surface" id="services">
      <div className="max-w-7xl mx-auto px-gutter">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div>
            <span className="font-label text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">
              Powder Coating & Surface Finishing
            </span>
            <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
              Specialized Coating Services
            </h2>
          </div>
          <p className="font-body text-body-sm text-on-surface-variant max-w-md mt-space-sm md:mt-0">
            Serving industrial OEMs, civil contractors, commercial shopfitters, and automotive specialists throughout Melbourne.
          </p>
        </div>

        {/* 3 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group rounded-xl bg-surface-container-low overflow-hidden flex flex-col hover:bg-surface-container transition-all duration-300 shadow-md"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
                <span className="absolute top-space-sm left-space-sm px-space-sm py-space-xs bg-surface-container-lowest/90 rounded font-label text-label-sm text-primary font-bold">
                  {service.number} // {service.badge}
                </span>
              </div>

              <div className="p-space-lg flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-headline-sm text-on-surface uppercase font-bold mb-space-xs group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <ul className="space-y-space-xs mb-space-md font-label text-label-sm text-tertiary">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-space-xs">
                      <Check className="w-4 h-4 text-secondary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-space-xs border-t border-outline-variant/20">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-primary font-label text-label-md font-bold uppercase tracking-wider hover:text-secondary transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/contact#quote"
                    className="inline-flex items-center text-secondary font-label text-label-md font-bold uppercase tracking-wider hover:underline"
                  >
                    RFQ <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
