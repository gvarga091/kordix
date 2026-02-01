# 01 - Kapcsolati Adatok Frissítése

## 📍 Mi a probléma?

A Contact.tsx-ben még placeholder adatok vannak:
- `your.email@example.com`
- `https://linkedin.com/in/yourprofile`
- `https://github.com/yourprofile`

---

## ✅ Mit kell csinálni?

### 1. Nyisd meg a Contact komponenst
```bash
src/components/Contact.tsx
```

### 2. Keresd meg ezt a sort (körülbelül 37-55. sor):

```typescript
const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:your.email@example.com',  // ⬅️ EZT
    text: 'your.email@example.com'           // ⬅️ ÉS EZT
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',  // ⬅️ EZT
    text: 'Connect on LinkedIn'
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/yourprofile',  // ⬅️ ÉS EZT
    text: 'View on GitHub'
  }
];
```

### 3. Cseréld ki a valódi adataidra:

```typescript
const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    href: 'mailto:gvarga091@gmail.com',  // PÉLDA
    text: 'gvarga091@gmail.com'
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/gergo-varga-dev',  // PÉLDA
    text: 'Connect on LinkedIn'
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    href: 'https://github.com/gvarga091',  // PÉLDA
    text: 'View on GitHub'
  }
];
```

---

## 🧪 Tesztelés

1. Mentsd el a fájlt
2. Dev szerver újraindul automatikusan (`npm run dev`)
3. Görj le a Contact szekcióhoz
4. Kattints a linkekre → ellenőrizd, hogy jó helyre visznek

---

## ⏱️ Becsült idő: 5 perc

**Következő:** `02-form-backend.md`
