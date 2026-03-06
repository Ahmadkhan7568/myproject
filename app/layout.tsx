import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Our Coffee Stops | Best Coffee Machines of 2026",
    template: "%s | Our Coffee Stops",
  },
  description: "Find the perfect coffee machine for your home. Expert reviews, in-depth comparisons, and curated top picks to help you choose the best coffee machine.",
  keywords: ["best coffee machine", "best coffee machine for home", "best espresso machine", "coffee machine reviews"],
  metadataBase: new URL("https://ourcoffeestops.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Our Coffee Stops | Expert Coffee Machine Reviews",
    description: "Expert reviews and comparisons of the best coffee machines in 2026.",
    url: "https://ourcoffeestops.com",
    siteName: "Our Coffee Stops",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Coffee Stops | Expert Coffee Machine Reviews",
    description: "Find your perfect brew with our expert coffee machine guides.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
