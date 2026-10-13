"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/cn";

const MIN = 500_000;
const MAX = 5_000_000;
const STEP = 50_000;
const SHARE = 0.02;

const euro = new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

// Rekenvoorbeeld van de spreidingsrichtlijn van OVMK: een individueel belang is bij aanvang
// in principe niet groter dan circa 2% van de portefeuille. Geen advies, geen rendement.
export function SpreidingRekenaar({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const [amount, setAmount] = useState(1_000_000);
  const id = useId();
  const perPosition = amount * SHARE;
  const fill = ((amount - MIN) / (MAX - MIN)) * 100;
  const dark = tone === "dark";

  return (
    <div
      data-ui
      className={cn("p-6 md:p-8", dark ? "bg-green text-on-green" : "bg-white text-ink", className)}
      aria-labelledby={`${id}-title`}
      role="group"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 id={`${id}-title`} className="text-[1.0625rem] font-semibold">
          Spreiding in de praktijk
        </h3>
        <p className={cn("text-[0.9375rem]", dark ? "text-on-green-soft" : "text-ink-soft")}>Rekenvoorbeeld, geen advies</p>
      </div>

      <label htmlFor={`${id}-range`} className={cn("mt-6 block text-[0.9375rem]", dark ? "text-on-green-soft" : "text-ink-soft")}>
        Omvang van de portefeuille
      </label>
      <output htmlFor={`${id}-range`} className="figures mt-1 block text-[1.625rem] font-semibold leading-tight tracking-[-0.02em]">
        {euro.format(amount)}
      </output>
      <input
        id={`${id}-range`}
        type="range"
        min={MIN}
        max={MAX}
        step={STEP}
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        aria-valuetext={euro.format(amount)}
        className="range mt-3"
        style={{ ["--fill" as string]: `${fill}%` }}
      />
      <div className={cn("figures flex justify-between text-[0.9375rem]", dark ? "text-on-green-soft" : "text-ink-soft")}>
        <span>{euro.format(MIN)}</span>
        <span>{euro.format(MAX)}</span>
      </div>

      <dl className="mt-6 grid gap-2 min-[400px]:grid-cols-2 sm:gap-4">
        <div className={cn("p-3 sm:p-4", dark ? "bg-green-deep" : "bg-sand")}>
          <dt className={cn("text-[0.9375rem]", dark ? "text-on-green-soft" : "text-ink-soft")}>Per positie bij aankoop</dt>
          <dd className="figures mt-1 whitespace-nowrap text-[1.0625rem] font-semibold sm:text-[1.25rem]">± {euro.format(perPosition)}</dd>
        </div>
        <div className={cn("p-3 sm:p-4", dark ? "bg-green-deep" : "bg-sand")}>
          <dt className={cn("text-[0.9375rem]", dark ? "text-on-green-soft" : "text-ink-soft")}>Aantal posities</dt>
          <dd className="figures mt-1 whitespace-nowrap text-[1.0625rem] font-semibold sm:text-[1.25rem]">± 50 of meer</dd>
        </div>
      </dl>

      {/* Vijftig blokjes van elk circa 2%: zo ziet een gespreide portefeuille eruit. */}
      <div aria-hidden className="mt-6 grid grid-cols-[repeat(25,minmax(0,1fr))] gap-[3px]">
        {Array.from({ length: 50 }, (_, i) => (
          <span
            key={i}
            className={cn("aspect-square", i === 0 ? "bg-gold" : dark ? "bg-on-green/25" : "bg-green/25")}
          />
        ))}
      </div>
      <p className={cn("mt-4 text-[0.9375rem] leading-relaxed", dark ? "text-on-green-soft" : "text-ink-soft")}>
        Bij aanvang is een individueel belang in principe niet groter dan circa 2% van de portefeuille. Het gouden
        blokje is één positie. Individuele beheerrekeningen zijn mogelijk vanaf € 500.000.
      </p>
    </div>
  );
}
