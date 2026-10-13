"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { criteria } from "@/data/site";
import { cn } from "@/lib/cn";

// Vastgezet paneel met de vier selectiecriteria. Bij het scrollen langs de uitleg
// wordt elk criterium afgevinkt, zoals een analist een belegging toetst.
export function CriteriaStory({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const [active, setActive] = useState(-1);
  const refs = useRef<Array<HTMLLIElement | null>>([]);
  const dark = tone === "dark";

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLLIElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.index);
            setActive((prev) => Math.max(prev, i));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
      <div className="lg:col-span-5">
        <div
          data-ui
          className={cn(
            "lg:sticky lg:top-32",
            dark ? "bg-green text-on-green" : "bg-white text-ink",
          )}
        >
          <div className="flex items-baseline justify-between gap-4 px-6 pb-4 pt-6">
            <p className="text-[1.0625rem] font-semibold">Selectiecriteria</p>
            <p className={cn("figures text-[0.9375rem]", dark ? "text-on-green-soft" : "text-ink-soft")} aria-live="polite">
              {Math.max(active + 1, 0)} van 4 getoetst
            </p>
          </div>
          <ol className="px-3 pb-3">
            {criteria.map((c, i) => {
              const done = i <= active;
              return (
                <li
                  key={c.short}
                  className={cn(
                    "flex items-center gap-4 px-3 py-3.5 transition-colors duration-500",
                    done && (dark ? "bg-green-deep" : "bg-sand"),
                  )}
                >
                  <span
                    aria-hidden
                    className={cn(
                      "grid size-7 shrink-0 place-items-center transition-[background-color,transform] duration-500",
                      done ? "scale-100 bg-gold text-green-deep" : dark ? "bg-on-green/15" : "bg-green/10",
                    )}
                  >
                    {done && <Check className="size-4" strokeWidth={3} />}
                  </span>
                  <span className="flex-1 text-[1.0625rem] font-semibold">{c.short}</span>
                  <span className={cn("text-[0.9375rem]", dark ? "text-on-green-soft" : "text-ink-soft")}>
                    {done ? "voldoet" : "open"}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <ol className="lg:col-span-6 lg:col-start-7">
        {criteria.map((c, i) => (
          <li
            key={c.short}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-index={i}
            className={cn("py-8 first:pt-0 lg:min-h-[34vh] lg:py-10 lg:first:pt-4", i > 0 && "border-t", dark ? "border-white/15" : "border-neutral")}
          >
            <p className={cn("t-label", dark ? "text-gold" : "text-green")}>{c.short}</p>
            <h3 className="t-sub mt-3">{c.title}</h3>
            <p className={cn("mt-4 max-w-[52ch]", dark ? "text-on-green" : "text-ink")}>{c.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
