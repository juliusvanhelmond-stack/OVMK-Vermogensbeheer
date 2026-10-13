"use client";

import { useEffect, useState } from "react";

// Pasen (anonieme Gregoriaanse berekening), voor de feestdagen die op de eerste van de maand kunnen vallen.
function easter(year: number) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function isHoliday(date: Date) {
  const y = date.getFullYear();
  const key = (d: Date) => `${d.getMonth()}-${d.getDate()}`;
  const e = easter(y);
  const add = (days: number) => new Date(y, e.getMonth(), e.getDate() + days);
  const holidays = new Set([key(new Date(y, 0, 1)), key(add(1)), key(add(39)), key(add(50)), key(new Date(y, 11, 25)), key(new Date(y, 11, 26))]);
  return holidays.has(key(date));
}

function firstBusinessDay(year: number, month: number) {
  const d = new Date(year, month, 1);
  while (d.getDay() === 0 || d.getDay() === 6 || isHoliday(d)) d.setDate(d.getDate() + 1);
  return d;
}

function nextTradingDay(now: Date) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const thisMonth = firstBusinessDay(today.getFullYear(), today.getMonth());
  if (thisMonth >= today) return thisMonth;
  return firstBusinessDay(today.getFullYear(), today.getMonth() + 1);
}

const fmt = new Intl.DateTimeFormat("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

export function Handelsdag({ className }: { className?: string }) {
  const [state, setState] = useState<{ label: string; days: number } | null>(null);

  useEffect(() => {
    const now = new Date();
    const next = nextTradingDay(now);
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const days = Math.round((next.getTime() - today.getTime()) / 86_400_000);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- datum hangt af van de klok van de bezoeker
    setState({ label: fmt.format(next), days });
  }, []);

  return (
    <div data-ui className={className}>
      <p className="text-[0.9375rem] text-on-green-soft">Eerstvolgende handelsdag</p>
      <p className="figures mt-1 text-[1.625rem] font-semibold leading-tight tracking-[-0.015em] " aria-live="polite">
        {state ? state.label : "De eerste werkdag van de maand"}
      </p>
      <p className="mt-2 text-[0.9375rem] text-on-green-soft">
        {state
          ? state.days === 0
            ? "Vandaag worden de fondsen verhandeld."
            : `Over ${state.days} ${state.days === 1 ? "dag" : "dagen"}. De fondsen worden één keer per maand verhandeld.`
          : "De fondsen worden één keer per maand verhandeld."}
      </p>
      <p className="mt-3 text-[0.9375rem] text-on-green-soft/90">Indicatief, berekend in uw browser. Saxo bevestigt de exacte uitvoering.</p>
    </div>
  );
}
