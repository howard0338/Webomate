import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-[100px] bg-[var(--color-surface-2)]">
      <div className="max-w-[1120px] mx-auto px-6">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-center mb-12">三步驟擁有官網</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {STEPS.map(({ num, title, desc }) => (
            <div key={num} className="text-center px-4">
              <span className="block text-4xl font-bold text-[var(--color-primary)] mb-4">{num}</span>
              <h3 className="text-lg font-semibold mb-3">{title}</h3>
              <p className="text-[0.95rem] text-[var(--color-text-muted)] m-0">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
