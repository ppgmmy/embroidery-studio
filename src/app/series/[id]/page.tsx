import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import {
  ProductBreadcrumb,
  ProductMeta,
} from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Section";
import {
  getProductById,
  getProductIds,
  getRelatedProducts,
  statusLabel,
} from "@/data/catalog";
import { lineLabels } from "@/lib/site";
import type { ProductId } from "@/types";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getProductIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "產品不存在" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = getRelatedProducts(product.id as ProductId);
  const isConcept = product.status === "concept";

  return (
    <SiteShell>
      <Section className="bg-pine-deep pt-16 text-linen md:pt-20">
        <Container>
          <ProductBreadcrumb productName={product.name} />
          <p className="font-latin text-sm tracking-[0.22em] text-gold-soft uppercase">
            {lineLabels[product.line]} · {product.series}
          </p>
          <div className="mt-6 grid gap-12 md:grid-cols-[1.05fr_1fr]">
            <div>
              {product.image ? (
                <div className="relative mb-6 aspect-square overflow-hidden bg-[#e7efe9]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              ) : null}
              <p className="font-latin text-sm italic text-sage">{product.en}</p>
              <h1 className="mt-2 font-display text-4xl tracking-wide md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 font-display text-xl text-gold-soft">
                {product.tagline}
              </p>
              {isConcept ? (
                <p className="mt-4 inline-block border border-gold/40 px-3 py-1 text-xs tracking-widest text-gold-soft uppercase">
                  初步構思 · Concept
                </p>
              ) : null}
              <p className="mt-6 text-base leading-8 text-mist/90">
                {product.longDescription}
              </p>
              <p className="mt-6 text-sm text-sage">
                {statusLabel[product.status]} · {product.priceHint}
                {product.priceHkd ? ` · HK$${product.priceHkd}` : ""}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact" variant="gold">
                  {isConcept ? "查詢試做" : "查詢／預購"}
                </Button>
                <Button href="/shop" variant="ghost">
                  看開賣預覽
                </Button>
              </div>
            </div>
            <div className="border-t border-moss/40 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-10">
              <ProductMeta product={product} />
            </div>
          </div>

          <div className="mt-16 border-t border-moss/40 pt-12">
            <h2 className="font-display text-2xl text-linen">
              {isConcept ? "構想步驟" : "製作步驟"}
            </h2>
            <ol className="mt-6 grid gap-4 md:grid-cols-2">
              {product.processNotes.map((note, index) => (
                <li key={note} className="flex gap-3 text-sm text-mist/85">
                  <span className="font-latin text-gold/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {note}
                </li>
              ))}
            </ol>
          </div>

          {related.length > 0 ? (
            <div className="mt-16 border-t border-moss/40 pt-12">
              <h2 className="font-display text-2xl">相關產品</h2>
              <ul className="mt-6 space-y-4">
                {related.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/series/${item.slug}`}
                      className="text-gold-soft transition hover:text-gold-bright"
                    >
                      {item.series} {item.name} — {item.tagline}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </Section>
    </SiteShell>
  );
}
