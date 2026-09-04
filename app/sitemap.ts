import type { MetadataRoute } from "next";
import { projects } from "../data/projects";
import { site } from "../data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  return ["", "/projets", "/a-propos", "/contact", "/mentions-legales", "/confidentialite", ...projects.map((project) => `/projets/${project.slug}`)].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : .7,
  }));
}
