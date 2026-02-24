import { useState } from "react";
import { SKILLS } from "../data/config";
import { useI18n } from "../i18n";

export default function Skills() {
  const { t } = useI18n();
  const [active, setActive] = useState("all");
  const cats = ["all", ...new Set(SKILLS.map(s => s.category))];
  const filtered = active === "all" ? SKILLS : SKILLS.filter(s => s.category === active);

  return (
    <section id="skills" className="border-t border-border bg-bg relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono text-orange tracking-[.14em] uppercase mb-2">// {t.skills.tag}</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">{t.skills.title}</h2>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  active === c
                    ? "bg-orange text-white shadow-orange"
                    : "bg-card border border-border text-ink3 hover:border-orange/40 hover:text-orange"
                }`}>
                {c === "all" ? t.skills.all : c}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {filtered.map(s => (
            <div key={s.name} className="group bg-card border border-border rounded-xl p-3.5 hover:border-orange/30 hover:-translate-y-0.5 hover:shadow-card transition-all cursor-default">
              <p className="text-sm font-medium text-ink mb-2.5">{s.name}</p>
              <div className="flex gap-0.5 mb-1.5">
                {[1,2,3,4,5].map(n => (
                  <div key={n} className={`h-[3px] flex-1 rounded-full transition-colors ${n <= s.level ? "bg-orange group-hover:bg-amber" : "bg-white/7"}`} />
                ))}
              </div>
              <p className="text-[9px] font-mono text-ink3">{t.skills.level(s.level)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
