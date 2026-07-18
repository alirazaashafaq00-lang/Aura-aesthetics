import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/animations.css";
import "@/styles/cursor.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Aura Aesthetics | Luxury Skin & Aesthetic Clinic",
  description:
    "Bespoke aesthetic treatments, board-certified doctors, and an AI-powered skin analyzer — book your transformation at Aura Aesthetics.",
  metadataBase: new URL("https://auraaesthetics.example.com"),
  openGraph: {
    title: "Aura Aesthetics | Luxury Skin & Aesthetic Clinic",
    description:
      "Bespoke aesthetic treatments, board-certified doctors, and an AI-powered skin analyzer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-cream text-obsidian antialiased">
        {children}
      </body>
    </html>
  );
}
