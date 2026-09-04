export type Project = {
  slug: "crydo" | "atelier-verette";
  name: string;
  type: string;
  year: string;
  eyebrow: string;
  mobileDescription: string;
  visual: "crydo" | "verette";
};

export const projects: Project[] = [
  {
    slug: "crydo",
    name: "Crydo",
    type: "Application web · Données & WebGL",
    year: "2026",
    eyebrow: "Un observatoire interactif qui transforme les données de Bitcoin, Ethereum et Solana en une expérience spatiale accessible et explicable.",
    mobileDescription: "Explorer les données de marché de trois cryptomonnaies à travers un observatoire spatial interactif.",
    visual: "crydo",
  },
  {
    slug: "atelier-verette",
    name: "Atelier Verette",
    type: "Site de marque · Catalogue",
    year: "2026",
    eyebrow: "Un site éditorial conçu pour installer l’univers d’une sélection de pièces vintage et conduire naturellement les visiteurs vers l’achat sur Vinted.",
    mobileDescription: "Une identité numérique singulière pour présenter les pièces et accompagner les visiteurs jusqu’à l’achat.",
    visual: "verette",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
