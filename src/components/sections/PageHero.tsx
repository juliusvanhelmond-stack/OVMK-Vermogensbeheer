import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

type PageHeroProps = {
  label: string;
  title: string;
  intro: ReactNode;
  image?: { src: string; alt: string; caption: string; position?: string };
  children?: ReactNode;
};

// Subpagina-hero: dezelfde 55/45-verhouding als de homepage, compacter.
export function PageHero({ label, title, intro, image, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="bg-beige">
      <div className={image ? "lg:grid lg:min-h-[min(680px,calc(100svh-88px))] lg:grid-cols-[55fr_45fr]" : ""}>
        <div
          className={
            image
              ? "flex flex-col justify-center px-[var(--gutter)] py-12 md:py-16 lg:pl-[max(var(--gutter),calc((100vw-var(--container))/2))] lg:pr-16"
              : "mx-auto max-w-[calc(var(--container)+2*var(--gutter))] px-[var(--gutter)] py-12 md:py-20"
          }
        >
          <Eyebrow className="hero-in">{label}</Eyebrow>
          <h1 id="page-title" className="t-hero hero-in mt-5 max-w-[20ch] text-green-deep" style={{ ["--i" as string]: 1 }}>
            {title}
          </h1>
          <div className="t-lead hero-in mt-6 max-w-[50ch]" style={{ ["--i" as string]: 2 }}>
            {intro}
          </div>
          {children && (
            <div className="hero-in mt-8" style={{ ["--i" as string]: 3 }}>
              {children}
            </div>
          )}
        </div>
        {image && (
          <figure className="relative h-[56vw] max-h-[420px] min-h-[260px] overflow-hidden bg-neutral lg:h-auto lg:max-h-none">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="hero-photo object-cover"
              style={{ objectPosition: image.position ?? "50% 50%" }}
            />
            <figcaption className="absolute bottom-0 left-0 bg-green-deep/90 px-4 py-2.5 text-[0.9375rem] leading-snug text-on-green">
              {image.caption}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
