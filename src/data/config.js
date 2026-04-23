// ============================================================
//  📁 src/data/config.js — ANDRIANAIVOSON Hariniaina Thierry
// ============================================================

export const PERSONAL = {
  name:          "ANDRIANAIVOSON Hariniaina Thierry",
  nameShort:     "Thierry",
  nameInitials:  "AHT",
  title:         "Développeur Web & Mobile Fullstack",
  dob:           "08 Mai 2004",
  email:         "thierryhariniaina3@gmail.com",
  phone:         "+261 34 16 788 37",
  phone2:        "+261 33 71 697 91",
  location:      "Ambolofoty, Toliara, Madagascar",
  locationShort: "Toliara, Madagascar",
  availability:  true,
  cvUrl:         "/cv.pdf",
  social: {
    github:   "https://github.com/thierryyyyy",    // ✅ modifié
    linkedin: "https://linkedin.com/in/",
    email:    "mailto:thierryhariniaina3@gmail.com",
  },
};

// ── Compétences ──────────────────────────────────────────────
export const SKILLS = [
  { name: "React.js",      level: 4, category: "Frontend" },
  { name: "React Native",  level: 4, category: "Frontend" },
  { name: "Vue.js",        level: 3, category: "Frontend" },
  { name: "JavaScript",    level: 4, category: "Frontend" },
  { name: "TypeScript",    level: 3, category: "Frontend" },
  { name: "Bootstrap",     level: 4, category: "Frontend" },
  { name: "Django",        level: 4, category: "Backend"  },
  { name: "Node.js",       level: 3, category: "Backend"  },
  { name: "Express.js",    level: 3, category: "Backend"  },
  { name: "PHP",           level: 3, category: "Backend"  },
  { name: "Python",        level: 4, category: "Backend"  },
  { name: "API REST",      level: 4, category: "Backend"  },
  { name: "MySQL",         level: 4, category: "Database" },
  { name: "PostgreSQL",    level: 4, category: "Database" },
  { name: "PostGIS",       level: 3, category: "Database" },
  { name: "SQL",           level: 4, category: "Database" },
  { name: "Git",           level: 4, category: "Outils"   },
  { name: "Figma",         level: 3, category: "Outils"   },
  { name: "UML/MERISE",    level: 4, category: "Outils"   },
  { name: "Agile/2TUP",    level: 3, category: "Outils"   },
];

// ── Projets — config visuelle (traductions dans i18n/) ───────
export const PROJECT_VISUALS = {
  sigap: {
    bg: "linear-gradient(135deg,#0D1B2A,#1A2E44)",
    accent: "#0066FF", icon: "🗺️",
    tags: ["React Native","Expo","Node.js","Express","Django","PostgreSQL","PostGIS","Google Maps API"],
    featured: true, cat: "Mobile", liveUrl: null, githubUrl: null,
  },
  mndpt: {
    bg: "linear-gradient(135deg,#0D2218,#1A3A28)",
    accent: "#059669", icon: "📦",
    tags: ["Django","Python","MySQL","Bootstrap","HTML/CSS"],
    featured: true, cat: "Web", liveUrl: null, githubUrl: null,
  },
  banque: {
    bg: "linear-gradient(135deg,#1A0D2E,#2E1A44)",
    accent: "#7C3AED", icon: "🏦",
    tags: ["PHP","MySQL","jQuery","HTML/CSS","Bootstrap"],
    featured: false, cat: "Web", liveUrl: null, githubUrl: null,
  },
  ranomafana: {
    bg: "linear-gradient(135deg,#162A0D,#253D18)",
    accent: "#65A30D", icon: "🌿",
    tags: ["HTML5","CSS3"],
    featured: false, cat: "Web", liveUrl: null, githubUrl: null,
  },
};