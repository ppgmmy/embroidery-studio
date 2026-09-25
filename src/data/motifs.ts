/** 刺繡圖騰庫 — 全部公仔以刺繡針法製作，維持可愛畫風；金繕裂紋可選 */

export type MotifId =
  | "cross"
  | "dove"
  | "rainbow"
  | "bible"
  | "mustard"
  | "fish"
  | "olive-wreath"
  | "ark-rainbow"
  | "open-bible"
  | "shepherd"
  | "loaves-fish"
  | "manger-star"
  | "mustard-tree"
  | "lilies-cross"
  | "sunflower"
  | "wild-rose"
  | "blue-flowers"
  | "word-grace"
  | "word-peace"
  | "word-joy"
  | "word-hope"
  | "word-love"
  | "word-faith"
  | "mini-john316"
  | "mini-calm"
  | "mini-shepherd";

/** simple=單個公仔；pattern=故事場景；botanical=花草針法；word=書法靚字；mini=迷你經文小景 */
export type MotifTier = "simple" | "pattern" | "botanical" | "word" | "mini";

export interface EmbroideryMotif {
  id: MotifId;
  name: string;
  en: string;
  vibe: string;
  faith: string;
  bestOn: string[];
  priceAddonHkd: number;
  tier: MotifTier;
  stitchHint?: string;
  image?: string;
}

export const embroideryMotifs: EmbroideryMotif[] = [
  {
    id: "cross",
    name: "圓角十字架公仔",
    en: "Soft Cross",
    vibe: "圓潤可愛；緞面針填色＋結粒五官——全部係刺繡，唔係布貼",
    faith: "約翰福音 3:16 — 神愛世人",
    bestOn: ["布章", "鎖匙扣", "Tote 袋角", "外套胸口"],
    priceAddonHkd: 0,
    tier: "simple",
    image: "/products/motif-cross.png",
  },
  {
    id: "dove",
    name: "白白鴿",
    en: "Chubby Dove",
    vibe: "圓身白鴿＋小橄欖葉，可愛平安",
    faith: "創世記 8:11 — 鴿子嘴裡叼著新擰下來的橄欖葉子",
    bestOn: ["小布袋", "手帕", "舊衣背部小圖", "壁飾"],
    priceAddonHkd: 20,
    tier: "simple",
    image: "/products/motif-dove.png",
  },
  {
    id: "rainbow",
    name: "約定彩虹",
    en: "Promise Rainbow",
    vibe: "柔色彩虹＋小雲，約的記號",
    faith: "創世記 9:13 — 我把虹放在雲彩中",
    bestOn: ["布章", "書籤", "兒童／親子禮物", "袋面"],
    priceAddonHkd: 30,
    tier: "simple",
    image: "/products/motif-rainbow.png",
  },
  {
    id: "bible",
    name: "小小聖經公仔",
    en: "Mini Bible Buddy",
    vibe: "合上嘅小書＋金邊，可配小心心",
    faith: "詩篇 119:105 — 你的話是我腳前的燈",
    bestOn: ["書籤", "布章", "聖經套角", "刺繡盒練習布"],
    priceAddonHkd: 25,
    tier: "simple",
    image: "/products/motif-bible.png",
  },
  {
    id: "mustard",
    name: "芥菜種芽芽",
    en: "Mustard Sprout",
    vibe: "一粒種＋兩片嫩葉，細細信心",
    faith: "馬太福音 17:20 — 信心像一粒芥菜種",
    bestOn: ["口袋片", "鎖匙扣", "手帕角"],
    priceAddonHkd: 15,
    tier: "simple",
    image: "/products/motif-mustard.png",
  },
  {
    id: "fish",
    name: "小魚兒",
    en: "Little Fish",
    vibe: "圓潤 ichthys 小魚，低調又得意",
    faith: "馬可福音 1:17 — 我要叫你們得人如得魚",
    bestOn: ["布章", "書籤", "帽沿", "袋角"],
    priceAddonHkd: 15,
    tier: "simple",
    image: "/products/motif-fish.png",
  },
  {
    id: "olive-wreath",
    name: "橄欖圈白鴿",
    en: "Olive Wreath Dove",
    vibe: "白鴿坐喺橄欖葉圈入面——圖案密少少、層次多",
    faith: "創世記 8:11 — 鴿子叼著橄欖葉子",
    bestOn: ["繡棚", "外套背部", "袋面中心", "壁飾"],
    priceAddonHkd: 55,
    tier: "pattern",
    image: "/products/motif-olive-wreath.png",
  },
  {
    id: "ark-rainbow",
    name: "方舟約定景",
    en: "Ark & Promise",
    vibe: "小方舟＋彩虹＋小動物探頭——一幕故事感 pattern",
    faith: "創世記 9:13 — 我把虹放在雲彩中",
    bestOn: ["繡棚", "Tote 正面", "兒童房壁飾", "大布章"],
    priceAddonHkd: 80,
    tier: "pattern",
    image: "/products/motif-ark-rainbow.png",
  },
  {
    id: "open-bible",
    name: "開卷小聖經",
    en: "Open Word Buddy",
    vibe: "翻開嘅小書＋心＋柔光針腳——讀經主題進階款",
    faith: "詩篇 119:105 — 你的話是我腳前的燈",
    bestOn: ["書籤加大", "聖經套", "繡棚", "練習布"],
    priceAddonHkd: 50,
    tier: "pattern",
    image: "/products/motif-open-bible.png",
  },
  {
    id: "shepherd",
    name: "小牧人與羊",
    en: "Shepherd & Lamb",
    vibe: "圓潤牧人抱住小羊——人物＋場景，溫柔故事感",
    faith: "詩篇 23:1 — 耶和華是我的牧者",
    bestOn: ["繡棚", "手帕角加大", "關懷禮物", "小組壁飾"],
    priceAddonHkd: 70,
    tier: "pattern",
    image: "/products/motif-shepherd.png",
  },
  {
    id: "loaves-fish",
    name: "五餅二魚籃",
    en: "Loaves & Fish",
    vibe: "圓籃＋五餅＋兩條笑魚——供應故事，線密層次多",
    faith: "馬太福音 14:19 — 就擘開餅，遞給門徒",
    bestOn: ["繡棚", "擘餅布巾", "Tote 正面", "大布章"],
    priceAddonHkd: 75,
    tier: "pattern",
    image: "/products/motif-loaves-fish.png",
  },
  {
    id: "manger-star",
    name: "馬槽與星",
    en: "Manger & Star",
    vibe: "小馬槽＋柔光星芒——聖誕／降生主題進階景",
    faith: "路加福音 2:12 — 你們要看見一個嬰孩",
    bestOn: ["繡棚", "聖誕禮物", "壁飾", "袋面"],
    priceAddonHkd: 85,
    tier: "pattern",
    image: "/products/motif-manger-star.png",
  },
  {
    id: "mustard-tree",
    name: "芥菜樹小鳥",
    en: "Mustard Tree Nest",
    vibe: "圓樹＋枝頭小鳥——由一粒種長成樹的進階版",
    faith: "馬太福音 13:32 — 長成樹，天上的飛鳥來宿在它的枝上",
    bestOn: ["繡棚", "兒童房", "外套背部", "大布章"],
    priceAddonHkd: 70,
    tier: "pattern",
    image: "/products/motif-mustard-tree.png",
  },
  {
    id: "lilies-cross",
    name: "百合與十字",
    en: "Lilies & Cross",
    vibe: "圓角十字立喺三朵野地百合之間——花＋符號層疊",
    faith: "馬太福音 6:28 — 你想野地裡的百合花",
    bestOn: ["繡棚", "手帕加大", "關懷禮物", "壁飾"],
    priceAddonHkd: 65,
    tier: "pattern",
    image: "/products/motif-lilies-cross.png",
  },
  {
    id: "sunflower",
    name: "向日葵",
    en: "Sunflower",
    vibe: "長短針層次花瓣＋深啡花心——飽滿、好影、好練手",
    faith: "馬太福音 5:14 — 你們是世上的光",
    bestOn: ["繡棚", "練習布／課程", "手提袋", "壁飾"],
    priceAddonHkd: 90,
    tier: "botanical",
    stitchHint: "long & short stitch",
    image: "/products/motif-sunflower.png",
  },
  {
    id: "wild-rose",
    name: "野玫瑰",
    en: "Wild Rose",
    vibe: "長短針紅瓣＋結粒花心＋銀灰葉——經典花草課感覺",
    faith: "雅歌 2:1 — 我是沙崙的玫瑰花",
    bestOn: ["繡棚", "手帕", "關懷禮物", "課程教材"],
    priceAddonHkd: 85,
    tier: "botanical",
    stitchHint: "long & short stitch",
    image: "/products/motif-wild-rose.png",
  },
  {
    id: "blue-flowers",
    name: "青色小花",
    en: "Blue Blossoms",
    vibe: "緞面針小青花＋褐枝——清爽 zakka 風，適合日常布品",
    faith: "馬太福音 6:28 — 野地裡的花",
    bestOn: ["杯套", "手帕", "圍裙角", "書籤"],
    priceAddonHkd: 55,
    tier: "botanical",
    stitchHint: "satin stitch",
    image: "/products/motif-blue-flowers.png",
  },
  {
    id: "word-grace",
    name: "恩典",
    en: "Grace",
    vibe: "書法筆觸用緞面針＋梗針繡出——金色為主，優雅大氣",
    faith: "哥林多後書 12:9 — 我的恩典夠你用",
    bestOn: ["布章", "書籤", "繡棚", "禮物"],
    priceAddonHkd: 45,
    tier: "word",
    stitchHint: "satin + stem stitch",
    image: "/products/word-grace.png",
  },
  {
    id: "word-peace",
    name: "平安",
    en: "Peace",
    vibe: "深綠書法＋金線點綴——靜靜哋嘅祝福",
    faith: "約翰福音 14:27 — 我留下平安給你們",
    bestOn: ["布章", "手帕", "關懷禮物", "繡棚"],
    priceAddonHkd: 45,
    tier: "word",
    stitchHint: "satin + stem stitch",
    image: "/products/word-peace.png",
  },
  {
    id: "word-joy",
    name: "喜樂",
    en: "Joy",
    vibe: "暖金珊瑚色筆觸＋小花點綴——開心都繡得出",
    faith: "腓立比書 4:4 — 你們要靠主常常喜樂",
    bestOn: ["布章", "婚禮回禮", "繡棚", "袋面"],
    priceAddonHkd: 45,
    tier: "word",
    stitchHint: "satin + stem stitch",
    image: "/products/word-joy.png",
  },
  {
    id: "word-hope",
    name: "盼望",
    en: "Hope",
    vibe: "鼠尾草綠書法＋小芽點綴——溫柔嘅期待",
    faith: "羅馬書 15:13 — 使你們藉著聖靈的能力大有盼望",
    bestOn: ["布章", "關懷禮物", "書籤", "繡棚"],
    priceAddonHkd: 45,
    tier: "word",
    stitchHint: "satin + stem stitch",
    image: "/products/word-hope.png",
  },
  {
    id: "word-love",
    name: "慈愛",
    en: "Lovingkindness",
    vibe: "暖金紅筆觸＋小心心——厚嘅愛",
    faith: "詩篇 136 — 他的慈愛永遠長存",
    bestOn: ["布章", "婚禮", "關懷", "繡棚"],
    priceAddonHkd: 45,
    tier: "word",
    stitchHint: "satin + stem stitch",
    image: "/products/word-love.png",
  },
  {
    id: "word-faith",
    name: "信心",
    en: "Faith",
    vibe: "深青書法＋芥菜種小點——細細粒但有力",
    faith: "希伯來書 11:1 — 信就是所望之事的實底",
    bestOn: ["布章", "鎖匙扣", "書籤", "手帕"],
    priceAddonHkd: 45,
    tier: "word",
    stitchHint: "satin + stem stitch",
    image: "/products/word-faith.png",
  },
  {
    id: "mini-john316",
    name: "迷你約3:16",
    en: "Mini John 3:16",
    vibe: "掌心咁細：海、耶穌、約翰、白鴿一齊繡，下面只標約3:16",
    faith:
      "約翰福音 3:16 — 神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。",
    bestOn: ["迷你繡棚", "布章", "書籤", "洗禮禮物"],
    priceAddonHkd: 60,
    tier: "mini",
    stitchHint: "satin stitch",
    image: "/products/motif-mini-john316.png",
  },
  {
    id: "mini-calm",
    name: "迷你平靜海",
    en: "Mini Calm Sea",
    vibe: "小船同海浪鋪滿線，下面只標可4:39",
    faith:
      "馬可福音 4:39 — 耶穌醒了，斥責風，向海說：「住了吧！靜了吧！」風就止住，大大地平靜了。",
    bestOn: ["迷你繡棚", "布章", "袋角", "關懷禮物"],
    priceAddonHkd: 50,
    tier: "mini",
    stitchHint: "satin stitch",
    image: "/products/motif-mini-calm.png",
  },
  {
    id: "mini-shepherd",
    name: "迷你好牧人",
    en: "Mini Shepherd",
    vibe: "一牧人、一隻羊，細細一幅，下面只標詩23:1",
    faith: "詩篇 23:1 — 耶和華是我的牧者，我必不致缺乏。",
    bestOn: ["迷你繡棚", "布章", "手帕角", "關懷禮物"],
    priceAddonHkd: 50,
    tier: "mini",
    stitchHint: "satin stitch",
    image: "/products/motif-mini-shepherd.png",
  },
];

export function getSimpleMotifs(): EmbroideryMotif[] {
  return embroideryMotifs.filter((m) => m.tier === "simple");
}

export function getPatternMotifs(): EmbroideryMotif[] {
  return embroideryMotifs.filter((m) => m.tier === "pattern");
}

export function getBotanicalMotifs(): EmbroideryMotif[] {
  return embroideryMotifs.filter((m) => m.tier === "botanical");
}

export function getWordMotifs(): EmbroideryMotif[] {
  return embroideryMotifs.filter((m) => m.tier === "word");
}

export function getMiniMotifs(): EmbroideryMotif[] {
  return embroideryMotifs.filter((m) => m.tier === "mini");
}

export function motifTierLabel(tier: MotifTier): string | null {
  switch (tier) {
    case "simple":
      return null;
    case "pattern":
      return "Pattern";
    case "botanical":
      return "Botanical";
    case "word":
      return "Word";
    case "mini":
      return "Mini";
    default: {
      const exhaustive: never = tier;
      return exhaustive;
    }
  }
}

/** 公仔繡喺實物上面嘅示範組合 */
export const motifOnProducts = [
  {
    id: "on-tote",
    title: "彩虹繡喺 Tote",
    caption: "袋面正中一個約定彩虹公仔——出門都帶住應許。",
    image: "/products/motif-tote-rainbow.png",
    href: "/series/motif-tote",
  },
  {
    id: "on-kerchief",
    title: "小聖經繡喺手帕角",
    caption: "角位小小聖經公仔，擦眼淚都記得話語。",
    image: "/products/motif-kerchief-bible.png",
    href: "/series/motif-kerchief",
  },
  {
    id: "on-hoop",
    title: "十字架繡喺繡棚",
    caption: "掛牆嘅圓角十字公仔，家裡一角溫柔見證。",
    image: "/products/motif-hoop-cross.png",
    href: "/series/motif-hoop",
  },
  {
    id: "on-pouch",
    title: "白鴿繡喺小袋",
    caption: "正面圓身白鴿＋橄欖葉，日常收納都得意。",
    image: "/products/motif-dove.png",
    href: "/series/motif-dove",
  },
  {
    id: "on-loaves-hoop",
    title: "五餅二魚繡喺繡棚",
    caption: "進階故事 pattern：一籃供應，掛牆都有畫面。",
    image: "/products/motif-hoop-loaves.png",
    href: "/series/motif-hoop-loaves",
  },
  {
    id: "on-cup-sleeve",
    title: "線條繡喺外帶杯套",
    caption: "極簡咖啡杯套——日常外帶都帶住一針手作。",
    image: "/products/product-cup-sleeve.png",
    href: "/series/cup-sleeve",
  },
] as const;
