import { useI18n } from "../i18n";

export default function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="border-t border-border bg-bg relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-10">
          <p className="text-xs font-mono text-orange tracking-[.14em] uppercase mb-2">// {t.services.tag}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">{t.services.title}</h2>
          <p className="mt-3 text-ink2 max-w-md">{t.services.subtitle}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {t.services.items.map((s, i) => (
            <div key={i} className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden hover:border-orange/40 hover:-translate-y-1 hover:shadow-card transition-all">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(255,95,31,.04), transparent)" }} />
              <div className="w-12 h-12 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-orange/18 transition-colors">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-ink mb-2 group-hover:text-orange transition-colors">{s.title}</h3>
              <p className="text-sm text-ink3 leading-relaxed">{s.desc}</p>
              <div className="absolute bottom-4 right-4 font-display text-6xl font-bold text-white/[0.02] leading-none pointer-events-none">0{i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
