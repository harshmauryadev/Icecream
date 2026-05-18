import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Daylily | Premium Artisanal Ice Cream",
  description: "Handcrafted, small-batch ice cream made with the finest organic ingredients. Experience the sweetest moments at Daylily.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import BottomNavigation from "@/components/BottomNavigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pb-20 md:pb-0">
        <Header />
        {children}
        <FloatingContact />
        <BottomNavigation />
        <Footer />
      </body>
    </html>
  );
}
