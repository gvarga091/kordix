# 🎯 Portfolio - Gyors Checklist

Pipáld ki ahogy haladunk! ✅

---

## 🔴 KRITIKUS - Azonnal (1-2 óra)

### Contact Adatok
```
Fájl: src/components/Contact.tsx (16-28. sor)
```
- [x] Email cím beírva
- [x] LinkedIn URL beírva
- [x] GitHub URL beírva
- [x] Teszt: linkek működnek

### Form Backend
```
Lásd: docs/EMAIL_SETUP.md
```
- [x] Formspree account létrehozva
- [x] Form ID másolva
- [x] Kód frissítve Contact.tsx-ben
- [x] Teszt email elküldve
- [x] Email megérkezett

### SEO Meta Tagek
```
Fájl: index.html <head> részbe
```
- [x] Title tag hozzáadva
- [x] Description meta hozzáadva
- [x] OG (Open Graph) tagek hozzáadva
- [x] Twitter Card tagek hozzáadva
- [x] Domain URL-ek frissítve (gvarga091.com)
- [x] Facebook/LinkedIn preview tesztelve

### Favicon
- [x] Favicon generálva (favicon.svg)
- [x] Fájlok public/ mappába másolva
- [x] Link tagek index.html-ben

### First Deploy
```
Lásd: docs/DEPLOYMENT.md
```
- [x] GitHub repo létrehozva
- [x] Kód push-olva GitHub-ra
- [x] Vercel account
- [x] Projekt importálva Vercel-be
- [x] Deploy sikeres
- [x] Production URL tesztelve (https://gvarga091.com)
- [x] OG meta tagek fix (yourdomain.com → gvarga091.com)
- [x] Facebook/Messenger preview működik

**Idő:** ~1-2 óra  
**Eredmény:** Működő, deployolt portfolio! 🚀

---

## 🟠 FONTOS - Ezen a héten (3-5 óra)

### Magyar Nyelv
```
Lásd: docs/I18N_SETUP.md
```
- [x] src/i18n/ mappa létrehozva
- [x] translations.ts létrehozva
- [x] LanguageContext.tsx létrehozva
- [x] LanguageToggle.tsx létrehozva
- [x] App.tsx frissítve (Provider)
- [x] Navigation.tsx frissítve
- [x] Hero.tsx frissítve
- [x] About.tsx frissítve
- [x] Projects.tsx frissítve
- [x] Skills.tsx frissítve
- [x] Contact.tsx frissítve
- [x] Teszt: váltás működik
- [x] Teszt: localStorage működik

### Projekt Képek
```
public/projects/ mappa
```
- [ ] Screenshotok készítve projektekről
- [ ] Képek átméretezve (1200x800px)
- [ ] Képek optimalizálva (TinyPNG)
- [ ] public/projects/ mappa létrehozva
- [ ] Képek bemásolva
- [ ] Projects.tsx image URL-ek frissítve
- [ ] Teszt: képek betöltődnek

### Analytics
- [ ] Google Analytics account
- [ ] Tracking ID másolva
- [ ] Script hozzáadva index.html-hez
- [ ] Teszt: látogatás regisztrálódik
- [ ] (Opcionális) Vercel Analytics telepítve

### README Frissítés
```
Fájl: README.md (projekt gyökér)
```
- [ ] Projekt leírás
- [ ] Tech stack lista
- [ ] Installation guide
- [ ] Development commands
- [ ] Deployment guide
- [ ] Screenshots (opcionális)

**Idő:** ~3-5 óra  
**Eredmény:** Professzionális, kétnyelvű portfolio!

---

## 🟡 OPCIONÁLIS - Jövő hét (5-10 óra)

### Custom Domain
- [ ] Domain vásárlás (namecheap/cloudflare)
- [ ] DNS beállítások
- [ ] Domain csatlakoztatás Vercel-hez
- [ ] SSL ellenőrzés
- [ ] Teszt: domain működik

### Dark Mode
```
Lásd: TODO.md #7
```
- [ ] next-themes setup
- [ ] ThemeProvider hozzáadása
- [ ] ThemeToggle komponens
- [ ] Tailwind config dark mode
- [ ] Komponensek dark mode styling
- [ ] Teszt: váltás működik

### Performance Optimalizáció
- [ ] Lighthouse audit futtatása
- [ ] Lazy loading komponensekhez
- [ ] Image lazy loading
- [ ] Code splitting
- [ ] Bundle size check
- [ ] 90+ Lighthouse score elérése

### Project Detail Pages
- [ ] Részletes leírások írása
- [ ] Modal/Route mechanika
- [ ] Több kép projektenkénti
- [ ] GitHub link hozzáadása
- [ ] Live demo linkek (ha van)

### Blog Section (Nagyon opcionális)
- [ ] MDX setup
- [ ] Blog komponensek
- [ ] Markdown fájlok
- [ ] Blog route
- [ ] RSS feed

**Idő:** ~5-10 óra  
**Eredmény:** Extra funkciók, SEO boost

---

## 📊 Post-Launch

### SEO & Marketing
- [ ] Google Search Console regisztráció
- [ ] Sitemap submit
- [ ] LinkedIn profilban link frissítése
- [ ] GitHub profilban link hozzáadása
- [ ] Portfolio URL email signature-ben

### Karbantartás
- [ ] Hetente: analytics ellenőrzés
- [ ] Havonta: Lighthouse audit
- [ ] Évente: dependencies update (npm update)
- [ ] Folyamatosan: projekt lista frissítése

### Monitoring
- [ ] Uptime monitoring (UptimeRobot - ingyenes)
- [ ] Form submission email notification
- [ ] Error tracking (opcionális: Sentry)

---

## 🎓 Tanulási Célok (Ha van idő)

### TypeScript
- [ ] Interface-ek átírása type-okra (vagy fordítva)
- [ ] Generic használat gyakorlása
- [ ] Utility types használata

### React Best Practices
- [ ] useMemo/useCallback optimalizáció
- [ ] Custom hooks létrehozása
- [ ] Error boundaries hozzáadása

### Testing (Haladó)
- [ ] Vitest telepítése
- [ ] Unit tesztek komponensekhez
- [ ] E2E tesztek (Playwright)

---

## 🚨 Hibaelhárítási Checklist

Ha valami nem megy:

### Build Error
- [ ] `npm run build` local-ban
- [ ] Console error check
- [ ] TypeScript error check
- [ ] Dependencies telepítve? (`npm install`)

### Deploy Error
- [ ] Vercel logs ellenőrzése
- [ ] Environment variables beállítva?
- [ ] Build command helyes?
- [ ] Output directory = dist?

### Form nem működik
- [ ] Formspree ID helyes?
- [ ] Fetch URL helyes?
- [ ] Console error van?
- [ ] CORS error? (Formspree automatikusan kezeli)

### i18n nem megy
- [ ] LanguageProvider wrapper van?
- [ ] useLanguage hook importálva?
- [ ] translations.ts szintaxis helyes?
- [ ] LocalStorage ellenőrzése (F12 → Application)

---

## 📈 Progress Tracking

**Összesítés:**

```
Kritikus:        [x] 5/5 kész (Contact ✅, Form ✅, SEO ✅, Favicon ✅, Deploy ✅)
Fontos:          [x] 1/4 kész (i18n Magyar nyelv ✅)
Opcionális:      [ ] 0/5 kész
Post-Launch:     [ ] 0/3 kész

Teljes:          [x] 6/17 kész (~35%)
```

**Frissítve: 2025-11-09 (Deploy successful + OG fix)**

---

## 🎯 Milestone-ok

- [x] **MVP (Minimum Viable Product):** Kritikus feladatok kész → DEPLOYED ✅ (https://gvarga091.com)
- [x] **Contact & Form Backend:** Működő kapcsolatfelvétel ✅
- [x] **i18n Support:** Kétnyelvű (HU/EN) oldal ✅
- [ ] **V1.0:** Fontos feladatok kész → Kétnyelvű, optimalizált
- [ ] **V1.5:** Opcionális feladatok részben kész → Extra features
- [ ] **V2.0:** Blog + Project details → Teljes portfolio platform

**Jelenlegi célpont:** MVP (SEO + Favicon + Deploy)  
**Becsült idő maradt:** ~1 óra  
**Következő lépés:** 04-seo-meta.md implementálása

---

**Start dátum:** 2025-11-07  
**i18n kész:** 2025-11-08 ✅  
**Target MVP:** 2025-11-08  
**Target V1.0:** 2025-11-15

**Hajrá!** 💪
