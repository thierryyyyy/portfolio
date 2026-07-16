import { useState, useEffect, useRef, useCallback } from "react";
import { useI18n, LANGUAGES } from "../i18n";

export default function LangSwitcher() {
  const { lang, changeLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const btnRef = useRef();
  const current = LANGUAGES.find((l) => l.code === lang);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    }
  }, []);

  return (
    <div ref={ref} className="relative" onKeyDown={handleKeyDown}>
      <button
        ref={btnRef}
        onClick={() => setOpen((o) => !o)}
        aria-label="Changer de langue"
        aria-expanded={open}
        aria-haspopup="listbox"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border2 bg-card text-ink2 hover:border-orange hover:text-orange transition-all text-sm font-mono"
      >
        <span>{current?.flag}</span>
        <span className="text-xs font-semibold tracking-wide">{current?.code.toUpperCase()}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 bg-card border border-border2 rounded-xl shadow-card overflow-hidden z-50 animate-fade-up" role="listbox" aria-label="Langues disponibles">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => { changeLang(l.code); setOpen(false); }}
              role="option"
              aria-selected={lang === l.code}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm transition-all hover:bg-border/30 ${
                lang === l.code
                  ? "text-orange bg-orange/5 font-medium"
                  : "text-ink2 hover:text-ink"
              }`}
            >
              <span className="text-base">{l.flag}</span>
              <span>{l.label}</span>
              {lang === l.code && (
                <svg className="w-3 h-3 ms-auto text-orange" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
