import type { NavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brandZh: "繕物誌",
  brandEn: "Kintsugi Studio",
  tagline: "以修補重拾創造之美。",
  description:
    "繕物誌結合環保與信仰：可愛信仰公仔圖騰刺繡係主賣點；金繕精神係品牌概念靈感，金色裂紋可選、唔係必須。",
  email: "hello@kintsugi.studio",
  locale: "zh-Hant",
};

export const mainNav: NavItem[] = [
  { href: "/belief", label: "信念" },
  { href: "/embroidery", label: "刺繡" },
  { href: "/embroidery/lessons", label: "教學" },
  { href: "/series", label: "系列" },
  { href: "/shop", label: "開賣預覽" },
  { href: "/contact", label: "聯絡", accent: true },
];

export const footerNav: NavItem[] = [
  { href: "/belief", label: "信念" },
  { href: "/embroidery", label: "公仔刺繡" },
  { href: "/embroidery/lessons", label: "刺繡教學" },
  { href: "/series", label: "產品系列" },
  { href: "/shop", label: "開賣預覽" },
  { href: "/contact", label: "聯絡繕物誌" },
];

export const inquiryKindLabels = {
  series_book: "預約系列冊",
  custom_gift: "訂製／舊衣重塑",
  church: "教會／小組合作",
  workshop: "工作坊",
  other: "其他",
} as const;

export const lineLabels = {
  "gold-vein": "金線器物（概念線）",
  "woven-mend": "織繕日常",
  embroidery: "信仰公仔刺繡",
} as const;
