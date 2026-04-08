# Webomate 官網 Next.js 遷移計畫

## 目標
將現有靜態 HTML/CSS/JS 官網改為 Next.js 專業架構，提升響應速度、可維護性與擴展性。

---

## 一、現況與目標對照

| 現況 | Next.js 目標 |
|------|--------------|
| 單一 index.html | App Router + 元件化 |
| 全域 styles.css | CSS Modules / Tailwind 模組化樣式 |
| 手動載入圖片 | next/image 自動優化、響應式 |
| 無建置流程 | 自動 code split、壓縮、快取 |
| 純靜態 | 可選 SSG/ISR，更好 SEO 與首屏 |

---

## 二、建議技術選型

- **框架**：Next.js 14+（App Router）
- **樣式**：Tailwind CSS（或保留 CSS Modules）
- **語言**：TypeScript（建議）
- **部署**：Vercel / 自建 Node

---

## 三、資料夾結構（專業公司架構）

```
webomate-official/                 # 新專案根目錄
├── app/
│   ├── layout.tsx                 # 根 layout（Header/Footer、metadata）
│   ├── page.tsx                   # 首頁
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Nav.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── HeroChat.tsx
│   │   ├── Cases.tsx
│   │   ├── LineCta.tsx
│   │   ├── PromptTips.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   └── Faq.tsx
│   └── ui/                        # 共用 UI
│       ├── Button.tsx
│       ├── Card.tsx
│       └── SectionTitle.tsx
├── public/
│   └── images/                    # logo, line-qr, cases（或放於 CMS/CDN）
├── lib/
│   └── constants.ts               # 文案、連結、方案資料
├── styles/                        # 若不用 Tailwind
│   └── (scoped modules)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 四、分階段實施計畫

### Phase 1：專案初始化（約 0.5 天）
1. 使用 `create-next-app` 建立專案（TypeScript + Tailwind + App Router）
2. 設定 `next.config.js`（圖片網域若用外部 CDN 可在此設定）
3. 將現有 `images/` 搬至 `public/images/`
4. 在 `app/layout.tsx` 設定 metadata、字型、globals.css

### Phase 2：Layout 與導覽（約 0.5 天）
1. 實作 `Header`（logo、Nav、手機選單）
2. 實作 `Footer`（品牌精神、copyright）
3. 在 `app/layout.tsx` 組裝，確保 RWD 與現有一致

### Phase 3：首頁區塊元件化（約 1～2 天）
依區塊拆成元件，每個元件對應現有 HTML 一區：

| 區塊 | 元件 | 備註 |
|------|------|------|
| Hero + 對話示範 | Hero.tsx, HeroChat.tsx | 主標、說明、CTA、品牌精神、右側對話 mockup |
| 客戶案例 | Cases.tsx | 五張案例卡、置中排版、next/image |
| 開始建立 + 提示詞 | LineCta.tsx, PromptTips.tsx | QR、按鈕、提示詞列表 |
| 為什麼選擇 | Features.tsx | 三張特色卡 |
| 三步驟 | HowItWorks.tsx | 01/02/03 步驟 |
| 方案與定價 | Pricing.tsx | 官網 / 進階 / VIP 三卡、按鈕置底 |
| 常見問題 | Faq.tsx | details/summary 手風琴 |

每個區塊可先對應一份 CSS Module 或 Tailwind，再逐步替換現有 class。

### Phase 4：樣式遷移（約 1 天）
- **選項 A**：保留現有 class 命名，將 `styles.css` 拆成各元件對應的 `.module.css`
- **選項 B**：改用 Tailwind，依區塊重寫 utility class
- 統一變數（色碼、間距、圓角）於 `tailwind.config.ts` 或 `globals.css` 的 `:root`

### Phase 5：圖片與效能（約 0.5 天）
1. 全站圖片改用 `<Image>`（next/image），設定 `sizes` 以利 RWD
2. logo、LINE QR、案例圖路徑改為 `/images/xxx`
3. 視需要設定 `priority`（例如 Hero 區圖片）

### Phase 6：文案與設定集中（約 0.5 天）
1. 建立 `lib/constants.ts`（或 `content/` 資料夾）：方案名稱與價格、FAQ、提示詞列表、連結
2. 元件改為從 constants 讀取，方便之後接 CMS 或多語系

### Phase 7：測試與上線前檢查（約 0.5 天）
1. 各斷點 RWD 檢查（含 Header 選單、案例卡、定價卡）
2. Lighthouse（效能、無障礙、SEO）
3. 確認 LINE 連結、QR 圖片、表單（若有）正常

---

## 五、預期效益

- **響應效果**：Code splitting、next/image 縮圖與 lazy load、最小化 CSS/JS
- **SEO**：metadata、語意化標籤、可選 SSG 整站靜態
- **維護性**：元件化、TypeScript、集中文案與設定
- **擴展**：之後可加部落格（app/blog）、方案頁（app/pricing）、多語系（i18n）

---

## 六、建議執行順序

1. Phase 1 → Phase 2 → Phase 3（先跑通整頁與 layout）
2. Phase 4 與 Phase 5 可並行（樣式 + 圖片）
3. Phase 6、Phase 7 收尾

若你提供目前專案路徑與偏好的樣式方案（Tailwind 或 CSS Modules），可再細化成「第一週每日任務」或直接從 Phase 1 的 `create-next-app` 指令與檔案清單開始實作。
