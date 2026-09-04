import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/brand/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/brand/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/brand/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/brand/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  title: { default: "Robin Carette — Développeur web, sites et applications sur mesure", template: "%s — Robin Carette" },
  description: site.description,
  openGraph: {
    title: "Robin Carette — Développeur web, sites et applications sur mesure",
    description: site.description,
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/social/portfolio-og.png", width: 1200, height: 630, alt: "Robin Carette — Développeur web" }],
  },
  twitter: { card: "summary_large_image", images: ["/social/portfolio-og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
