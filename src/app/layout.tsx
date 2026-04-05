import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { Metadata } from "next";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Ochieng | Product-Focused Software Developer",
  description:
    "Specializing in React, Next.js, and AI Orchestration. Bridging complex logic with high-end UX.",
  metadataBase: new URL("https://www.gabrielochieng.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gabriel Ochieng | Software Developer",
    description: "Product-Focused Developer specializing in AI and CX.",
    url: "https://www.gabrielochieng.com",
    siteName: "Gabriel Ochieng Portfolio",
    locale: "en_US",
    type: "website",
  },
};

// Define the interface for your props
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
