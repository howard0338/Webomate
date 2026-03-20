import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[140px] sm:pt-[120px] pb-20 px-6 isolate">
      <div className="absolute inset-0 -z-[2] bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80')] bg-cover bg-center" aria-hidden />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-br from-white/92 to-[#fafafa]/88" aria-hidden />
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-6">
            用簡單對話
            <br />
            <span className="text-[var(--color-primary)]">製作你的專屬網站</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-[480px] mb-7 leading-relaxed">
            描述你的需求，三分鐘製作專屬網站。
            <br />
            簡化溝通流程，無需懂程式代碼，實現從商業直覺到數位成品的零距離。
          </p>
          <Link
            href="#line-cta"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow transition"
          >
            開始建立
          </Link>
          <p className="mt-5 text-sm text-[var(--color-text-muted)]">Webomate 讓架站像傳訊息一樣簡單</p>
        </div>
        <div className="flex justify-center">
          <HeroChat />
        </div>
      </div>
    </section>
  );
}

function HeroChat() {
  return (
    <div className="w-full max-w-[360px] bg-white rounded-[20px] border border-[var(--color-border)] shadow-sm overflow-hidden">
      <div className="px-5 py-3.5 bg-[var(--color-surface-2)] border-b border-[var(--color-border)] flex items-center gap-2 text-sm font-semibold">
        <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
        Webomate 官方帳號
      </div>
      <div className="p-5 min-h-[320px] flex flex-col gap-3">
        <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md bg-[var(--color-surface-2)] text-[var(--foreground)] text-[0.95rem]">
          <p>請問你網站想呈現什麼風格？</p>
        </div>
        <div className="max-w-[85%] ml-auto px-4 py-3 rounded-2xl rounded-br-md bg-[var(--color-primary)] text-white text-[0.95rem]">
          <p>職人精神手作</p>
        </div>
        <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md bg-[var(--color-surface-2)] text-[var(--foreground)] text-[0.95rem]">
          <p>好的！那主要想放哪些內容呢？<br />例如：品牌介紹、產品、聯絡方式…</p>
        </div>
        <div className="max-w-[85%] ml-auto px-4 py-3 rounded-2xl rounded-br-md bg-[var(--color-primary)] text-white text-[0.95rem]">
          <p>品牌介紹：我是宜蘭在地小農、販售我自產的農產品…<br />品牌精神：用宜蘭的天然山泉灌溉、有機耕作…</p>
        </div>
        <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md bg-[var(--color-surface-2)] text-[var(--foreground)] text-[0.95rem]">
          <p>正在為你生成專屬官網…</p>
        </div>
        <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 text-center">
          <p className="text-[var(--color-primary)] font-semibold text-base">yourname.webomate.tw</p>
          <p className="text-[var(--color-text-muted)] text-sm mt-1">您的專屬網站預覽</p>
        </div>
      </div>
    </div>
  );
}
