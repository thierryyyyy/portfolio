# 🚀 Portfolio — Développeur Fullstack

Portfolio moderne en **React.js + Tailwind CSS** avec un design style "vitrine tech".

## ⚡ Installation

```bash
npm install
npm start       # Démarre en mode développement
npm run build   # Build de production
```

## ✏️ Personnalisation

**Tout se passe dans un seul fichier :**

```
src/data/config.js
```

Ce fichier contient **toutes les données** du portfolio. Modifiez-le sans toucher au code des composants.

### Sections configurables :

| Section | Variable | Description |
|---------|----------|-------------|
| Infos personnelles | `PERSONAL` | Nom, titre, email, réseaux sociaux |
| Statistiques hero | `STATS` | Années d'exp., projets livrés... |
| Services | `SERVICES` | Ce que vous proposez |
| Projets | `PROJECTS` | Vos réalisations avec métriques |
| Compétences | `SKILLS` | Stack technique avec niveaux |
| Expérience | `EXPERIENCE` | Parcours professionnel |
| Navigation | `NAV_LINKS` | Liens du menu |

## ➕ Ajouter un projet

Dans `src/data/config.js`, ajoutez un objet dans le tableau `PROJECTS` :

```js
{
  id: 5, // ID unique
  title: "Mon Nouveau Projet",
  description: "Description courte pour la carte",
  longDescription: "Description détaillée dans la modale",
  icon: "🔥", // Emoji affiché
  color: "from-pink-500/20 to-red-600/20", // Gradient Tailwind
  accentColor: "#EC4899", // Couleur hex de l'accent
  tags: ["React", "Node.js", "PostgreSQL"],
  category: "SaaS", // Filtre de catégorie
  liveUrl: "https://mon-site.com", // null si pas de démo
  githubUrl: "https://github.com/...", // null si privé
  featured: false, // true = apparaît en grande carte
  metrics: [ // Optionnel
    { label: "Utilisateurs", value: "1K+" },
    { label: "Uptime", value: "99%" },
  ],
},
```

## ➕ Ajouter une compétence

```js
{ category: "Frontend", name: "Svelte", icon: "🔴", level: 3 },
// level: 1 à 5
```

## 🎨 Changer les couleurs

Dans `tailwind.config.js`, section `colors` :

```js
colors: {
  bg: '#0A0A0F',       // Fond principal
  surface: '#13131A',   // Fond des cartes
  border: '#1E1E2E',    // Bordures
  accent: '#00D4FF',    // Cyan — couleur principale
  'accent-2': '#7C3AED', // Violet — couleur secondaire
  muted: '#6B7280',     // Texte secondaire
  light: '#E2E8F0',     // Texte principal
}
```

## 📦 Structure des fichiers

```
src/
├── data/
│   └── config.js          # ← TOUT PERSONNALISER ICI
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Projects.jsx        # Cartes + Modal interactif
│   ├── Skills.jsx          # Barres de niveau + filtres
│   ├── Experience.jsx      # Timeline
│   ├── Contact.jsx         # Formulaire de contact
│   └── Footer.jsx
├── App.jsx
├── index.js
└── index.css
```

## 📧 Formulaire de contact

Pour activer l'envoi d'emails, intégrez **EmailJS** dans `Contact.jsx` :

```bash
npm install @emailjs/browser
```

Remplacez le `setTimeout` par :
```js
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

## 🚀 Déploiement

```bash
# Vercel
npx vercel

# Netlify
npm run build
# Uploadez le dossier /build sur netlify.com

# GitHub Pages
npm install gh-pages --save-dev
# Ajoutez "homepage": "https://username.github.io/portfolio" dans package.json
# "deploy": "gh-pages -d build" dans scripts
npm run deploy
```
