import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/data/about";
import { ContactCTA } from "@/components/sections/contact-cta";
import { Footer } from "@/components/layout/footer";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/motion/reveal";
import { site } from "@/data/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez Robin Carette, sa manière de travailler et son approche de la conception de sites et applications web.",
  openGraph: { title: "À propos — Robin Carette", description: "Découvrez Robin Carette, sa manière de travailler et son approche de la conception de sites et applications web." },
};

export default function AboutPage() {
  return <><section className={styles.hero}><p className="eyebrow">{about.hero.eyebrow}</p><div className={styles.heroGrid}><div><h1>J’aime comprendre ce que je construis — <i>et pour qui</i> je le construis.</h1><p className={styles.intro}>{about.hero.intro}</p><p className={styles.credential}>{about.hero.credential}</p></div><div className={styles.brandVisual}><Image className={styles.brandMark} src="/brand/logo.svg" alt="" aria-hidden="true" width={188} height={192} /><div className={styles.brandCopy}><span>{about.brand.name}</span><strong>{about.brand.role}</strong><small>{about.brand.detail}</small></div></div></div></section>
    <section className={styles.perspective}><Reveal><p className="eyebrow">{about.approach.eyebrow}</p><div className={styles.perspectiveGrid}><h2>{about.approach.title}</h2><div>{about.approach.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div></Reveal></section>
    <section className={styles.sensibilities} aria-label="Ce qui guide mon travail"><p className="eyebrow">Ce qui guide mon travail</p><ul>{about.principles.map((item, index) => <li key={item.title}><span>0{index + 1}</span><div><strong>{item.title}</strong><p>{item.description}</p></div></li>)}</ul></section>
    <section className={styles.collaboration}><Reveal><p className="eyebrow">{about.collaboration.eyebrow}</p><div className={styles.collaborationGrid}><h2>{about.collaboration.title}</h2><div><p>{about.collaboration.copy}</p><p>{about.collaboration.detail}</p><MagneticButton href="/contact">{site.cta.project}</MagneticButton></div></div></Reveal></section><ContactCTA /><Footer /></>;
}
