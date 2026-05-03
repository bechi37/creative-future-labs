import type { Metadata } from "next";
import { Syne, Instrument_Serif, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/lib/LanguageContext";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne-var",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif-var",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creative Future Labs — Дигиталната еволюция на вашия бизнес",
  description:
    "Хибридно студио, обединяващо 3D дизайн, AI автоматизации и видео продукция. We design the future of your brand.",
  keywords: ["3D дизайн", "AI автоматизация", "видео продукция", "бранд", "Creative Future Labs"],
  openGraph: {
    title: "Creative Future Labs",
    description: "We don't just create content — we design the future of your brand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="bg"
      className={`${syne.variable} ${instrumentSerif.variable} ${spaceMono.variable}`}
    >
      <body>
        <LanguageProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
