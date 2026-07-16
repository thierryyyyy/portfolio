import { PERSONAL } from "../data/config";
import { useI18n } from "../i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border bg-bg py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3">
        <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Retour en haut"
          className="font-display text-lg font-bold text-orange">
          JD<span className="text-ink3">.dev</span>
        </button>
        <p className="text-xs text-ink3">&copy; {new Date().getFullYear()} {PERSONAL.name} &mdash; {t.footer.made}</p>
        <div className="flex gap-4" role="list" aria-label="Liens sociaux">
          {Object.entries(PERSONAL.social).map(([k, url]) => url && (
            <a key={k} href={url} target="_blank" rel="noreferrer" role="listitem"
              aria-label={k}
              className="text-xs text-ink3 hover:text-orange transition-colors capitalize">{k}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
