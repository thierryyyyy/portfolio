// ============================================================
//  🇬🇧 English translations — Thierry's real data
// ============================================================
const en = {
  nav: {
    services: "Services",
    projects: "Portfolio",
    skills: "Skills",
    experience: "Background",
    contact: "Contact",
    hire: "Contact me",
    cv: "Download CV",
  },

  hero: {
    greeting: "Hello, I'm",
    typedStrings: [
      "Web & Mobile Developer",
      "React · Django · Node.js",
      "CS Student · ENI",
      "Available for projects",
    ],
    bio: "3rd-year Computer Science student at ENI, Fianarantsoa. Passionate about web and mobile development, I build useful, well-crafted applications — from backend logic to polished interfaces.",
    cta_hire: "Contact me",
    cta_cv: "Download CV",
    available: "Available",
    stats: [
      { value: "3+", label: "Projects done" },
      { value: "3rd", label: "Year CS Degree" },
      { value: "4", label: "Technologies" },
    ],
    badge_react: "React & Mobile",
    badge_react_sub: "React Native · Expo",
    badge_projects: "SIGAP",
    badge_projects_sub: "Final year project",
    badge_clients: "ENI",
    badge_clients_sub: "Fianarantsoa",
    photo_hint: "// Add your photo",
  },

  services: {
    tag: "Services",
    title: "What I do",
    subtitle: "From concept to deployment — complete web and mobile applications.",
    items: [
      {
        icon: "📱",
        title: "Mobile Development",
        desc: "Cross-platform mobile apps with React Native (Expo). Geolocation, interactive maps and multi-step forms.",
      },
      {
        icon: "⚙️",
        title: "Backend & API",
        desc: "Robust REST APIs with Django (Python) and Node.js/Express. Role management, validation workflows and relational databases.",
      },
      {
        icon: "🌐",
        title: "Web Development",
        desc: "Modern responsive web interfaces. React.js and Vue.js on the frontend, PHP or Django on the backend.",
      },
      {
        icon: "🗄️",
        title: "Database",
        desc: "MySQL and PostgreSQL database design and optimization, with PostGIS for geospatial data.",
      },
    ],
  },

  projects: {
    tag: "Portfolio",
    title: "My Projects",
    count: (n) => `${n} projects`,
    filters: { all: "All" },
    more: "Details",
    featured: "★ Featured",
    live: "View project ↗",
    source: "Source code",
    add_placeholder: "Add your projects\nin config.js",
    items: [
      {
        id: "sigap",
        subtitle: "Mobile · Final Year Thesis",
        title: "SIGAP",
        desc: "Mobile app for geolocated household census for fokontany chiefs in Toliara. Replacing paper census with GPS-based digital collection.",
        longDesc: "Geolocated census system allowing fokontany chiefs in Toliara to collect household data via a mobile app. Interactive map, multi-step forms, photo capture, and agent → secretary validation workflow.",
        metrics: [{ v: "GPS", l: "Geolocation" }, { v: "Multi", l: "Step form" }, { v: "100%", l: "Functional" }],
      },
      {
        id: "stock",
        subtitle: "Web · MNDPT Internship",
        title: "Stock Management",
        desc: "Web app for managing IT consumables and office supplies for the Ministry. Multi-level role-based validation.",
        longDesc: "Built during my MNDPT internship (Aug–Nov 2024). Material request tracking with hierarchical role-based validation, dashboards and stock movement history.",
        metrics: [{ v: "Django", l: "Backend" }, { v: "MySQL", l: "Database" }, { v: "Multi", l: "Roles" }],
      },
      {
        id: "bank",
        subtitle: "Web · University Project",
        title: "Bank Management",
        desc: "Web application for banking operations — clients, accounts, transactions and reporting.",
        longDesc: "University project completed in 2022. Full management of clients, current and savings accounts, transfers, deposits, withdrawals and report generation.",
        metrics: [{ v: "PHP", l: "Backend" }, { v: "MySQL", l: "Database" }, { v: "2022", l: "Year" }],
      },
      {
        id: "ranomafana",
        subtitle: "Web · Personal Project",
        title: "Ranomafana Park",
        desc: "Showcase website for Ranomafana National Park — species, activities and tourist information.",
        longDesc: "First personal web project built in 2021. Static showcase website presenting Ranomafana National Park (Madagascar), its endemic species, hiking activities and practical information.",
        metrics: [{ v: "HTML", l: "Frontend" }, { v: "CSS", l: "Design" }, { v: "2021", l: "Year" }],
      },
    ],
  },

  skills: {
    tag: "Skills",
    title: "Tech Stack",
    subtitle: "Technologies I use in my projects",
    level: (n) => `Level ${n}/5`,
    all: "All",
  },

  experience: {
    tag: "Background",
    title: "Education & Experience",
    current: "Current",
    bullets: [
      "Full-stack web & mobile development",
      "Database design (MySQL, PostgreSQL + PostGIS)",
      "UML, MERISE, Agile methodologies",
      "Professional internship at MNDPT (2024)",
    ],
    items: [
      {
        role: "Web Developer Intern",
        company: "MNDPT — Ministry",
        period: "Aug — Nov 2024",
        desc: "Design and development of a stock management web app for IT consumables. Request tracking with multi-level role-based validation.",
        tags: ["Django", "MySQL", "Bootstrap", "Python"],
        current: false,
      },
      {
        role: "BSc Year 3 — Computer Science",
        company: "ENI · University of Fianarantsoa",
        period: "2024 — 2025",
        desc: "3rd year of Professional Bachelor's in General Computer Science. Final project: SIGAP — geolocated mobile census application.",
        tags: ["React Native", "Node.js", "Django", "PostgreSQL"],
        current: true,
      },
      {
        role: "BSc Years 1 & 2 — Computer Science",
        company: "ENI · University of Fianarantsoa",
        period: "2022 — 2024",
        desc: "Fundamentals in algorithms, web development (PHP, JavaScript), databases, networking and systems. Banking project in year 2.",
        tags: ["PHP", "JavaScript", "MySQL", "Java"],
        current: false,
      },
      {
        role: "Baccalaureate — Science Series C",
        company: "Lycée Catholique Immaculée Conception · Morondava",
        period: "2021 — 2022",
        desc: "Scientific baccalaureate (Mathematics-Physics series) with distinction.",
        tags: ["Mathematics", "Physics", "Computer Science"],
        current: false,
      },
    ],
  },

  contact: {
    tag: "Contact",
    title: "Let's work together",
    subtitle: "Available for internships, freelance projects or opportunities. Feel free to reach out.",
    email_label: "Email",
    location_label: "Location",
    response_label: "Response",
    response_value: "Within 24 hours",
    available_title: "Available",
    available_desc: "Open to internships, freelance projects and opportunities.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      name_ph: "Your name",
      email_ph: "your@email.com",
      subject_ph: "Internship, project, collaboration...",
      message_ph: "Describe your project or proposal...",
      send: "Send message",
      sending: "Sending...",
      sent_title: "Message sent!",
      sent_desc: "Thank you for your message, I'll reply soon!",
      new: "New message",
    },
  },

  footer: {
    made: "Built with React + Tailwind",
  },

  lang: { fr: "FR", en: "EN", ar: "AR" },
};

export default en;
