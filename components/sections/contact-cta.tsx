import { MagneticButton } from "../ui/magnetic-button";
import { site } from "../../data/site";

export function ContactCTA() {
  return <section className="contact-cta"><p className="eyebrow">Un besoin, une idée, un projet à faire avancer</p><h2>Construisons<br/><i>la suite.</i></h2><p className="contact-cta-copy">Parlez-moi de ce que vous souhaitez clarifier, améliorer ou créer. Nous verrons si le projet peut prendre forme ensemble.</p><MagneticButton href="/contact" className="cta-large">{site.cta.project}</MagneticButton>{site.email && <a className="email-link" href={`mailto:${site.email}`}>{site.email}</a>}</section>;
}
