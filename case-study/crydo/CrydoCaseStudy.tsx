import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../components/motion/reveal";
import { ContactCTA } from "../../components/sections/contact-cta";
import { Footer } from "../../components/layout/footer";
import observatory from "./images/final/crydo-observatory-desktop.png";
import btc from "./images/final/crydo-btc.png";
import eth from "./images/final/crydo-eth.png";
import sol from "./images/final/crydo-sol.png";
import analysis from "./images/final/crydo-analysis-desktop-courbe.png";
import materialDetail from "./images/derived/crydo-eth-material-detail.png";
import mobileObservatory from "./images/final/crydo-observatory-mobile.png";
import mobileAnalysis from "./images/final/crydo-analysis-mobile.png";
import styles from "./case-study.module.css";

const liveUrl = "https://www.crydo.fr";

function Figure({ src, alt, className = "", sizes, priority = false }: { src: StaticImageData; alt: string; className?: string; sizes: string; priority?: boolean }) {
  return <figure className={`${styles.figure} ${className}`}><Image src={src} alt={alt} sizes={sizes} priority={priority} placeholder="blur" /></figure>;
}

export function CrydoCaseStudy() {
  return <>
    <article className={styles.caseStudy}>
      <header className={styles.hero}>
        <div className={styles.heroMeta}><span>Projet personnel — 2026</span><span>Application web · Données &amp; WebGL</span></div>
        <div className={styles.heroCopy}>
          <h1>Crydo<span>Application web</span></h1>
          <div className={styles.heroIntro}><p>J’ai créé Crydo pour explorer une autre manière de présenter les données de marché de Bitcoin, Ethereum et Solana. Chaque actif devient un corps céleste interactif, relié à des données réelles et à une lecture analytique explicable.</p><div><span>Rôle</span><strong>Conception du produit, direction visuelle, développement front-end, rendu WebGL, intégration des données et mise en ligne</strong></div><Link href={liveUrl} target="_blank" rel="noreferrer">Explorer Crydo <ArrowUpRight size={17}/></Link></div>
        </div>
        <Figure src={observatory} alt="Vue globale de l’Observatory Crydo avec planètes, navigation et données de marché" className={styles.heroVisual} sizes="(max-width: 860px) 100vw, (max-width: 1600px) 92vw, 1500px" priority />
      </header>

      <section className={styles.factStrip} aria-label="Informations clés"><p><span>01</span>Projet personnel mis en ligne en 2026</p><p><span>02</span>Données réelles fournies par CoinGecko</p><p><span>03</span>Bitcoin, Ethereum et Solana</p><p><span>04</span>Expérience disponible sur ordinateur et mobile</p></section>

      <section className={styles.editorial}>
        <Reveal><div className={styles.index}>01 — L’idée</div><div className={styles.bigCopy}><p className={styles.ideaStatement}><span>Et si les données de marché </span><span>ne ressemblaient pas à un </span><i>tableau de bord classique ?</i></p><p className={styles.smallCopy}>De nombreuses interfaces financières présentent les actifs sous la forme de tableaux, de graphiques et de cartes très similaires. Avec Crydo, j’ai voulu conserver les informations utiles tout en donnant à chaque actif une identité plus reconnaissable. L’utilisateur explore un observatoire, sélectionne une planète, consulte les données principales puis accède à une analyse plus détaillée. L’univers spatial n’est donc pas uniquement décoratif : il structure le parcours dans l’application.</p></div></Reveal>
      </section>

      <section className={styles.assetSection}>
        <div className={styles.assetIntro}><span>02 — L’expérience</span><h2>Trois actifs,<br/><i>trois univers visuels.</i></h2><p>Bitcoin, Ethereum et Solana possèdent chacun une planète construite autour d’une identité différente. Bitcoin adopte un aspect volcanique et minéral. Ethereum utilise une matière plus froide et cristalline. Solana repose sur une structure plus inhabituelle, marquée par des nuances violettes.</p></div>
        <div className={styles.triptych}>
          <Figure src={btc} alt="Observatory Crydo avec Bitcoin, planète volcanique et données de marché" sizes="(max-width: 860px) 100vw, (max-width: 1300px) 30vw, 500px" />
          <Figure src={eth} alt="Observatory Crydo avec Ethereum, planète cristalline et données de marché" sizes="(max-width: 860px) 100vw, (max-width: 1300px) 30vw, 500px" />
          <Figure src={sol} alt="Observatory Crydo avec Solana, planète spectrale et données de marché" sizes="(max-width: 860px) 100vw, (max-width: 1300px) 30vw, 500px" />
        </div>
      </section>

      <section className={styles.signal}>
        <div className={styles.signalLead}><span>03 — Crydo Signal</span><h2>Une lecture synthétique,<br/><i>sans fausse promesse.</i></h2><p>Le Crydo Signal rassemble plusieurs indicateurs liés à la dynamique du marché dans un score compris entre 0 et 100. Le calcul prend en compte le momentum, la tendance, le volume et la volatilité. À partir des mêmes données, il produit toujours le même résultat. Ce signal ne prédit pas l’évolution du marché et ne constitue pas un conseil financier. Il fournit une lecture synthétique et explicable des données actuellement disponibles.</p></div>
        <div className={styles.analysisComposition}>
          <Figure src={analysis} alt="Page d’analyse Crydo avec courbe d’évolution et données de marché" className={styles.analysisMain} sizes="(max-width: 860px) 100vw, (max-width: 1500px) 65vw, 980px" />
          <div className={styles.analysisDetail}><span>Analyse détaillée</span><p>Après avoir sélectionné un actif dans l’observatoire, l’utilisateur peut ouvrir une page d’analyse regroupant son prix, son évolution, ses principales données de marché et le détail du Crydo Signal. Chaque page conserve l’identité visuelle de la planète sélectionnée tout en revenant à une présentation plus structurée pour faciliter la lecture.</p></div>
        </div>
      </section>

      <section className={styles.rendering}>
        <div className={styles.renderingCopy}><span>04 — Défi visuel</span><h2>Donner de la matière<br/><i>aux planètes.</i></h2><p>Les premières versions paraissaient trop artificielles : les formes étaient trop anguleuses, les surfaces trop brillantes et certains détails donnaient presque l’impression d’une matière liquide. Ajouter davantage d’effets ne suffisait pas. J’ai donc retravaillé la construction des planètes dans son ensemble : le relief, les matériaux, la lumière et la manière dont ces éléments réagissent entre eux.</p></div>
        <Figure src={materialDetail} alt="Détail réel de la planète Ethereum et de son rendu cristallin dans Crydo" className={styles.materialCrop} sizes="(max-width: 860px) 100vw, (max-width: 1500px) 52vw, 1100px" />
      </section>

      <section className={styles.pipeline}>
        <div><span>05 — Données</span><h2>Afficher des données réelles,<br/><i>ou expliquer clairement leur absence.</i></h2></div>
        <div className={styles.pipelineBody}><p>Les données sont récupérées auprès de CoinGecko, vérifiées puis transformées avant d’être affichées dans l’observatoire et les pages d’analyse. Lorsqu’une donnée est indisponible ou incorrecte, Crydo affiche un état explicite au lieu de la remplacer silencieusement par une valeur fictive. Ce choix permet de préserver la cohérence du projet et d’éviter de présenter des informations trompeuses.</p><div className={styles.pipelineFlow}><span>CoinGecko</span><i>→</i><span>Vérification</span><i>→</i><span>Métriques</span><i>→</i><span>Crydo Signal</span><i>→</i><span>Interface</span></div></div>
      </section>

      <section className={styles.mobileSection}>
        <div className={styles.mobileCopy}><span>06 — Mobile</span><h2>Une expérience interactive<br/><i>qui reste réellement utilisable.</i></h2><p>Crydo ne se contente pas de réduire la version ordinateur. La position des planètes, le cadrage, la navigation et la quantité de détails affichés s’adaptent aux dimensions de l’écran. Les contenus principaux restent également accessibles lorsque les animations sont réduites ou que le rendu 3D n’est pas disponible.</p></div>
        <div className={styles.mobileScreens}><Figure src={mobileObservatory} alt="Observatory Crydo sur mobile" sizes="(max-width: 860px) 44vw, (max-width: 1500px) 23vw, 340px" /><Figure src={mobileAnalysis} alt="Analyse détaillée Crydo sur mobile" sizes="(max-width: 860px) 44vw, (max-width: 1500px) 23vw, 340px" /></div>
      </section>

      <section className={styles.technical}><div><span>07 — Fiabilité</span><h2>Sécuriser ce qui se trouve<br/><i>derrière l’expérience.</i></h2></div><div className={styles.technicalBody}><p>Des tests automatisés vérifient les calculs du Crydo Signal, le traitement des données, les changements de devise et plusieurs comportements essentiels de l’application. Cette partie est moins visible que l’univers graphique, mais elle garantit que l’expérience repose sur une base cohérente et vérifiable.</p><dl><div><dt>Produit</dt><dd>Données réelles, signal déterministe, analyses structurées</dd></div><div><dt>Rendu</dt><dd>Interface analytique et visualisation 3D</dd></div><div><dt>Qualité</dt><dd>Tests, lint, TypeScript et build validés</dd></div><div><dt>Déploiement</dt><dd>Application mise en ligne avec les données CoinGecko</dd></div></dl></div></section>
      <section className={styles.result}><span>08 — Résultat</span><p className={styles.resultStatement}><span>Crydo est aujourd’hui </span><i>accessible en ligne, </i><span>alimenté par des données CoinGecko </span><span>et utilisable sur ordinateur comme sur mobile.</span></p><p className={styles.resultDetail}>Le projet réunit dans une même application visualisation 3D, traitement de données et interface analytique. Il montre ma capacité à construire une expérience visuelle distinctive sans négliger son fonctionnement réel.</p><Link href={liveUrl} target="_blank" rel="noreferrer">Explorer Crydo <ArrowUpRight/></Link></section>
    </article>
    <Link href="/projets/atelier-verette" className="next-project next-project-verette"><span>Projet suivant</span><strong>Atelier Verette</strong><ArrowUpRight/></Link><ContactCTA/><Footer/>
  </>;
}
