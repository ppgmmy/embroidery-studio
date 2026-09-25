"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/lib/site";

type HeaderTone = "hero" | "solid";

export function SiteHeader({ tone = "solid" }: { tone?: HeaderTone }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHero = tone === "hero";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const shell = isHero
    ? "absolute inset-x-0 top-0 z-30 text-mist/85"
    : "sticky top-0 z-30 border-b border-sage/25 bg-linen/90 text-ash backdrop-blur-md";

  const brand = isHero ? "text-linen" : "text-pine";
  const linkIdle = isHero ? "hover:text-gold-soft" : "hover:text-pine";
  const accent = isHero
    ? "border border-gold/40 text-gold-soft hover:border-gold-soft hover:bg-gold/10"
    : "border border-pine/20 text-pine hover:border-pine/40 hover:bg-pine/5";

  return (
    <header className={shell}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className={`font-display text-lg tracking-[0.12em] transition md:text-xl ${brand}`}
          aria-label={`${siteConfig.brandZh} ${siteConfig.brandEn} 首頁`}
        >
          {siteConfig.brandZh}
        </Link>

        <nav className="hidden items-center gap-5 text-sm lg:gap-7 md:flex" aria-label="主選單">
          {mainNav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            if (item.accent) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-sm px-3 py-1.5 transition duration-200 ${accent}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition duration-200 ${linkIdle} ${
                  active ? (isHero ? "text-gold-soft" : "text-pine") : ""
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active ? (
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-full ${
                      isHero ? "bg-gold-soft/80" : "bg-gold/70"
                    }`}
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={`inline-flex min-h-11 min-w-11 items-center justify-center px-2 text-sm tracking-wide transition md:hidden ${isHero ? "text-linen" : "text-pine"}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "關閉選單" : "開啟選單"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "關閉" : "選單"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className={`border-t md:hidden ${isHero ? "border-moss/40 bg-pine-deep/95" : "border-sage/30 bg-linen"}`}
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="手機選單">
            {mainNav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`min-h-11 py-3 text-base transition ${
                    isHero ? "text-linen" : "text-pine"
                  } ${active ? "text-gold" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
