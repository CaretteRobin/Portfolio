import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import styles from "@/components/legal/legal-page.module.css";
import { legal } from "@/data/legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Informations légales relatives à l’édition et à l’hébergement du site robincarette.fr.",
  alternates: { canonical: "/mentions-legales" },
};

export default function LegalNoticePage() {
  return <><article className={styles.page}>
    <header className={styles.hero}>
      <p className="eyebrow">Légal</p>
      <h1>Mentions <i>légales.</i></h1>
      <p className={styles.intro}>Informations relatives à l’éditeur et à l’hébergement du site robincarette.fr.</p>
    </header>

    <div className={styles.content}>
      <section className={styles.section}>
        <p className={styles.index}>01 — Éditeur</p>
        <div>
          <h2>Éditeur du site.</h2>
          <p>Le site robincarette.fr est édité par Robin Carette, entrepreneur individuel sous le régime de la micro-entreprise, exerçant à {legal.editor.city}.</p>
          <dl className={styles.details}>
            <div><dt>SIREN</dt><dd>{legal.editor.siren}</dd></div>
            <div><dt>SIRET</dt><dd>{legal.editor.siret}</dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
            <div><dt>Téléphone</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
            <div><dt>Directeur de la publication</dt><dd>Robin Carette</dd></div>
          </dl>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>02 — Hébergement</p>
        <div>
          <h2>Hébergement.</h2>
          <p>Le site est hébergé par {legal.host.name}, {legal.host.address}.</p>
          <p>Le contenu est distribué par l’infrastructure de <a href={legal.host.url} target="_blank" rel="noopener noreferrer">Vercel</a>.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>03 — Propriété intellectuelle</p>
        <div>
          <h2>Propriété intellectuelle.</h2>
          <p>L’ensemble du portfolio — notamment ses textes, sa direction graphique, ses compositions, son code et les éléments créés spécifiquement pour robincarette.fr — est protégé par les règles applicables en matière de propriété intellectuelle, sauf mention contraire.</p>
          <p>Toute reproduction ou réutilisation substantielle sans autorisation préalable est interdite.</p>
          <p>Les marques, photographies, interfaces, contenus et autres éléments appartenant aux projets présentés conservent les droits de leurs propriétaires respectifs.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>04 — Liens externes</p>
        <div>
          <h2>Liens externes.</h2>
          <p>Le site contient des liens vers des services et sites tiers, notamment LinkedIn et les sites des projets présentés. Robin Carette n’exerce aucun contrôle sur leur contenu ou leur disponibilité.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>05 — Données personnelles</p>
        <div>
          <h2>Données personnelles.</h2>
          <p>Le traitement des données personnelles collectées via le formulaire de contact est détaillé dans la <Link href="/confidentialite">Politique de confidentialité</Link>.</p>
        </div>
      </section>
    </div>
  </article><Footer /></>;
}
