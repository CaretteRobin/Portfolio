import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../components/motion/reveal";
import { ContactCTA } from "../../components/sections/contact-cta";
import { Footer } from "../../components/layout/footer";
import { atelierVeretteCaseStudy as project, atelierVeretteSections as copy } from "./content";
import homeDesktop from "./images/final/atelier-verette-home-desktop.png";
import catalogueDesktop from "./images/final/atelier-verette-catalogue-desktop.png";
import productExperience from "./images/final/atelier-verette-product-experience.png";
import portal from "./images/final/atelier-verette-portail-vinted-insta-desktop.png";
import homeMobile from "./images/final/atelier-verette-home-mobile.png";
import catalogueMobile from "./images/final/atelier-verette-catalogue-mobile.png";
import deauvilleEditorial from "./assets/photography/deauville-editorial.webp";
import styles from "./case-study.module.css";

function Figure({ src, alt, className = "", sizes, priority = false }: { src: StaticImageData; alt: string; className?: string; sizes: string; priority?: boolean }) {
  return <figure className={`${styles.figure} ${className}`}><Image src={src} alt={alt} sizes={sizes} priority={priority} placeholder="blur" /></figure>;
}

export function AtelierVeretteCaseStudy() {
  return <>
    <article className={styles.caseStudy}>
      <header className={styles.hero}>
        <div className={styles.heroMeta}><span>Projet réel — {project.year}</span><span>{project.type}</span></div>
        <div className={styles.heroCopy}><h1>Atelier<br/><i>Verette</i></h1><div className={styles.heroIntro}><p>{project.description}</p><div><span>Rôle</span><strong>{project.role}</strong></div><Link href={project.url} target="_blank" rel="noreferrer">Découvrir Atelier Verette <ArrowUpRight size={17}/></Link></div></div>
        <Figure src={homeDesktop} alt="Homepage réelle d’Atelier Verette avec identité éditoriale, navigation et sélection de pièces" className={styles.heroImage} sizes="(max-width: 860px) 100vw, (max-width: 1600px) 92vw, 1500px" priority />
      </header>

      <section className={styles.factStrip} aria-label="Informations clés">{project.facts.map((fact, index) => <p key={fact}><span>0{index + 1}</span>{fact}</p>)}</section>

      <section className={styles.editorialSection}><Reveal><div className={styles.sectionIndex}>01 — Contexte</div><div className={styles.bigCopy}><p className={styles.contextStatement}><span>{copy.contextStatement[0]} </span><span>{copy.contextStatement[1]} </span><i>{copy.contextStatement[2]}</i></p><p className={styles.contextBody}>{copy.contextBody}</p><p className={styles.contextDetail}>{copy.contextDetail}</p></div></Reveal><Reveal><div className={styles.sectionIndex}>02 — Le besoin</div><div className={styles.splitCopy}><h2>Créer une présence de marque<br/><i>sans compliquer la vente.</i></h2><p>{copy.problem}</p></div></Reveal></section>

      <section className={styles.catalogueStory}>
        <div className={styles.catalogueCopy}><span>03 — La réponse</span><h2>Un site éditorial<br/><i>avant d’être une boutique.</i></h2><p>{copy.direction}</p></div>
        <Figure src={catalogueDesktop} alt="Catalogue réel Atelier Verette avec navigation, filtres et pièces disponibles" className={styles.catalogueImage} sizes="(max-width: 860px) 100vw, (max-width: 1500px) 62vw, 980px" />
      </section>

      <section className={styles.productStory}>
        <div className={styles.productLead}><span>04 — Photographie et contenu</span><p>Faire des images une partie de l’expérience.</p></div>
        <div className={styles.productComposition}><Figure src={productExperience} alt="Vue rapide réelle d’une pièce Atelier Verette avec galerie, informations et lien Vinted" className={styles.quickView} sizes="(max-width: 860px) 100vw, (max-width: 1500px) 67vw, 1000px" /><div className={styles.photoContext}><Figure src={deauvilleEditorial} alt="Photographie éditoriale d’une pièce Atelier Verette" sizes="(max-width: 860px) 58vw, 24vw" /><p>{copy.photography}</p></div></div>
      </section>

      <section className={styles.purchaseStory}>
        <div className={styles.purchaseCopy}><span>05 — Catalogue et parcours</span><h2>Découvrir sur Atelier Verette.<br/><i>Acheter sur Vinted.</i></h2><p>{copy.experience}</p><div className={styles.productNames}>{project.products.map((name, index) => <span key={name}><small>0{index + 1}</small>{name}</span>)}</div></div>
        <Figure src={portal} alt="Page réelle Atelier Verette qui oriente la sélection vers Vinted et Instagram" className={styles.portal} sizes="(max-width: 860px) 100vw, (max-width: 1500px) 47vw, 720px" />
      </section>

      <section className={styles.technical}><div className={styles.technicalHeading}><span>06 — Évolution</span><h2>Trois pièces au lancement,<br/><i>un catalogue prêt à s’agrandir.</i></h2></div><div className={styles.technicalBody}><p>{copy.evolution}</p><dl><div><dt>Produits</dt><dd>Informations, images, statuts et liens centralisés</dd></div><div><dt>Catalogue</dt><dd>Ajout de nouvelles pièces sans reconstruire la page</dd></div><div><dt>Présentation</dt><dd>Galeries, textes alternatifs et cadrages dédiés</dd></div><div><dt>Parcours</dt><dd>Liens Vinted adaptés à la disponibilité</dd></div></dl></div></section>

      <section className={styles.mobileStory}><div className={styles.mobileCopy}><span>07 — Mobile</span><h2>Une expérience pensée pour les écrans<br/><i>réellement utilisés.</i></h2><p>{copy.responsive}</p></div><div className={styles.mobileScreens}><Figure src={homeMobile} alt="Homepage Atelier Verette sur mobile" sizes="(max-width: 860px) 44vw, (max-width: 1500px) 23vw, 340px" /><Figure src={catalogueMobile} alt="Catalogue Atelier Verette sur mobile avec filtres et pièces" sizes="(max-width: 860px) 44vw, (max-width: 1500px) 23vw, 340px" /></div></section>

      <section className={styles.production}><span>08 — Mise en ligne</span><div><h2>Une présence complète,<br/><i>prête à être découverte.</i></h2><p>{copy.production}</p></div></section>
      <section className={styles.result}><span>09 — Résultat</span><p className={styles.resultStatement}><span>Un site déployé qui donne </span><span>à Atelier Verette </span><i>une identité propre,</i></p><p className={styles.resultDetail}>structure la présentation de son catalogue et dirige naturellement les visiteurs vers Vinted pour finaliser leurs achats.</p><Link href={project.url} target="_blank" rel="noreferrer">Découvrir Atelier Verette <ArrowUpRight/></Link></section>
    </article>
    <Link href="/projets/crydo" className="next-project next-project-crydo"><span>Projet suivant</span><strong>Crydo</strong><ArrowUpRight/></Link><ContactCTA/><Footer/>
  </>;
}
