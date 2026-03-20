import { PROMPT_TIPS } from "@/lib/constants";

export function PromptTips() {
  return (
    <div className="flex-1 min-w-[280px] max-w-[400px]">
      <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">提示詞技巧</h3>
      <ul className="list-none p-0 m-0">
        {PROMPT_TIPS.map((tip, i) => (
          <li key={i} className="flex items-start gap-3 py-2.5 text-[0.95rem] text-[var(--color-text-muted)] leading-snug border-t border-black/5 first:border-t-0">
            <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[var(--color-primary)]" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
              </svg>
            </span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
