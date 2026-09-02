import { useEffect, useMemo, useState } from "react";
import "./index.css";

const profile = {
  name: "Andrianaivoson Hariniaina Thierry",
  role: "Développeur full-stack web & mobile",
  location: "Toliara, Madagascar · Remote",
  email: "thierryhariniaina3@gmail.com",
  github: "https://github.com/thierryyyyy",
  cv: "/CV.pdf",
};

const projects = [
  {
    id: "sigap", number: "01", type: "Projet de fin d’études · Mobile & géospatial", title: "SIGAP",
    summary: "Une application mobile qui remplace le recensement papier par une collecte géolocalisée, guidée et validée sur le terrain.",
    role: "Développement mobile, intégration API et amélioration UX", stack: ["React Native", "Expo", "Node.js", "Django", "PostgreSQL", "PostGIS"],
    image: "/projects/sigap/map1.webp", accent: "orange", featured: true,
    details: "Conception d’un parcours multi-étapes pour les chefs fokontany : sélection sur carte, capture photo, collecte des données et workflow de validation agent → secrétaire. Le projet démontre la capacité à relier une interface mobile, une API REST et un modèle de données géospatial.",
  },
  {
    id: "stock", number: "02", type: "Stage MNDPT · Application métier", title: "Gestion de stock",
    summary: "Un outil web pour suivre les consommables informatiques et gérer les demandes avec une validation par rôles.",
    role: "Développement full-stack et modélisation des données", stack: ["Django", "Python", "MySQL", "Bootstrap"],
    image: null, accent: "blue", featured: true,
    details: "Application conçue pour structurer les demandes de fournitures, leur suivi et les validations multi-niveaux. Le projet met en avant la compréhension des workflows internes, des permissions et de la logique métier.",
  },
  {
    id: "transport", number: "03", type: "Projet académique · Recherche opérationnelle", title: "RO Transport",
    summary: "Interface web interactive pour résoudre des problèmes de transport avec plusieurs méthodes d’optimisation.",
    role: "API, logique métier et interface de visualisation", stack: ["FastAPI", "Python", "JavaScript"],
    image: "/projects/rotransport/home.webp", accent: "green",
    details: "Implémentation des méthodes Balas-Hammer et MINICO avec une interface permettant de saisir les données et de visualiser les résultats.",
  },
];

const otherProjects = [
  { title: "Websockets Java", type: "Desktop · Java", image: "/projects/Websockets-java/websockets1 (1).webp", stack: "Java · Sockets · SQLite" },
  { title: "Toliara Market", type: "Mobile · Android", image: "/projects/Tuléar-market/Tuléar-market (1).webp", stack: "Android · Figma · Marketplace" },
  { title: "Centre Médical", type: "Web · Java", image: "/projects/Hibernate/hibernate-java (1).webp", stack: "Hibernate · PostgreSQL · JSP" },
];

const copy = {
  fr: {
    nav: { work: "Projets", approach: "Approche", journey: "Parcours", contact: "Contact" },
    availability: "Ouvert à une opportunité junior ou un stage",
    heroKicker: "Développement produit · APIs · Applications métier",
    heroTitle: "Je construis des produits utiles, du terrain jusqu’à l’interface.",
    heroBody: "Je suis développeur full-stack web & mobile. Je transforme des processus complexes en expériences simples, avec une affinité particulière pour les applications métier, les workflows de validation et les solutions géolocalisées.",
    ctaWork: "Voir les projets", ctaContact: "Parler d’une opportunité", cv: "Télécharger le CV",
    stats: [["06", "projets présentés"], ["02", "expériences de stage"], ["01", "spécialité forte : produit métier"]],
    sectionWork: "Sélection de projets", workLead: "Des cas concrets, pas une simple liste de technologies.", workIntro: "Chaque projet est présenté par son contexte, le rôle tenu et les problèmes résolus.", caseStudy: "Voir l’étude de cas",
    sectionApproach: "Ce que j’apporte", approachLead: "Une vision produit avec une base technique solide.", approachIntro: "Je préfère comprendre le problème avant de choisir la stack. Mon travail se situe à la rencontre de l’expérience utilisateur, de l’API et de la donnée.",
    approach: [["01", "Comprendre", "Clarifier le besoin, les utilisateurs et le workflow avant de produire du code."], ["02", "Structurer", "Modéliser les données et les règles métier pour construire une base durable."], ["03", "Livrer", "Transformer le tout en une interface claire, testable et prête à évoluer."]],
    sectionJourney: "Parcours", journeyLead: "Un profil junior, déjà confronté à des sujets réels.", journeyIntro: "Deux expériences de stage m’ont permis de travailler sur des applications utilisées dans des contextes administratifs et de terrain.",
    timeline: [["2025", "Développeur Full-stack Mobile · Tarondro / ALTRADIS", "SIGAP : application mobile de recensement géolocalisé, formulaires multi-étapes, caméra et API REST."], ["2024", "Développeur Web · MNDPT", "Application de gestion de stock avec demandes, rôles et validations multi-niveaux."], ["2022 — aujourd’hui", "Informatique · ENI / Université de Fianarantsoa", "Licence professionnelle obtenue ; Master 1 en informatique en cours."]],
    sectionContact: "Construisons quelque chose d’utile.", contactIntro: "Vous cherchez un développeur junior impliqué, capable de comprendre le métier et de passer rapidement à l’exécution ? Échangeons.", emailLabel: "Écrire un e-mail", remoteLabel: "Basé à Toliara · Remote OK", footer: "Développeur full-stack web & mobile", language: "EN",
  },
  en: {
    nav: { work: "Work", approach: "Approach", journey: "Journey", contact: "Contact" }, availability: "Open to a junior role or internship", heroKicker: "Product development · APIs · Business applications", heroTitle: "I build useful products, from the field to the interface.", heroBody: "I am a full-stack web & mobile developer. I turn complex processes into simple experiences, with a strong interest in business applications, approval workflows and geospatial products.", ctaWork: "See selected work", ctaContact: "Discuss an opportunity", cv: "Download CV", stats: [["06", "projects presented"], ["02", "internship experiences"], ["01", "strong focus: business products"]], sectionWork: "Selected work", workLead: "Concrete cases, not just a list of technologies.", workIntro: "Each project is framed by its context, my role and the problems solved.", caseStudy: "Open case study", sectionApproach: "What I bring", approachLead: "Product thinking with a solid technical foundation.", approachIntro: "I like to understand the problem before choosing the stack. My work sits at the intersection of user experience, APIs and data.", approach: [["01", "Understand", "Clarify the need, users and workflow before writing code."], ["02", "Structure", "Model data and business rules to build a durable foundation."], ["03", "Ship", "Turn it into a clear, testable interface ready to evolve."]], sectionJourney: "Journey", journeyLead: "A junior profile already exposed to real-world constraints.", journeyIntro: "Two internships allowed me to work on applications used in administrative and field contexts.", timeline: [["2025", "Full-stack Mobile Developer · Tarondro / ALTRADIS", "SIGAP: geospatial census app, multi-step forms, camera and REST API."], ["2024", "Web Developer · MNDPT", "Stock management app with requests, roles and multi-level approvals."], ["2022 — now", "Computer Science · ENI / University of Fianarantsoa", "Professional Bachelor’s completed; Master 1 in Computer Science in progress."]], sectionContact: "Let’s build something useful.", contactIntro: "Looking for a committed junior developer who understands the business problem and can move quickly into execution? Let’s talk.", emailLabel: "Write an email", remoteLabel: "Based in Toliara · Remote OK", footer: "Full-stack web & mobile developer", language: "FR",
  },
};

function Arrow({ direction = "right" }) { return <span aria-hidden="true" className={`arrow arrow-${direction}`}>↗</span>; }

function App() {
  const [language, setLanguage] = useState("fr");
  const [selectedProject, setSelectedProject] = useState(null);
  const t = copy[language];
  useEffect(() => { document.documentElement.lang = language; document.title = language === "fr" ? "Thierry Hariniaina — Développeur full-stack" : "Thierry Hariniaina — Full-stack developer"; }, [language]);
  useEffect(() => { document.body.style.overflow = selectedProject ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [selectedProject]);
  useEffect(() => { const onKeyDown = (event) => { if (event.key === "Escape") setSelectedProject(null); }; document.addEventListener("keydown", onKeyDown); return () => document.removeEventListener("keydown", onKeyDown); }, []);
  const mailto = useMemo(() => `mailto:${profile.email}?subject=${encodeURIComponent(language === "fr" ? "Opportunité de collaboration" : "Opportunity to collaborate")}`, [language]);
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return <div className="site-shell">
    <a className="skip-link" href="#main-content">Aller au contenu principal</a><div className="grain" aria-hidden="true" />
    <header className="topbar"><a className="brand" href="#top" aria-label="Accueil"><span className="brand-mark">A</span><span>thierry<span className="brand-dot">.</span>dev</span></a><nav className="desktop-nav" aria-label="Navigation principale"><button onClick={() => scrollTo("work")}>{t.nav.work}</button><button onClick={() => scrollTo("approach")}>{t.nav.approach}</button><button onClick={() => scrollTo("journey")}>{t.nav.journey}</button><button onClick={() => scrollTo("contact")}>{t.nav.contact}</button></nav><div className="topbar-actions"><a className="nav-email" href={mailto}>{profile.email}</a><button className="lang-switch" onClick={() => setLanguage(language === "fr" ? "en" : "fr")} aria-label="Changer de langue">{t.language}</button></div></header>
    <main id="main-content">
      <section id="top" className="hero section-wrap"><div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> {t.availability}</div><p className="hero-kicker">{t.heroKicker}</p><h1>{t.heroTitle}</h1><p className="hero-body">{t.heroBody}</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("work")}>{t.ctaWork} <Arrow /></button><a className="button button-secondary" href={mailto}>{t.ctaContact} <Arrow /></a></div><div className="hero-meta"><a href={profile.cv} download>{t.cv} <Arrow /></a><span className="meta-separator" /><a href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a></div></div><div className="hero-visual"><div className="visual-label visual-label-top">AHT / 2026</div><div className="portrait-frame"><div className="portrait-accent" /><img src="/profile.webp" alt="Portrait de Thierry Hariniaina" width="1025" height="1193" fetchPriority="high" /></div><div className="visual-note visual-note-top"><span>01</span><strong>Mobile first</strong><small>Build for real users</small></div><div className="visual-note visual-note-bottom"><span>02</span><strong>Clear systems</strong><small>Data · APIs · UX</small></div><div className="visual-orbit" aria-hidden="true" /></div></section>
      <section className="proof-strip section-wrap" aria-label="Repères">{t.stats.map(([value, label]) => <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}</section>
      <section id="work" className="content-section section-wrap"><div className="section-heading"><div><p className="section-index">01 / {t.sectionWork}</p><h2>{t.workLead}</h2></div><p>{t.workIntro}</p></div><div className="featured-grid">{projects.filter((project) => project.featured).map((project) => <article className={`case-card case-${project.accent}`} key={project.id}><div className="case-image-wrap">{project.image ? <img src={project.image} alt={`Aperçu du projet ${project.title}`} width="806" height="808" loading="lazy" /> : <div className="abstract-dashboard" aria-label="Illustration abstraite d’une application de gestion"><span className="dash-line dash-line-one" /><span className="dash-line dash-line-two" /><span className="dash-card dash-card-one" /><span className="dash-card dash-card-two" /><span className="dash-bar" /></div>}<span className="case-number">{project.number}</span></div><div className="case-content"><p className="case-type">{project.type}</p><h3>{project.title}</h3><p className="case-summary">{project.summary}</p><p className="case-role"><span>Rôle</span>{project.role}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><button className="text-link" onClick={() => setSelectedProject(project)}>{t.caseStudy} <Arrow /></button></div></article>)}</div><div className="other-work-header"><span>Autres projets</span><span className="line" /></div><div className="other-grid">{otherProjects.map((project) => <article className="other-card" key={project.title}><div className="other-image"><img src={project.image} alt={`Aperçu de ${project.title}`} width="1463" height="893" loading="lazy" /><span>↗</span></div><p>{project.type}</p><h3>{project.title}</h3><small>{project.stack}</small></article>)}</div></section>
      <section id="approach" className="content-section approach-section section-wrap"><div className="section-heading"><div><p className="section-index">02 / {t.sectionApproach}</p><h2>{t.approachLead}</h2></div><p>{t.approachIntro}</p></div><div className="approach-grid">{t.approach.map(([number, title, body]) => <article className="approach-card" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div><div className="stack-line"><span>Stack principale</span><div>{["React Native", "React", "Django", "Node.js", "PostgreSQL", "PostGIS"].map((item) => <strong key={item}>{item}</strong>)}</div></div></section>
      <section id="journey" className="content-section section-wrap"><div className="section-heading"><div><p className="section-index">03 / {t.sectionJourney}</p><h2>{t.journeyLead}</h2></div><p>{t.journeyIntro}</p></div><div className="timeline">{t.timeline.map(([date, title, body]) => <article className="timeline-item" key={title}><time>{date}</time><div className="timeline-dot" /><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></section>
      <section id="contact" className="contact-section section-wrap"><div className="contact-card"><div><p className="section-index">04 / Contact</p><h2>{t.sectionContact}</h2><p>{t.contactIntro}</p></div><div className="contact-actions"><a className="button button-primary" href={mailto}>{t.emailLabel} <Arrow /></a><span>{t.remoteLabel}</span></div></div></section>
    </main>
    <footer className="footer section-wrap"><span>© 2026 {profile.name}</span><span>{t.footer}</span><div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={mailto}>Email</a></div></footer>
    {selectedProject && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}><div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fermer">×</button><p className="section-index">{selectedProject.type}</p><h2 id="project-modal-title">{selectedProject.title}</h2><p>{selectedProject.details}</p><p className="case-role"><span>Rôle</span>{selectedProject.role}</p><div className="tag-row">{selectedProject.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>}
  </div>;
}

export default App;
