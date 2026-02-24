import { useState, useEffect, useRef } from "react";
import { PERSONAL } from "../data/config";
import { useI18n } from "../i18n";

function useTypewriter(strings) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);
  const [ci, setCi] = useState(0);
  const stringsRef = useRef(strings);

  // Reset when strings change (language switch)
  useEffect(() => {
    stringsRef.current = strings;
    setText("");
    setIdx(0);
    setDel(false);
    setCi(0);
  }, [strings]);

  useEffect(() => {
    const cur = stringsRef.current[idx % stringsRef.current.length];
    const delay = del ? 35 : 85;
    const timer = setTimeout(() => {
      if (!del && ci < cur.length) { setText(cur.slice(0, ci + 1)); setCi(c => c + 1); }
      else if (!del && ci === cur.length) { setTimeout(() => setDel(true), 2000); }
      else if (del && ci > 0) { setText(cur.slice(0, ci - 1)); setCi(c => c - 1); }
      else { setDel(false); setIdx(i => (i + 1) % stringsRef.current.length); }
    }, delay);
    return () => clearTimeout(timer);
  }, [ci, del, idx]);

  return text;
}

export default function Hero() {
  const { t, dir } = useI18n();
  const typed = useTypewriter(t.hero.typedStrings);
  const isRtl = dir === "rtl";

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="min-h-screen grid md:grid-cols-2 items-center pt-14 bg-bg relative overflow-hidden">
      {/* Background glow circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,95,31,.07) 0%, transparent 65%)" }} />

      {/* ── LEFT / CONTENT ── */}
      <div className={`px-6 md:px-12 py-20 z-10 relative ${isRtl ? "text-right" : ""}`}>

        {/* Greeting line */}
        <div className={`flex items-center gap-2 mb-5 opacity-0 animate-fade-up`}
          style={{ animationDelay: "0ms", justifyContent: isRtl ? "flex-end" : "flex-start" }}>
          <span className="w-6 h-px bg-orange flex-shrink-0" />
          <span className="text-xs font-mono text-ink3 uppercase tracking-[.15em]">{t.hero.greeting}</span>
          {PERSONAL.availability && (
            <span className="ms-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-xs font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {t.hero.available}
            </span>
          )}
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-[0.92] tracking-[-0.04em] opacity-0 animate-fade-up"
          style={{ animationDelay: "80ms" }}>
          {PERSONAL.name}
        </h1>

        {/* Typed subtitle */}
        <div className="mt-4 h-10 flex items-center opacity-0 animate-fade-up"
          style={{ animationDelay: "200ms", justifyContent: isRtl ? "flex-end" : "flex-start" }}>
          <span className="text-xl md:text-2xl font-light text-ink2 tracking-tight">
            {typed}
            <span className="inline-block w-0.5 h-5 bg-orange ms-0.5 align-middle animate-pulse" />
          </span>
        </div>

        {/* Bio */}
        <p className="mt-6 text-base text-ink2 leading-relaxed max-w-md opacity-0 animate-fade-up"
          style={{ animationDelay: "280ms", marginInlineStart: isRtl ? "auto" : undefined }}>
          {t.hero.bio}
        </p>

        {/* Social links */}
        <div className={`flex gap-2 mt-7 opacity-0 animate-fade-up flex-wrap`}
          style={{ animationDelay: "350ms", justifyContent: isRtl ? "flex-end" : "flex-start" }}>
          {Object.entries(PERSONAL.social).map(([key, url]) => url && (
            <a key={key} href={url} target="_blank" rel="noreferrer"
              className="w-9 h-9 rounded-full border border-border2 bg-card flex items-center justify-center text-ink3 hover:border-orange hover:text-orange hover:shadow-orange transition-all">
              {key === "github" && <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>}
              {key === "linkedin" && <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
              {key === "twitter" && <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>}
              {!["github","linkedin","twitter"].includes(key) && <span className="text-xs capitalize">{key[0]}</span>}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className={`flex flex-wrap gap-3 mt-8 opacity-0 animate-fade-up`}
          style={{ animationDelay: "430ms", justifyContent: isRtl ? "flex-end" : "flex-start" }}>
          <button onClick={() => go("contact")}
            className="flex items-center gap-2 px-6 py-3 bg-orange text-white text-sm font-semibold rounded-xl shadow-orange hover:bg-orange2 hover:shadow-orange-lg transition-all hover:-translate-y-0.5">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            {t.hero.cta_hire}
          </button>
          <a href={PERSONAL.cvUrl} download
            className="flex items-center gap-2 px-6 py-3 border border-border2 text-ink text-sm font-medium rounded-xl hover:border-orange hover:text-orange transition-all">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            {t.hero.cta_cv}
          </a>
        </div>

        {/* Stats */}
        <div className={`flex flex-wrap gap-0 mt-12 opacity-0 animate-fade-up bg-card border border-border rounded-2xl overflow-hidden w-fit`}
          style={{ animationDelay: "520ms", marginInlineStart: isRtl ? "auto" : undefined }}>
          {t.hero.stats.map((s, i) => (
            <div key={i} className={`px-6 py-4 relative ${i < t.hero.stats.length - 1 ? "border-e border-border" : ""}`}>
              <p className="font-display text-2xl font-bold text-orange tracking-tight">{s.value}</p>
              <p className="text-xs text-ink3 mt-0.5 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT / AVATAR SCENE ── */}
      <div className="hidden md:flex items-center justify-center relative z-10 py-16">
        <div className="relative w-[440px] h-[500px]">
          {/* Availability badge */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {t.hero.available}
          </div>

          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full pointer-events-none"
            style={{ transform: "translate(-50%,-50%)", background: "radial-gradient(circle, rgba(255,95,31,.12) 0%, rgba(255,95,31,.04) 40%, transparent 70%)", animation: "glowPulse 3s ease-in-out infinite" }} />

          {/* Rotating rings */}
          <div className="absolute top-1/2 left-1/2 w-[340px] h-[340px] rounded-full border border-orange/15"
            style={{ transform: "translate(-50%,-50%)", animation: "ringRotate 20s linear infinite" }}>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange"
              style={{ boxShadow: "0 0 10px #FF5F1F, 0 0 20px rgba(255,95,31,.5)" }} />
          </div>
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full border border-dashed border-orange/6"
            style={{ transform: "translate(-50%,-50%)", animation: "ringRotate 35s linear infinite reverse" }} />

          {/* Avatar placeholder */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[430px] rounded-t-[1.5rem] border border-border overflow-hidden flex items-center justify-center flex-col gap-3"
            style={{ background: "linear-gradient(180deg, var(--tw-bg-opacity,1) #1C1C22 0%, #16161A 60%, rgba(17,17,19,0) 100%)", backgroundColor: "#1C1C22" }}>
            <div className="text-7xl opacity-25 grayscale">👨‍💻</div>
            <p className="text-xs font-mono text-ink3 tracking-widest uppercase">{t.hero.photo_hint}</p>
          </div>

          {/* Floating badges */}
          {[
            { cls: "top-[12%] left-[-4%]", icon: "⚡", label: t.hero.badge_react, sub: t.hero.badge_react_sub, delay: "0s" },
            { cls: "top-[38%] right-[-5%]", icon: "🚀", label: t.hero.badge_projects, sub: t.hero.badge_projects_sub, delay: "1.5s" },
            { cls: "bottom-[20%] left-[-6%]", icon: "🏆", label: t.hero.badge_clients, sub: t.hero.badge_clients_sub, delay: "0.8s" },
          ].map((b, i) => (
            <div key={i} className={`absolute ${b.cls} flex items-center gap-2.5 bg-card border border-border2 rounded-xl px-3.5 py-2.5 shadow-card`}
              style={{ animation: `float 4s ease-in-out ${b.delay} infinite` }}>
              <div className="w-8 h-8 rounded-lg bg-orange/10 border border-orange/20 flex items-center justify-center text-base">{b.icon}</div>
              <div>
                <p className="text-xs font-semibold text-ink leading-none">{b.label}</p>
                <p className="text-[10px] text-ink3 mt-0.5">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
