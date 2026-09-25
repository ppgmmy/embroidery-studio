/** 繕物誌 — 核心領域型別 */

export type ProductId =
  | "kinmyaku"
  | "seed-journal"
  | "rest-candle"
  | "mend-kit"
  | "light-vessel"
  | "gold-stitch"
  | "rest-towel"
  | "shelter-sleeve"
  | "gold-kerchief"
  | "stitch-kit"
  | "visible-mend"
  | "word-bookmark"
  | "mustard-token"
  | "table-linen"
  | "bible-sleeve"
  | "hoop-wall"
  | "motif-pack"
  | "motif-cross"
  | "motif-dove"
  | "motif-tote"
  | "motif-kerchief"
  | "motif-hoop"
  | "motif-rainbow"
  | "motif-pattern-pack"
  | "motif-pattern-pack-2"
  | "motif-hoop-loaves"
  | "motif-botanical-pack"
  | "cup-sleeve"
  | "drink-motif-pack"
  | "lesson-kit"
  | "word-pack"
  | "word-verse-bookmark"
  | "mini-john316"
  | "mini-calm"
  | "mini-shepherd"
  | "mini-verse-pack";

export type ProductStatus =
  | "available"
  | "preorder"
  | "workshop"
  | "coming_soon"
  | "concept";

export type ProductCategory =
  | "vessel"
  | "journal"
  | "ritual"
  | "kit"
  | "light"
  | "textile"
  | "embroidery";

export type ProductLine = "gold-vein" | "woven-mend" | "embroidery";

export interface Product {
  id: ProductId;
  series: string;
  slug: ProductId;
  line: ProductLine;
  name: string;
  en: string;
  tagline: string;
  description: string;
  longDescription: string;
  materials: string;
  faith: string;
  eco: string;
  category: ProductCategory;
  status: ProductStatus;
  priceHint: string;
  /** 建議零售價（港幣），有畫面／開賣預覽用 */
  priceHkd?: number;
  image?: string;
  suitableFor: string[];
  processNotes: string[];
}

export interface BeliefPillar {
  id: string;
  title: string;
  body: string;
}

export interface ProcessStep {
  id: string;
  mark: string;
  title: string;
  body: string;
}

export interface NavItem {
  href: string;
  label: string;
  accent?: boolean;
}

export interface SiteConfig {
  brandZh: string;
  brandEn: string;
  tagline: string;
  description: string;
  email: string;
  locale: string;
}

export type InquiryKind =
  | "series_book"
  | "custom_gift"
  | "church"
  | "workshop"
  | "other";

export interface InquiryPayload {
  name: string;
  email: string;
  organization?: string;
  kind: InquiryKind;
  message: string;
}
