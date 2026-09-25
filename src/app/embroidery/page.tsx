import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UpcycleQuote } from "@/components/embroidery/UpcycleQuote";
import { SiteShell } from "@/components/layout/SiteShell";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { getEmbroideryProducts } from "@/data/catalog";
import {
  getBotanicalMotifs,
  getMiniMotifs,
  getPatternMotifs,
  getSimpleMotifs,
  getWordMotifs,
  motifOnProducts,
  motifTierLabel,
  type EmbroideryMotif,
} from "@/data/motifs";

export const metadata: Metadata = {
  title: "信仰公仔刺繡｜針線製作 · 附教學",
  description:
    "所有公仔以刺繡針法製作，維持可愛畫風；附入門至花草課教學。金繕裂紋可選。",
};

function MotifGrid({ motifs }: { motifs: EmbroideryMotif[] }) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {motifs.map((motif) => (
        <article
          key={motif.id}
          className="border border-sage/30 bg-white/50 p-4"
        >
          {motif.image ? (
            <div className="relative mb-4 aspect-square overflow-hidden bg-mist">
              <Image
                src={motif.image}
                alt={motif.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ) : null}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-display text-lg text-pine">{motif.name}</h3>
            {motifTierLabel(motif.tier) ? (
              <span className="shrink-0 text-[10px] tracking-widest text-gold uppercase">
                {motifTierLabel(motif.tier)}
              </span>
            ) : null}
          </div>
          <p className="mt-1 font-latin text-xs italic text-gold">{motif.en}</p>
          {motif.stitchHint ? (
            <p className="mt-1 font-latin text-[11px] tracking-wide text-moss uppercase">
              {motif.stitchHint}
            </p>
          ) : null}
          <p className="mt-2 text-sm leading-6 text-ash">{motif.vibe}</p>
          <p className="mt-3 text-xs text-moss">{motif.faith}</p>
          <p className="mt-2 text-xs text-ash/80">
            適合：{motif.bestOn.join(" · ")}
            {motif.priceAddonHkd > 0
              ? ` · 圖騰加價 +HK$${motif.priceAddonHkd}`
              : " · 基本款"}
          </p>
        </article>
      ))}
    </div>
  );
}

export default function EmbroideryPage() {
  const items = getEmbroideryProducts();
  const motifProducts = items.filter(
    (p) =>
      p.id.startsWith("motif") ||
      p.id.startsWith("word-") ||
      p.id === "cup-sleeve" ||
      p.id === "drink-motif-pack" ||
      p.id.startsWith("mini-"),
  );
  const otherProducts = items.filter(
    (p) =>
      !p.id.startsWith("motif") &&
      !p.id.startsWith("word-") &&
      !p.id.startsWith("mini-") &&
      p.id !== "cup-sleeve" &&
      p.id !== "drink-motif-pack",
  );
  const simpleMotifs = getSimpleMotifs();
  const miniMotifs = getMiniMotifs();
  const patternMotifs = getPatternMotifs();
  const botanicalMotifs = getBotanicalMotifs();
  const wordMotifs = getWordMotifs();

  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Embroidered Buddies · Tutorials"
            title="信仰公仔刺繡"
            description="所有公仔都用線鋪滿成個面——緞面針填色，唔係淨係勾邊，亦唔係布貼。另有故事 pattern、花草針法、杯套聯乘；金繕裂紋可選。"
          />

          <div className="relative mt-12 aspect-[4/3] overflow-hidden bg-mist md:aspect-[21/9]">
            <Image
              src="/products/motifs-set.png"
              alt="信仰公仔圖騰布章組"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="mt-14">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              繡喺產品上面
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              公仔、花草、線條都可以繡喺 tote、手帕、繡棚、杯套，甚至舊衣上面。
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {motifOnProducts.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group block overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-pine">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ash">
                    {item.caption}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              基本公仔圖騰（刺繡製作）
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              成個公仔都係線鋪滿——緞面針填色、結粒做細節。畫風保持圓潤；可跟教學課一手練習。
            </p>
            <MotifGrid motifs={simpleMotifs} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              迷你經文刺繡
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              掌心咁大，一個小景加一個短編號。約3:16
              係海、耶穌、約翰同白鴿。約翰福音 3:16：神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。
            </p>
            <div className="relative mx-auto mt-8 aspect-square max-w-xl overflow-hidden bg-linen">
              <Image
                src="/products/motif-mini-john316.png"
                alt="迷你刺繡：海、耶穌、約翰、白鴿，下面約3:16"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 576px"
              />
            </div>
            <MotifGrid motifs={miniMotifs} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              進階故事 Pattern
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              線密少少、場景感強——適合繡棚同袋面大圖。
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-mist md:aspect-[21/9]">
              <Image
                src="/products/motifs-pattern-set.png"
                alt="進階故事圖騰組"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <MotifGrid motifs={patternMotifs} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              靚字書法 Word
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              恩典、平安、喜樂、盼望、慈愛、信心——書法筆觸用緞面針＋梗針繡出，優雅又有份量。
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden bg-mist md:aspect-[21/9]">
              <Image
                src="/products/words-set.png"
                alt="靚字祝福布章組"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <MotifGrid motifs={wordMotifs} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              花草針法 Botanical
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              花瓣、葉同果實都用線鋪滿成個面（緞面針、長短針、結粒）——同真實繡棚一樣，適合教材、掛牆、手作體驗。
            </p>
            <MotifGrid motifs={botanicalMotifs} />
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              生活小物 · 聯乘
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ash">
              外帶杯套同咖啡廳飲品 icon——日常用得着，又啱咖啡店／市集聯乘。
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <Link href="/series/cup-sleeve" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src="/products/product-cup-sleeve.png"
                    alt="極簡外帶杯套"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl text-pine">
                  極簡外帶杯套
                </h3>
                <p className="mt-2 text-sm text-ash">
                  線條繡 · 可重用 · 由 HK$98
                </p>
              </Link>
              <Link href="/series/drink-motif-pack" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src="/products/motifs-drink-set.png"
                    alt="咖啡廳飲品圖騰組"
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl text-pine">
                  咖啡廳飲品圖騰組
                </h3>
                <p className="mt-2 text-sm text-ash">
                  刺繡版熱門飲品 icon · HK$320
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              圖騰產品
            </h2>
            <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {motifProducts.map((product) => (
                <article key={product.id} className="flex flex-col">
                  <Link
                    href={`/series/${product.slug}`}
                    className="relative aspect-square overflow-hidden bg-mist"
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : null}
                  </Link>
                  <h3 className="mt-4 font-display text-xl text-pine">
                    <Link href={`/series/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ash">
                    {product.description}
                  </p>
                  <p className="mt-3 font-display text-xl text-pine">
                    HK${product.priceHkd}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-display text-2xl text-pine md:text-3xl">
              其他刺繡載體
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherProducts.map((product) => (
                <article key={product.id}>
                  <Link
                    href={`/series/${product.slug}`}
                    className="relative block aspect-square overflow-hidden bg-mist"
                  >
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : null}
                  </Link>
                  <h3 className="mt-3 font-display text-lg text-pine">
                    <Link href={`/series/${product.slug}`}>{product.name}</Link>
                  </h3>
                  <p className="mt-1 text-sm text-ash line-clamp-2">
                    {product.description}
                  </p>
                  <p className="mt-2 font-display text-pine">
                    {product.id === "visible-mend"
                      ? `由 HK$${product.priceHkd}`
                      : `HK$${product.priceHkd}`}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <UpcycleQuote />
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/embroidery/lessons" variant="primary">
              刺繡教學（逐步學）
            </Button>
            <Button href="/series/lesson-kit" variant="secondary">
              公仔刺繡教學盒
            </Button>
            <Button href="/contact" variant="secondary">
              想訂圖騰／聯乘
            </Button>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
