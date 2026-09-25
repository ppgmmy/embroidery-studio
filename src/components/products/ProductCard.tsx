import Image from "next/image";
import Link from "next/link";
import { statusLabel } from "@/data/catalog";
import { lineLabels } from "@/lib/site";
import type { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group border-t border-moss/50 py-10 transition duration-300 md:py-12">
      <div className="grid gap-6 md:grid-cols-[7.5rem_1fr_auto] md:items-start md:gap-8">
        {product.image ? (
          <Link
            href={`/series/${product.slug}`}
            className="relative block aspect-square overflow-hidden bg-linen/15"
          >
            <Image
              src={product.image}
              alt=""
              fill
              sizes="120px"
              className="object-contain p-1.5"
            />
          </Link>
        ) : (
          <p className="font-latin text-3xl text-gold/70 tabular-nums md:text-4xl">
            {product.series}
          </p>
        )}
        <div>
          <p className="font-latin text-sm tracking-[0.18em] text-sage italic">
            {product.en}
          </p>
          <h2 className="mt-2 font-display text-2xl tracking-wide text-linen md:text-3xl">
            <Link
              href={`/series/${product.slug}`}
              className="transition duration-200 hover:text-gold-soft"
            >
              {product.name}
            </Link>
          </h2>
          <p className="mt-3 font-display text-lg text-gold-soft">
            {product.tagline}
          </p>
          <p className="mt-4 line-clamp-3 max-w-2xl text-[15px] leading-7 text-mist/85">
            {product.description}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <span className="rounded-sm border border-moss/50 px-2 py-1 text-[11px] tracking-widest text-sage uppercase">
            {statusLabel[product.status]}
          </span>
          <span className="text-[11px] tracking-wide text-sage/70">
            {lineLabels[product.line]}
          </span>
          <Link
            href={`/series/${product.slug}`}
            className="border-b border-gold/40 pb-0.5 text-sm text-gold-soft transition duration-200 hover:border-gold-soft hover:text-gold-bright"
          >
            查看詳情
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProductMeta({ product }: { product: Product }) {
  return (
    <dl className="space-y-5 text-sm">
      <div>
        <dt className="text-xs tracking-widest text-sage/80 uppercase">物料</dt>
        <dd className="mt-1.5 text-mist/90">{product.materials}</dd>
      </div>
      <div>
        <dt className="text-xs tracking-widest text-sage/80 uppercase">
          信仰脈絡
        </dt>
        <dd className="mt-1.5 text-gold-soft/95">{product.faith}</dd>
      </div>
      <div>
        <dt className="text-xs tracking-widest text-sage/80 uppercase">
          環保承諾
        </dt>
        <dd className="mt-1.5 text-mist/90">{product.eco}</dd>
      </div>
      <div>
        <dt className="text-xs tracking-widest text-sage/80 uppercase">適用</dt>
        <dd className="mt-1.5 text-mist/90">{product.suitableFor.join(" · ")}</dd>
      </div>
    </dl>
  );
}

export function ProductBreadcrumb({ productName }: { productName: string }) {
  return (
    <nav aria-label="麵包屑" className="mb-8 text-sm text-sage">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition hover:text-gold-soft">
            首頁
          </Link>
        </li>
        <li aria-hidden="true" className="text-moss">
          /
        </li>
        <li>
          <Link href="/series" className="transition hover:text-gold-soft">
            系列
          </Link>
        </li>
        <li aria-hidden="true" className="text-moss">
          /
        </li>
        <li className="text-mist/90" aria-current="page">
          {productName}
        </li>
      </ol>
    </nav>
  );
}
