# Portfolio Website - TODO List

## 📅 Utolsó frissítés: 2025-11-08 11:30

---

## 🔴 **KRITIKUS - Azonnal szükséges**

### ~~1. Kapcsolati adatok frissítése~~ ✅ KÉSZ
**Fájl:** `src/components/Contact.tsx`

- [x] Email cím beírva
- [x] LinkedIn profil URL
- [x] GitHub profil URL

**Befejezve:** 2025-11-07

---

### ~~2. Contact Form Backend Setup~~ ✅ KÉSZ
**Fájl:** `src/components/Contact.tsx`

**Megoldás: Formspree használata**

- [x] Formspree regisztráció
- [x] Form létrehozása és ID másolása
- [x] Kód frissítése
- [x] Teszt email küldése
- [x] Email megérkezett

**Befejezve:** 2025-11-07

---

### 3. SEO Optimalizáció
**Fájl:** `index.html` + új meta fájlok

**Mit kell hozzáadni:**

```html
<!-- index.html <head> részbe -->
<title>Gergő - Project Coordinator & Developer | Portfolio</title>
<meta name="description" content="Project Coordinator and Developer specializing in Django, Python, and system optimization. Based in Hungary.">
<meta name="keywords" content="developer, project coordinator, django, python, portfolio, hungary">
<meta name="author" content="Gergő Varga">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://yourdomain.com/">
<meta property="og:title" content="Gergő - Project Coordinator & Developer">
<meta property="og:description" content="Building robust web applications and leading technical projects.">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://yourdomain.com/">
<meta name="twitter:title" content="Gergő - Project Coordinator & Developer">
<meta name="twitter:description" content="Building robust web applications and leading technical projects.">
<meta name="twitter:image" content="https://yourdomain.com/og-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

**Feladatok:**
- [ ] Meta tagek hozzáadása
- [ ] OG image készítése (1200x630px)
- [ ] Favicon generálása (használd: https://realfavicongenerator.net/)
- [ ] Képek elhelyezése a `public/` mappában

**Idő:** ~30 perc

**Következő lépés:** Lásd `docs/04-seo-meta.md`

---

### 4. First Deploy
**Platform:** Vercel (ajánlott)

**Vercel deployment lépések:**
1. GitHub-ra push-old a projektet
2. Vercel regisztráció (GitHub accounttal)
3. Import project → válaszd ki a repo-t
4. Build settings automatikusan felismerve
5. Deploy → kapsz egy URL-t (pl. yourname.vercel.app)

**Feladatok:**
- [ ] GitHub repo létrehozása (ha még nincs)
- [ ] Vercel account
- [ ] Projekt deploy
- [ ] Production URL tesztelve

**Idő:** ~30 perc

**Részletek:** Lásd `docs/06-deployment.md`

---

## 🟠 **FONTOS - 1-2 héten belül**

### ~~5. Magyar nyelv támogatás~~ ✅ KÉSZ
**Cél:** Kétnyelvű oldal (magyar/angol váltással)

**Implementált fájlok:**
- [x] `src/i18n/translations.ts` - fordítások
- [x] `src/i18n/LanguageContext.tsx` - nyelv state management
- [x] `src/components/LanguageToggle.tsx` - váltó gomb
- [x] `src/App.tsx` - Provider wrapper
- [x] `src/components/Navigation.tsx` - i18n
- [x] `src/components/Hero.tsx` - i18n
- [x] `src/components/About.tsx` - i18n
- [x] `src/components/Projects.tsx` - i18n
- [x] `src/components/Skills.tsx` - i18n
- [x] `src/components/Contact.tsx` - i18n

**Működő funkciók:**
- ✅ EN ↔ HU váltás Globe gombbal
- ✅ LocalStorage mentés
- ✅ HTML lang attribútum automatikus frissítés
- ✅ Mobil menü támogatás
- ✅ Toast üzenetek fordítva

**Befejezve:** 2025-11-08

**Részletek:** Lásd `docs/I18N_SETUP.md`

---

### 6. Projekt képek lecserélése
**Jelenlegi probléma:**  
Unsplash placeholder képek vannak, nem a saját projektekről.

**Megoldás:**

**Mappák létrehozása:**
```
public/
  ├── projects/
  │   ├── service-management.jpg
  │   ├── route-optimization.jpg
  │   ├── villany-viz-eger.jpg
  │   ├── gabor-ai.jpg
  │   ├── time-tracking.jpg
  │   ├── rfid-system.jpg
  │   ├── warehouse-mgmt.jpg
  │   ├── pdf-generator.jpg
  │   └── sd-card-tool.jpg
```

**Képek specifikációja:**
- **Formátum:** WebP (vagy JPG fallback)
- **Méret:** 1200x800px (3:2 ratio)
- **Optimalizálás:** TinyPNG vagy Squoosh használata
- **Max fájlméret:** 200KB per kép

**Feladatok:**
- [ ] Screenshotok készítése a projektekről
- [ ] Képek átméretezése és optimalizálása
- [ ] Mappák létrehozása és képek másolása
- [ ] `Projects.tsx` frissítése (image property módosítása)

**Idő:** ~1 óra (+ képek előkészítése)

**Részletek:** Lásd `docs/05-project-images.md`

---

### 7. Analytics & Monitoring
**Cél:** Látogatói statisztikák követése

**Opció A: Google Analytics 4**
1. Google Analytics account létrehozása
2. Tracking ID másolása
3. Script hozzáadása az `index.html`-hez

**Opció B: Plausible Analytics (Privát, GDPR-barát)**
- Egyszerűbb, privacy-focused
- Nincs cookie banner szükség
- https://plausible.io/

**Feladatok:**
- [ ] Analytics platform kiválasztása
- [ ] Account setup
- [ ] Tracking code beillesztése
- [ ] Cookie policy hozzáadása (ha Google Analytics)

**Idő:** ~20 perc

---

### 8. README.md frissítése
**Tartalmaznia kell:**
- Projekt leírás
- Tech stack
- Installation instructions
- Development commands
- Deployment guide

**Idő:** ~20 perc

---

## 🟡 **OPCIONÁLIS - Fejlesztések**

### 9. Dark/Light mode toggle
**Komponens:** `src/components/ThemeToggle.tsx`

**Package:** `next-themes` már telepítve van!

**Lépések:**
- [ ] Theme provider setup az `App.tsx`-ben
- [ ] Toggle gomb a Navigation-ben
- [ ] Tailwind config frissítése dark mode-hoz

**Idő:** ~45 perc

---

### 10. Blog szekció
**Cél:** Technikai cikkek írása (opcionális, de SEO szempontból jó)

**Megoldás:**
- Markdown alapú blog (MDX)
- Vagy külső platform integrációja (Medium, Dev.to)

**Idő:** ~3-4 óra

---

### 11. Project detail oldalak
**Cél:** Minden projekthez külön detailed page modal/route-tal

**Megoldás opciók:**
1. Modal alapú (egyszerűbb) - overlay a project card-on
2. React Router alapú (URL-ekkel) - pl. `/project/service-management`

**Idő:** ~2-3 óra

---

### 12. Performance optimalizáció

**Feladatok:**
- [ ] Lazy loading komponensekhez
- [ ] Image lazy loading
- [ ] Bundle size optimization
- [ ] Lighthouse audit futtatása

**Példa:**
```tsx
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));

// App.tsx-ben:
<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

**Idő:** ~1 óra

---

### 13. Custom Domain
**Platform:** Namecheap, Cloudflare, vagy Google Domains

**Lépések:**
- [ ] Domain vásárlás
- [ ] DNS beállítások Vercel szerint
- [ ] Domain csatlakoztatás
- [ ] SSL ellenőrzés

**Idő:** ~30 perc (+ domain propagation idő)

---

## 📝 **EGYÉB FEJLESZTÉSEK**

### 14. Environment változók
**Fájl:** `.env` létrehozása

```env
VITE_FORMSPREE_ID=your_form_id_here
VITE_GA_TRACKING_ID=your_ga_id_here
VITE_SITE_URL=https://yourdomain.com
```

**Gitignore frissítése:**
```
# .gitignore-ba add hozzá
.env
.env.local
```

**Idő:** ~10 perc

---

### 15. Accessibility (A11y) javítások
**Ellenőrizendő:**
- [ ] Keyboard navigation működik
- [ ] Screen reader friendly
- [ ] Color contrast megfelelő (WCAG AA)
- [ ] Alt tagek a képeken
- [ ] ARIA labels ahol szükséges

**Tool:** axe DevTools Chrome extension

**Idő:** ~1 óra

---

### 16. Loading states & Error handling
**Komponensek ahol fontos:**
- Contact form
- Image loading
- Section transitions

**Idő:** ~30 perc

---

## 📊 **PRIORITY MATRIX**

```
┌─────────────────────────────────────┐
│ URGENT & IMPORTANT                  │
│ ├─ 3. SEO meta tags                 │
│ └─ 4. First Deploy                  │
├─────────────────────────────────────┤
│ NOT URGENT BUT IMPORTANT            │
│ ├─ 6. Project images                │
│ ├─ 7. Analytics                     │
│ ├─ 8. README update                 │
│ └─ 13. Custom domain                │
├─────────────────────────────────────┤
│ URGENT BUT NOT IMPORTANT            │
│ └─ 14. Environment variables        │
├─────────────────────────────────────┤
│ NOT URGENT & NOT IMPORTANT          │
│ ├─ 9. Dark mode                     │
│ ├─ 10. Blog section                 │
│ ├─ 11. Project details              │
│ ├─ 12. Performance opt.             │
│ ├─ 15. A11y improvements            │
│ └─ 16. Loading states               │
└─────────────────────────────────────┘
```

---

## ✅ **QUICK WIN CHECKLIST (Még ~1 óra alatt kész lehet)**

```markdown
- [x] Contact adatok frissítése ✅
- [x] Formspree setup ✅
- [x] i18n implementálás ✅
- [ ] SEO meta tagek (20 perc)
- [ ] Favicon generálás (10 perc)
- [ ] README frissítés (15 perc)
- [ ] GitHub repo + Vercel deploy (30 perc)
```

**Haladás:** 3/7 kész (~43%)  
**Maradt:** ~1.25 óra → **Működő, deployolt portfolio!**

---

## 🎯 **KÖVETKEZŐ LÉPÉSEK**

1. **MA (2025-11-08):**
   - SEO meta tagek implementálás
   - Favicon generálás
   - Deploy to Vercel

2. **Ezen a héten:**
   - Projekt képek cseréje
   - Analytics beállítás
   - README frissítés

3. **Jövő hét:**
   - Custom domain (ha kell)
   - Finomhangolások
   - Opcionális feature-ök

---

## 📚 **HASZNOS LINKEK**

- **Formspree:** https://formspree.io/ ✅
- **Vercel:** https://vercel.com/
- **Favicon Generator:** https://realfavicongenerator.net/
- **Image Optimizer:** https://tinypng.com/
- **OG Image Generator:** https://www.opengraph.xyz/
- **Lighthouse (Performance):** Chrome DevTools
- **WCAG Checker:** https://webaim.org/resources/contrastchecker/

---

## 📈 **PROGRESS TRACKING**

**Befejezett feladatok:**
- ✅ Contact adatok frissítése (2025-11-07)
- ✅ Form backend setup (Formspree) (2025-11-07)
- ✅ i18n Magyar nyelv támogatás (2025-11-08)

**Aktív feladat:**
- 🔄 SEO optimalizáció (következő)

**Teljes progress:** 3/16 kész (~19%)

---

**Utolsó frissítés:** 2025-11-08 11:30  
**Készítette:** Claude + Gery
