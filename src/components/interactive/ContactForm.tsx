"use client";

import { useId, useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { company } from "@/data/site";

const subjects = ["Kennismakingsgesprek", "Individueel vermogensbeheer", "Beleggingsfondsen", "Iets anders"];

// Demo zonder backend: het formulier verstuurt zelf niets. Het opent het e-mailprogramma
// van de bezoeker met een vooraf ingevuld bericht aan OVMK.
export function ContactForm() {
  const id = useId();
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !message) {
      setError("Vul uw naam en uw bericht in.");
      const field = e.currentTarget.elements.namedItem(!name ? "name" : "message") as HTMLElement | null;
      field?.focus();
      return;
    }
    setError(null);
    const subject = String(data.get("subject"));
    const phone = String(data.get("phone") ?? "").trim();
    const body = `${message}\n\nMet vriendelijke groet,\n${name}${phone ? `\nTelefoon: ${phone}` : ""}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "mt-2 block w-full rounded-none border border-neutral bg-white px-4 py-3 text-[1rem] text-ink placeholder:text-ink-soft/70 transition-colors focus:border-green focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby={`${id}-demo`} className="bg-white p-6 md:p-8">
      <p id={`${id}-demo`} className="bg-sand px-4 py-3 text-[0.9375rem] leading-relaxed text-ink">
        <strong className="font-semibold">Demo:</strong> dit formulier verstuurt zelf geen berichten. Het opent uw
        e-mailprogramma met een vooraf ingevuld bericht aan {company.email}.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="text-[0.9375rem] font-semibold">
            Naam
          </label>
          <input id={`${id}-name`} name="name" autoComplete="name" required className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="text-[0.9375rem] font-semibold">
            Telefoon <span className="font-normal text-ink-soft">(optioneel)</span>
          </label>
          <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" inputMode="tel" className={field} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-subject`} className="text-[0.9375rem] font-semibold">
          Onderwerp
        </label>
        <select id={`${id}-subject`} name="subject" className={field} defaultValue={subjects[0]}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-message`} className="text-[0.9375rem] font-semibold">
          Uw bericht
        </label>
        <textarea id={`${id}-message`} name="message" rows={5} required className={`${field} resize-y`} />
      </div>

      <p role="alert" aria-live="assertive" className="mt-4 min-h-6 text-[0.9375rem] font-semibold text-[#9b2c1f]">
        {error}
      </p>

      <button
        type="submit"
        className="mt-2 inline-flex min-h-12 items-center gap-3 bg-green px-6 py-3 text-[0.9375rem] font-semibold text-on-green transition-colors hover:bg-green-deep active:translate-y-px"
      >
        <Mail aria-hidden className="size-4" />
        Open in e-mailprogramma
      </button>
    </form>
  );
}
