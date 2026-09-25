import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const notoSerifTc = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoSansTc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faith-embroidery.vercel.app"),
  title: {
    default: `${siteConfig.brandZh} ${siteConfig.brandEn}｜${siteConfig.tagline.replace("。", "")}`,
    template: `%s｜${siteConfig.brandZh}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.brandZh} ${siteConfig.brandEn}`,
    description: "環保 × 信仰。主賣可愛公仔刺繡；金繕係概念靈感。",
    locale: "zh_HK",
    type: "website",
    siteName: siteConfig.brandZh,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${notoSerifTc.variable} ${notoSansTc.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body text-clay">
        {children}
      </body>
    </html>
  );
}
