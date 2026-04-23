import { useState } from "react";
import { PERSONAL } from "../data/config";
import { useI18n } from "../i18n";

export default function Contact() {
  const { t, dir } = useI18n();
  const f = t.contact.form;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1100));
    setLoading(false);
    setSent(true);
  };

  // 🔹 Ajout forcé du lien GitHub
  const socialLinks = {
    ...PERSONAL.social,
    github: PERSONAL.social?.github || "https://github.com/thierryyyyy"
  };

  return (
    <section id="contact" className="border-t border-border bg-bg relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Header centered */}
        <div className="text-center mb-12">
          <p className="text-xs font-mono text-orange tracking-[.14em] uppercase mb-2">// {t.contact.tag}</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ink tracking-tight"
            dangerouslySetInnerHTML={{ __html: t.contact.title.replace(/ensemble|together|معاً/,
              m => `<span style="color:var(--tw-color-orange, #FF5F1F)">${m}</span>`) }} />
          <p className="mt-3 text-ink2 max-w-md mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start max-w-5xl mx-auto">
          {/* Left info */}
          <div className="flex flex-col gap-3 md:w-64">
            <div className="bg-card border border-border rounded-2xl p-5">
              {[
                { icon: "✉", type: t.contact.email_label, val: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                { icon: "📍", type: t.contact.location_label, val: `${PERSONAL.location} · Remote OK` },
                { icon: "⏱", type: t.contact.response_label, val: t.contact.response_value },
              ].map((row, i, arr) => (
                <a key={i} href={row.href || undefined}
                  className={`flex items-center gap-3 py-2.5 text-sm ${i < arr.length - 1 ? "border-b border-border" : ""} ${row.href ? "hover:text-orange" : ""} transition-colors group`}>
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-orange/8 border border-orange/15 flex items-center justify-center text-sm group-hover:bg-orange/15 transition-colors">{row.icon}</div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wide text-ink3">{row.type}</p>
                    <p className="text-xs text-ink font-medium">{row.val}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Available badge */}
            <div className="bg-card border border-emerald-500/20 rounded-2xl p-4 flex gap-3 items-start">
              <div className="w-9 h-9 flex-shrink-0 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-base">🟢</div>
              <div>
                <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {t.contact.available_title}
                </p>
                <p className="text-xs text-ink3 mt-0.5 leading-relaxed">{t.contact.available_desc}</p>
              </div>
            </div>

            {/* Social – utilisation de socialLinks */}
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(socialLinks).map(([key, url]) => url && (
                <a key={key} href={url} target="_blank" rel="noreferrer"
                  className="bg-card border border-border rounded-xl p-3 flex flex-col items-center gap-1 hover:border-orange/35 hover:-translate-y-0.5 hover:shadow-card transition-all">
                  <span className="text-lg">{key === "github" ? "📦" : key === "linkedin" ? "💼" : "🐦"}</span>
                  <span className="text-[10px] font-mono text-ink3 capitalize">{key}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="relative bg-card border border-border rounded-2xl p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none rounded-full"
              style={{ background: "radial-gradient(circle, rgba(255,95,31,.05), transparent 65%)" }} />

            {sent ? (
              <div className="py-12 flex flex-col items-center gap-4 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-2xl">✓</div>
                <h3 className="font-display text-xl font-bold text-ink">{f.sent_title}</h3>
                <p className="text-sm text-ink3 max-w-xs">{f.sent_desc}</p>
                <button onClick={() => setSent(false)}
                  className="mt-2 px-5 py-2 border border-border2 rounded-xl text-sm text-ink2 hover:text-orange hover:border-orange/40 transition-all">
                  {f.new}
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4 relative z-10">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: f.name, ph: f.name_ph, type: "text" },
                    { name: "email", label: f.email, ph: f.email_ph, type: "email" },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-ink3 mb-1.5">{field.label}</label>
                      <input name={field.name} type={field.type} value={form[field.name]} onChange={onChange} required
                        placeholder={field.ph}
                        className="w-full px-3.5 py-2.5 bg-bg3 border border-border2 rounded-xl text-sm text-ink placeholder-ink3/60 focus:outline-none focus:border-orange/50 focus:shadow-[0_0_0_3px_rgba(255,95,31,.08)] transition-all"
                        dir={dir} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-ink3 mb-1.5">{f.subject}</label>
                  <input name="subject" type="text" value={form.subject} onChange={onChange} required
                    placeholder={f.subject_ph}
                    className="w-full px-3.5 py-2.5 bg-bg3 border border-border2 rounded-xl text-sm text-ink placeholder-ink3/60 focus:outline-none focus:border-orange/50 focus:shadow-[0_0_0_3px_rgba(255,95,31,.08)] transition-all"
                    dir={dir} />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-ink3 mb-1.5">{f.message}</label>
                  <textarea name="message" value={form.message} onChange={onChange} required rows={4}
                    placeholder={f.message_ph}
                    className="w-full px-3.5 py-2.5 bg-bg3 border border-border2 rounded-xl text-sm text-ink placeholder-ink3/60 focus:outline-none focus:border-orange/50 focus:shadow-[0_0_0_3px_rgba(255,95,31,.08)] transition-all resize-none"
                    dir={dir} />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full py-3 bg-orange text-white text-sm font-semibold rounded-xl shadow-orange hover:bg-orange2 hover:shadow-orange-lg transition-all disabled:opacity-60 flex items-center justify-center gap-2">
                  {loading
                    ? <><span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" /> {f.sending}</>
                    : <><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> {f.send}</>
                  }
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}