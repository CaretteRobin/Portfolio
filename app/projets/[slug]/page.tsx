import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProject } from "../../../data/projects";
import { CrydoCaseStudy } from "../../../case-study/crydo/CrydoCaseStudy";
import { AtelierVeretteCaseStudy } from "../../../case-study/atelier-verette/AtelierVeretteCaseStudy";
import { atelierVeretteMetadata } from "../../../case-study/atelier-verette/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  if (project.slug === "atelier-verette") return atelierVeretteMetadata;
  const title = "Crydo — Observatoire interactif de données crypto";
  const description = "Une application web interactive qui transforme les données de Bitcoin, Ethereum et Solana en une expérience spatiale alimentée par CoinGecko.";
  const image = { url: "/social/crydo-og.png", width: 1200, height: 630, alt: "Crydo, observatoire interactif de données crypto" };
  return {
    title,
    description,
    alternates: { canonical: "/projets/crydo" },
    openGraph: { title, description, type: "article", images: [image] },
    twitter: { card: "summary_large_image", images: [image.url] },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  return project.slug === "crydo" ? <CrydoCaseStudy /> : <AtelierVeretteCaseStudy />;
}
