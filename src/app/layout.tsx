import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import React from "react"; // Import React to access ReactNode
import { Metadata } from "next";
import Chatbot from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel | Software Developer",
  description: "Product-Focused Developer specializing in AI and CX.",
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
