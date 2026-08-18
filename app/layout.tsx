import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Codelura · Dental - Digital Experiences for Dental Practices",
  description:
    "We design luxury websites and AI receptionists for dental practices across the UK and US. See a working concept for your practice - before you pay a penny.",
  openGraph: {
    title: "Codelura · Dental",
    description: "Digital experiences for dental practices.",
    url: "https://dental.codelura.com",
    siteName: "Codelura Dental",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codelura · Dental",
    description: "Digital experiences for dental practices.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geist.variable} ${playfair.variable} font-sans antialiased bg-[#05050a] text-white`}>
        {children}
      </body>
    </html>
  );
}
