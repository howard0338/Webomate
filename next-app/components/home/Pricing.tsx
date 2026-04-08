import Link from "next/link";
import { PLANS } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="pricing" className="pt-[80px] pb-[100px] bg-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-center mb-3">方案與定價</h2>
        <p className="text-center text-[var(--color-text-muted)] mb-12">月費訂閱，隨訂隨用</p>
        <div className="flex flex-wrap justify-center gap-6">
          {PLANS.map((plan) => (
            (() => {
              const isMuted = plan.cta === "前往填寫";
              const primaryBtnClass =
                "w-full inline-flex items-center justify-center min-h-[52px] px-8 py-4 rounded-xl text-white font-semibold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow mt-auto";
              const mutedBtnClass =
                "w-full inline-flex items-center justify-center min-h-[52px] px-8 py-4 rounded-xl text-[var(--color-primary)] font-semibold bg-white border border-[var(--color-border)] shadow-sm hover:bg-[var(--color-surface-2)] mt-auto";

              const btnClass = isMuted ? mutedBtnClass : primaryBtnClass;

              return (
            <div
              key={plan.name}
              className={`flex flex-col flex-1 min-w-[320px] max-w-[420px] rounded-[20px] border p-10 md:p-12 relative text-center shadow-sm ${
                plan.featured ? "border-[var(--color-primary)]/30 shadow-[0_0_0_1px_rgba(45,122,79,0.12)]" : "border-[var(--color-border)]"
              } ${plan.noteCustom ? "pricing-card-custom" : ""}`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  推薦
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-6">{plan.name}</h3>
              {plan.price != null ? (
                <div className="mb-2">
                  {plan.originalPrice ? (
                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-xl font-semibold text-[var(--color-text-muted)]">NT$</span>
                        <span className="text-2xl font-semibold text-[var(--color-text-muted)] line-through">
                          {plan.originalPrice}
                        </span>
                        <span className="text-lg font-semibold text-[var(--color-text-muted)]">
                          {plan.originalUnit}
                        </span>
                      </div>
                      <div className="flex items-baseline justify-center gap-2 mt-1">
                        <span className="text-[0.95rem] font-semibold text-[var(--color-text-muted)]">
                          {plan.trialLabel}
                        </span>
                        <span className="text-4xl font-bold text-[var(--color-primary)]">{plan.price}</span>
                        <span className="text-xl font-semibold text-[var(--color-text-muted)]">{plan.unit}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-2xl font-semibold text-[var(--color-text-muted)]">NT$</span>
                      <span className="text-4xl font-bold text-[var(--color-primary)]">{plan.price}</span>
                      <span className="text-xl font-semibold text-[var(--color-text-muted)]">{plan.unit}</span>
                    </div>
                  )}
                </div>
              ) : null}
              <p
                className={`${
                  plan.noteCustom ? "mb-4" : "mb-8"
                } text-[0.95rem] text-[var(--color-text-muted)]`}
              >
                {plan.note}
              </p>

              <ul className="list-none p-0 m-0 text-left flex-1 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="py-3 pl-7 relative text-[var(--color-text-muted)] text-[0.95rem] before:content-['✓'] before:absolute before:left-0 before:text-[var(--color-primary)] before:font-bold"
                  >
                    {f}
                  </li>
                ))}
              </ul>

              {plan.href?.startsWith("http") ? (
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener"
                  className={btnClass}
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={plan.href}
                  className={btnClass}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
              );
            })()
          ))}
        </div>
      </div>
    </section>
  );
}
