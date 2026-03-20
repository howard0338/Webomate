"use client";

import { VIP_GOOGLE_FORM } from "@/lib/constants";

export function VipCustomForm() {
  function redirect(values: { name: string; phone: string; email: string; need: string }) {
    // 目前 Google 表單可預填欄位較少，因此把所有資訊合併後，先把同一段文字塞到兩個可預填的 entry。
    var combined =
      "姓名：" +
      values.name +
      "\n電話：" +
      values.phone +
      "\n信箱/Line ID：" +
      values.email +
      "\n需求簡述：" +
      values.need;

    var url =
      VIP_GOOGLE_FORM.url +
      "&entry." +
      VIP_GOOGLE_FORM.entryA +
      "=" +
      encodeURIComponent(combined) +
      "&entry." +
      VIP_GOOGLE_FORM.entryB +
      "=" +
      encodeURIComponent(combined);

    window.location.href = url;
  }

  return (
    <form
      className="vip-form flex flex-col flex-1 text-left"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        redirect({
          name: String(data.get("name") || ""),
          phone: String(data.get("phone") || ""),
          email: String(data.get("email") || ""),
          need: String(data.get("need") || ""),
        });
      }}
    >
      <label className="font-semibold text-[0.95rem] text-[var(--color-text)] mb-2">姓名 *</label>
      <input
        name="name"
        type="text"
        required
        placeholder="請輸入姓名"
        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--foreground)] outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 mb-4"
      />

      <label className="font-semibold text-[0.95rem] text-[var(--color-text)] mb-2">電話 *</label>
      <input
        name="phone"
        type="tel"
        required
        placeholder="請輸入電話"
        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--foreground)] outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 mb-4"
      />

      <label className="font-semibold text-[0.95rem] text-[var(--color-text)] mb-2">信箱 / Line ID</label>
      <input
        name="email"
        type="email"
        required
        placeholder="可填信箱或 Line ID"
        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--foreground)] outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 mb-4"
      />

      <label className="font-semibold text-[0.95rem] text-[var(--color-text)] mb-2">需求簡述 *</label>
      <textarea
        name="need"
        required
        placeholder="請描述你想做的網站內容、風格、頁面與功能需求..."
        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--foreground)] outline-none focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary)]/10 mb-6 min-h-[140px] resize-y"
      />

      <button type="submit" className="w-full inline-flex items-center justify-center min-h-[52px] px-8 py-4 rounded-xl text-white font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow mt-auto">
        送出並連結 Google 表單
      </button>
    </form>
  );
}

