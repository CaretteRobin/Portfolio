"use client";

import { FormEvent, useRef, useState } from "react";
import { sendContactMessage } from "../../app/contact/actions";
import { MagneticButton } from "../ui/magnetic-button";
import styles from "./contact-form.module.css";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const submitting = useRef(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;

    submitting.current = true;
    setState("loading");
    setErrorMessage("");

    try {
      const result = await sendContactMessage(new FormData(event.currentTarget));
      if (result.success) {
        formRef.current?.reset();
        setState("success");
      } else {
        setErrorMessage(result.message ?? "L’envoi n’a pas abouti. Vous pouvez aussi m’écrire directement à contact@robincarette.fr.");
        setState("error");
      }
    } catch {
      setErrorMessage("L’envoi n’a pas abouti. Vous pouvez aussi m’écrire directement à contact@robincarette.fr.");
      setState("error");
    } finally {
      submitting.current = false;
    }
  };

  if (state === "success") return <div className={styles.success} role="status" aria-live="polite"><span>✓</span><h2>Message envoyé.</h2><p>Je vous répondrai dès que possible.</p><button onClick={() => setState("idle")}>Envoyer un autre message</button></div>;

  return <form ref={formRef} className={styles.form} onSubmit={submit}>
    <label className={styles.field}><span>Nom</span><input required name="name" autoComplete="name" placeholder="Votre nom" minLength={2} maxLength={120} /></label>
    <label className={styles.field}><span>Email</span><input required type="email" name="email" autoComplete="email" placeholder="vous@entreprise.fr" maxLength={254} /></label>
    <label className={styles.field}><span>Entreprise <small>(facultatif)</small></span><input name="company" autoComplete="organization" placeholder="Nom de votre entreprise" maxLength={160} /></label>
    <label className={`${styles.field} ${styles.select}`}><span>Type de projet</span><select required name="projectType" defaultValue=""><option value="" disabled>Choisir une option</option><option>Site vitrine / site de marque</option><option>E-commerce / réservation</option><option>Application web / outil métier</option><option>Collaboration agence / équipe</option><option>Autre</option></select></label>
    <div className={styles.honeypot} aria-hidden="true"><label htmlFor="website">Site web</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
    <label className={`${styles.field} ${styles.full}`}><span>Message</span><textarea required name="message" rows={6} placeholder="Quelques mots sur votre besoin, votre projet ou votre échéance." minLength={20} maxLength={5000} /></label>
    <div className={styles.actions}>
      <p className={styles.note}>Vos informations servent uniquement à répondre à votre demande.</p>
      <MagneticButton type="submit" className={styles.submit} disabled={state === "loading"}>{state === "loading" ? "Envoi…" : "Envoyer le message"}</MagneticButton>
    </div>
    {state === "error" && <p className={styles.error} role="alert" aria-live="assertive">{errorMessage}</p>}
  </form>;
}
