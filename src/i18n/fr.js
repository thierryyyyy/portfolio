// ============================================================
//  🇫🇷 Traductions françaises — Données réelles de Thierry
// ============================================================
const fr = {
  nav: {
    services: "Services",
    projects: "Portfolio",
    skills: "Compétences",
    experience: "Parcours",
    contact: "Contact",
    hire: "Me contacter",
    cv: "Télécharger CV",
  },

  hero: {
    greeting: "Bonjour, je suis",
    typedStrings: [
      "Développeur Web & Mobile Full-Stack",
      "Expert React · Django · Node.js · PHP",
      "Créateur d'Expériences Pixel-Perfect",
      "Master 1 Informatique",
      "Disponible pour missions",
    ],
    bio: "Développeur créatif à l'intersection du design et de l'ingénierie. Je transforme vos idées en interfaces pixel-perfect avec React, Django, Node.js et PHP. Mon engagement : allier code scalable et UX d'excellence pour un impact business immédiat.",
    cta_hire: "Me contacter",
    cta_cv: "Télécharger CV",
    available: "Disponible",
    stats: [
      { value: "5+", label: "Projets livrés" },
      { value: "Master 1", label: "Niveau d'étude" },
      { value: "5+", label: "Technologies" },
    ],
    badge_react: "React & Mobile",
    badge_react_sub: "React Native · Expo",
    badge_projects: "SIGAP",
    badge_projects_sub: "Projet de fin d'études",
    badge_clients: "Master",
    badge_clients_sub: "Informatique",
    photo_hint: "// Ajoutez votre photo",
  },

  services: {
    tag: "Services",
    title: "Ce que je fais",
    subtitle: "Du concept à la mise en production — applications web et mobiles complètes.",
    items: [
      {
        icon: "📱",
        title: "Développement Mobile",
        desc: "Applications mobiles cross-platform avec React Native (Expo). Géolocalisation, cartes interactives et formulaires multi-étapes.",
      },
      {
        icon: "⚙️",
        title: "Backend & API",
        desc: "APIs REST robustes avec Django (Python) et Node.js/Express. Gestion des rôles, workflow de validation et bases de données relationnelles.",
      },
      {
        icon: "🌐",
        title: "Développement Web",
        desc: "Interfaces web modernes et responsives. React.js, Vue.js côté frontend, PHP ou Django côté backend.",
      },
      {
        icon: "🗄️",
        title: "Base de données",
        desc: "Conception et optimisation de bases de données MySQL et PostgreSQL, avec PostGIS pour les données géospatiales.",
      },
    ],
  },

  projects: {
    tag: "Portfolio",
    title: "Mes Projets",
    count: (n) => `${n} projets`,
    filters: { all: "Tous" },
    more: "Détails",
    featured: "★ Projet phare",
    live: "Voir le projet ↗",
    source: "Code source",
    add_placeholder: "Ajoutez vos projets\ndans config.js",
    items: [
      {
        id: "sigap",
        subtitle: "Mobile · Mémoire fin d'études",
        title: "SIGAP",
        desc: "Application mobile de recensement géolocalisé des ménages pour les chefs fokontany de Tuléar. Remplacement du recensement papier par une collecte numérique GPS.",
        longDesc: "Système de recensement géolocalisé permettant aux chefs fokontany de Tuléar de collecter les données des ménages via une application mobile. Carte interactive, formulaires multi-étapes, capture photo, et workflow de validation agent → secrétaire.",
        metrics: [{ v: "GPS", l: "Géolocalisation" }, { v: "Multi", l: "Étapes" }, { v: "100%", l: "Fonctionnel" }],
      },
      {
        id: "mndpt",
        subtitle: "Web · Stage MNDPT",
        title: "Gestion de Stock",
        desc: "Application web de gestion des consommables informatiques et fournitures de bureau pour le Ministère. Validation multi-niveaux selon les rôles.",
        longDesc: "Développée lors de mon stage au MNDPT (août–nov. 2024). Suivi des demandes de matériel avec validation hiérarchique par rôles, tableaux de bord et historique des mouvements de stock.",
        metrics: [{ v: "Django", l: "Backend" }, { v: "MySQL", l: "Base de données" }, { v: "Multi", l: "Rôles" }],
      },
      {
        id: "rotransport",
        subtitle: "Web · Recherche Opérationnelle",
        title: "RO Transport",
        desc: "Application web interactive pour résoudre les problèmes de transport en Recherche Opérationnelle. Méthodes Balas-Hammer et MINICO.",
        longDesc: "Outil pédagogique permettant de saisir les données d’un problème de transport, définir le nombre d’origines et destinations, calculer automatiquement les solutions via Python (FastAPI/Flask) et comparer plusieurs méthodes de résolution (Balas-Hammer, MINICO) avec affichage du coût total optimal.",
        metrics: [{ v: "Python", l: "Backend" }, { v: "FastAPI", l: "API" }, { v: "2", l: "Méthodes" }],
      },
      {
        id: "websockets-java",
        subtitle: "Java \u00B7 Application lourde",
        title: "Websockets Java",
        desc: "Application lourde client-serveur en Java avec communication par sockets, mode connect\u00E9/d\u00E9connect\u00E9 et stockage XML.",
        longDesc: "Application desktop Java (Swing) avec architecture client-serveur. Communication par sockets TCP, base de donn\u00E9es SQLite, gestion des modes connect\u00E9 et d\u00E9connect\u00E9 (envoi diff\u00E9r\u00E9 via fichiers XML), t\u00E9moin r\u00E9seau en temps r\u00E9el et CRUD complet sur la table CLIENT.",
        metrics: [{ v: "Java", l: "Backend" }, { v: "SQLite", l: "BDD" }, { v: "Sockets", l: "R\u00E9seau" }],
      },
      {
        id: "toliara-market",
        subtitle: "Android \u00B7 Marketplace",
        title: "Toliara Market",
        desc: "Application Android de vente et revente d'articles bas\u00E9e \u00E0 Tul\u00E9ar. Design UI/UX compl\u00E8te sur Figma.",
        longDesc: "Application mobile Android de type marketplace pour la vente et revente d'articles \u00E0 Toliara (Tul\u00E9ar, Madagascar). Conception UI/UX compl\u00E8te sur Figma avec un design moderne, cat\u00E9gories de produits, navigation intuitive et processus d'achat fluide.",
        metrics: [{ v: "Figma", l: "Design UI/UX" }, { v: "Android", l: "Mobile" }, { v: "Market", l: "Marketplace" }],
      },
    ],
  },

  skills: {
    tag: "Compétences",
    title: "Stack Technique",
    subtitle: "Technologies que j'utilise dans mes projets",
    level: (n) => `Niveau ${n}/5`,
    all: "Tous",
  },

  experience: {
    tag: "Parcours",
    title: "Formation & Expérience",
    current: "En cours",
    bullets: [
      "Développement web & mobile full-stack",
      "Conception de bases de données (MySQL, PostgreSQL + PostGIS)",
      "Méthodologies UML, MERISE, Agile",
      "Stage professionnel au MNDPT (2024)",
      "Stage chez Tarondro (ALTRADIS) – 2025",
    ],
    items: [
      {
        role: "Stage Développeur Full Stack Mobile",
        company: "Tarondro – Groupe ALTRADIS, Analakely",
        period: "Septembre — Novembre 2025 (3 mois)",
        desc: "Conception et développement d’une application mobile cross‑platform (React Native / Expo) pour l’enregistrement géographique de résidences (projet SIGAP). Mise en place de formulaires multi‑étapes, intégration de la caméra et de la géolocalisation, communication avec une API REST, normalisation des réponses serveur, amélioration de l’expérience utilisateur (UI/UX).",
        tags: ["React Native", "Expo", "TypeScript", "Node.js", "API REST", "JWT"],
        current: false,
      },
      {
        role: "Master 1 Informatique",
        company: "Université / École (à préciser)",
        period: "Janvier 2026 — En cours",
        desc: "Première année de Master en Informatique. Approfondissement en développement avancé, architecture logicielle et gestion de projets complexes.",
        tags: ["Architecture logicielle", "Projets avancés", "Recherche"],
        current: true,
      },
      {
        role: "Stage Développeur Web",
        company: "MNDPT — Ministère",
        period: "Août — Nov. 2024",
        desc: "Conception et réalisation d'une application web de gestion de stock des consommables informatiques. Suivi des demandes avec validation multi-niveaux selon les rôles.",
        tags: ["Django", "MySQL", "Bootstrap", "Python"],
        current: false,
      },
      {
        role: "Licence 3 Informatique (Diplômé)",
        company: "ENI · Université de Fianarantsoa",
        period: "2024 — Janvier 2026",
        desc: "Obtention de la Licence Professionnelle en Informatique Générale. Projet de fin d'études : SIGAP — application mobile de recensement géolocalisé.",
        tags: ["React Native", "Node.js", "Django", "PostgreSQL"],
        current: false,
      },
      {
        role: "Licence 1 & 2 Informatique",
        company: "ENI · Université de Fianarantsoa",
        period: "2022 — 2024",
        desc: "Fondamentaux en algorithmique, développement web (PHP, JavaScript), bases de données, réseaux et systèmes. Projet bancaire en 2e année.",
        tags: ["PHP", "JavaScript", "MySQL", "Java"],
        current: false,
      },
      {
        role: "Baccalauréat Série C",
        company: "Lycée Catholique Immaculée Conception · Morondava",
        period: "2021 — 2022",
        desc: "Baccalauréat scientifique série C (Mathématiques-Sciences Physiques) avec mention.",
        tags: ["Mathématiques", "Physique", "Informatique"],
        current: false,
      },
    ],
  },

  contact: {
    tag: "Contact",
    title: "Travaillons ensemble",
    subtitle: "Disponible pour des stages, projets freelance ou opportunités. N'hésitez pas à me contacter.",
    email_label: "Email",
    location_label: "Localisation",
    response_label: "Réponse",
    response_value: "Sous 24 heures",
    available_title: "Disponible",
    available_desc: "Ouvert aux stages, projets freelance et opportunités.",
    form_error: "Erreur lors de l'envoi. Veuillez réessayer.",
    form: {
      name: "Nom",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      name_ph: "Votre nom",
      email_ph: "votre@email.com",
      subject_ph: "Stage, projet, collaboration...",
      message_ph: "Décrivez votre projet ou proposition...",
      send: "Envoyer le message",
      sending: "Envoi...",
      sent_title: "Message envoyé !",
      sent_desc: "Merci pour votre message, je vous réponds rapidement !",
      new: "Nouveau message",
    },
  },

  lang_switcher: {
    auto_detect: "Auto-détection navigateur",
  },

  projects_private: "Projet privé / code non public",
  screenshot_count: (n) => `${n} capture(s)`,

  footer: {
    made: "Fait avec React + Tailwind",
  },

  lang: { fr: "FR", en: "EN", ar: "AR" },
};

export default fr;