# 04 - SEO Meta Tagek

## 📍 Mi a probléma?

Jelenleg az `index.html` minimális, nincs:
- Meta description
- Open Graph tags (Facebook/LinkedIn preview)
- Twitter Card
- Favicon

---

## ✅ Mit kell csinálni?

### 1. Nyisd meg az index.html-t

**Fájl:** `index.html`

### 2. Add hozzá a HEAD szekcióhoz:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Gergő Varga | Project Coordinator & Developer</title>
    <meta name="description" content="Project Coordinator and Full-Stack Developer specializing in Django, Python, and system optimization. Building elegant solutions for complex problems." />
    <meta name="keywords" content="project coordinator, developer, Django, Python, PostgreSQL, web development, Hungary" />
    <meta name="author" content="Gergő Varga" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com/" />
    <meta property="og:title" content="Gergő Varga | Project Coordinator & Developer" />
    <meta property="og:description" content="Project Coordinator and Full-Stack Developer specializing in Django, Python, and system optimization." />
    <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://yourdomain.com/" />
    <meta property="twitter:title" content="Gergő Varga | Project Coordinator & Developer" />
    <meta property="twitter:description" content="Project Coordinator and Full-Stack Developer specializing in Django, Python, and system optimization." />
    <meta property="twitter:image" content="https://yourdomain.com/og-image.jpg" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 3. Készíts OG Image-et

**Méret:** 1200x630 px

**Mit tartalmazzon:**
- Neved
- "Project Coordinator & Developer"
- Esetleg kód snippet vagy egyszerű design

**Hova:** `public/og-image.jpg`

### 4. Favicon

**Generálás:** https://favicon.io/

**Fájlok:**
- `public/favicon.ico`
- `public/favicon.svg`

---

## 🧪 Tesztelés

### Facebook/LinkedIn preview:
https://developers.facebook.com/tools/debug/

### Twitter preview:
https://cards-dev.twitter.com/validator

---

## ⏱️ Becsült idő: 15-20 perc

**Következő:** `05-project-images.md`
