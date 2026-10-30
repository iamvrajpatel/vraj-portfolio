import type { Metadata } from "next";

export const siteConfig = {
  personName: "Vraj Patel",
  roleSummary: "AI Engineer, Data Scientist & Full Stack Engineer",
  name: "Vraj Patel | AI Engineer, Data Scientist & Full Stack Engineer",
  description:
    "Vraj Patel is an AI Engineer, Data Scientist, and Full Stack Engineer in Mumbai, India building production AI systems with LLMs, RAG, agentic AI, computer vision, FastAPI, system design, and scalable cloud deployment.",
  url: "https://ivrajpatel.vercel.app",
  ogImage: "https://ivrajpatel.vercel.app/og-image.svg",
  lastUpdated: "2026-10-30",
  creator: "@iamvrajpatel",
  authors: [
    {
      name: "Vraj Patel",
      url: "https://ivrajpatel.vercel.app",
    },
  ],
  keywords: [
    "Vraj Patel",
    "AI Engineer",
    "Applied AI Engineer",
    "Data Scientist",
    "Full Stack Engineer",
    "LLM Engineer",
    "RAG",
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "Computer Vision",
    "FastAPI",
    "System Design",
    "Production AI",
    "Mumbai AI Engineer",
    "Portfolio",
  ],
} as const;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [...siteConfig.authors],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "Professional portfolio",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/site.webmanifest",
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export function createMetadata({
  title,
  description,
  path = "/",
  image,
  keywords = [],
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: readonly string[];
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title ?? siteConfig.name,
        },
      ],
    },
    twitter: {
      title: title ?? siteConfig.name,
      description: description ?? siteConfig.description,
      images: [ogImage],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
