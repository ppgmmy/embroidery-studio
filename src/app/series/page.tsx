import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ProductCard } from "@/components/products/ProductCard";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, PageHeader, Section } from "@/components/ui/Section";
import { getEmbroideryProducts, getProductsByLine } from "@/data/catalog";

export const metadata: Metadata = {
  title: "產品系列",
  description:
    "繕物誌主賣信仰公仔刺繡；金繕器物係概念線；另有毛巾、遮袋等織繕日常。",
};

export default function SeriesPage() {
  const embroidery = getEmbroideryProducts();
  const goldVein = getProductsByLine("gold-vein");
  const wovenMend = getProductsByLine("woven-mend");

  return (
    <SiteShell>
      <Section className="bg-pine-deep pt-16 text-linen md:pt-20">
        <Container>
          <PageHeader
            tone="dark"
            eyebrow="Collection"
            title="產品系列"
            description="主賣點：可愛信仰公仔刺繡。金繕器物保留為品牌概念線；織繕日常（毛巾、遮袋）可一齊試做。"
          />

          <div className="mt-16">
            <Eyebrow className="text-gold-soft">主賣 · 信仰公仔刺繡</Eyebrow>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              圖騰繡喺上面
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sage">
              十字架、白鴿、彩虹、小聖經，以至進階故事 pattern。金色裂紋可選、唔係必須。
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {embroidery.map((product) => (
                <article key={product.id}>
                  {product.image ? (
                    <ArtworkFrame
                      src={product.image}
                      alt={product.name}
                      href={`/series/${product.slug}`}
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  ) : null}
                  <h3 className="mt-3 font-display text-xl">
                    <Link href={`/series/${product.slug}`} className="hover:text-gold-soft">
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-sage">{product.tagline}</p>
                  {product.priceHkd ? (
                    <p className="mt-2 font-display text-lg text-gold-soft">
                      HK${product.priceHkd}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/embroidery" variant="gold">
                睇刺繡專頁
              </Button>
            </div>
          </div>

          <div className="mt-20 border-t border-moss/40 pt-16">
            <Eyebrow className="text-gold-soft">概念線 · 金繕器物</Eyebrow>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              修復 · 安息 · 託管
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sage">
              金繕精神係品牌靈感；器物線繼續存在，但唔再係刺繡產品嘅必要圖案。
            </p>
            <div className="mt-8">
              {goldVein.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-moss/40 pt-16">
            <Eyebrow className="text-gold-soft">織繕日常</Eyebrow>
            <h2 className="mt-3 font-display text-2xl md:text-3xl">
              毛巾 · 遮袋
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-sage">
              可重用日常小物；可加繡公仔圖騰。
            </p>
            <div className="mt-8">
              {wovenMend.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Button href="/contact" variant="gold">
              預約系列冊／試做諮詢
            </Button>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
