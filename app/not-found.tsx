import React from "react";
import Link from "next/link";
import { FileQuestion, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-gutter py-margin-lg text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 rounded-2xl bg-surface-container-high text-secondary flex items-center justify-center mb-space-md border border-outline-variant/40">
        <FileQuestion className="w-8 h-8" />
      </div>
      <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase font-bold mb-space-xs">
        404 — Page Not Found
      </h1>
      <p className="font-body text-body-lg text-on-surface-variant max-w-md mb-space-xl">
        The industrial specification or page you requested could not be located on our server.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-space-md">
        <Link
          href="/"
          className="px-space-lg py-space-md bg-secondary-container text-on-secondary-container font-label text-label-lg font-bold uppercase rounded-lg hover:bg-secondary-bright transition-colors inline-flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          Return Homepage
        </Link>
        <Link
          href="/services"
          className="px-space-lg py-space-md bg-surface-container-high text-primary font-label text-label-lg font-bold uppercase rounded-lg hover:bg-surface-bright transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Browse Services
        </Link>
      </div>
    </div>
  );
}
