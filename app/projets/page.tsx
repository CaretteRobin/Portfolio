import type { Metadata } from "next";
import { ContactCTA } from "../../components/sections/contact-cta";
import { Footer } from "../../components/layout/footer";
import { SelectedProjects } from "../../components/projects/selected-projects";

export const metadata: Metadata = {
  title: "Projets web",
  description: "Découvrez les sites et applications web conçus et développés par Robin Carette, avec leur contexte, leurs objectifs et les choix réalisés.",
  openGraph: { title: "Projets web — Robin Carette", description: "Découvrez les sites et applications web conçus et développés par Robin Carette, avec leur contexte, leurs objectifs et les choix réalisés." },
};

export default function ProjectsPage() {
  return <><section className="inner-hero"><p className="eyebrow">Réalisations</p><h1>Des projets pensés<br/>pour être <i>utilisés.</i></h1><p>Découvrez le contexte, les choix et le travail réalisé derrière chaque projet. Chaque étude de cas présente le besoin de départ, la réponse apportée et les décisions qui ont permis d’aboutir à un produit réellement mis en ligne.</p></section><SelectedProjects all/><ContactCTA/><Footer/></>;
}
