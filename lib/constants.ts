export const SITE = {
  title: "Webomate｜用對話製作專屬官網，早鳥適用 0元 每日50位",
  description: "用簡單對話製作專屬官網，早鳥適用 0元 每日50位即可擁有。無需寫程式，描述需求就能建立專業網站。",
  lineUrl: "https://line.me/R/ti/p/@290ysrlw",
  lineId: "@290ysrlw",
} as const;

export const FORMS = {
  vipUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSf_4A1NBlRAiwRozabxxIfFfOeOmmR8SrrNMIcWWlXDoc-Pkw/viewform?usp=dialog",
  advancedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSecSxt1zvF35k_hVoPUZxv3bc1S0gL05735ppbjZL4YcoXDlQ/viewform?usp=dialog",
} as const;

export const NAV_LINKS = [
  { href: "#cases", label: "能做什麼" },
  { href: "#features", label: "特色" },
  { href: "#how-it-works", label: "如何運作" },
  { href: "#pricing", label: "方案" },
  { href: "#line-cta", label: "立即開始" },
] as const;

export const CASES = [
  { img: "/images/日系可愛風 · 品牌官網.jpg", title: "一頁式品牌官網" },
  { img: "/images/簡約質感 · 工作室.png", title: "一頁式工作室介紹" },
  { img: "/images/電商風格 · 產品展示.png", title: "一頁式產品展示/電商" },
  { img: "/images/形象官網 · 企業品牌.png", title: "一頁式企業/品牌形象" },
  { img: "/images/個人品牌 · 作品集.png", title: "一頁式作品集/服務" },
] as const;

export const PROMPT_TIPS = [
  "將網址輸入即可做成超連結，例如 FB、IG",
  "提供連結 Google 表單網址為您做統計服務",
] as const;

export const FEATURES = [
  { icon: "💬", title: "對話式建立", desc: "不用學架站、不用寫程式，描述需求，AI 自動為你產生官網。" },
  { icon: "⚡", title: "自動化流程", desc: "Robot Vibe 自動化流程串接，從圖片識別、內容到版型一鍵生成。" },
  { icon: "💰", title: "早鳥適用 0元 每日50位", desc: "早鳥適用 0元（每日限量50位），訂閱後即可建置你的官網。" },
] as const;

export const STEPS = [
  { num: "01", title: "加入 LINE 官方帳號", desc: "掃描 QR Code 或點擊連結加入 Webomate LINE 官方帳號。" },
  { num: "02", title: "用對話描述你的網站", desc: "告訴我們產業、風格與需求，AI 自動產生版型與內容。" },
  { num: "03", title: "確認並上線", desc: "預覽後確認，早鳥適用 0元（每日限量50位）即可擁有專屬官網與網址。" },
] as const;

export const PLANS = [
  {
    featured: true,
    name: "官網方案",
    price: "0",
    unit: "元",
    originalPrice: "499",
    originalUnit: "/月",
    trialLabel: "試用體驗價",
    note: "早鳥適用 0元 每日50位",
    noteCustom: false,
    features: ["對話式自動產生官網", "響應式設計，手機電腦皆宜"],
    cta: "開始建立",
    href: "#line-cta",
  },
  {
    featured: false,
    name: "進階方案",
    price: "1999",
    unit: "/月",
    originalPrice: null,
    originalUnit: null,
    trialLabel: null,
    note: "月費 · 隨訂隨用",
    noteCustom: false,
    features: [
      "專業視覺配置（照片/排版優化）",
      "品牌識別設計（簡約 Logo）",
      "專屬網域管理（www.yourbrand.com.tw）",
      "AI 搜尋與 SEO 建置（Google/AI 基礎優化）",
      "內容發布與菜單上架",
      "文案管理、圖文修正",
    ],
    cta: "前往填寫",
    href: FORMS.advancedUrl,
  },
  {
    featured: false,
    name: "VIP 客製服務報價",
    price: null,
    unit: null,
    originalPrice: null,
    originalUnit: null,
    trialLabel: null,
    note: "填寫後由工程師與您聯繫",
    noteCustom: true,
    features: [
      "電商零售：金流串接、購物車系統。",
      "會員服務：會員登入、權限分級、後台管理。",
      "自動化流程：線上預約/排程系統、自動回信。",
      "客製化工具：企業內部系統、AI 功能工具開發。",
    ],
    cta: "前往填寫",
    href: FORMS.vipUrl,
  },
] as const;

export const VIP_GOOGLE_FORM = {
  url: "https://docs.google.com/forms/d/e/1FAIpQLSf_4A1NBlRAiwRozabxxIfFfOeOmmR8SrrNMIcWWlXDoc-Pkw/viewform?usp=pp_url",
  entryA: "1075357722",
  entryB: "1081012326",
} as const;

export const FAQ = [
  { q: "需要會寫程式嗎？", a: "不需要。只要會用對話聊天，描述你想要的網站類型與內容即可，也可以傳送照片提供我們建造參考。" },
  { q: "月費 499 元包含什麼？", a: "包含由對話產生的官網、專屬網址、後台管理，以月費訂閱即可使用。" },
  { q: "可以修改內容嗎？", a: "沒有提供後台，但可以透過 LINE 隨時修改你的網站。" },
] as const;
