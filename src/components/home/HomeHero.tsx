import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="grain relative min-h-[100svh] overflow-hidden text-linen">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay",
        }}
      />
      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-8 px-6 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:gap-4 md:px-8 md:pb-20 md:pt-20">
        <div className="relative z-10 max-w-xl">
          <p className="animate-rise font-latin text-sm tracking-[0.28em] text-gold-soft uppercase md:text-base">
            {siteConfig.brandEn}
          </p>
          <h1 className="animate-rise-delay-1 mt-3 font-display text-[clamp(3rem,9vw,5.5rem)] leading-[1.05] tracking-[0.08em] text-linen">
            {siteConfig.brandZh}
          </h1>
          <p className="animate-rise-delay-2 mt-6 max-w-md font-display text-xl leading-relaxed text-mist/90 md:text-2xl">
            {siteConfig.tagline}
          </p>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-[15px] leading-7 font-light text-sage md:text-base">
            環保 × 信仰：主賣可愛信仰公仔刺繡；金繕精神係概念靈感——裂紋可選，圖騰先係主角。
          </p>
          <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <Button href="/embroidery" variant="gold">
              睇公仔刺繡
            </Button>
            <Button href="/belief" variant="ghost">
              我們為何而做
            </Button>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:justify-end">
          <div className="absolute h-64 w-64 rounded-full bg-gold/15 blur-3xl md:h-80 md:w-80" />
          <div className="relative aspect-square w-[min(88vw,420px)] overflow-hidden rounded-full border border-gold/35 bg-linen/10 shadow-2xl">
            <Image
              src="/products/motif-mini-john316.png"
              alt="迷你刺繡：海、耶穌、約翰、白鴿，下面約3:16"
              fill
              priority
              sizes="420px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-linen to-transparent" />
      <a
        href="#belief-preview"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-[11px] tracking-[0.28em] text-sage/80 uppercase transition hover:text-gold-soft md:inline-block"
      >
        下滑探索
      </a>
    </section>
  );
}
