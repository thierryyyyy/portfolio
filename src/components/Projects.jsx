import { useState } from "react";
import { useI18n } from "../i18n";

// ── Visual config — IDs must match translation files (fr.js / en.js / ar.js)
const PROJ_VISUALS = {
  sigap: {
    bg: "linear-gradient(135deg,#0D1B2A,#1A2E44)",
    accent: "#0066FF",
    icon: "🗺️",
    tags: ["React Native", "Expo", "Node.js", "Django", "PostgreSQL", "PostGIS", "Google Maps API"],
    live: null,
    github: null,
    featured: true,
    cat: "Mobile",
  },
  mndpt: {
    bg: "linear-gradient(135deg,#0D2A1B,#1A3D2A)",
    accent: "#059669",
    icon: "📦",
    tags: ["Django", "Python", "MySQL", "Bootstrap", "HTML/CSS"],
    live: null,
    github: null,
    featured: true,
    cat: "Web",
  },
  banque: {
    bg: "linear-gradient(135deg,#1A0D2E,#2E1A44)",
    accent: "#7C3AED",
    icon: "🏦",
    tags: ["PHP", "MySQL", "jQuery", "HTML/CSS", "Bootstrap"],
    live: null,
    github: null,
    featured: false,
    cat: "Web",
  },
  ranomafana: {
    bg: "linear-gradient(135deg,#1A2A0D,#2A3D1A)",
    accent: "#65A30D",
    icon: "🌿",
    tags: ["HTML5", "CSS3"],
    live: null,
    github: null,
    featured: false,
    cat: "Web",
  },
};

function Modal({ proj, vis, onClose }) {
  if (!proj || !vis) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}>
      <div className="w-full max-w-lg bg-bg3 border border-border2 rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,.6)] animate-fade-up"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-3 p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
              style={{ background: `${vis.accent}20` }}>{vis.icon}</div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider" style={{ color: vis.accent }}>{proj.subtitle}</p>
              <h3 className="font-display font-bold text-ink text-lg">{proj.title}</h3>
            </div>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 flex items-center justify-center bg-white/5 border border-border2 rounded-lg text-ink3 hover:text-ink text-xl leading-none transition-colors">
            ×
          </button>
        </div>
        <div className="p-5 space-y-4">
          <p className="text-sm text-ink2 leading-relaxed">{proj.longDesc}</p>
          <div className="grid grid-cols-3 gap-2">
            {proj.metrics.map((m, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-3 text-center">
                <p className="font-display text-xl font-bold" style={{ color: vis.accent }}>{m.v}</p>
                <p className="text-xs text-ink3 mt-0.5">{m.l}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {vis.tags.map(t => (
              <span key={t} className="px-2.5 py-1 bg-card border border-border rounded-md text-xs font-mono text-ink3">{t}</span>
            ))}
          </div>
          <div className="flex gap-2 pt-1">
            {vis.live ? (
              <a href={vis.live} target="_blank" rel="noreferrer"
                className="flex-1 py-2.5 text-center text-sm font-semibold text-white rounded-xl transition-opacity hover:opacity-90"
                style={{ background: vis.accent }}>{proj.live}</a>
            ) : null}
            {vis.github ? (
              <a href={vis.github} target="_blank" rel="noreferrer"
                className="flex-1 py-2.5 text-center text-sm font-medium text-ink border border-border2 rounded-xl hover:border-orange hover:text-orange transition-all">
                {proj.source}
              </a>
            ) : (
              <span className="flex-1 py-2.5 text-center text-xs text-ink3 border border-border2 rounded-xl cursor-default">
                Projet privé / code non public
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);

  const cats = ["all", ...new Set(Object.values(PROJ_VISUALS).map(v => v.cat))];

  // Only render projects that have a matching visual config
  const items = t.projects.items
    .filter(p => PROJ_VISUALS[p.id])
    .map(p => ({ ...p, ...PROJ_VISUALS[p.id] }));

  const filtered = filter === "all" ? items : items.filter(p => p.cat === filter);

  const modalItem = modal ? items.find(p => p.id === modal) : null;
  const modalVis  = modal ? PROJ_VISUALS[modal] : null;
  const modalProj = modalItem
    ? { ...modalItem, live: t.projects.live, source: t.projects.source }
    : null;

  return (
    <>
      <section id="projects" className="border-t border-border bg-bg2 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono text-orange tracking-[.14em] uppercase mb-2">// {t.projects.tag}</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">{t.projects.title}</h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cats.map(c => (
                <button key={c} onClick={() => setFilter(c)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filter === c
                      ? "bg-orange text-white shadow-orange"
                      : "bg-card border border-border text-ink3 hover:border-orange/40 hover:text-orange"
                  }`}>
                  {c === "all" ? t.projects.filters.all : c}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map(p => {
              const tagsToShow = p.featured && filter === "all" ? 6 : 4;
              return (
                <div key={p.id} onClick={() => setModal(p.id)}
                  className={`group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:border-orange/35 hover:shadow-card ${
                    p.featured && filter === "all" ? "lg:col-span-2" : ""
                  }`}>

                  {/* Banner */}
                  <div className="relative h-36 flex items-center justify-center text-5xl overflow-hidden"
                    style={{ background: p.bg }}>
                    <div className="absolute inset-0"
                      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
                    <span className="relative z-10">{p.icon}</span>
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      {p.featured && <span className="px-2 py-0.5 bg-orange/15 border border-orange/25 rounded text-[10px] font-mono text-orange">{t.projects.featured}</span>}
                      <span className="px-2 py-0.5 bg-white/6 border border-white/10 rounded text-[10px] font-mono text-ink3">{p.cat}</span>
                    </div>
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-ink3 text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</div>
                  </div>

                  {/* Body */}
                  <div className="p-4">
                    <p className="text-[10px] font-mono uppercase tracking-wider mb-1" style={{ color: p.accent }}>{p.subtitle}</p>
                    <h3 className="font-display font-semibold text-ink text-base group-hover:text-orange2 transition-colors">{p.title}</h3>
                    <p className="mt-1.5 text-xs text-ink3 leading-relaxed line-clamp-2">{p.desc}</p>

                    {p.featured && filter === "all" && (
                      <div className="flex gap-4 mt-3 pt-3 border-t border-border">
                        {p.metrics.map((m, i) => (
                          <div key={i}>
                            <p className="font-display text-base font-bold" style={{ color: p.accent }}>{m.v}</p>
                            <p className="text-[10px] text-ink3">{m.l}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1 mt-3">
                      {p.tags.slice(0, tagsToShow).map(tag => (
                        <span key={tag} className="px-2 py-0.5 bg-bg3 border border-border text-[10px] font-mono text-ink3 rounded">{tag}</span>
                      ))}
                      {p.tags.length > tagsToShow && (
                        <span className="text-[10px] text-ink3 px-1 self-center">+{p.tags.length - tagsToShow}</span>
                      )}
                    </div>
                  </div>

                  <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 mx-auto"
                    style={{ background: `linear-gradient(90deg,transparent,${p.accent},transparent)` }} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <Modal proj={modalProj} vis={modalVis} onClose={() => setModal(null)} />
    </>
  );
}
