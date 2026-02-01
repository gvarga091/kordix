# Internacionalizáció (i18n) - Magyar/Angol nyelv

## Áttekintés

Kétnyelvű portfolio (magyar/angol) implementálása React Context API-val.

**Előnyök:**
- Helyi ügyfelek számára magyar
- Nemzetközi ügyfelek számára angol
- SEO boost (több kulcsszó)
- Professzionálisabb megjelenés

---

## Architektúra

```
src/
  ├── i18n/
  │   ├── translations.ts       # Fordítások
  │   ├── LanguageContext.tsx   # State management
  │   └── useTranslation.ts     # Custom hook
  ├── components/
  │   ├── LanguageToggle.tsx    # Váltó gomb
  │   └── ...
```

---

## Implementálás lépésről lépésre

### 1. Mappák létrehozása

```bash
mkdir src/i18n
```

### 2. Translations fájl

**Fájl:** `src/i18n/translations.ts`

```typescript
export type Language = 'en' | 'hu';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    viewWork: string;
    available: string;
  };
  
  // About Section
  about: {
    title: string;
    description1: string;
    description2: string;
    currentFocus: {
      title: string;
      description: string;
    };
    location: string;
    highlights: {
      coordination: {
        title: string;
        description: string;
      };
      development: {
        title: string;
        description: string;
      };
      automation: {
        title: string;
        description: string;
      };
    };
  };
  
  // Projects Section
  projects: {
    title: string;
    subtitle: string;
  };
  
  // Skills Section
  skills: {
    title: string;
    subtitle: string;
    categories: {
      process: string;
      development: string;
      tools: string;
      soft: string;
    };
    philosophy: {
      title: string;
      systematic: {
        title: string;
        description: string;
      };
      solutions: {
        title: string;
        description: string;
      };
      structure: {
        title: string;
        description: string;
      };
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      placeholder: {
        name: string;
        email: string;
        message: string;
      };
    };
    connect: string;
    availableFor: {
      title: string;
      items: string[];
    };
    location: {
      based: string;
      remote: string;
    };
    success: string;
    error: string;
  };
  
  // Footer
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      greeting: 'HI!',
      name: 'My name is GERGŐ',
      tagline: 'Project Coordinator & Developer who transforms complex problems into elegant, systematic solutions through code and strategic planning.',
      viewWork: 'VIEW WORK',
      available: 'Available',
    },
    about: {
      title: 'ABOUT ME',
      description1: "I'm a Project Coordinator and Developer with a strong background in technical implementation and process optimization. I bridge the gap between ideas and execution, bringing structure to complexity and clarity to technical challenges.",
      description2: "My work spans web development, backend systems (Django), and practical automation. I'm passionate about creating usable, intelligent systems that solve real problems — whether that's building a service management platform, optimizing delivery routes, or designing modular AI frameworks.",
      currentFocus: {
        title: 'Current Focus',
        description: 'Developing G.A.B.O.R. — a modular, offline-first AI assistant framework that integrates with personal data, notes, and scheduling tools. A conceptual project exploring intelligent automation and system integration.',
      },
      location: 'Based in Hungary 🇭🇺',
      highlights: {
        coordination: {
          title: 'Project Coordination',
          description: 'Strategic planning, system organization, and process optimization for complex technical projects.',
        },
        development: {
          title: 'Full-Stack Development',
          description: 'Building robust web applications and backend systems with Django, Python, and PostgreSQL.',
        },
        automation: {
          title: 'Automation & Tools',
          description: 'Creating intelligent automation solutions and practical tools that solve real-world problems.',
        },
      },
    },
    projects: {
      title: 'PROJECTS',
      subtitle: 'A selection of shipped solutions that solve real-world problems across web development, automation, and system integration.',
    },
    skills: {
      title: 'SKILLS',
      subtitle: 'A comprehensive toolkit combining technical expertise with strong coordination and communication abilities.',
      categories: {
        process: 'Project & Process',
        development: 'Development',
        tools: 'Tools & Platforms',
        soft: 'Soft Skills',
      },
      philosophy: {
        title: 'Philosophy',
        systematic: {
          title: 'Systematic & Pragmatic',
          description: 'Structured approaches that deliver real results',
        },
        solutions: {
          title: 'Solutions That Work',
          description: 'Focus on practical, usable implementations',
        },
        structure: {
          title: 'Structure Creates Freedom',
          description: 'Well-organized systems enable innovation',
        },
      },
    },
    contact: {
      title: 'GET IN TOUCH',
      subtitle: "Got an idea worth structuring? Let's make it real. Available for project coordination, development work, and consulting.",
      form: {
        name: 'NAME',
        email: 'EMAIL',
        message: 'MESSAGE',
        send: 'Send Message',
        sending: 'Sending...',
        placeholder: {
          name: 'Your name',
          email: 'your.email@example.com',
          message: 'Tell me about your project...',
        },
      },
      connect: 'CONNECT',
      availableFor: {
        title: 'Available For',
        items: [
          'Project coordination & planning',
          'Full-stack development projects',
          'System optimization consulting',
          'Process automation solutions',
        ],
      },
      location: {
        based: 'Based in Hungary 🇭🇺',
        remote: 'Open to remote collaboration and on-site projects',
      },
      success: "Message sent! I'll get back to you soon.",
      error: 'Something went wrong. Please try again.',
    },
    footer: {
      copyright: 'Tech Professional & System Builder.',
    },
  },
  
  hu: {
    nav: {
      home: 'Főoldal',
      about: 'Rólam',
      projects: 'Projektek',
      skills: 'Képességek',
      contact: 'Kapcsolat',
    },
    hero: {
      greeting: 'SZIA!',
      name: 'A nevem GERGŐ',
      tagline: 'Projektkoordinátor és fejlesztő, aki komplex problémákat alakít át elegáns, rendszerezett megoldásokká kód és stratégiai tervezés segítségével.',
      viewWork: 'PROJEKTEK MEGTEKINTÉSE',
      available: 'Elérhető',
    },
    about: {
      title: 'RÓLAM',
      description1: 'Projektkoordinátor és fejlesztő vagyok, erős háttérrel a technikai megvalósítás és folyamatoptimalizálás terén. Hidat képezek az ötletek és a megvalósítás között, struktúrát viszek a komplexitásba és tisztaságot a technikai kihívásokba.',
      description2: 'Munkám kiterjed a webfejlesztésre, backend rendszerekre (Django) és gyakorlati automatizálásra. Szenvedélyem használható, intelligens rendszerek létrehozása, amelyek valós problémákat oldanak meg — legyen szó service management platformról, útvonal-optimalizálásról vagy moduláris AI keretrendszerek tervezéséről.',
      currentFocus: {
        title: 'Jelenlegi fókusz',
        description: 'A G.A.B.O.R. fejlesztése — egy moduláris, offline-first AI asszisztens keretrendszer, amely integrálódik a személyes adatokkal, jegyzetekkel és ütemezési eszközökkel. Egy koncepcionális projekt, amely az intelligens automatizálást és a rendszerintegrációt vizsgálja.',
      },
      location: 'Magyarország, Eger 🇭🇺',
      highlights: {
        coordination: {
          title: 'Projektkoordináció',
          description: 'Stratégiai tervezés, rendszerszervezés és folyamatoptimalizálás komplex technikai projektekhez.',
        },
        development: {
          title: 'Full-Stack fejlesztés',
          description: 'Robusztus webalkalmazások és backend rendszerek építése Django, Python és PostgreSQL használatával.',
        },
        automation: {
          title: 'Automatizálás és eszközök',
          description: 'Intelligens automatizálási megoldások és gyakorlati eszközök létrehozása, amelyek valós problémákat oldanak meg.',
        },
      },
    },
    projects: {
      title: 'PROJEKTEK',
      subtitle: 'Válogatás a leszállított megoldásokból, amelyek valós problémákat oldanak meg a webfejlesztés, automatizálás és rendszerintegráció területén.',
    },
    skills: {
      title: 'KÉPESSÉGEK',
      subtitle: 'Átfogó eszköztár, amely ötvözi a technikai szakértelmet az erős koordinációs és kommunikációs képességekkel.',
      categories: {
        process: 'Projekt és folyamat',
        development: 'Fejlesztés',
        tools: 'Eszközök és platformok',
        soft: 'Soft skillek',
      },
      philosophy: {
        title: 'Filozófia',
        systematic: {
          title: 'Szisztematikus és pragmatikus',
          description: 'Strukturált megközelítések, amelyek valós eredményeket hoznak',
        },
        solutions: {
          title: 'Működő megoldások',
          description: 'Fókusz a gyakorlati, használható implementációkon',
        },
        structure: {
          title: 'A struktúra szabadságot teremt',
          description: 'A jól szervezett rendszerek lehetővé teszik az innovációt',
        },
      },
    },
    contact: {
      title: 'VEGYÜK FEL A KAPCSOLATOT',
      subtitle: 'Van egy ötleted, amit érdemes strukturálni? Valósítsuk meg! Elérhető vagyok projektkoordinációra, fejlesztési munkára és tanácsadásra.',
      form: {
        name: 'NÉV',
        email: 'EMAIL',
        message: 'ÜZENET',
        send: 'Üzenet küldése',
        sending: 'Küldés...',
        placeholder: {
          name: 'A te neved',
          email: 'te.email@pelda.hu',
          message: 'Mesélj a projektedről...',
        },
      },
      connect: 'KAPCSOLAT',
      availableFor: {
        title: 'Elérhető',
        items: [
          'Projektkoordináció és tervezés',
          'Full-stack fejlesztési projektek',
          'Rendszer-optimalizálási tanácsadás',
          'Folyamat-automatizálási megoldások',
        ],
      },
      location: {
        based: 'Magyarország, Eger 🇭🇺',
        remote: 'Nyitott távmunkára és helyszíni projektekre',
      },
      success: 'Üzenet elküldve! Hamarosan jelentkezem.',
      error: 'Valami hiba történt. Kérlek próbáld újra.',
    },
    footer: {
      copyright: 'Tech szakember és rendszerépítő.',
    },
  },
};
```

### 3. Language Context

**Fájl:** `src/i18n/LanguageContext.tsx`

```typescript
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language, translations, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // LocalStorage-ból olvasás (ha van mentve)
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  // Language váltás és mentés
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    // HTML lang attribútum frissítése (SEO)
    document.documentElement.lang = lang;
  };

  // Init: HTML lang beállítása
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook a könnyebb használathoz
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
```

### 4. Language Toggle komponens

**Fájl:** `src/components/LanguageToggle.tsx`

```typescript
import { useLanguage } from '../i18n/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hu' : 'en')}
      className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-500/50 rounded-lg transition-all text-white"
      aria-label="Toggle language"
    >
      <Globe size={18} />
      <span className="text-sm font-medium">{language === 'en' ? 'HU' : 'EN'}</span>
    </button>
  );
}
```

### 5. App.tsx frissítése

```typescript
import { LanguageProvider } from './i18n/LanguageContext';
import { Toaster } from 'sonner';
// ... többi import

export default function App() {
  // ... existing state

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black">
        <Navigation activeSection={activeSection} />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        
        <footer className="bg-black border-t border-gray-800 text-gray-500 py-8">
          {/* Footer frissítve lesz */}
        </footer>
      </div>
      <Toaster position="top-right" />
    </LanguageProvider>
  );
}
```

### 6. Navigation.tsx frissítése

```typescript
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

export function Navigation({ activeSection }: { activeSection: string }) {
  const { t } = useLanguage();

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-xl font-bold">GERGŐ</div>
          
          <div className="flex items-center gap-8">
            {/* Nav items */}
            <div className="hidden md:flex gap-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {/* scroll logic */}}
                  className={/* existing classes */}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            {/* Language toggle */}
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
```

### 7. Hero.tsx frissítése

```typescript
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* ... diagonal background ... */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {/* ... */}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
              <div className="text-blue-500">{t.hero.greeting}</div>
              <div className="text-red-500">{language === 'en' ? 'My name is' : 'A nevem'}</div>
              <div className="text-orange-500">GERGŐ</div>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
              {t.hero.tagline}
            </p>
            
            <button {/* ... */}>
              {t.hero.viewWork}
            </button>
          </motion.div>

          {/* Code editor - marad ugyanaz */}
        </div>
      </div>
    </section>
  );
}
```

### 8. Többi komponens frissítése

Ugyanígy módosítsd:
- `About.tsx`
- `Projects.tsx` (projekt leírások maradnak angolul vagy duplikálod)
- `Skills.tsx`
- `Contact.tsx`

**Példa Contact.tsx-re:**

```typescript
import { useLanguage } from '../i18n/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  // ... state, handlers

  return (
    <section id="contact" {/* ... */}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {/* ... */}>
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">
              {t.contact.title}
            </h2>
            {/* ... */}
            <p className="text-gray-400 mt-6 text-lg max-w-2xl">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" {/* ... */}>
                  {t.contact.form.name}
                </label>
                <input
                  {/* ... */}
                  placeholder={t.contact.form.placeholder.name}
                />
              </div>
              
              {/* ... többi mező hasonlóan */}
              
              <button type="submit" {/* ... */}>
                {isSubmitting ? t.contact.form.sending : t.contact.form.send}
              </button>
            </form>

            {/* Contact info */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## Tesztelés

1. **Dev server indítása:**
```bash
npm run dev
```

2. **Ellenőrizd:**
   - [ ] Language toggle gomb megjelenik
   - [ ] Váltás működik (EN ↔ HU)
   - [ ] LocalStorage-ba mentés működik (refresh után megmarad)
   - [ ] Minden szekció le van fordítva
   - [ ] HTML lang attribútum frissül

3. **Browser DevTools:**
   - Console: nincs error
   - Application → Local Storage → látszik a `language` key

---

## További fejlesztések

### URL-alapú nyelv
```typescript
// LanguageContext.tsx
const [language, setLanguageState] = useState<Language>(() => {
  // URL paraméterből olvasás: ?lang=hu
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang') as Language;
  
  if (urlLang && ['en', 'hu'].includes(urlLang)) {
    return urlLang;
  }
  
  // Fallback localStorage
  const saved = localStorage.getItem('language');
  return (saved as Language) || 'en';
});
```

### Browser nyelv detektálása
```typescript
const [language, setLanguageState] = useState<Language>(() => {
  const saved = localStorage.getItem('language');
  if (saved) return saved as Language;
  
  // Browser nyelv detektálás
  const browserLang = navigator.language.split('-')[0]; // 'hu-HU' -> 'hu'
  return ['hu'].includes(browserLang) ? 'hu' : 'en';
});
```

### React Router integráció
```typescript
// URLs: /en/about, /hu/about
// Részletek: lásd ROUTING.md (későbbi dokumentum)
```

---

## Deployment után

- [ ] SEO ellenőrzés mindkét nyelven
- [ ] Google Search Console: mindkét verzió indexelése
- [ ] `<link rel="alternate" hreflang="hu" ...>` tagek (SEO)

---

## Összefoglalás

**Fájlok létrehozása:**
1. `src/i18n/translations.ts`
2. `src/i18n/LanguageContext.tsx`
3. `src/components/LanguageToggle.tsx`

**Fájlok módosítása:**
4. `src/App.tsx` - Provider hozzáadása
5. `src/components/Navigation.tsx` - useLanguage hook
6. `src/components/Hero.tsx` - fordítások használata
7. `src/components/About.tsx` - fordítások használata
8. `src/components/Projects.tsx` - fordítások használata
9. `src/components/Skills.tsx` - fordítások használata
10. `src/components/Contact.tsx` - fordítások használata

**Időigény:** ~1-2 óra (fordítások kitöltésével együtt)
