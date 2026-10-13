import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "sand" | "beige" | "green" | "white";

const tones: Record<Tone, string> = {
  sand: "bg-sand text-ink",
  beige: "bg-beige text-ink",
  green: "on-green bg-green-deep text-on-green",
  white: "bg-white text-ink",
};

type SectionProps = {
  children: ReactNode;
  tone?: Tone;
  compact?: boolean;
  id?: string;
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
};

export function Section({ children, tone = "sand", compact, id, className, containerClassName, labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(tones[tone], compact ? "py-[var(--section-y-compact)]" : "py-[var(--section-y)]", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
