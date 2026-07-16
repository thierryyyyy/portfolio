import { useState, useEffect, useRef, useCallback } from "react";
import { useI18n } from "../i18n";

const PROJ_VISUALS = {
  sigap: {
    bg: "linear-gradient(135deg,#0D1B2A,#1A2E44)",
    accent: "#0066FF",
    icon: "\uD83D\uDDFA\uFE0F",
    tags: ["React Native", "Expo", "Node.js", "Django", "PostgreSQL", "PostGIS", "Google Maps API"],
    live: null,
    github: null,
    featured: true,
    cat: "Mobile",
    screenshots: ["/projects/sigap/map1.jpg", "/projects/sigap/map2.jpg", "/projects/sigap/validation.jpg"],
  },
  mndpt: {
    bg: "linear-gradient(135deg,#0D2A1B,#1A3D2A)",
    accent: "#059669",
    icon: "\uD83D\uDCE6",
    tags: ["Django", "Python", "MySQL", "Bootstrap", "HTML/CSS"],
    live: null,
    github: null,
    featured: true,
    cat: "Web",
    screenshots: [],
  },
  "websockets-java": {
    bg: "linear-gradient(135deg,#1A0D0D,#2E1A1A)",
    accent: "#E11D48",
    icon: "\u26A1",
    tags: ["Java", "SQLite", "Sockets TCP", "Swing", "XML", "JDBC"],
    live: null,
    github: null,
    featured: false,
    cat: "Desktop",
    screenshots: [
      "/projects/Websockets-java/websockets1 (1).png",
      "/projects/Websockets-java/websockets1 (2).png",
    ],
  },
  rotransport: {
    bg: "linear-gradient(135deg,#0D2B2E,#1A4A4E)",
    accent: "#14B8A6",
    icon: "\uD83D\uDE9B",
    tags: ["Python", "FastAPI", "JavaScript", "HTML5", "CSS3", "Recherche Op\u00E9rationnelle"],
    live: null,
    github: null,
    featured: false,
    cat: "Web",
    screenshots: [
      "/projects/rotransport/home.png",
      "/projects/rotransport/balas.png",
      "/projects/rotransport/minico.png",
    ],
  },
};

function Modal({ proj, vis, onClose }) {
  const { t } = useI18n();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const screenshots = vis?.screenshots || [];
  const closeRef = useRef();

  const nextImage = useCallback((e) => {
    e?.stopPropagation();
    setImageLoaded(false);
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  }, [screenshots.length]);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setImageLoaded(false);
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const goToImage = useCallback((idx) => {
    setImageLoaded(false);
    setCurrentImageIndex(idx);
  }, []);

  useEffect(() => {
    if (!proj) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.addEventListener("keydown", handleKey);
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [proj, onClose, nextImage, prevImage]);

  if (!proj || !vis) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
      onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="w-full max-w-3xl max-h-[90vh] bg-bg2 border border-border rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,.7)] animate-fade-up flex flex-col"
        onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
              style={{ background: `${vis.accent}18`, border: `1px solid ${vis.accent}30` }}>{vis.icon}</div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: vis.accent }}>{proj.subtitle}</p>
              <h3 id="modal-title" className="font-display font-bold text-ink text-lg">{proj.title}</h3>
            </div>
          </div>
          <button ref={closeRef} onClick={onClose} aria-label="Fermer"
            className="w-9 h-9 flex items-center justify-center bg-white/5 border border-border2 rounded-xl text-ink3 hover:text-ink hover:bg-white/10 text-lg leading-none transition-all">
            {"\u00D7"}
          </button>
        </div>

        {/* Screenshots */}
        {screenshots.length > 0 && (
          <div className="relative bg-bg flex-shrink-0">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={screenshots[currentImageIndex]}
                alt={`${proj.title} - ${currentImageIndex + 1}`}
                width="640"
                height="360"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-bg2">
                  <div className="w-6 h-6 border-2 border-white/20 border-t-orange rounded-full animate-spin" />
                </div>
              )}
              {screenshots.length > 1 && (
                <>
                  <button onClick={prevImage} aria-label="Image pr\u00E9c\u00E9dente"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <button onClick={nextImage} aria-label="Image suivante"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center text-white transition-all hover:scale-110">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </>
              )}
            </div>
            {/* Thumbnails */}
            {screenshots.length > 1 && (
              <div className="flex gap-1.5 p-3 justify-center">
                {screenshots.map((src, idx) => (
                  <button key={idx} onClick={() => goToImage(idx)}
                    className={`w-16 h-10 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      idx === currentImageIndex ? "border-orange scale-105" : "border-border2 opacity-50 hover:opacity-80"
                    }`}>
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1 min-h-0">
          <p className="text-sm text-ink2 leading-relaxed">{proj.longDesc}</p>

          <div className="grid grid-cols-3 gap-2">
            {proj.metrics.map((m) => (
              <div key={m.l} className="bg-card border border-border rounded-xl p-3 text-center hover:border-border2 transition-colors">
                <p className="font-display text-xl font-bold" style={{ color: vis.accent }}>{m.v}</p>
                <p className="text-[10px] text-ink3 mt-0.5 font-mono">{m.l}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5">
            {vis.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-card border border-border rounded-lg text-[10px] font-mono text-ink3 hover:text-ink2 hover:border-border2 transition-colors">{tag}</span>
            ))}
          </div>

          <div className="flex gap-2 pt-1">
            {vis.live ? (
              <a href={vis.live} target="_blank" rel="noreferrer"
                className="flex-1 py-2.5 text-center text-sm font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:shadow-lg"
                style={{ background: vis.accent }}>{proj.live}</a>
            ) : null}
            {vis.github ? (
              <a href={vis.github} target="_blank" rel="noreferrer"
                className="flex-1 py-2.5 text-center text-sm font-medium text-ink border border-border2 rounded-xl hover:border-orange hover:text-orange transition-all">
                {proj.source}
              </a>
            ) : (
              <span className="flex-1 py-2.5 text-center text-xs text-ink3 border border-border2 rounded-xl cursor-default">
                {t.projects_private}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p, index, onClick, isFeatured, showMetrics, t }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hoverScreenshot, setHoverScreenshot] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimerRef = useRef(null);
  const hasScreenshots = p.screenshots && p.screenshots.length > 0;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered && hasScreenshots && p.screenshots.length > 1) {
      hoverTimerRef.current = setInterval(() => {
        setHoverScreenshot((prev) => (prev + 1) % p.screenshots.length);
      }, 1200);
    }
    return () => clearInterval(hoverTimerRef.current);
  }, [isHovered, hasScreenshots, p.screenshots.length]);

  const tagsToShow = isFeatured && showMetrics ? 6 : 4;

  if (isFeatured) {
    return (
      <div ref={cardRef}
        onClick={() => onClick(p.id)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(p.id); } }}
        tabIndex={0} role="button" aria-label={`Voir le projet ${p.title}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setHoverScreenshot(0); }}
        className={`group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-orange/30 hover:shadow-card-lg focus:outline-none focus:ring-2 focus:ring-orange/50 lg:col-span-2 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: `${index * 80}ms` }}>

        <div className="grid md:grid-cols-[1.2fr_1fr] h-full">
          {/* Image side */}
          <div className="relative h-48 md:h-full min-h-[200px] overflow-hidden"
            style={{ background: p.bg }}>
            {hasScreenshots && (
              <img
                src={p.screenshots[hoverScreenshot]}
                alt={`Aper\u00E7u de ${p.title}`}
                width="500" height="300" loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all duration-700 group-hover:scale-105"
              />
            )}
            <div className="absolute inset-0"
              style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden md:block" />

            {/* Screenshot dots */}
            {hasScreenshots && p.screenshots.length > 1 && (
              <div className="absolute bottom-3 left-3 flex gap-1.5 z-10">
                {p.screenshots.map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === hoverScreenshot ? "bg-white w-4" : "bg-white/40"}`} />
                ))}
              </div>
            )}

            <div className="absolute top-3 left-3 flex gap-1.5 z-10">
              {p.featured && <span className="px-2.5 py-1 bg-orange/20 border border-orange/30 rounded-lg text-[10px] font-mono font-medium text-orange backdrop-blur-sm">{t.projects.featured}</span>}
              <span className="px-2.5 py-1 bg-black/30 border border-white/10 rounded-lg text-[10px] font-mono text-white/70 backdrop-blur-sm">{p.cat}</span>
            </div>

            <div className="absolute bottom-3 right-3 text-white/20 font-display text-7xl font-bold leading-none pointer-events-none z-10">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Content side */}
          <div className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                  style={{ background: `${p.accent}15`, border: `1px solid ${p.accent}25` }}>{p.icon}</div>
                <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: p.accent }}>{p.subtitle}</p>
              </div>
              <h3 className="font-display font-bold text-ink text-xl group-hover:text-orange2 transition-colors">{p.title}</h3>
              <p className="mt-2 text-sm text-ink3 leading-relaxed line-clamp-2">{p.desc}</p>
            </div>

            {showMetrics && (
              <div className="flex gap-5 mt-4 pt-4 border-t border-border">
                {p.metrics.map((m) => (
                  <div key={m.l}>
                    <p className="font-display text-lg font-bold" style={{ color: p.accent }}>{m.v}</p>
                    <p className="text-[10px] text-ink3 font-mono">{m.l}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1 mt-3">
              {p.tags.slice(0, tagsToShow).map((tag) => (
                <span key={tag} className="px-2 py-0.5 bg-bg3 border border-border text-[10px] font-mono text-ink3 rounded-md">{tag}</span>
              ))}
              {p.tags.length > tagsToShow && (
                <span className="text-[10px] text-ink3 px-1 self-center">+{p.tags.length - tagsToShow}</span>
              )}
            </div>
          </div>
        </div>

        <div className="h-[2px] w-0 group-hover:w-full transition-all duration-700 mx-auto"
          style={{ background: `linear-gradient(90deg,transparent,${p.accent},transparent)` }} />
      </div>
    );
  }

  return (
    <div ref={cardRef}
      onClick={() => onClick(p.id)}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(p.id); } }}
      tabIndex={0} role="button" aria-label={`Voir le projet ${p.title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setHoverScreenshot(0); }}
      className={`group relative bg-card border border-border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:border-orange/30 hover:shadow-card focus:outline-none focus:ring-2 focus:ring-orange/50 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}>

      {/* Banner */}
      <div className="relative h-44 overflow-hidden" style={{ background: p.bg }}>
        {hasScreenshots && (
          <img
            src={p.screenshots[hoverScreenshot]}
            alt={`Aper\u00E7u de ${p.title}`}
            width="400" height="176" loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-65 transition-all duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "24px 24px" }} />

        {/* Screenshot dots */}
        {hasScreenshots && p.screenshots.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {p.screenshots.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === hoverScreenshot ? "bg-white w-4" : "bg-white/30 w-1.5"}`} />
            ))}
          </div>
        )}

        <div className="absolute top-3 left-3 flex gap-1.5 z-10">
          {p.featured && <span className="px-2 py-0.5 bg-orange/20 border border-orange/30 rounded-lg text-[10px] font-mono font-medium text-orange backdrop-blur-sm">{t.projects.featured}</span>}
          <span className="px-2 py-0.5 bg-black/30 border border-white/10 rounded-lg text-[10px] font-mono text-white/70 backdrop-blur-sm">{p.cat}</span>
        </div>

        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-white/60 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 z-10">{"\u2197"}</div>

        <div className="absolute bottom-3 right-3 text-white/10 font-display text-5xl font-bold leading-none pointer-events-none z-10">
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm"
            style={{ background: `${p.accent}12`, border: `1px solid ${p.accent}20` }}>{p.icon}</div>
          <p className="text-[10px] font-mono uppercase tracking-wider" style={{ color: p.accent }}>{p.subtitle}</p>
        </div>
        <h3 className="font-display font-semibold text-ink text-base group-hover:text-orange2 transition-colors">{p.title}</h3>
        <p className="mt-1.5 text-xs text-ink3 leading-relaxed line-clamp-2">{p.desc}</p>

        {p.metrics.length > 0 && (
          <div className="flex gap-3 mt-3 pt-3 border-t border-border">
            {p.metrics.map((m) => (
              <div key={m.l}>
                <p className="text-sm font-display font-bold" style={{ color: p.accent }}>{m.v}</p>
                <p className="text-[9px] text-ink3 font-mono">{m.l}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-1 mt-3">
          {p.tags.slice(0, tagsToShow).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-bg3 border border-border text-[10px] font-mono text-ink3 rounded-md">{tag}</span>
          ))}
          {p.tags.length > tagsToShow && (
            <span className="text-[10px] text-ink3 px-1 self-center">+{p.tags.length - tagsToShow}</span>
          )}
        </div>

        {hasScreenshots && (
          <div className="mt-2.5 text-[10px] text-ink3 flex items-center gap-1.5">
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            {t.screenshot_count(p.screenshots.length)}
          </div>
        )}
      </div>

      <div className="h-[2px] w-0 group-hover:w-full transition-all duration-700 mx-auto"
        style={{ background: `linear-gradient(90deg,transparent,${p.accent},transparent)` }} />
    </div>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState("all");
  const [modal, setModal] = useState(null);

  const cats = ["all", ...new Set(Object.values(PROJ_VISUALS).map((v) => v.cat))];

  const items = t.projects.items
    .filter((p) => PROJ_VISUALS[p.id])
    .map((p) => ({ ...p, ...PROJ_VISUALS[p.id] }));

  const filtered = filter === "all" ? items : items.filter((p) => p.cat === filter);

  const modalItem = modal ? items.find((p) => p.id === modal) : null;
  const modalVis = modal ? PROJ_VISUALS[modal] : null;
  const modalProj = modalItem
    ? { ...modalItem, live: t.projects.live, source: t.projects.source }
    : null;

  const closeModal = useCallback(() => setModal(null), []);

  return (
    <>
      <section id="projects" className="border-t border-border bg-bg2 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-mono text-orange tracking-[.14em] uppercase mb-2">// {t.projects.tag}</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight">{t.projects.title}</h2>
              <p className="mt-2 text-sm text-ink3">{t.projects.count(filtered.length)}</p>
            </div>
            <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtres de projets">
              {cats.map((c) => {
                const count = c === "all" ? items.length : items.filter((p) => p.cat === c).length;
                return (
                  <button key={c} onClick={() => setFilter(c)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      filter === c
                        ? "bg-orange text-white shadow-orange"
                        : "bg-card border border-border text-ink3 hover:border-orange/40 hover:text-orange"
                    }`}>
                    {c === "all" ? t.projects.filters.all : c}
                    <span className={`ml-1.5 text-[10px] ${filter === c ? "text-white/60" : "text-ink3/50"}`}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                p={p}
                index={i}
                onClick={setModal}
                isFeatured={p.featured && filter === "all"}
                showMetrics={p.featured && filter === "all"}
                t={t}
              />
            ))}
          </div>

        </div>
      </section>

      <Modal proj={modalProj} vis={modalVis} onClose={closeModal} />
    </>
  );
}
