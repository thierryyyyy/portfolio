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
      "Développeur Web & Mobile",
      "React · Django · Node.js",
      "Étudiant Licence 3 · ENI",
      "Disponible pour missions",
    ],
    bio: "Étudiant en 3e année de Licence Informatique à l'ENI de Fianarantsoa. Passionné par le développement web et mobile, je construis des applications utiles et bien pensées — du backend à l'interface.",
    cta_hire: "Me contacter",
    cta_cv: "Télécharger CV",
    available: "Disponible",
    stats: [
      { value: "3+", label: "Projets livrés" },
      { value: "3e", label: "Année Licence" },
      { value: "4", label: "Technologies" },
    ],
    badge_react: "React & Mobile",
    badge_react_sub: "React Native · Expo",
    badge_projects: "SIGAP",
    badge_projects_sub: "Projet de fin d'études",
    badge_clients: "ENI",
    badge_clients_sub: "Fianarantsoa",
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
        id: "stock",
        subtitle: "Web · Stage MNDPT",
        title: "Gestion de Stock",
        desc: "Application web de gestion des consommables informatiques et fournitures de bureau pour le Ministère. Validation multi-niveaux selon les rôles.",
        longDesc: "Développée lors de mon stage au MNDPT (août–nov. 2024). Suivi des demandes de matériel avec validation hiérarchique par rôles, tableaux de bord et historique des mouvements de stock.",
        metrics: [{ v: "Django", l: "Backend" }, { v: "MySQL", l: "Base de données" }, { v: "Multi", l: "Rôles" }],
      },
      {
        id: "bank",
        subtitle: "Web · Projet universitaire",
        title: "Gestion Bancaire",
        desc: "Application web de gestion des opérations bancaires — clients, comptes, transactions et reporting.",
        longDesc: "Projet universitaire réalisé en 2022. Gestion complète des clients, comptes courants et d'épargne, virements, dépôts, retraits et génération de rapports.",
        metrics: [{ v: "PHP", l: "Backend" }, { v: "MySQL", l: "BDD" }, { v: "2022", l: "Année" }],
      },
      {
        id: "ranomafana",
        subtitle: "Web · Projet personnel",
        title: "Parc Ranomafana",
        desc: "Site vitrine pour le Parc National Ranomafana — présentation des espèces, activités et informations touristiques.",
        longDesc: "Premier projet web personnel réalisé en 2021. Site vitrine statique présentant le Parc National Ranomafana (Madagascar), ses espèces endémiques, activités de randonnée et informations pratiques.",
        metrics: [{ v: "HTML", l: "Frontend" }, { v: "CSS", l: "Design" }, { v: "2021", l: "Année" }],
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
    ],
    items: [
      {
        role: "Stage Développeur Web",
        company: "MNDPT — Ministère",
        period: "Août — Nov. 2024",
        desc: "Conception et réalisation d'une application web de gestion de stock des consommables informatiques. Suivi des demandes avec validation multi-niveaux selon les rôles.",
        tags: ["Django", "MySQL", "Bootstrap", "Python"],
        current: false,
      },
      {
        role: "Licence 3 Informatique",
        company: "ENI · Université de Fianarantsoa",
        period: "2024 — 2025",
        desc: "3e année de Licence Professionnelle en Informatique Générale. Projet de fin d'études : SIGAP — application mobile de recensement géolocalisé.",
        tags: ["React Native", "Node.js", "Django", "PostgreSQL"],
        current: true,
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

  footer: {
    made: "Fait avec React + Tailwind",
  },

  lang: { fr: "FR", en: "EN", ar: "AR" },
};

export default fr;
