import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import styles from "@/components/legal/legal-page.module.css";
import { legal } from "@/data/legal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Informations sur le traitement des données personnelles sur robincarette.fr.",
  alternates: { canonical: "/confidentialite" },
};

export default function PrivacyPage() {
  return <><article className={styles.page}>
    <header className={styles.hero}>
      <p className="eyebrow">Légal</p>
      <h1>Politique de <i>confidentialité.</i></h1>
      <p className={styles.intro}>Ce site limite volontairement la collecte de données au strict nécessaire. Aucun outil publicitaire ou de mesure d’audience n’est actuellement utilisé.</p>
    </header>

    <div className={styles.content}>
      <section className={styles.section}>
        <p className={styles.index}>01 — Responsable</p>
        <div>
          <h2>Responsable du traitement.</h2>
          <p>Le responsable du traitement est Robin Carette, entrepreneur individuel, exerçant à {legal.editor.city}.</p>
          <p>Pour toute question relative à vos données personnelles, vous pouvez écrire à <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>02 — Formulaire</p>
        <div>
          <h2>Données collectées.</h2>
          <p>Lorsque vous utilisez le formulaire de contact, les informations que vous saisissez sont transmises afin de permettre à Robin Carette de répondre à votre demande.</p>
          <p>Selon les champs renseignés, ces données peuvent comprendre votre nom, votre adresse email, le nom de votre entreprise, le type de projet concerné et le contenu de votre message.</p>
          <p>Aucune de ces données n’est collectée par le formulaire tant que vous ne le soumettez pas.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>03 — Données techniques</p>
        <div>
          <h2>Fonctionnement du site.</h2>
          <p>Comme tout service web, l’hébergeur et les prestataires techniques peuvent traiter certaines données nécessaires au fonctionnement, à la sécurité et à la livraison du service, telles que l’adresse IP, le user-agent, des informations de requête ou des journaux techniques.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>04 — Finalités</p>
        <div>
          <h2>Pourquoi ces données sont utilisées.</h2>
          <p>Les données transmises via le formulaire servent uniquement à :</p>
          <ul className={styles.list}>
            <li>comprendre la demande ;</li>
            <li>répondre au message ;</li>
            <li>échanger au sujet d’un projet ;</li>
            <li>éventuellement préparer une proposition commerciale lorsque cela est demandé.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>05 — Base légale</p>
        <div>
          <h2>Base légale.</h2>
          <p>Le traitement repose, selon la nature de la demande, sur les mesures précontractuelles prises à la demande de la personne concernée et sur l’intérêt légitime de Robin Carette à répondre aux sollicitations reçues, conformément à l’article 6, paragraphe 1, points b et f du RGPD.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>06 — Prestataires</p>
        <div>
          <h2>Destinataires et prestataires.</h2>
          <div className={styles.providerList}>
            <div><strong>Vercel</strong><p>Hébergement et exécution de l’application web.</p></div>
            <div><strong>Resend</strong><p>Transmission et livraison des emails provenant du formulaire de contact.</p></div>
            <div><strong>Infomaniak</strong><p>Hébergement et réception de la messagerie professionnelle.</p></div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>07 — Transferts</p>
        <div>
          <h2>Transferts internationaux.</h2>
          <p>Certains prestataires techniques peuvent traiter des données hors de l’Espace économique européen. Lorsqu’un transfert international est nécessaire, il relève des garanties et mécanismes mis en place par les prestataires concernés conformément à la réglementation applicable.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>08 — Conservation</p>
        <div>
          <h2>Durée de conservation.</h2>
          <p>Les échanges liés à une demande de contact peuvent être conservés pendant une durée maximale de {legal.privacy.retention}, sauf lorsqu’une durée supérieure est nécessaire en raison d’une relation contractuelle ou d’une obligation légale.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>09 — Cookies</p>
        <div>
          <h2>Cookies et traceurs.</h2>
          <p>Le site n’utilise actuellement aucun outil publicitaire, de profilage ou de mesure d’audience nécessitant le consentement de l’utilisateur. Aucun bandeau de consentement aux cookies n’est donc affiché.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>10 — Vos droits</p>
        <div>
          <h2>Vos droits.</h2>
          <p>Conformément à la réglementation applicable en matière de protection des données, vous pouvez notamment demander l’accès, la rectification ou l’effacement de vos données et, selon les circonstances, vous opposer à leur traitement, demander sa limitation ou exercer votre droit à la portabilité.</p>
          <p>Pour exercer ces droits, écrivez à <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez également adresser une réclamation à la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>11 — Décisions automatisées</p>
        <div>
          <h2>Pas de profilage.</h2>
          <p>Aucune décision automatisée ni aucun profilage n’est réalisé à partir des données transmises via le site.</p>
        </div>
      </section>

      <section className={styles.section}>
        <p className={styles.index}>12 — Sécurité</p>
        <div>
          <h2>Sécurité.</h2>
          <p>Le site utilise HTTPS et limite les données demandées au strict nécessaire à la prise de contact. Les secrets nécessaires à l’envoi du formulaire sont traités côté serveur et ne sont pas exposés dans le bundle client.</p>
          <p className={styles.updated}>Dernière mise à jour : {legal.privacy.updatedAt}.</p>
          <Link className={styles.back} href="/mentions-legales">Voir les mentions légales</Link>
        </div>
      </section>
    </div>
  </article><Footer /></>;
}
