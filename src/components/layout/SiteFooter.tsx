import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-sage/30 bg-linen px-5 py-14 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_auto] md:items-start">
        <div className="max-w-sm">
          <p className="font-display text-lg tracking-[0.12em] text-pine">
            {siteConfig.brandZh}
          </p>
          <p className="mt-1 font-latin text-sm italic text-ash">
            {siteConfig.brandEn}
          </p>
          <p className="mt-4 text-sm leading-7 text-ash">{siteConfig.description}</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-block text-sm text-moss underline-offset-4 hover:text-pine hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ash" aria-label="頁尾選單">
          {footerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-pine"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="text-xs leading-6 text-ash/80 md:text-right">
          © {new Date().getFullYear()} {siteConfig.brandZh}
          <br />
          {siteConfig.brandEn}
        </p>
      </div>
    </footer>
  );
}
