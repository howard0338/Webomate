import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PromptTips } from "./PromptTips";

export function LineCta() {
  return (
    <section id="line-cta" className="py-[100px] bg-[var(--color-surface-2)]">
      <div className="max-w-[1120px] mx-auto px-6">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-center mb-3">開始建立官網</h2>
        <p className="text-center text-[var(--color-text-muted)] mb-12 max-w-[520px] mx-auto">
          掃描 QR Code 或點擊連結加入 Webomate LINE 官方帳號。
        </p>
        <div className="flex flex-wrap items-start justify-center gap-12 max-w-[900px] mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-10">
            <div className="text-center">
              <div className="w-[200px] h-[200px] mx-auto mb-4 bg-white rounded-xl border border-[var(--color-border)] shadow-sm overflow-hidden flex items-center justify-center">
                <Image src="/images/QR%20code.JPG" alt="Webomate LINE 官方帳號 QR Code" width={200} height={200} className="object-contain" />
              </div>
              <p className="text-[0.95rem] text-[var(--color-text-muted)]">掃描加入 LINE 官方帳號</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Link
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-xl text-white font-semibold bg-[var(--color-line)] hover:opacity-90 transition shadow"
              >
                <LineIcon className="w-7 h-7" />
                加入 LINE 官方帳號
              </Link>
            </div>
          </div>
          <PromptTips />
        </div>
      </div>
    </section>
  );
}

function LineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.348 0-.63-.285-.63-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.63-.285-.63-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.349 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.348 0-.629-.285-.629-.629V8.108c0-.345.281-.63.63-.63.349 0 .63.285.63.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}
