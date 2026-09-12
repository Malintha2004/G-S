import { constructMetadata } from "@/lib/config/seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AdvantageBento } from "@/components/sections/AdvantageBento";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WorkGallery } from "@/components/sections/WorkGallery";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { FinishesSwatches } from "@/components/sections/FinishesSwatches";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { RfqQuoteForm } from "@/components/forms/RfqQuoteForm";
import { SITE_CONFIG } from "@/lib/config/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Image from "next/image";

export const metadata = constructMetadata({
  title: "G & S Engineering | Commercial Powder Coating Campbellfield Melbourne",
  description:
    "Direct workshop quality commercial powder coating and powder painting at 179 Barry Road, Campbellfield. 8.0m batch oven, chemical pretreatment, and Dulux accredited finishes.",
});

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 01. Hero Section */}
      <HeroSection />

      {/* 02. Trust & Introduction */}
      <TrustSection />

      {/* 03. Core Services */}
      <ServicesSection />

      {/* 04. Advantages Bento */}
      <AdvantageBento />

      {/* 05. 6-Stage Process */}
      <ProcessTimeline />

      {/* 06. Real Project Gallery */}
      <WorkGallery />

      {/* 07. Interactive Before/After Transformation Slider */}
      <BeforeAfterSlider />

      {/* 08. Finishes & Swatches */}
      <FinishesSwatches />

      {/* 09. Testimonials */}
      <Testimonials />

      {/* 10. Interactive RFQ Form & Direct Contact */}
      <section className="w-full py-margin-lg bg-surface-container-lowest" id="quote">
        <div className="max-w-7xl mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg">
            {/* Left: RFQ Form */}
            <div className="lg:col-span-7">
              <RfqQuoteForm />
            </div>

            {/* Right: Location & Direct Contact Card */}
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

                {/* Direct Contact List */}
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

                {/* Map View Image */}
                <div className="w-full h-48 rounded-lg relative overflow-hidden shadow-inner flex items-end p-space-sm border border-outline-variant/30">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8KRqwtAWD30bkLLJbumB6bz3HKRDt3pfO3j-cm5Bw_iTuyOU8YaAmXZQ14RURr_ORuahJ7Hrh127c1O2VbwkkQfSwb00M8eoVwGLKd3Vniv1Gh3qehL2Ou9Sawh1bR9mJLECsjcijOBzvVHTBCihKrVPLp_HDcchGIfPeQk8wLcAvgBUlSd9XNTBtX-728v20cP7AH_eX4XXfrorhfKMSU98C97Fy3oTmvS_Vps3z4c0jh3DvbjPW"
                    alt="Campbellfield Industrial Hub Location Map"
                    fill
                    sizes="500px"
                    className="object-cover object-center"
                  />
                  <div className="relative z-10 p-space-xs px-space-sm rounded bg-surface-container-lowest/90 backdrop-blur font-label text-label-sm text-on-surface flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-secondary" />
                    Campbellfield Industrial Hub
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Accordion FAQ */}
      <FaqAccordion />

      {/* 12. Final High Impact CTA */}
      <CtaBanner />
    </div>
  );
}
