# 05 - Saját Projekt Képek

## 📍 Mi a probléma?

Jelenleg az összes projekt kép Unsplash-ről jön:
- ❌ Lassabb betöltés (külső URL)
- ❌ Nem a saját projektjeid
- ❌ Generic stock fotók

---

## ✅ Mit kell csinálni?

### 1. Készíts screenshotokat

**Melyik projektekről:**
1. Service Management System
2. Villany-Víz-Eger website
3. OpenRouteService Tool (ha van UI)
4. RFID Entrance System (screenshot vagy fotó)
5. Warehouse Management System
6. G.A.B.O.R. (concept UI vagy terminal)

**Tippek:**
- Full HD felbontás (1920x1080)
- Crop-old 16:9 arányra
- Optimalizálj webp-re (https://squoosh.app/)
- Sötét background → illeszkedik a designhoz

### 2. Mappa struktúra

```
public/
  └── projects/
      ├── service-management.webp
      ├── villany-viz-eger.webp
      ├── openroute-optimization.webp
      ├── rfid-system.webp
      ├── warehouse-management.webp
      ├── gabor-ai.webp
      ├── time-tracking.webp
      ├── pdf-generator.webp
      └── sd-card-tool.webp
```

### 3. Frissítsd a Projects.tsx-et

**Nyisd meg:** `src/components/Projects.tsx`

**Régi:**
```typescript
{
  title: 'Service Management System',
  // ...
  image: 'https://images.unsplash.com/photo-...'  // ❌
}
```

**Új:**
```typescript
{
  title: 'Service Management System',
  // ...
  image: '/projects/service-management.webp'  // ✅
}
```

Ismételd meg mind a 9 projektnél!

### 4. Fallback kép készítése

Ha nincs screenshot, készíts egyszerű placeholder-t:
- Fekete background
- Projekt neve
- Icon vagy kód snippet

**Tool:** Figma / Canva / Photoshop

---

## 🎨 Képoptimalizálás

### Online tool:
https://squoosh.app/

**Beállítások:**
- Format: WebP
- Quality: 75-80%
- Resize: max 1200px szélesség

---

## ⏱️ Becsült idő: 30-60 perc (screenshotok függvényében)

**Következő:** `06-deployment.md`
