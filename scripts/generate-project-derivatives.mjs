import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const fromRoot = (...parts) => path.join(root, ...parts);
const previewsDir = fromRoot("public", "project-previews");
const socialDir = fromRoot("public", "social");

const masters = {
  crydo: fromRoot("case-study", "crydo", "images", "final", "crydo-observatory-desktop.png"),
  verette: fromRoot("case-study", "atelier-verette", "images", "final", "atelier-verette-home-desktop.png"),
  logo: fromRoot("public", "brand", "logo.svg"),
};

const escapeXml = (value) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[character]);

function textOverlay({ eyebrow, title, body, color, muted }) {
  return Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <style>
      .eyebrow { font: 700 18px Arial, Helvetica, sans-serif; letter-spacing: 2.2px; }
      .title { font: 700 64px Arial, Helvetica, sans-serif; letter-spacing: -4px; }
      .body { font: 400 23px Arial, Helvetica, sans-serif; letter-spacing: -0.6px; }
    </style>
    <text class="eyebrow" x="792" y="138" fill="${color}">${escapeXml(eyebrow.toUpperCase())}</text>
    <text class="title" x="792" y="226" fill="${color}">${escapeXml(title)}</text>
    <text class="body" x="792" y="278" fill="${muted}">${escapeXml(body)}</text>
    <rect x="792" y="490" width="290" height="2" fill="${muted}" opacity=".48"/>
    <text class="eyebrow" x="792" y="530" fill="${muted}">ROBINCARETTE.FR</text>
  </svg>`);
}

async function makePreview(input, output, background) {
  await sharp(input)
    .resize({ width: 1620, height: 1200, fit: "contain", background })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);
}

async function makeProjectOg(input, output, options) {
  const screenshot = await sharp(input)
    .resize({ width: 684, height: 428, fit: "contain", background: options.frame })
    .png()
    .toBuffer();
  const frame = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="${options.background}"/><rect x="48" y="101" width="708" height="452" rx="10" fill="${options.frame}"/><rect x="47" y="100" width="710" height="454" rx="11" fill="none" stroke="${options.border}" stroke-width="2"/></svg>`);

  await sharp(frame)
    .composite([
      { input: screenshot, left: 60, top: 113 },
      { input: textOverlay(options), left: 0, top: 0 },
    ])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);
}

async function makePortfolioOg(output) {
  const base = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#F0EEE6"/><rect x="60" y="60" width="1080" height="510" fill="none" stroke="#BDC8C1" stroke-width="2"/><path d="M60 442H1140" stroke="#BDC8C1" stroke-width="2"/></svg>`);
  const logo = await sharp(masters.logo).resize({ width: 182, height: 186, fit: "contain" }).png().toBuffer();
  const copy = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><style>.k{font:700 18px Arial,Helvetica,sans-serif;letter-spacing:2px}.n{font:700 78px Arial,Helvetica,sans-serif;letter-spacing:-5px}.d{font:400 31px Arial,Helvetica,sans-serif;letter-spacing:-1px}</style><text class="k" x="320" y="151" fill="#0B6B62">DÉVELOPPEUR WEB</text><text class="n" x="320" y="252" fill="#10201E">Robin Carette</text><text class="d" x="320" y="312" fill="#10201E">Sites, e-commerce et applications sur mesure</text><text class="k" x="84" y="500" fill="#10201E">FRANCE &amp; À DISTANCE</text><text class="k" x="84" y="536" fill="#0B6B62">ROBINCARETTE.FR</text></svg>`);
  await sharp(base)
    .composite([{ input: logo, left: 96, top: 152 }, { input: copy, left: 0, top: 0 }])
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output);
}

await mkdir(previewsDir, { recursive: true });
await mkdir(socialDir, { recursive: true });

await Promise.all([
  makePreview(masters.crydo, path.join(previewsDir, "crydo-cover.png"), "#080b11"),
  makePreview(masters.verette, path.join(previewsDir, "atelier-verette-cover.png"), "#F0EEE6"),
  makeProjectOg(masters.crydo, path.join(socialDir, "crydo-og.png"), {
    background: "#080b11", frame: "#10151d", border: "#304050", color: "#F0EEE6", muted: "#AAB5C7", eyebrow: "Projet web", title: "Crydo", body: "Observatoire interactif de données crypto",
  }),
  makeProjectOg(masters.verette, path.join(socialDir, "atelier-verette-og.png"), {
    background: "#F0EEE6", frame: "#E8E0D2", border: "#B8A99B", color: "#4A231C", muted: "#775E54", eyebrow: "Projet web", title: "Atelier Verette", body: "Site de marque et catalogue vintage",
  }),
  makePortfolioOg(path.join(socialDir, "portfolio-og.png")),
]);
