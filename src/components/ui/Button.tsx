import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-green text-on-green hover:bg-green-deep",
  light: "bg-sand text-green-deep hover:bg-white",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", external, className }: ButtonProps) {
  const classes = cn(
    "group inline-flex min-h-12 items-center gap-3 px-6 py-3 text-[0.9375rem] font-semibold tracking-[0.005em] transition-[background-color,color,box-shadow,transform] duration-200 ease-out active:translate-y-px",
    variants[variant],
    className,
  );
  const Icon = external ? ArrowUpRight : ArrowRight;
  const icon = (
    <Icon aria-hidden className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" strokeWidth={2} />
  );
  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} className={classes} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}

type TextLinkProps = { href: string; children: ReactNode; className?: string; external?: boolean };

export function TextLink({ href, children, className, external }: TextLinkProps) {
  const classes = cn("group inline-flex items-center gap-2 font-semibold", className);
  const content = (
    <>
      <span className="link-underline">{children}</span>
      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" strokeWidth={2} />
    </>
  );
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
