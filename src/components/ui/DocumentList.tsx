import type { Doc } from "@/data/site";
import { cn } from "@/lib/cn";

// Twee-zijdige rijen: document links, datum of kenmerk rechts. Linkt naar de echte pdf's op ovmk.nl.
export function DocumentList({ docs, className, tone = "light" }: { docs: Doc[]; className?: string; tone?: "light" | "dark" }) {
  return (
    <ul className={cn("divide-y", tone === "light" ? "divide-neutral" : "divide-white/15", className)}>
      {docs.map((doc) => (
        <li key={doc.href + doc.label}>
          <a
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group flex min-h-12 items-center gap-3 py-3 transition-colors duration-200",
              tone === "light" ? "hover:text-green" : "hover:text-gold",
            )}
          >
            <span className="flex-1 font-semibold leading-snug">
              <span className="decoration-gold decoration-2 underline-offset-4 group-hover:underline">{doc.label}</span>
              <span className="sr-only"> (pdf, opent in nieuw venster)</span>
            </span>
            {doc.note && (
              <span className={cn("figures shrink-0 text-[0.9375rem]", tone === "light" ? "text-ink-soft" : "text-on-green-soft")}>
                {doc.note}
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
