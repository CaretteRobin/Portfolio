import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() { return <section className="not-found"><p className="eyebrow">Erreur 404</p><h1>Cette page n’existe<br/>plus — ou <i>pas encore.</i></h1><Link className="magnetic-button" href="/">Retour à l’accueil <ArrowUpRight size={18}/></Link></section>; }
