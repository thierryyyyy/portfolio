// ============================================================
//  🇺🇸 English Translations — Thierry's Real Data
// ============================================================
const en = {
  nav: {
    services: "Services",
    projects: "Portfolio",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    hire: "Hire Me",
    cv: "Download CV",
  },

  hero: {
    greeting: "Hi, I am",
    typedStrings: [
      "Full-Stack Web & Mobile Developer",
      "Expert React · Django · Node.js · PHP",
      "Pixel-Perfect Experience Creator",
      "Master's in Computer Science",
      "Available for missions",
    ],
    bio: "Creative developer at the intersection of design and engineering. I transform your ideas into pixel-perfect interfaces using React, Django, Node.js, and PHP. My commitment: combining scalable code with UX excellence for immediate business impact.",
    cta_hire: "Hire Me",
    cta_cv: "Download CV",
    available: "Available",
    stats: [
      { value: "5+", label: "Projects delivered" },
      { value: "Master 1", label: "Education level" },
      { value: "5+", label: "Technologies" },
    ],
    badge_react: "React & Mobile",
    badge_react_sub: "React Native · Expo",
    badge_projects: "SIGAP",
    badge_projects_sub: "Final Year Project",
    badge_clients: "Master's",
    badge_clients_sub: "Computer Science",
    photo_hint: "// Add your photo",
  },

  services: {
    tag: "Services",
    title: "What I do",
    subtitle: "From concept to production — complete web and mobile applications.",
    items: [
      {
        icon: "📱",
        title: "Mobile Development",
        desc: "Cross-platform mobile applications with React Native (Expo). Geolocation, interactive maps, and multi-step forms.",
      },
      {
        icon: "⚙️",
        title: "Backend & API",
        desc: "Robust REST APIs with Django (Python) and Node.js/Express. Role management, validation workflows, and relational databases.",
      },
      {
        icon: "🌐",
        title: "Web Development",
        desc: "Modern and responsive web interfaces. React.js, Vue.js on the frontend, PHP or Django on the backend.",
      },
      {
        icon: "🗄️",
        title: "Database",
        desc: "Design and optimization of MySQL and PostgreSQL databases, with PostGIS for geospatial data.",
      },
    ],
  },

  projects: {
    tag: "Portfolio",
    title: "My Projects",
    count: (n) => `${n} projects`,
    filters: { all: "All" },
    more: "Details",
    featured: "★ Featured Project",
    live: "Live Demo ↗",
    source: "Source Code",
    add_placeholder: "Add your projects\nin config.js",
    items: [
      {
        id: "sigap",
        subtitle: "Mobile · Final Year Thesis",
        title: "SIGAP",
        desc: "Geolocated household census mobile application for fokontany chiefs in Toliara. Replacing paper census with digital GPS collection.",
        longDesc: "Geolocated census system allowing fokontany chiefs in Toliara to collect household data via a mobile application. Interactive map, multi-step forms, photo capture, and agent → secretary validation workflow.",
        metrics: [{ v: "GPS", l: "Geolocation" }, { v: "Multi", l: "Steps" }, { v: "100%", l: "Functional" }],
      },
      {
        id: "stock",
        subtitle: "Web · MNDPT Internship",
        title: "Stock Management",
        desc: "Web application for managing IT consumables and office supplies for the Ministry. Multi-level validation based on roles.",
        longDesc: "Developed during my internship at MNDPT (Aug–Nov 2024). Tracking material requests with hierarchical validation by roles, dashboards, and stock movement history.",
        metrics: [{ v: "Django", l: "Backend" }, { v: "MySQL", l: "Database" }, { v: "Multi", l: "Roles" }],
      },
      {
        id: "bank",
        subtitle: "Web · University Project",
        title: "Banking Management",
        desc: "Web application for managing banking operations — clients, accounts, transactions, and reporting.",
        longDesc: "University project completed in 2022. Complete management of clients, current and savings accounts, transfers, deposits, withdrawals, and report generation.",
        metrics: [{ v: "PHP", l: "Backend" }, { v: "MySQL", l: "DB" }, { v: "2022", l: "Year" }],
      },
      {
        id: "rotransport",
        subtitle: "Web · Operational Research",
        title: "RO Transport",
        desc: "Interactive web application to solve transport problems in Operational Research. Balas-Hammer and MINICO methods.",
        longDesc: "Educational tool allowing users to enter transport problem data, define the number of origins and destinations, automatically calculate solutions via Python (FastAPI/Flask), and compare several resolution methods (Balas-Hammer, MINICO) with optimal total cost display.",
        metrics: [{ v: "Python", l: "Backend" }, { v: "FastAPI", l: "API" }, { v: "2", l: "Methods" }],
      },
      {
        id: "ranomafana",
        subtitle: "Web · Personal Project",
        title: "Ranomafana Park",
        desc: "Showcase site for Ranomafana National Park — presentation of species, activities, and tourist information.",
        longDesc: "First personal web project completed in 2021. Static showcase site presenting Ranomafana National Park (Madagascar), its endemic species, hiking activities, and practical information.",
        metrics: [{ v: "HTML", l: "Frontend" }, { v: "CSS", l: "Design" }, { v: "2021", l: "Year" }],
      },
    ],
  },

  skills: {
    tag: "Skills",
    title: "Technical Stack",
    subtitle: "Technologies I use in my projects",
    level: (n) => `Level ${n}/5`,
    all: "All",
  },

  experience: {
    tag: "Experience",
    title: "Education & Experience",
    current: "Current",
    bullets: [
      "Full-stack web & mobile development",
      "Database design (MySQL, PostgreSQL + PostGIS)",
      "UML, MERISE, Agile methodologies",
      "Professional internship at MNDPT (2024)",
      "Internship at Tarondro (ALTRADIS) – 2025",
    ],
    items: [
      {
        role: "Full Stack Mobile Developer Intern",
        company: "Tarondro – ALTRADIS Group, Analakely",
        period: "September — November 2025 (3 months)",
        desc: "Design and development of a cross-platform mobile application (React Native / Expo) for geographic residence registration (SIGAP project). Implementation of multi-step forms, camera and geolocation integration, communication with a REST API, server response normalization, and UI/UX improvement.",
        tags: ["React Native", "Expo", "TypeScript", "Node.js", "REST API", "JWT"],
        current: false,
      },
      {
        role: "Master 1 in Computer Science",
        company: "University / School (to be specified)",
        period: "January 2026 — Present",
        desc: "First year of Master's in Computer Science. Deepening in advanced development, software architecture, and complex project management.",
        tags: ["Software Architecture", "Advanced Projects", "Research"],
        current: true,
      },
      {
        role: "Web Developer Intern",
        company: "MNDPT — Ministry",
        period: "August — Nov 2024",
        desc: "Design and implementation of a web application for IT consumables stock management. Tracking requests with multi-level validation based on roles.",
        tags: ["Django", "MySQL", "Bootstrap", "Python"],
        current: false,
      },
      {
        role: "Bachelor's in Computer Science (Graduate)",
        company: "ENI · University of Fianarantsoa",
        period: "2024 — January 2026",
        desc: "Obtained a Professional Bachelor's Degree in General Computer Science. Final year project: SIGAP — geolocated census mobile application.",
        tags: ["React Native", "Node.js", "Django", "PostgreSQL"],
        current: false,
      },
      {
        role: "Bachelor's 1st & 2nd Year",
        company: "ENI · University of Fianarantsoa",
        period: "2022 — 2024",
        desc: "Fundamentals in algorithms, web development (PHP, JavaScript), databases, networks, and systems. Banking project in 2nd year.",
        tags: ["PHP", "JavaScript", "MySQL", "Java"],
        current: false,
      },
      {
        role: "Baccalaureate Series C",
        company: "Lycée Catholique Immaculée Conception · Morondava",
        period: "2021 — 2022",
        desc: "Scientific Baccalaureate Series C (Mathematics-Physical Sciences) with honors.",
        tags: ["Mathematics", "Physics", "Computer Science"],
        current: false,
      },
    ],
  },

  contact: {
    tag: "Contact",
    title: "Let's work together",
    subtitle: "Available for internships, freelance projects, or opportunities. Feel free to contact me.",
    email_label: "Email",
    location_label: "Location",
    response_label: "Response",
    response_value: "Within 24 hours",
    available_title: "Available",
    available_desc: "Open to internships, freelance projects, and opportunities.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      name_ph: "Your name",
      email_ph: "your@email.com",
      subject_ph: "Internship, project, collaboration...",
      message_ph: "Describe your project or proposal...",
      send: "Send Message",
      sending: "Sending...",
      sent_title: "Message sent!",
      sent_desc: "Thank you for your message, I will get back to you soon!",
      new: "New message",
    },
  },

  footer: {
    made: "Made with React + Tailwind",
  },

  lang: { fr: "FR", en: "EN", ar: "AR" },
};

export default en;