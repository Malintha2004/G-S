"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { SlidersHorizontal } from "lucide-react";

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 5) pos = 5;
    if (pos > 95) pos = 95;
    setSliderPosition(pos);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="w-full py-margin-lg bg-surface-container-lowest overflow-hidden">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-label text-label-sm uppercase tracking-widest text-primary font-bold block mb-space-xs">
            Substrate Transformation
          </span>
          <h2 className="font-headline text-headline-lg text-on-surface uppercase tracking-tight">
            From Untreated Substrate To Professional Finish
          </h2>
          <p className="font-body text-body-md text-on-surface-variant mt-space-sm">
            Drag the interactive divider to witness the transformation: raw mill-scale steel RHS frame transformed into a flawless, cured satin-black powder finish.
          </p>
        </div>

        {/* Interactive Drag Comparison Component */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={(e) => isDragging && handleMove(e.clientX)}
          onTouchMove={handleTouchMove}
          className="relative max-w-4xl mx-auto h-[440px] rounded-xl overflow-hidden select-none shadow-2xl bg-surface-container border border-outline-variant/40 cursor-ew-resize"
        >
          {/* After Image (Finished Black) */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiNN1cuX-fJ904JaNT5DdiQ5WQdo545yZrdCpv4oXn4GMJLG6Pp33pM1XDfeynPfVQXU4XBL8Qbwep2W6wTXKXiuq4_W_yMqo74cnZjgXLwQUlEZg1DHzn0lPRaAAsC41vwYWqZdo1CXXGQ47cpOB6YCd-tjW5NavqwyduT2aOkxSS3PpbKvk7eHsGSGpvnoG_PiN4eTZ1c9Ux2TIoe5tS1EA5JVl2bPhzQufXD6g_EnqZmO0Ch10UUt3Jme7cixozww"
              alt="After Finish Powder Coated"
              fill
              sizes="900px"
              className="object-cover"
            />
            <span className="absolute bottom-space-md right-space-md px-space-md py-space-xs bg-surface-container-lowest/90 backdrop-blur rounded font-label text-label-sm text-primary font-bold uppercase tracking-wider">
              AFTER // Finished & Cured
            </span>
          </div>

          {/* Before Image (Raw Steel) - Clipped by width percentage */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div className="relative w-[896px] h-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_Ddk56yG0QrCv1LQxdWhOHFsdoxEp3cgFdNfxCcHjLHmD4CKkRA_sAGJ8kRu2PswwNSE04tP1VaW6zrANbPISOMmFc56b9LdCZBRzmCGS2yqZyjUo5-5sWboOF996riReqM8aNuHnfNoQ_1NJC5wYd8VYfLE9bcEqQvnmcaVR3eiPeEgCvnF1dOFFYVKlr9No4MaS4CZP5NplGNLj3S05OD9OUGlAtonzCIcZXYOHQO_NMtHcWfJV29ejKH3OSqGXMA"
                alt="Before Finish Raw Untreated Substrate"
                fill
                sizes="900px"
                className="object-cover"
              />
            </div>
            <span className="absolute bottom-space-md left-space-md px-space-md py-space-xs bg-surface-container-lowest/90 backdrop-blur rounded font-label text-label-sm text-secondary font-bold uppercase tracking-wider whitespace-nowrap">
              BEFORE // Untreated Steel Substrate
            </span>
          </div>

          {/* Draggable Handle Bar */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize flex items-center justify-center shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-10 h-10 rounded-full bg-surface-container-lowest text-primary border-2 border-primary flex items-center justify-center shadow-xl">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Quick Specs Under Comparison */}
        <div className="max-w-4xl mx-auto mt-space-lg grid grid-cols-1 sm:grid-cols-3 gap-space-md text-center">
          <div className="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/20">
            <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant block">
              Thickness Verification
            </span>
            <span className="font-headline text-headline-sm text-on-surface font-bold">
              75 – 85 Microns
            </span>
          </div>
          <div className="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/20">
            <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant block">
              Adhesion Class
            </span>
            <span className="font-headline text-headline-sm text-primary font-bold">
              Class 5B Cross-Hatch
            </span>
          </div>
          <div className="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/20">
            <span className="font-label text-label-sm uppercase tracking-wider text-on-surface-variant block">
              Corrosion Standard
            </span>
            <span className="font-headline text-headline-sm text-secondary font-bold">
              1,000+ Hr Salt Spray
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
