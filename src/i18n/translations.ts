export type Language = 'en' | 'hu';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    contrast: string;
    projects: string;
    hardware: string;
    bio: string;
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
    toggleButton: string;
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
  
  // Contrast Section
  contrast?: {
    title: string;
    problem: {
      title: string;
      text: string;
    };
    solution: {
      title: string;
      text: string;
    };
  };

  // Services Section
  services?: {
    title: string;
    card1: {
      title: string;
      text: string;
    };
    card2: {
      title: string;
      text: string;
    };
    card3: {
      title: string;
      text: string;
    };
  };

  // Bio Section
  bio?: {
    title: string;
    text1: string;
    text2: string;
  };

  // Hardware Section
  hardware?: {
    title: string;
    text: string;
    bullets: string[];
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'Philosophy',
      contrast: 'Chaos & Order',
      projects: 'Solutions',
      hardware: 'Hardware',
      bio: 'About Me',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Software that needs no manual.',
      name: '',
      tagline: 'Custom ERP systems your colleagues will understand from day one. No training time, just clean processes.',
      viewWork: 'Show me the proof',
      available: 'Available',
    },
    about: {
      title: 'ABOUT ME',
      description1: "I'm a Project Coordinator and Developer with a strong background in technical implementation and process optimization. I bridge the gap between ideas and execution, bringing structure to complexity and clarity to technical challenges.",
      description2: "My work spans web development, backend systems (Django), and practical automation. I'm passionate about creating usable, intelligent systems that solve real problems — whether that's building a service management platform, optimizing delivery routes, or designing modular AI frameworks.",
      currentFocus: {
        title: 'Current Focus',
        description: 'Building TimeFlow — a native macOS time tracking app with intelligent activity analysis, and developing a comprehensive Service Management System for SMEs with Django and PostgreSQL.',
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
      title: 'SOLUTIONS',
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
      title: 'Ready to simplify?',
      subtitle: "In a 20-minute conversation, we'll find out if your company's processes are ready for automation. No sales talk, just practical advice.",
      toggleButton: "Let's talk!",
      form: {
        name: 'NAME',
        email: 'EMAIL',
        message: 'MESSAGE',
        send: 'Send',
        sending: 'Sending...',
        placeholder: {
          name: 'Your name',
          email: 'your.email@example.com',
          message: 'How can I help you?',
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
      copyright: '© 2026 KordiX (Varga Gergő E.V.) | Your Vision. Coordinated.',
    },
    contrast: {
      title: 'Chaos and Order',
      problem: {
        title: 'How you work now.',
        text: 'Lost information, endless phone calls, the war of Excel sheets. Chaos is the biggest obstacle to growth.',
      },
      solution: {
        title: 'How you could work.',
        text: 'All data in one place, in real time, accessible from anywhere. A single source of truth for your company.',
      },
    },
    services: {
      title: 'Philosophy',
      card1: {
        title: 'Foolproof UI',
        text: "If a button needs an explanation, the design is flawed. I design interfaces where the next step is always obvious. The user can't make a mistake.",
      },
      card2: {
        title: 'Invisible Technology',
        text: 'Under the hood, a robust Python/Django system is at work. The user only feels that everything works instantly and reliably.',
      },
      card3: {
        title: 'Logical Processes',
        text: "We don't adapt the company to the software. I translate your real, physical workflows into digital ones – just without the unnecessary detours.",
      },
    },
    bio: {
      title: 'The bridge between reality and digital order',
      text1: "I'm not a 'coder in a dark room'. As a project coordinator, I spent years working with physical systems (security technology, access control). I know exactly the difference between theory and practice.",
      text2: "I've seen expensive software fail because colleagues hated using it. My goal has since been simple: to give you tools that don't complicate, but simplify your life. I build the bridge between physical reality and a digital order.",
    },
    hardware: {
      title: 'Where Software Meets Hardware',
      text: "Off-the-shelf solutions rarely fit perfectly. That's why I not only write the software, but also design and manufacture the necessary physical devices. Whether it's a custom access control system, an IoT sensor housing, or a special mounting bracket – my system takes shape in the physical world as well.",
      bullets: [
        'CAD Design & Prototyping',
        'Custom 3D Printed Parts',
        'IoT & Hardware Control',
      ],
    },
  },
  
  hu: {
    nav: {
      home: 'Főoldal',
      about: 'Filozófia',
      contrast: 'Káosz és Rend',
      projects: 'Megoldások',
      hardware: 'Hardver',
      bio: 'Rólam',
      contact: 'Kapcsolat',
    },
    hero: {
      greeting: 'Szoftver, amihez nem kell kézikönyv.',
      name: '',
      tagline: 'Egyedi vállalatirányítási rendszerek, amiket a kollégáid az első perctől értenek. Nincs betanítási idő, csak tiszta folyamatok.',
      viewWork: 'Mutasd a bizonyítékot',
      available: 'Elérhető',
    },
    about: {
      title: 'RÓLAM',
      description1: 'Projektkoordinátor és fejlesztő vagyok, erős háttérrel a technikai megvalósítás és folyamatoptimalizálás terén. Hidat képezek az ötletek és a megvalósítás között, struktúrát viszek a komplexitásba és tisztaságot a technikai kihívásokba.',
      description2: 'Munkám kiterjed a webfejlesztésre, backend rendszerekre (Django) és gyakorlati automatizálásra. Szenvedélyem használható, intelligens rendszerek létrehozása, amelyek valós problémákat oldanak meg — legyen szó service management platformról, útvonal-optimalizálásról vagy moduláris AI keretrendszerek tervezéséről.',
      currentFocus: {
        title: 'Jelenlegi fókusz',
        description: 'A TimeFlow fejlesztése — egy natív macOS időkövetési alkalmazás intelligens tevékenységelemzéssel, valamint egy átfogó Service Management System építése KKV-k részére Django és PostgreSQL használatával.',
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
      title: 'MEGOLDÁSOK',
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
      title: 'Készen állsz egyszerűsíteni?',
      subtitle: 'Egy 20 perces beszélgetés alatt kiderítjük, hogy a céged folyamatai megérettek-e az automatizálásra. Nincs sales duma, csak gyakorlati tanácsok.',
      toggleButton: 'Beszéljünk!',
      form: {
        name: 'NÉV',
        email: 'EMAIL',
        message: 'ÜZENET',
        send: 'Küldés',
        sending: 'Küldés...',
        placeholder: {
          name: 'A te neved',
          email: 'te.email@pelda.hu',
          message: 'Miben tudnék segíteni?',
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
      copyright: '© 2026 KordiX (Varga Gergő E.V.) | Koordinálom a digitális világodat.',
    },
    contrast: {
      title: 'A Káosz és a Rend',
      problem: {
        title: 'Ahogy most dolgoztok.',
        text: 'Elveszett információk, telefonálgatás, Excel-táblák háborúja. A növekedés legnagyobb gátja a káosz.',
      },
      solution: {
        title: 'Ahogy dolgozhatnátok.',
        text: 'Minden adat egy helyen, valós időben, bárhonnan elérhetően. Egyetlen igazságforrás a cégednek.',
      },
    },
    services: {
      title: 'Filozófia',
      card1: {
        title: 'Zéró betanítás',
        text: 'Ha egy gombot magyarázni kell, akkor rossz a design. Olyan felületeket tervezek, ahol a következő lépés mindig egyértelmű. A felhasználó nem tud hibázni.',
      },
      card2: {
        title: 'Láthatatlan Technológia',
        text: 'A motorháztető alatt robusztus Python/Django rendszer dolgozik. A felhasználó ebből csak annyit érez, hogy minden azonnal és stabilan működik.',
      },
      card3: {
        title: 'Logikus Folyamatok',
        text: 'Nem a szoftverhez igazítjuk a céget. A valós, fizikai munkafolyamataidat ültetem át digitálisra – csak a felesleges körök nélkül.',
      },
    },
    bio: {
      title: 'A híd a valóság és a digitális rend között',
      text1: 'Nem vagyok "szobaprogramozó". Projektkoordinátorként évekig dolgoztam fizikai rendszerekkel (biztonságtechnika, beléptetők). Pontosan tudom, mi a különbség az elmélet és a gyakorlat között.',
      text2: 'Láttam, hogyan véreznek el drága szoftverek, mert a kollégák utálták használni őket. Az én célom azóta egyszerű: olyan eszközöket adni a kezedbe, amik nem bonyolítják, hanem egyszerűsítik az életedet. Én építem a hidat a fizikai valóság és a digitális rend között.',
    },
    hardware: {
      title: 'Ahol a Szoftver találkozik a Vas-sal',
      text: 'A dobozos megoldások ritkán illeszkednek tökéletesen. Éppen ezért nemcsak a szoftvert írom meg, hanem megtervezem és legyártom a szükséges fizikai eszközöket is. Legyen szó egyedi beléptetőrendszerről, IoT szenzorházról vagy speciális tartókonzolról – a rendszerem a fizikai világban is testet ölt.',
      bullets: [
        'CAD tervezés & Prototipizálás',
        'Egyedi 3D nyomtatott alkatrészek',
        'IoT és Hardver vezérlés',
      ],
    },
  },
};
