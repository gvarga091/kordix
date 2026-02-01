# Deployment Guide

## Választható platformok

| Platform | Ár | Deploy idő | Előnyök | Hátrányok |
|----------|----|-----------:|---------|-----------|
| **Vercel** | Ingyenes | ~2 perc | Zero-config, gyors, analytics | - |
| **Netlify** | Ingyenes | ~3 perc | Form handling, split testing | Lassabb build |
| **GitHub Pages** | Ingyenes | ~5 perc | Egyszerű GitHub integráció | Nincs SSR |
| **Cloudflare Pages** | Ingyenes | ~3 perc | CDN, gyors, unlimited bandwidth | - |

**Ajánlás:** **Vercel** - legjobb Vite/React projektekhez

---

## 🚀 Vercel Deployment (Ajánlott)

### Előkészületek

1. **GitHub repo létrehozása**

```bash
# Terminal-ban a projekt mappában
git init
git add .
git commit -m "Initial commit - Portfolio website"

# GitHub-on hozz létre egy új repo-t (pl. portfolio-website)
# Majd:
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

2. **Build tesztelés local-ban**

```bash
npm run build
# Ha sikeres, akkor jó
```

### Deployment lépések

#### 1. Vercel account

1. Menj: https://vercel.com/
2. "Sign Up" → "Continue with GitHub"
3. Engedélyezd a repo hozzáférést

#### 2. Projekt importálása

1. Dashboard → "Add New..." → "Project"
2. "Import Git Repository"
3. Válaszd ki a `portfolio-website` repo-t
4. "Import"

#### 3. Build beállítások

**Automatikusan felismeri:**
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Ha nem automatikus, add meg kézzel:**

```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node Version: 18.x
```

#### 4. Environment Variables (opcionális)

Ha vannak `.env` változóid (pl. Formspree ID):

```
VITE_FORMSPREE_ID=your_form_id
VITE_GA_TRACKING_ID=your_ga_id
```

#### 5. Deploy

1. "Deploy" gomb → várj 1-2 percet
2. ✅ Kész! Kapsz egy URL-t: `https://your-portfolio-randomid.vercel.app`

#### 6. Custom domain csatlakoztatása (opcionális)

**Ha van saját domain-ed:**

1. Vercel Dashboard → Project Settings → Domains
2. Add domain (pl. `gergő.com` vagy `gergo-portfolio.com`)
3. DNS beállítások a domain provider-nél:
   - A Record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`
4. SSL automatikusan generálva (Let's Encrypt)

**Domain provider-ek:**
- Namecheap: ~$10/év
- Cloudflare: ~$10/év
- GoDaddy: ~$15/év

---

## 🔷 Netlify Deployment

### Lépések

1. **Netlify account:** https://netlify.com/
2. "Add new site" → "Import an existing project"
3. Válaszd ki a GitHub repo-t
4. Build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
5. "Deploy site"
6. Kész! URL: `https://your-site-randomid.netlify.app`

### Netlify előnyök

- **Form handling:** Nem kell Formspree, Netlify kezeli
- **Split testing:** A/B testing support
- **Redirects & rewrites:** Könnyű URL kezelés

**Form használat Netlify-on:**

```html
<!-- Contact.tsx form tag-je -->
<form
  onSubmit={handleSubmit}
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <!-- ... többi mező ... -->
</form>
```

---

## 📘 GitHub Pages Deployment

### Beállítások

1. **Package telepítése:**

```bash
npm install --save-dev gh-pages
```

2. **package.json frissítése:**

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio-website",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **vite.config.ts frissítése:**

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/', // Repo neve
})
```

4. **Deploy:**

```bash
npm run deploy
```

5. **GitHub Settings:**
   - Repo → Settings → Pages
   - Source: `gh-pages` branch
   - Mentés

**URL:** `https://YOUR_USERNAME.github.io/portfolio-website`

---

## ☁️ Cloudflare Pages

### Lépések

1. **Account:** https://pages.cloudflare.com/
2. "Create a project" → "Connect to Git"
3. Válaszd ki a GitHub repo-t
4. Build settings:
   ```
   Framework preset: None
   Build command: npm run build
   Build output directory: dist
   ```
5. "Save and Deploy"

**Előnyök:**
- Unlimited bandwidth
- Gyors CDN
- Ingyenes SSL

---

## 🔧 Build Optimization

### Vite config finomhangolás

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['motion/react'],
          icons: ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
```

### Image optimization

```bash
# Install sharp (webp konverzió)
npm install --save-dev vite-plugin-image-optimizer

# vite.config.ts-ben használd
```

---

## 📊 Analytics hozzáadása deployhoz

### Google Analytics

```html
<!-- index.html <head>-ben -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics (egyszerűbb)

```bash
npm install @vercel/analytics
```

```tsx
// App.tsx
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <LanguageProvider>
        {/* ... komponensek ... */}
      </LanguageProvider>
      <Analytics />
    </>
  );
}
```

---

## 🔄 Continuous Deployment (CI/CD)

### Automatikus deployment

**Vercel/Netlify/Cloudflare:**
- Git push → automatikus deploy
- Pull Request → preview URL
- Main branch → production

**GitHub Actions (manual setup):**

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🐛 Troubleshooting

### "Build failed" error

**Ellenőrizd:**
```bash
# Local build működik?
npm run build

# Node verzió megfelel?
node -v  # Legalább 16.x kell

# Dependencies telepítve?
npm install

# TypeScript error?
npm run build 2>&1 | grep "error TS"
```

### 404 error routing-nál

**Single Page App (SPA) config:**

**Vercel:**
```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify:**
```
// _redirects fájl a public/ mappában
/*    /index.html   200
```

### Assets nem töltődnek be

**Base URL probléma:**
```typescript
// vite.config.ts
export default defineConfig({
  base: '/', // Vagy '/repo-name/' GitHub Pages-nél
})
```

### Environment variables nem működnek

**Vercel/Netlify:**
- Dashboard → Settings → Environment Variables
- Változó neve: `VITE_` prefix kötelező!
- Redeploy szükséges a változtatás után

---

## 📋 Deployment Checklist

### Deployment előtt

- [ ] `npm run build` locally sikeres
- [ ] Nincs console error a dev-ben
- [ ] Mobile-on is responsive
- [ ] Contact form működik
- [ ] SEO meta tagek helyén vannak
- [ ] Favicon hozzáadva
- [ ] Analytics setup (opcionális)
- [ ] .env fájlok gitignore-olva
- [ ] README.md frissítve

### Deploy után

- [ ] Production URL tesztelése
- [ ] Form tesztelése production-on
- [ ] Mobile teszt valódi készüléken
- [ ] Loading speed check (Lighthouse)
- [ ] Social media preview (LinkedIn/Twitter share)
- [ ] Google Search Console regisztráció
- [ ] Domain SSL ellenőrzés (ha custom domain)

---

## 🌐 SEO Post-Deployment

### Google Search Console

1. https://search.google.com/search-console/
2. "Add property" → Domain vagy URL prefix
3. Verify ownership (HTML file vagy meta tag)
4. Sitemap submit: `https://yourdomain.com/sitemap.xml`

### Sitemap generálása

```bash
npm install --save-dev vite-plugin-sitemap
```

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://yourdomain.com',
    }),
  ],
})
```

---

## 🚀 Performance Optimization

### Lighthouse audit

1. Chrome DevTools → Lighthouse
2. Futtasd mindkét nyelven (EN, HU)
3. Cél: 90+ minden kategóriában

**Gyakori problémák:**
- Képek mérete → WebP konverzió
- Unused CSS → PurgeCSS
- Bundle size → Code splitting

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

---

## 📞 Support

**Vercel:**
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

**Netlify:**
- Docs: https://docs.netlify.com/
- Community: https://answers.netlify.com/

**GitHub Pages:**
- Docs: https://docs.github.com/pages

---

## 🎯 Quick Deploy Summary

**Leggyorsabb út (10 perc):**

1. Git repo létrehozása
2. Push to GitHub
3. Vercel import
4. Deploy
5. ✅ Live URL!

**Production-ready (1 óra):**

1. Minden fenti +
2. Custom domain
3. Analytics setup
4. SEO optimization
5. Form backend (Formspree)
6. Social media testing

---

**Következő lépés:** Domain vásárlás vagy mehet így is a vercel.app URL-lel? 🚀
