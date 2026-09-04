import type { Metadata } from "next";
import { atelierVeretteCaseStudy } from "./content";

const title = "Atelier Verette — Site de marque et catalogue vintage";
const description = "Conception et développement d’un site éditorial pour présenter une sélection de pièces vintage et accompagner les visiteurs vers l’achat sur Vinted.";
const image = { url: "/social/atelier-verette-og.png", width: 1200, height: 630, alt: "Atelier Verette, site de marque et catalogue vintage" };

export const atelierVeretteMetadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/projets/${atelierVeretteCaseStudy.slug}` },
  openGraph: { title, description, type: "article", images: [image] },
  twitter: { card: "summary_large_image", images: [image.url] },
};
