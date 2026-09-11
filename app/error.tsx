"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary caught:", error);
  }, [error]);

  return (
    <div className="max-w-7xl mx-auto px-gutter py-margin-lg text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-16 h-16 rounded-2xl bg-error-container text-on-error-container flex items-center justify-center mb-space-md border border-error/40">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h1 className="font-headline text-headline-hero text-headline-hero-mobile sm:text-headline-hero text-on-surface uppercase font-bold mb-space-xs">
        System Error Occurred
      </h1>
      <p className="font-body text-body-lg text-on-surface-variant max-w-md mb-space-xl">
        An unexpected application error occurred while processing your request.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-space-md">
        <button
          onClick={() => reset()}
          className="px-space-lg py-space-md bg-secondary-container text-on-secondary-container font-label text-label-lg font-bold uppercase rounded-lg hover:bg-secondary-bright transition-colors inline-flex items-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          Try Again
        </button>
        <Link
          href="/"
          className="px-space-lg py-space-md bg-surface-container-high text-primary font-label text-label-lg font-bold uppercase rounded-lg hover:bg-surface-bright transition-colors inline-flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          Return Homepage
        </Link>
      </div>
    </div>
  );
}
