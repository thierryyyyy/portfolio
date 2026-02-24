import { useI18n } from "../i18n";

export default function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="border-t border-border bg-bg2 relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-xs font-mono text-orange tracking-[.14em] uppercase mb-2">// {t.experience.tag}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">{t.experience.title}</h2>
        </div>

        <div className="grid md:grid-cols-[1fr_2fr] gap-14 items-start">
          {/* Left: pitch + bullet list */}
          <div>
            <div className="flex flex-col gap-2.5 mt-1">
              {t.experience.bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-ink2">
                  <span className="text-orange font-mono">→</span>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="relative ps-8 border-s border-orange/30">
            {t.experience.items.map((e, i) => (
              <div key={i} className={`group relative pb-8 ${i === t.experience.items.length - 1 ? "pb-0" : ""}`}>
                {/* Dot */}
                <div className={`absolute -start-[1.15rem] top-1 w-[10px] h-[10px] rounded-full border-2 transition-all ${
                  e.current ? "bg-orange border-orange shadow-orange" : "bg-bg2 border-border2 group-hover:border-orange"
                }`} />

                <div className="bg-card border border-border rounded-xl p-5 hover:border-orange/25 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-semibold text-ink">{e.role}</h3>
                        {e.current && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-mono text-emerald-400">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            {t.experience.current}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-orange mt-0.5">{e.company}</p>
                    </div>
                    <span className="text-xs font-mono text-ink3 whitespace-nowrap">{e.period}</span>
                  </div>
                  <p className="text-sm text-ink3 leading-relaxed">{e.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {e.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-bg3 border border-border text-[10px] font-mono text-ink3 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
