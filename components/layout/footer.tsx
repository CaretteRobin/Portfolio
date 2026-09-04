import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "../../data/site";

export function Footer() {
  return <footer className="footer"><div className="footer-top"><p className="eyebrow">{site.name}</p><p>{site.footer.role}<br/>{site.footer.services}<br/>{site.location}</p><Link href={site.socialLinks[0].href} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15}/></Link></div><div className="footer-word">ROBIN <span>CARETTE</span></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Robin Carette</span><span><Link href="/mentions-legales">Mentions légales</Link> · <Link href="/confidentialite">Confidentialité</Link></span><span>{site.footer.signature}</span></div></footer>;
}
