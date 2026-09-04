import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Robin Carette — Développeur web",
    short_name: "Robin Carette",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F0EEE6",
    theme_color: "#F0EEE6",
    icons: [
      { src: "/brand/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/brand/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
