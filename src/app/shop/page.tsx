import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { ArtworkFrame } from "@/components/ui/ArtworkFrame";
import { Button } from "@/components/ui/Button";
import { Container, PageHeader, Section } from "@/components/ui/Section";
import { getShopPreviewProducts } from "@/data/catalog";

export const metadata: Metadata = {
  title: "開賣預覽",
  description:
    "繕物誌主賣信仰公仔刺繡：布章、tote、手帕、繡棚——金繕裂紋可選，圖騰先係賣點。",
};

export default function ShopPreviewPage() {
  const items = getShopPreviewProducts();

  return (
    <SiteShell>
      <Section className="bg-linen pt-16 md:pt-20">
        <Container>
          <PageHeader
            eyebrow="Shop Preview"
            title="如果開始賣，會長咁"
            description="主打可愛信仰公仔圖騰（簡單款＋進階 pattern）；金繕裂紋只係可選概念。另有安息巾同遮袋。而家係畫面預覽，未接真實結帳。"
          />

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <article key={product.id} className="flex flex-col">
                {product.image ? (
                  <ArtworkFrame
                    src={product.image}
                    alt={product.name}
                    href={`/series/${product.slug}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : null}
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="font-latin text-xs tracking-[0.2em] text-gold uppercase">
                    {product.en}
                  </p>
                  <h2 className="mt-1 font-display text-2xl tracking-wide text-pine">
                    <Link
                      href={`/series/${product.slug}`}
                      className="hover:text-moss"
                    >
                      {product.name}
                    </Link>
                  </h2>
                  <p className="mt-2 font-display text-base text-gold">
                    {product.tagline}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-7 text-ash">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-end justify-between border-t border-sage/30 pt-4">
                    <div>
                      <p className="text-xs tracking-widest text-ash/70 uppercase">
                        建議售價
                      </p>
                      <p className="mt-1 font-display text-2xl text-pine">
                        HK${product.priceHkd}
                      </p>
                    </div>
                    <span className="text-xs text-moss">預購畫面</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 max-w-2xl border border-sage/30 bg-mist/40 p-6 md:p-8">
            <h3 className="font-display text-xl text-pine">你而家睇到嘅係</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-ash">
              <li>· 刺繡、織繕同概念器物都有畫面同建議價錢</li>
              <li>· 每件有相片、說明同經文</li>
              <li>· 未有真實付款掣（避免未備貨就收錢）</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                想正式開賣／落單試產
              </Button>
              <Button href="/series" variant="secondary">
                返系列總覽
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}
