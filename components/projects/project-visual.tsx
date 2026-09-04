import Image from "next/image";
import crydoObservatory from "../../case-study/crydo/images/final/crydo-observatory-desktop.png";
import veretteDesktop from "../../case-study/atelier-verette/images/final/atelier-verette-home-desktop.png";
import type { Project } from "../../data/projects";

type Variant = "preview" | "mobile" | "detail";

export function ProjectVisual({ project, variant = "preview" }: { project: Project; variant?: Variant }) {
  const isCrydo = project.visual === "crydo";
  const previewSrc = isCrydo ? "/project-previews/crydo-cover.png" : "/project-previews/atelier-verette-cover.png";
  const screenshot = isCrydo ? crydoObservatory : veretteDesktop;
  const isCover = variant === "preview";
  const alt = isCover
    ? `Couverture éditoriale issue d’une capture réelle du projet ${project.name}`
    : isCrydo
      ? "Capture complète de l’Observatory Crydo et de son interface de marché"
      : "Capture desktop du site Atelier Verette, de son univers éditorial et de son catalogue";

  return <div className={`project-visual visual-${project.visual} visual-${variant}`}>
    <Image src={isCover ? previewSrc : screenshot} alt={alt} fill priority={isCover} sizes={isCover ? "380px" : "(max-width: 860px) 92vw, 540px"} className={isCover ? "cover-image" : "ui-screenshot"} />
    <div className="project-visual-caption"><span>{project.name}</span><small>{isCrydo ? "Observatoire interactif" : "Site de marque"}</small></div>
  </div>;
}
