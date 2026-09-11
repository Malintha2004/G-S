import { Metadata } from "next";
import { SITE_CONFIG } from "./site";

export function constructMetadata({
  title = `${SITE_CONFIG.name} | Powder Coating & Metal Fabrication Campbellfield`,
  description = SITE_CONFIG.description,
  path = "",
  image = SITE_CONFIG.logos.main,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;

  return {
    title,
    description,
    keywords: SITE_CONFIG.keywords,
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
