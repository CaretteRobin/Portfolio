import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../../components/sections/contact-form";
import { Footer } from "../../components/layout/footer";
import { site } from "../../data/site";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "Contact", description: "Parlons de votre besoin web et de la solution à construire." };

export default function ContactPage() {
  const email = site.email || "Email à renseigner";
  const phone = site.phone || "Téléphone à renseigner";
  const phoneHref = site.phoneHref;
  const linkedin = site.socialLinks.find((link) => link.label === "LinkedIn");
  return <><section className={styles.page}><aside className={styles.intro}><p className="eyebrow">Parlons de votre projet</p><h1>Une idée claire,<br/>ou encore <i>à clarifier ?</i></h1><p>Expliquez-moi votre besoin en quelques lignes. L’objectif est simplement de comprendre ce qui mérite d’être construit.</p><div className={styles.details}><p className="eyebrow">Parler directement</p><dl><div><dt>Email</dt><dd>{site.email ? <a href={`mailto:${site.email}`}>{email}</a> : <span>{email}</span>}</dd></div><div><dt>Téléphone</dt><dd>{site.phone ? <a href={phoneHref}>{phone}</a> : <span>{phone}</span>}</dd></div>{linkedin && <div><dt>LinkedIn</dt><dd><a href={linkedin.href} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Robin Carette">Robin Carette</a></dd></div>}<div><dt>Disponibilité</dt><dd><span>{site.location}</span></dd></div></dl></div></aside><div className={styles.panel}><ContactForm/><p className={styles.privacy}>Les informations transmises via ce formulaire sont utilisées uniquement pour traiter votre demande. <Link href="/confidentialite">En savoir plus sur le traitement de vos données.</Link></p></div></section><Footer/></>;
}
