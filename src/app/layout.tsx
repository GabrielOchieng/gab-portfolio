import Navbar from "@/components/Navbar";
import "./globals.css";
import React from "react";
import { Metadata } from "next";
import Chatbot from "@/components/Chatbot";
import MotionEffects from "@/components/MotionEffects";

const SITE_URL = "https://gabrielochieng.com";
const SITE_TITLE = "Gabriel Ochieng | Product Engineer, Web & Mobile";
const SITE_DESCRIPTION =
  "Product engineer with 4+ years building web and mobile products across travel tech, e-commerce, and AI. React, Next.js, Node.js, and applied AI.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Gabriel Ochieng Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Ochieng",
  url: SITE_URL,
  jobTitle: "Product Engineer",
  description: SITE_DESCRIPTION,
  sameAs: [
    "https://www.linkedin.com/in/gabrielochieng",
    "https://github.com/GabrielOchieng",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "TypeScript",
    "Applied AI",
  ],
};

// Define the interface for your props
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        {children}
        <Chatbot />
        <MotionEffects />
      </body>
    </html>
  );
}
