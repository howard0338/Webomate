import Image from "next/image";
import { CASES } from "@/lib/constants";

export function Cases() {
  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold tracking-tight mb-3">用 Webomate 能做什麼</h2>
          <p className="text-[var(--color-text-muted)] max-w-[520px] mx-auto">
            一頁式 landing page，用於宣傳店家、品牌主張、期間限定活動等。
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 pb-6">
          {CASES.map(({ img, title }) => (
            <article key={title} className="flex-[1_1_280px] max-w-[300px] bg-white rounded-[20px] border border-[var(--color-border)] overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition">
              <div className="aspect-[4/3] relative bg-[var(--color-surface-2)] overflow-hidden">
                <Image src={img} alt={title} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 300px" />
              </div>
              <div className="p-5">
                <p className="text-[0.9rem] text-[var(--color-text-muted)] m-0">{title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
