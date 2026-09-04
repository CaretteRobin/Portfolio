"use server";

import { Resend } from "resend";

const projectTypes = [
  "Site vitrine / site de marque",
  "E-commerce / réservation",
  "Application web / outil métier",
  "Collaboration agence / équipe",
  "Autre",
] as const;

type ContactActionResult = { success: boolean; message?: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function stringValue(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    if (character === "&") return "&amp;";
    if (character === "<") return "&lt;";
    if (character === ">") return "&gt;";
    if (character === "\"") return "&quot;";
    return "&#039;";
  });
}

export async function sendContactMessage(formData: FormData): Promise<ContactActionResult> {
  const website = stringValue(formData, "website");

  // Honeypot: return a neutral result and never disclose the detection to a bot.
  if (website) return { success: true };

  const name = stringValue(formData, "name");
  const email = stringValue(formData, "email").toLowerCase();
  const company = stringValue(formData, "company");
  const projectType = stringValue(formData, "projectType");
  const message = stringValue(formData, "message");

  const valid = name.length >= 2
    && name.length <= 120
    && email.length <= 254
    && emailPattern.test(email)
    && company.length <= 160
    && projectTypes.includes(projectType as (typeof projectTypes)[number])
    && message.length >= 20
    && message.length <= 5000;

  if (!valid) return { success: false, message: "Merci de vérifier les informations renseignées avant de réessayer." };

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !recipient || !from) {
    console.error("Contact form email configuration is incomplete.");
    return { success: false, message: "L’envoi n’a pas abouti. Vous pouvez aussi m’écrire directement à contact@robincarette.fr." };
  }

  const submittedAt = new Intl.DateTimeFormat("fr-FR", { dateStyle: "long", timeStyle: "short", timeZone: "Europe/Paris" }).format(new Date());
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || "Non renseignée"),
    projectType: escapeHtml(projectType),
    message: escapeHtml(message).replace(/\n/g, "<br/>"),
  };
  const text = [
    "Nouvelle demande depuis robincarette.fr",
    "",
    `Nom : ${name}`,
    `Email : ${email}`,
    `Entreprise : ${company || "Non renseignée"}`,
    `Type de projet : ${projectType}`,
    `Date : ${submittedAt}`,
    "",
    "Message :",
    message,
  ].join("\n");
  const html = `<h1>Nouvelle demande depuis robincarette.fr</h1><p><strong>Nom :</strong> ${safe.name}<br/><strong>Email :</strong> ${safe.email}<br/><strong>Entreprise :</strong> ${safe.company}<br/><strong>Type de projet :</strong> ${safe.projectType}<br/><strong>Date :</strong> ${escapeHtml(submittedAt)}</p><p><strong>Message :</strong><br/>${safe.message}</p>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: `Nouvelle demande — ${projectType}`,
      text,
      html,
    });

    if (error) {
      console.error("Contact form email delivery failed.");
      return { success: false, message: "L’envoi n’a pas abouti. Vous pouvez aussi m’écrire directement à contact@robincarette.fr." };
    }
  } catch {
    console.error("Contact form email delivery failed.");
    return { success: false, message: "L’envoi n’a pas abouti. Vous pouvez aussi m’écrire directement à contact@robincarette.fr." };
  }

  return { success: true };
}
