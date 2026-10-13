"use client";

import { useId, useState, type FormEvent, type KeyboardEvent } from "react";
import { Mail } from "lucide-react";
import { company } from "@/data/site";

const subjects = ["Kennismakingsgesprek", "Individueel vermogensbeheer", "Beleggingsfondsen", "Iets anders"];

// Demo zonder backend: het formulier verstuurt zelf niets. Het opent het e-mailprogramma
// van de bezoeker met een vooraf ingevuld bericht aan OVMK.
type Errors = Partial<Record<"name" | "message", string>>;

export function ContactForm() {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = "Vul uw naam in.";
    if (!message) next.message = "Schrijf kort waarover u contact wilt.";
    setErrors(next);
    const firstInvalid = (["name", "message"] as const).find((k) => next[k]);
    if (firstInvalid) {
      (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
      return;
    }
    const subject = String(data.get("subject"));
    const phone = String(data.get("phone") ?? "").trim();
    const body = `${message}\n\nMet vriendelijke groet,\n${name}${phone ? `\nTelefoon: ${phone}` : ""}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // Ctrl/⌘ + Enter verzendt vanuit het berichtveld.
  function onMessageKey(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      e.currentTarget.form?.requestSubmit();
    }
  }

  const clear = (key: keyof Errors) => () => errors[key] && setErrors((prev) => ({ ...prev, [key]: undefined }));

  const field =
    "mt-2 block w-full rounded-none border border-neutral bg-white aria-[invalid=true]:border-error px-4 py-3 text-[1rem] text-ink placeholder:text-ink-soft/70 transition-colors focus:border-green focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green";

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby={`${id}-demo`} className="bg-white p-6 md:p-8">
      <p id={`${id}-demo`} className="bg-sand px-4 py-3 text-[0.9375rem] leading-relaxed text-ink">
        <strong className="font-semibold">Demo:</strong> dit formulier verstuurt zelf geen berichten. Het opent uw
        e-mailprogramma met een vooraf ingevuld bericht aan {company.email}.
      </p>

      <div className="mt-6 grid gap-x-5 gap-y-3 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="text-[0.9375rem] font-semibold">
            Naam
          </label>
          <input
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            required
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            onInput={clear("name")}
            className={field}
          />
          <p id={`${id}-name-error`} aria-live="polite" className="mt-1.5 min-h-5 text-[0.9375rem] font-semibold text-error">
            {errors.name}
          </p>
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
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={`${id}-message-hint${errors.message ? ` ${id}-message-error` : ""}`}
          onInput={clear("message")}
          onKeyDown={onMessageKey}
          className={`${field} resize-y`}
        />
        <p id={`${id}-message-error`} aria-live="polite" className="mt-1.5 min-h-5 text-[0.9375rem] font-semibold text-error">
          {errors.message}
        </p>
        <p id={`${id}-message-hint`} className="sr-only">
          Verzend met Ctrl of Command plus Enter.
        </p>
      </div>

      <button
        type="submit"
        className="mt-4 inline-flex min-h-12 items-center gap-3 bg-green px-6 py-3 text-[0.9375rem] font-semibold text-on-green transition-colors hover:bg-green-deep active:translate-y-px"
      >
        <Mail aria-hidden className="size-4" />
        Open in e-mailprogramma
      </button>
    </form>
  );
}
