import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mukul Kumar — Applied AI Engineer",
  description:
    "Applied AI Engineer specializing in Computer Vision, NLP, and Production ML Systems. 8+ years building enterprise-grade AI with 5 filed patents and research published at KDD.",
  keywords: [
    "AI Engineer",
    "Computer Vision",
    "NLP Engineer",
    "Machine Learning",
    "Document AI",
    "OCR",
    "TensorRT",
    "Computer Vision Consultant",
    "AI Consultant India",
    "Production ML",
  ],
  authors: [{ name: "Mukul Kumar" }],
  openGraph: {
    title: "Mukul Kumar — Applied AI Engineer",
    description:
      "Applied AI Engineer specializing in Computer Vision, NLP, and Production ML Systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukul Kumar — Applied AI Engineer",
    description:
      "Applied AI Engineer specializing in Computer Vision, NLP, and Production ML Systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
