"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects, type Project } from "../../data/projects";
import { site } from "../../data/site";
import { ProjectVisual } from "./project-visual";
import styles from "./project-preview-carousel.module.css";

export function SelectedProjects({ all = false }: { all?: boolean }) {
  const [active, setActive] = useState<Project | null>(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [activePreviewIndex, setActivePreviewIndex] = useState(0);
  const preview = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -500, y: -500, tx: -500, ty: -500, last: -500, rotation: 0 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    let frame = 0;
    const update = () => {
      const p = pos.current;
      p.x += (p.tx - p.x) * 0.13;
      p.y += (p.ty - p.y) * 0.13;
      p.rotation += (((p.tx - p.last) * 0.025) - p.rotation) * 0.12;
      p.last = p.tx;
      const rotation = Math.max(-4, Math.min(4, p.rotation));
      if (preview.current) preview.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${rotation}deg)`;
      frame = requestAnimationFrame(update);
    };
    const move = (event: MouseEvent) => {
      pos.current.tx = Math.min(window.innerWidth - 410, Math.max(16, event.clientX - 195));
      pos.current.ty = Math.min(window.innerHeight - 300, Math.max(16, event.clientY - 150));
    };
    window.addEventListener("mousemove", move, { passive: true });
    frame = requestAnimationFrame(update);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(frame); };
  }, []);

  const activate = (project: Project) => {
    setActive(project);
    setActivePreviewIndex(projects.findIndex((item) => item.slug === project.slug));
    setPreviewVisible(true);
  };

  const leave = () => {
    setActive(null);
    setPreviewVisible(false);
  };

  const listingCopy = all
    ? { eyebrow: "Réalisations", title: "Des projets pensés pour être utilisés.", intro: "Découvrez le contexte, les choix et le travail réalisé derrière chaque projet. Chaque étude de cas présente le besoin de départ, la réponse apportée et les décisions qui ont permis d’aboutir à un produit réellement mis en ligne." }
    : site.home.projects;

  return <section className={`projects-list section ${all ? "all-projects" : ""}`}>
    <div className="section-top"><p className="eyebrow">{listingCopy.eyebrow}</p><h2>{listingCopy.title}</h2><p>{listingCopy.intro}</p></div>
    <div className={`project-rows ${active ? "has-active" : ""}`} onMouseLeave={leave}>
      {projects.map((project, index) => <Link href={`/projets/${project.slug}`} className={`project-row ${active?.slug === project.slug ? "active" : ""}`} key={project.slug} onMouseEnter={() => activate(project)}>
        <span className="project-index">0{index + 1}</span><span className="project-name">{project.name}</span><span className="project-type">{project.type}</span><span className="project-year">{project.year}</span><ArrowUpRight className="project-arrow"/>
        <div className="project-mobile-visual"><ProjectVisual project={project} variant="mobile"/><p>{project.mobileDescription}</p></div>
      </Link>)}
    </div>
    <div ref={preview} className={`project-preview ${styles.frame} ${previewVisible ? "is-active" : ""}`} aria-hidden="true">
      <div className={styles.track} style={{ transform: `translate3d(0, ${activePreviewIndex * -50}%, 0)` }}>
        {projects.map((project) => <div className={styles.slide} key={project.slug}><ProjectVisual project={project} variant="preview" /></div>)}
      </div>
    </div>
  </section>;
}
