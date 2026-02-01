# 06 - Deployment (Éles Verzió)

## 🎯 Hova tegyük ki?

### Opció A: Vercel (AJÁNLOTT)
- ✅ Ingyenes
- ✅ Automatikus deploy GitHub push-ra
- ✅ HTTPS + custom domain
- ✅ 1 perc setup

### Opció B: Netlify
- ✅ Ingyenes
- ✅ Hasonló Vercel-hez
- ✅ Drag & drop deploy

### Opció C: GitHub Pages
- ✅ Ingyenes
- ⚠️ Kicsit komplexebb Vite-nál
- ✅ GitHub username.github.io

---

## 📝 OPCIÓ A: Vercel Deployment (AJÁNLOTT)

### 1. GitHub repository

Ha még nincs:
```bash
cd /Users/gvarga091/Dev/active/personal/Portfolio\ Website_tech_orange

git init
git add .
git commit -m "Initial portfolio commit"

# GitHub-on hozz létre egy új repo-t, pl: portfolio-website
git remote add origin https://github.com/gvarga091/portfolio-website.git
git push -u origin main
```

### 2. Vercel regisztráció

1. Menj ide: https://vercel.com/
2. Sign up with GitHub
3. Import Project → Válaszd ki a repository-dat
4. Build settings automatikusan felismeri a Vite-ot:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy gomb

**Kész! 🚀**

Deploy URL lesz valami ilyesmi: `portfolio-website-xyz.vercel.app`

### 3. Custom domain (opcionális)

Ha van saját domain-ed (pl. `gergovarga.com`):

1. Vercel projekt → Settings → Domains
2. Add Custom Domain
3. DNS beállítások (névjegy szolgáltatónál):
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

---

## 🔧 Build előtt ellenőrizd

### package.json scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### Lokális build teszt
```bash
npm run build
npm run preview
```

Ha OK → pushol GitHub-ra → Vercel automatikusan deploy-ol!

---

## 🚀 Automatikus deploy

**Minden GitHub push után:**
1. Vercel észreveszi a változást
2. Build + deploy automatikusan
3. Email notification

---

## ⏱️ Becsült idő: 10-15 perc

**Következő:** `07-post-launch.md` (opcionális továbbfejlesztések)
