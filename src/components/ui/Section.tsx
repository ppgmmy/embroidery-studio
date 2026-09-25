import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 md:py-20 ${className}`}>
      {children}
    </section>
  );
}

export function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`gold-rule ${className}`} aria-hidden="true" />;
}

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`font-latin text-sm tracking-[0.22em] text-gold uppercase ${className}`}
    >
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const titleColor = tone === "dark" ? "text-linen" : "text-pine";
  const descColor = tone === "dark" ? "text-sage" : "text-ash";
  const eyeColor = tone === "dark" ? "text-gold-soft" : "text-gold";

  return (
    <div className="max-w-3xl">
      <p className={`font-latin text-sm tracking-[0.22em] uppercase ${eyeColor}`}>
        {eyebrow}
      </p>
      <h1
        className={`mt-3 font-display text-3xl tracking-wide md:text-5xl ${titleColor}`}
      >
        {title}
      </h1>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${descColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
