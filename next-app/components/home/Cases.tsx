export function Cases() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-11">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-tight mb-3 text-[var(--color-primary)]">簡單操作流程</h2>
          <p className="text-[var(--color-text-muted)] max-w-[560px] mx-auto">LINE 對話 → Agent 網頁編輯 → 發布網址，直接可以使用。</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <article className="rounded-[18px] p-5 bg-white border border-[var(--color-border)]">
            <div className="mb-3">
              <h3 className="text-[var(--foreground)] text-lg font-semibold">LINE 對話</h3>
            </div>
            <div className="w-8 h-8 text-[var(--color-primary)] mb-3">
              <MessageSquareIcon />
            </div>
            <p className="text-[var(--color-text-muted)] text-[0.95rem] mb-3">
              由 AI 客服在 LINE 與您即時互動，透過引導式問答整理需求，從網站風格、品牌理念到產品內容一次完成。
            </p>
            <div className="rounded-[14px] border border-[var(--color-primary)]/20 bg-[var(--color-surface-2)] p-3 min-h-[96px] flex flex-col gap-2">
              <span className="inline-block text-[0.85rem] rounded-[10px] px-2.5 py-1.5 max-w-[90%] bg-white border border-[var(--color-border)]">
                您好，我是 AI 客服，接下來會用幾題問答幫您整理官網內容。
              </span>
              <span className="inline-block text-[0.85rem] rounded-[10px] px-2.5 py-1.5 max-w-[90%] bg-white border border-[var(--color-border)]">
                你偏好哪種網站風格？可選：自然田園 / 日系簡約 / 專業商務
              </span>
              <span className="inline-block text-[0.85rem] rounded-[10px] px-2.5 py-1.5 max-w-[90%] ml-auto bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                自然田園，整體想要清新溫暖
              </span>
              <span className="inline-block text-[0.85rem] rounded-[10px] px-2.5 py-1.5 max-w-[90%] bg-white border border-[var(--color-border)]">
                品牌理念想怎麼呈現？可選：在地小農、職人精神、永續友善
              </span>
              <span className="inline-block text-[0.85rem] rounded-[10px] px-2.5 py-1.5 max-w-[90%] ml-auto bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                在地小農 + 永續友善
              </span>
              <span className="inline-block text-[0.85rem] rounded-[10px] px-2.5 py-1.5 max-w-[90%] bg-white border border-[var(--color-border)]">
                產品內容建議包含：主打商品、價格、訂購方式、運費說明
              </span>
              <span className="inline-block text-[0.85rem] rounded-[10px] px-2.5 py-1.5 max-w-[90%] ml-auto bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                我們是在高雄販售金鑽鳳梨的商家，價格每斤多少請幫我整理，宅配三日送達，也幫我做一個訂單連結。
              </span>
            </div>
          </article>

          <article className="rounded-[18px] p-5 bg-white border border-[var(--color-border)]">
            <div className="mb-3">
              <h3 className="text-[var(--foreground)] text-lg font-semibold">Agent 網頁編輯</h3>
            </div>
            <div className="w-8 h-8 text-[var(--color-primary)] mb-3">
              <Code2Icon />
            </div>
            <p className="text-[var(--color-text-muted)] text-[0.95rem] mb-3">
              Agent 自動分析千種網站 RAG 模板，並完成搜尋 SEO / GEO 優化，快速完成網站編輯。
            </p>
            <div className="rounded-[14px] border border-[var(--color-primary)]/20 bg-[var(--color-surface-2)] p-3 min-h-[96px] flex flex-col gap-2">
              <code className="text-[var(--color-primary)] text-xs border-l-2 border-[var(--color-primary)]/60 pl-2">{`<section class="brand rwd">`}</code>
              <code className="text-[var(--color-primary)] text-xs border-l-2 border-[var(--color-primary)]/60 pl-2">{`<h1>高雄大樹鳳梨</h1>`}</code>
              <code className="text-[var(--color-primary)] text-xs border-l-2 border-[var(--color-primary)]/60 pl-2">...自動編輯中...</code>
            </div>
          </article>

          <article className="rounded-[18px] p-5 bg-white border border-[var(--color-border)]">
            <div className="mb-3">
              <h3 className="text-[var(--foreground)] text-lg font-semibold">發布網址立即使用</h3>
            </div>
            <div className="w-8 h-8 text-[var(--color-primary)] mb-3">
              <RocketIcon />
            </div>
            <p className="text-[var(--color-text-muted)] text-[0.95rem] mb-3">系統會產生可用網址，發佈後即可分享給客戶，馬上開始使用。</p>
            <div className="rounded-[14px] border border-[var(--color-primary)]/20 bg-[var(--color-surface-2)] p-3 min-h-[96px] flex items-center justify-between gap-2">
              <span className="px-2.5 py-1.5 rounded-md border border-[var(--color-primary)]/50 text-[var(--color-primary)] font-bold text-[0.78rem]">
                已發布
              </span>
              <span className="text-[var(--color-primary)] text-[0.85rem] opacity-90">yourbrand.webomate.tw</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function MessageSquareIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 10h10" />
      <path d="M7 14h6" />
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 3v-3H6a2 2 0 0 1-2-2V6z" />
    </svg>
  );
}

function Code2Icon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 13a8 8 0 0 1 8-8" />
      <path d="M12 5l2-2 2 2" />
      <path d="M20 11a8 8 0 0 1-8 8" />
      <path d="M12 19l-2 2-2-2" />
      <path d="m12 12 7-7" />
      <circle cx="19" cy="5" r="2" />
    </svg>
  );
}
