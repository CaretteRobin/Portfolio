const linkedin = "https://www.linkedin.com/in/robin-carette/";

export const site = {
  name: "Robin Carette",
  url: "https://robincarette.fr",
  email: "contact@robincarette.fr",
  phone: "+33 6 79 69 36 45",
  phoneHref: "tel:+33679693645",
  location: "France & à distance",
  availability: "Disponible pour de nouveaux projets",
  description: "Je conçois des sites vitrines, expériences e-commerce, systèmes de réservation et applications web adaptés aux besoins de votre activité.",
  socialLinks: [{ label: "LinkedIn", href: linkedin }],
  navigation: [
    { label: "Projets", href: "/projets" },
    { label: "Services", href: "/#services" },
    { label: "À propos", href: "/a-propos" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    project: "Parler de votre projet",
    projects: "Voir mes projets",
    caseStudy: "Voir le site",
    nextProject: "Projet suivant",
  },
  home: {
    hero: {
      eyebrow: "Développeur web — France & à distance",
      title: ["Des solutions web", "pensées pour", "votre activité."],
      intro: "Site vitrine, réservation, e-commerce ou outil métier : je transforme un besoin concret en une expérience claire, soignée et prête à être utilisée.",
    },
    services: {
      eyebrow: "Ce que je réalise",
      title: "Des solutions adaptées à votre activité.",
      intro: "Je conçois chaque projet autour de son objectif réel : mieux présenter une activité, vendre ou prendre des réservations en ligne, ou simplifier un fonctionnement interne.",
    },
    projects: {
      eyebrow: "Projets récents",
      title: "Du besoin au produit mis en ligne.",
      intro: "Deux projets aux objectifs très différents, mais construits avec la même attention : comprendre le besoin, faire les bons choix et soigner l’expérience jusqu’à la mise en ligne.",
      // TODO: formulation à utiliser lorsque davantage de projets seront publiés.
      futureIntro: "Une sélection de projets conçus pour répondre à des besoins concrets, du site de marque à l’application web interactive.",
    },
    collaboration: {
      eyebrow: "Pour les agences, studios & équipes produit",
      title: "Un renfort qui s’intègre à votre équipe.",
      copy: "Vous avez besoin de renforcer un projet web, côté interface comme côté application ? Je peux rejoindre votre équipe pour intégrer une direction artistique, développer des fonctionnalités, intervenir sur la logique backend ou fiabiliser un produit existant jusqu’à sa mise en production.",
      detail: "Selon le projet : React / Next.js, Laravel / PHP, Python et autres environnements web compatibles.",
      contributions: ["Interfaces & intégration", "Animations & interactions", "Fonctionnalités applicatives", "API & backend", "Données & intégrations", "Maintenance & mise en production"],
    },
    about: {
      eyebrow: "À propos",
      title: "Développer avec attention, collaborer simplement.",
      copy: "Je suis Robin Carette, développeur web. J’aime les projets où il faut autant comprendre un besoin que soigner son exécution.",
      detail: "Mes expériences au sein d’une équipe technique m’ont appris à travailler sur des projets réels, à fiabiliser l’existant et à produire un travail que d’autres peuvent comprendre et faire évoluer.",
      action: "Découvrir ma façon de travailler",
    },
  },
  footer: {
    role: "Développeur web",
    services: "Sites, e-commerce et applications sur mesure",
    signature: "Conçu et développé par Robin Carette.",
  },
} as const;
