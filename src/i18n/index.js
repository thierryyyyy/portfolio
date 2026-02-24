import { createContext, useContext, useState, useEffect } from "react";
import fr from "./fr";
import en from "./en";
import ar from "./ar";

// ── All translations
const TRANSLATIONS = { fr, en, ar };

// ── Languages config (for the switcher UI)
export const LANGUAGES = [
  { code: "fr", label: "Français", flag: "🇫🇷", dir: "ltr" },
  { code: "en", label: "English",  flag: "🇬🇧", dir: "ltr" },
  { code: "ar", label: "العربية",  flag: "🇸🇦", dir: "rtl" },
];

// ── Detect browser language
function detectLang() {
  const saved = localStorage.getItem("portfolio-lang");
  if (saved && TRANSLATIONS[saved]) return saved;

  // Navigator languages (e.g. ['fr-FR', 'fr', 'en-US', 'en'])
  const browserLangs = navigator.languages || [navigator.language || "en"];

  for (const lang of browserLangs) {
    const code = lang.toLowerCase().split("-")[0]; // 'fr-FR' → 'fr'
    if (TRANSLATIONS[code]) return code;
  }

  return "fr"; // fallback
}

// ── Context
const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(detectLang);
  const t = TRANSLATIONS[lang];
  const dir = LANGUAGES.find(l => l.code === lang)?.dir || "ltr";

  // Apply direction + lang attribute to <html>
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", dir);
    localStorage.setItem("portfolio-lang", lang);
  }, [lang, dir]);

  const changeLang = (code) => {
    if (TRANSLATIONS[code]) setLang(code);
  };

  return (
    <I18nContext.Provider value={{ t, lang, dir, changeLang }}>
      {children}
    </I18nContext.Provider>
  );
}

// ── Hook
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
