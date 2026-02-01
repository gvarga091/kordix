# 🎯 Gergő Varga - Portfolio Website

Modern, bilingual portfolio website showcasing project coordination and full-stack development expertise.

[![Built with React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- 🌍 **Bilingual Support** - Full English/Hungarian (EN ↔ HU) internationalization
- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🚀 **Performance Optimized** - Built with Vite for lightning-fast load times
- 📧 **Contact Form** - Integrated with Formspree for easy communication
- 🔍 **SEO Ready** - Complete meta tags, Open Graph, and Twitter Card support
- ♿ **Accessible** - WCAG compliant design

## 🛠️ Tech Stack

**Core:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

**Features:**
- React Context API (i18n state management)
- LocalStorage (language persistence)
- Formspree (contact form backend)
- Lucide React (icon system)

## 📁 Project Structure

```
src/
├── i18n/
│   ├── translations.ts      # EN + HU translations
│   └── LanguageContext.tsx  # Language state management
├── components/
│   ├── Navigation.tsx        # Header with language toggle
│   ├── Hero.tsx             # Landing section with code snippet
│   ├── About.tsx            # About section with profile
│   ├── Projects.tsx         # Project showcase grid
│   ├── Skills.tsx           # Skills & philosophy
│   ├── Contact.tsx          # Contact form
│   └── LanguageToggle.tsx   # Language switcher
└── App.tsx                  # Main app with routing

public/
├── og-image.jpg             # Social media preview image
├── favicon.svg              # Browser icon
└── profile-photo.jpg        # Profile picture
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run type-check
```

### Deployment

The site is optimized for deployment on:
- **Vercel** (recommended)
- Netlify
- Cloudflare Pages

## 🌐 Internationalization (i18n)

Language switching is built-in with:
- **EN/HU toggle** in navigation
- **LocalStorage persistence** - remembers user preference
- **HTML lang attribute** auto-updates
- Complete translations for all UI elements

Switch languages using the globe icon in the navigation bar.

## 📧 Contact Form

Contact form is powered by [Formspree](https://formspree.io/):
- **Endpoint:** `https://formspree.io/f/xzzypdlo`
- Spam protection enabled
- Email notifications configured

## 🎨 Customization

### Updating Content

1. **Profile Photo:** Replace `/public/profile-photo.jpg`
2. **OG Image:** Replace `/public/og-image.jpg` (1200x630px)
3. **Favicon:** Replace `/public/favicon.svg`

### Translations

Edit `/src/i18n/translations.ts` to update text content in both languages.

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Color scheme: Blue (#3B82F6) + Orange (#F97316)

## 📊 Project Status

- ✅ Contact form integration
- ✅ Bilingual support (EN/HU)
- ✅ SEO optimization
- ✅ Profile photo
- ✅ Favicon & OG image
- 🔄 Domain setup (in progress)
- 🔄 First deployment (pending)

## 📄 License

© 2024 Gergő Varga. All rights reserved.

## 📞 Contact

**Gergő Varga**
- Email: gvarga091@gmail.com
- LinkedIn: [linkedin.com/in/gvarga091](https://linkedin.com/in/gvarga091)
- GitHub: [github.com/gvarga091](https://github.com/gvarga091)
- Location: Eger, Hungary 🇭🇺

---

**Design:** Original Figma design available at [figma.com/design/BbTZ8TTJulXYh5sYgFxsXj](https://www.figma.com/design/BbTZ8TTJulXYh5sYgFxsXj/Portfolio-Website)

Built with ❤️ in Hungary
