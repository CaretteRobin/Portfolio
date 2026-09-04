import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import { site } from "../data/site";
import { SelectedProjects } from "../components/projects/selected-projects";
import { ContactCTA } from "../components/sections/contact-cta";
import { Footer } from "../components/layout/footer";
import { Reveal } from "../components/motion/reveal";
import { MagneticButton } from "../components/ui/magnetic-button";

export default function Home() {
  const { home, cta } = site;
  return <>
    <section className="hero">
      <div className="hero-meta"><span className="eyebrow">{home.hero.eyebrow}</span><span className="availability"><i/> {site.availability}</span></div>
      <h1>{home.hero.title.map((line, index) => <span key={line}>{index === 1 ? <><i>pensées</i> pour</> : line}</span>)}</h1>
      <div className="hero-bottom"><p>{home.hero.intro}</p><div className="hero-actions"><MagneticButton href="/contact">{cta.project}</MagneticButton><Link className="text-link" href="/projets">{cta.projects} <ArrowDown size={16}/></Link></div></div>
      <div className="hero-word" aria-hidden="true">ROBIN <span>CARETTE</span></div>
    </section>

    <section className="services section" id="services"><div className="section-top"><p className="eyebrow">{home.services.eyebrow}</p><h2>Des solutions adaptées à <i>votre activité.</i></h2><p>{home.services.intro}</p></div><div className="service-list">{services.map((service) => <Reveal key={service.number}><article className="service-row"><span className="service-number">{service.number}</span><div><p className="service-eyebrow">{service.eyebrow}</p><h3>{service.title}</h3></div><p className="service-description">{service.description}</p><ArrowUpRight className="service-arrow"/></article></Reveal>)}</div></section>
    <div id="projets"><SelectedProjects /></div>

    <section className="agency section"><div className="agency-grid"><div><p className="eyebrow">{home.collaboration.eyebrow}</p><h2>Un renfort qui s’intègre à <i>votre équipe.</i></h2></div><div className="agency-content"><p>{home.collaboration.copy}</p><div className="agency-tags">{home.collaboration.contributions.map((contribution) => <span key={contribution}>{contribution}<ArrowUpRight className="agency-arrow" aria-hidden="true" focusable="false"/></span>)}</div><p className="agency-detail">{home.collaboration.detail}</p><Link className="text-link" href="/contact">Échanger sur une collaboration <ArrowUpRight size={17}/></Link></div></div></section>

    <section className="about-teaser section"><p className="eyebrow">{home.about.eyebrow}</p><div><h2>{home.about.title}</h2><p>{home.about.copy}</p><p>{home.about.detail}</p><Link className="text-link" href="/a-propos">{home.about.action} <ArrowUpRight size={17}/></Link></div></section>
    <ContactCTA /><Footer />
  </>;
}
