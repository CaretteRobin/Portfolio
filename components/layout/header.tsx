"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "../../data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateBrand = () => {
      const progress = window.scrollY > 0 ? 1 : 0;
      const style = headerRef.current?.style;
      style?.setProperty("--brand-progress", progress.toFixed(3));
      const clip = progress > 0.975 ? "calc(100% + 4px)" : (progress * 100).toFixed(2) + "%";
      style?.setProperty("--brand-clip", clip);
      style?.setProperty("--brand-shift", (-progress * 7).toFixed(2) + "px");
      style?.setProperty("--mark-shift", (progress * 1).toFixed(2) + "px");
      style?.setProperty("--mark-scale", (1 - progress * 0.025).toFixed(3));
      setScrolled((current) => {
        const next = window.scrollY > 24;
        return current === next ? current : next;
      });
      frameRef.current = null;
    };
    const onScroll = () => {
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(updateBrand);
    };
    updateBrand();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frameRef.current) cancelAnimationFrame(frameRef.current); };
  }, [pathname]);

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <header ref={headerRef} className={`header ${scrolled ? "header-scrolled" : ""}`}>
    <Link href="/" className="brand" aria-label="Robin Carette — Accueil">
      <Image className="brand-mark" src="/brand/logo.svg" alt="" aria-hidden="true" width={27} height={28} />
      <span className="brand-name-clip"><span className="brand-name">Robin Carette</span></span>
    </Link>
    <nav className="desktop-nav" aria-label="Navigation principale">{site.navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <Link href="/contact" className="header-contact">Parler de votre projet <ArrowUpRight size={15}/></Link>
    <button className="menu-toggle" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <p className="eyebrow">Navigation</p>
      {site.navigation.map((item, index) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} tabIndex={open ? 0 : -1} style={{ transitionDelay: `${80 + index * 55}ms` }}>{item.label}<ArrowUpRight /></Link>)}
      <div className="mobile-menu-bottom"><span>{site.location}</span><span>{site.availability}</span></div>
    </div>
  </header>;
}
