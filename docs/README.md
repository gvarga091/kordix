# Portfolio Documentation

## 📚 Dokumentáció áttekintés

Ebben a mappában találod a portfolio fejlesztéséhez és karbantartásához szükséges összes dokumentációt.

---

## 📄 Fájlok

### [TODO.md](./TODO.md)
**Teljes feladat lista prioritási sorrendben**
- 🔴 Kritikus (azonnal): Contact adatok, Form backend, SEO
- 🟠 Fontos (1-2 hét): Magyar nyelv, Képek, Analytics
- 🟡 Opcionális: Dark mode, Blog, Performance opt.

**Quick Win Checklist:** 1-2 óra alatt deployolható verzió!

### [EMAIL_SETUP.md](./EMAIL_SETUP.md)
**Contact form backend implementálás**
- Formspree setup (ajánlott)
- EmailJS alternatíva
- Django backend opció
- Példa kódok és hibakezelés

### [I18N_SETUP.md](./I18N_SETUP.md)
**Kétnyelvű oldal (magyar/angol) létrehozása**
- Context API használata
- Translations struktura
- Language toggle komponens
- Lépésről lépésre útmutató (~1-2 óra)

### [DEPLOYMENT.md](./DEPLOYMENT.md)
**Hosting és deployment**
- Vercel (ajánlott) - 2 perc deploy
- Netlify, GitHub Pages, Cloudflare alternatívák
- Custom domain csatlakoztatás
- CI/CD setup
- Performance optimization

---

## 🎯 Gyors kezdés (First Steps)

Ha most kezded a projektet:

### 1. Kritikus feladatok (ma)
```bash
# 1. Contact adatok frissítése
# Fájl: src/components/Contact.tsx
# Írd be az igazi email/LinkedIn/GitHub URL-eket

# 2. Form backend
# Lásd: EMAIL_SETUP.md
# Ajánlás: Formspree (15 perc)

# 3. SEO meta tagek
# Fájl: index.html
# Lásd: TODO.md #4. pont
```

### 2. Build és local teszt
```bash
npm install
npm run dev
# Böngésző: http://localhost:5173
```

### 3. Deploy
```bash
# GitHub repo
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main

# Vercel deploy (lásd DEPLOYMENT.md)
# 2 perc, ingyenes, automatikus
```

---

## 📊 Fejlesztési ütemterv

### Hét 1 (Alap működés)
- [x] Figma → React konverzió
- [ ] Contact adatok frissítése
- [ ] Form backend (Formspree)
- [ ] SEO meta tagek
- [ ] Vercel deploy
- [ ] Test URL: működő portfolio ✅

### Hét 2-3 (Fejlesztések)
- [ ] Magyar nyelv (i18n)
- [ ] Saját projekt képek
- [ ] Analytics (Google/Vercel)
- [ ] README frissítés
- [ ] Performance audit

### Hét 4+ (Opcionális)
- [ ] Custom domain
- [ ] Dark mode
- [ ] Project detail pages
- [ ] Blog section (opcionális)

---

## 🛠 Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- Framer Motion (animációk)

**Komponensek:**
- Radix UI (accessible components)
- Lucide React (ikonok)
- Sonner (toast notifications)

**Hosting:**
- Vercel (ajánlott)
- Alternatívák: Netlify, GitHub Pages, Cloudflare

---

## 📖 Hasznos parancsok

```bash
# Development
npm run dev              # Dev server (http://localhost:5173)
npm run build            # Production build
npm run preview          # Build előnézet

# Deployment
git push                 # Auto-deploy (ha CI/CD van)
npm run deploy           # GitHub Pages (ha konfigurálva)

# Troubleshooting
npm install              # Dependencies telepítése
npm run build            # Build teszt (hibaellenőrzés)
rm -rf node_modules      # Ha valami elromlik
npm install              # Újratelepítés
```

---

## 🔗 Hasznos linkek

### Eszközök
- **Formspree:** https://formspree.io/
- **Vercel:** https://vercel.com/
- **Favicon Generator:** https://realfavicongenerator.net/
- **Image Optimizer:** https://tinypng.com/
- **OG Image Generator:** https://www.opengraph.xyz/

### Tanulás
- **Vite Docs:** https://vitejs.dev/
- **React Docs:** https://react.dev/
- **Tailwind:** https://tailwindcss.com/
- **Framer Motion:** https://www.framer.com/motion/

### Monitoring
- **Google Search Console:** https://search.google.com/search-console/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Lighthouse:** Chrome DevTools

---

## 💡 Következő lépések

1. **Olvasd el:** `TODO.md` → nézd meg a Quick Win checklist-et
2. **Kezdd el:** Contact adatok + Form backend (~20 perc)
3. **Deploy:** Vercel-re (~10 perc) → működő URL
4. **Finomítás:** Magyar nyelv, képek, analytics (1-2 hét)

---

## 🤝 Támogatás

Ha elakadtál vagy kérdésed van:
1. Ellenőrizd a megfelelő `.md` fájlt (TODO, EMAIL_SETUP, stb.)
2. Nézd meg a troubleshooting szekciót (DEPLOYMENT.md)
3. Browser console check (F12 → Console)
4. Build error check: `npm run build`

---

## 📝 Changelog

- **2025-11-07:** Dokumentáció létrehozva
  - TODO.md: Teljes task lista
  - EMAIL_SETUP.md: Form backend guide
  - I18N_SETUP.md: Magyar nyelv implementálás
  - DEPLOYMENT.md: Hosting és deploy
  - README.md: Áttekintés

---

**Szerző:** Gergő (Gery)  
**Projekt:** Portfolio Website  
**Tech:** React + TypeScript + Vite + Tailwind
