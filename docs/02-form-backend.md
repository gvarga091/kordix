# 02 - Form Backend Beállítása

## 📍 Mi a probléma?

Jelenleg a contact form csak egy toast üzenetet dob, **nem küld sehova emailt**.

---

## 🎯 Megoldások (válassz egyet)

### Opció A: Formspree (AJÁNLOTT - legegyszerűbb)
- ✅ Ingyenes (50 submission/hó)
- ✅ Nincs backend kód
- ✅ 2 perc setup
- ✅ Email notification automatikusan

### Opció B: EmailJS
- ✅ Ingyenes (200 email/hó)
- ⚠️ Komplexebb setup
- ✅ Több template opció

### Opció C: Saját Django backend
- ⚠️ Több munka
- ✅ Teljes kontroll
- ⚠️ Hosting kell

---

## 📝 OPCIÓ A: Formspree Setup (AJÁNLOTT)

### 1. Regisztráció
1. Menj ide: https://formspree.io/
2. Sign up (GitHub vagy email)
3. Create new form
4. Kapsz egy endpoint URL-t, pl: `https://formspree.io/f/xyzabc123`

### 2. Kód módosítás

Nyisd meg: `src/components/Contact.tsx`

Keresd meg a `handleSubmit` függvényt (körülbelül 13. sor):

**RÉGI KÓD:**
```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  toast.success('Message sent! I\'ll get back to you soon.');
  setFormData({ name: '', email: '', message: '' });
};
```

**ÚJ KÓD:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const response = await fetch('https://formspree.io/f/XXXXXXXX', {  // ⬅️ IDE a saját URL-ed
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      toast.success('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  } catch (error) {
    toast.error('Failed to send. Check your connection.');
  }
};
```

### 3. Tesztelés
1. Dev szerver fut
2. Töltsd ki a formot
3. Küld el
4. Nézd meg az email-edet → megérkezett az üzenet?

---

## ⏱️ Becsült idő: 15 perc

**Következő:** `03-i18n-magyar.md`
