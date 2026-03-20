import { FEATURES } from "@/lib/constants";

export function Features() {
  return (
    <section id="features" className="py-[100px] bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-center mb-12">為什麼選擇 Webomate</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map(({ icon, title, desc }) => (
            <article
              key={title}
              className="bg-white border border-[var(--color-border)] rounded-[20px] p-8 md:p-10 shadow-sm hover:border-[var(--color-primary)]/25 hover:-translate-y-1 hover:shadow transition"
            >
              <div className="text-4xl mb-5">{icon}</div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-[0.95rem] text-[var(--color-text-muted)] m-0">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
