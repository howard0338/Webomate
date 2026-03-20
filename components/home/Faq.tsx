import { FAQ } from "@/lib/constants";

export function Faq() {
  return (
    <section className="py-[100px] bg-[var(--color-surface-2)]">
      <div className="max-w-[1120px] mx-auto px-6">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-center mb-12">常見問題</h2>
        <div className="max-w-[640px] mx-auto">
          {FAQ.map(({ q, a }) => (
            <details key={q} className="border-b border-[var(--color-border)] group">
              <summary className="py-6 font-semibold cursor-pointer list-none flex justify-between items-center [&::-webkit-details-marker]:hidden after:content-['+'] after:text-[var(--color-primary)] after:text-xl group-open:after:content-['−']">
                {q}
              </summary>
              <p className="pb-6 text-[var(--color-text-muted)] text-[0.95rem] m-0">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
