import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { useI18n } from "./i18n";

function AppContent() {
  const { dir } = useI18n();
  return (
    <div className="min-h-screen bg-bg text-ink" dir={dir}>
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-orange focus:text-white focus:rounded-lg">
        Aller au contenu principal
      </a>
      <Cursor />
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,95,31,.06) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,160,64,.04) 0%, transparent 60%)" }} />
        <div className="absolute top-0 right-[22%] w-px h-screen"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,95,31,.1), transparent)" }} />
      </div>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default AppContent;
