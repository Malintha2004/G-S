# System Architecture — G & S Engineering Website

## Overview
The G & S Engineering web application is built on **Next.js App Router**, **TypeScript**, and **Tailwind CSS**, adhering to the visual design tokens extracted from Google Stitch ("Precision Industrial System").

## Layered Architecture

```text
Presentation Layer (App Router Pages, Server & Client Components)
      ↓
Feature / Business Layer (Quote handling, Gallery filtering, Finish swatches)
      ↓
Validation & Security Layer (Zod Schemas, Rate Limiter, Upload Validator)
      ↓
Configuration & Data Layer (Site Config, Data Files)
```

## Directory Structure

- `app/`: Next.js App Router route handlers, layout, pages, and metadata.
- `components/`: UI components categorized into `layout`, `sections`, `ui`, and `forms`.
- `lib/config/`: Centralized site config (`site.ts`), navigation (`navigation.ts`), and SEO metadata builders (`seo.ts`).
- `lib/data/`: Typed static content data structures (`services.ts`, `gallery.ts`, `faqs.ts`, `finishes.ts`).
- `lib/validation/`: Form validation schemas using Zod.
- `lib/security/`: Security utilities including rate limiting abstraction and file upload validation.
- `public/`: Static assets, images, and brand files.

## Server / Client Component Strategy
- All pages and non-interactive sections are rendered as **Next.js Server Components** by default for fast performance, low client bundle size, and optimal search engine crawlability.
- Interactive widgets (`MobileNav`, `WorkGallery` with Lightbox, `BeforeAfterSlider`, `FaqAccordion`, `RfqQuoteForm`) are isolated client components (`"use client"`).
