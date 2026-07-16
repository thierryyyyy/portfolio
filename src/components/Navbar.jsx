import { useState, useEffect, useCallback } from "react";
import { useI18n } from "../i18n";
import LangSwitcher from "./LangSwitcher";

const NAV_IDS = ["services", "projects", "skills", "experience", "contact"];
const SCROLL_THRESHOLD = 20;
const SECTION_OFFSET = 120;

export default function Navbar() {
  const { t, dir } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const fn = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > SCROLL_THRESHOLD);
          let cur = "hero";
          NAV_IDS.forEach((id) => {
            const el = document.getElementById(id);
            if (el && window.scrollY >= el.offsetTop - SECTION_OFFSET) cur = id;
          });
          setActive(cur);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  const navItems = [
    { id: "services",    label: t.nav.services },
    { id: "projects",    label: t.nav.projects },
    { id: "skills",      label: t.nav.skills },
    { id: "experience",  label: t.nav.experience },
    { id: "contact",     label: t.nav.contact },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled ? "py-3 bg-bg/90 backdrop-blur-xl border-b border-border" : "py-5"
      }`} role="navigation" aria-label="Navigation principale">

        <button onClick={() => go("hero")} aria-label="Retour en haut"
          className="font-display text-xl font-bold text-orange tracking-tight flex-shrink-0">
          JD<span className="text-ink3">.dev</span>
        </button>

        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => go(item.id)}
              className={`px-4 py-2 text-sm rounded-lg transition-all ${
                active === item.id
                  ? "text-orange"
                  : "text-ink2 hover:text-ink hover:bg-white/5"
              }`}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LangSwitcher />
          <button onClick={() => go("contact")}
            className="px-5 py-2 bg-orange text-white text-sm font-semibold rounded-lg shadow-orange hover:bg-orange2 transition-all hover:-translate-y-0.5">
            {t.nav.hire}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LangSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            className="p-2 text-ink2">
            <div className={`w-5 h-px bg-ink mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <div className={`h-px bg-ink mb-1.5 transition-all ${menuOpen ? "opacity-0" : "w-3.5"}`} />
            <div className={`w-5 h-px bg-ink transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-bg pt-16 px-6 flex flex-col gap-1.5" role="menu" aria-label="Menu mobile">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => go(item.id)} role="menuitem"
              className={`py-3.5 text-lg font-display font-semibold border-b border-border transition-colors ${
                dir === "rtl" ? "text-right" : "text-left"
              } ${active === item.id ? "text-orange" : "text-ink"}`}>
              {item.label}
            </button>
          ))}
          <button onClick={() => go("contact")} role="menuitem"
            className="mt-5 py-3.5 bg-orange text-white text-center font-semibold rounded-xl">
            {t.nav.hire}
          </button>
        </div>
      )}
    </>
  );
}
