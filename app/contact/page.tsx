import React from "react";
import { constructMetadata } from "@/lib/config/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RfqQuoteForm } from "@/components/forms/RfqQuoteForm";
import { SITE_CONFIG } from "@/lib/config/site";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import Image from "next/image";

export const metadata = constructMetadata({
  title: "Contact & Request Quote | G & S Engineering Campbellfield",
  description:
    "Contact G & S Engineering at 179 Barry Road, Campbellfield VIC 3061. Call 0415 668 527 or 0493 627 019 or submit your powder coating specs for a 24h factory quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-space-md">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

      <div className="py-space-lg mb-space-xl border-b border-outline-variant/30">
        <div className="inline-flex items-center gap-space-xs text-secondary font-label text-label-sm font-bold uppercase tracking-widest mb-space-xs">
          <Send className="w-4 h-4" />
          Direct Dispatch & Workshop Contact
        </div>
        <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase tracking-tight mb-space-md">
          Contact G & S Engineering
        </h1>
        <p className="font-body text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Get in touch directly with our workshop estimators and powder coating line supervisors at 179 Barry Road, Campbellfield.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg mb-margin" id="quote">
        {/* Left: Form */}
        <div className="lg:col-span-7">
          <RfqQuoteForm />
        </div>

        {/* Right: Contact Information & Location Map */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-space-md">
          <div className="p-space-lg rounded-xl bg-surface-container shadow-xl border border-outline-variant/40">
            <div className="flex items-center gap-space-sm mb-space-md">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white shrink-0 flex items-center justify-center p-0.5 border border-outline-variant shadow">
                <Image
                  src={SITE_CONFIG.logos.main}
                  alt="G&S Powder Coating Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-headline text-headline-sm text-on-surface font-bold uppercase">
                  {SITE_CONFIG.name}
                </h4>
                <span className="font-label text-label-sm text-secondary uppercase font-semibold">
                  Campbellfield Workshop & Dispatch
                </span>
              </div>
            </div>

            <div className="space-y-space-md mb-space-lg">
              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label text-label-sm text-on-surface-variant uppercase block font-semibold">
                    Factory Facility
                  </span>
                  <p className="font-body text-body-md text-on-surface font-semibold">
                    {SITE_CONFIG.address.full}
                  </p>
                  <p className="font-body text-body-sm text-on-surface-variant">
                    Easy B-double truck access and forklift yard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label text-label-sm text-on-surface-variant uppercase block font-semibold">
                    Direct Workshop Enquiries
                  </span>
                  <a
                    href={`tel:${SITE_CONFIG.phones.primaryRaw}`}
                    className="font-headline text-headline-sm text-on-surface font-bold hover:text-primary transition-colors block"
                  >
                    {SITE_CONFIG.phones.primary}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phones.secondaryRaw}`}
                    className="font-body text-body-md text-on-surface font-semibold hover:text-primary transition-colors block"
                  >
                    Alt Line: {SITE_CONFIG.phones.secondary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-tertiary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label text-label-sm text-on-surface-variant uppercase block font-semibold">
                    Sales & Drawing Submissions
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="font-body text-body-md text-primary font-semibold hover:underline block break-all"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-label text-label-sm text-on-surface-variant uppercase block font-semibold">
                    Operating Hours
                  </span>
                  <p className="font-body text-body-md text-on-surface">
                    {SITE_CONFIG.operatingHours.weekdays}
                  </p>
                  <p className="font-body text-body-sm text-on-surface-variant">
                    {SITE_CONFIG.operatingHours.saturday}
                  </p>
                </div>
              </div>
            </div>

            {/* Map View */}
            <div className="w-full h-56 rounded-lg relative overflow-hidden shadow-inner flex items-end p-space-sm border border-outline-variant/30">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8KRqwtAWD30bkLLJbumB6bz3HKRDt3pfO3j-cm5Bw_iTuyOU8YaAmXZQ14RURr_ORuahJ7Hrh127c1O2VbwkkQfSwb00M8eoVwGLKd3Vniv1Gh3qehL2Ou9Sawh1bR9mJLECsjcijOBzvVHTBCihKrVPLp_HDcchGIfPeQk8wLcAvgBUlSd9XNTBtX-728v20cP7AH_eX4XXfrorhfKMSU98C97Fy3oTmvS_Vps3z4c0jh3DvbjPW"
                alt="179 Barry Road Campbellfield Map"
                fill
                sizes="500px"
                className="object-cover object-center"
              />
              <div className="relative z-10 p-space-xs px-space-sm rounded bg-surface-container-lowest/90 backdrop-blur font-label text-label-sm text-on-surface flex items-center gap-1">
                <MapPin className="w-4 h-4 text-secondary" />
                179 Barry Road, Campbellfield, VIC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
