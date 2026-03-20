# Webomate 官網（Next.js）

由靜態官網遷移的 Next.js 版本，採用 App Router、TypeScript、Tailwind CSS。

## 開發

```bash
npm install   # 若尚未安裝
npm run dev   # 啟動開發伺服器，預設 http://localhost:3000
```

## 建置與預覽

```bash
npm run build
npm run start
```

## 專案結構

- `app/` - 根 layout、首頁、全域樣式
- `components/layout/` - Header、Footer
- `components/home/` - Hero、Cases、LineCta、PromptTips、Features、HowItWorks、Pricing、Faq
- `lib/constants.ts` - 文案與常數（方案、FAQ、提示詞等）
- `public/images/` - logo、LINE QR、案例圖片（已從原 `images/` 複製）

## 圖片

案例與 logo、LINE QR 使用 `public/images/`。若更新原 `Webomate官網/images/` 後需同步，可手動複製至 `next-app/public/images/`。
