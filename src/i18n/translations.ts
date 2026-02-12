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
      greeting: 'Solutions that just work!',
      name: '',
      tagline: 'Custom ERP systems, cloud infrastructure, and engineering hardware solutions — without the fluff.',
      viewWork: 'References',
      available: 'Available on a project basis',
    },
    about: {
      title: 'THE PILLARS OF KORDIX',
      description1: 'KordiX is more than just a development company. We are the bridge between digital design and physical reality.',
      description2: 'Every project is driven by the clarity of written agreements and the "Just Works" philosophy.',
      currentFocus: {
        title: 'Featured Partnership',
        description: 'As an official Forpsi and Aruba Cloud partner, we provide comprehensive infrastructure support.',
      },
      location: 'Based in Hungary 🇭🇺',
      highlights: {
        coordination: {
          title: 'Software Development',
          description: 'Custom web applications, AI integration, and Enterprise Resource Planning (ERP) systems.',
        },
        development: {
          title: 'Cloud & Hosting',
          description: 'Domain, hosting, email, and scalable cloud solutions powered by Forpsi technology.',
        },
        automation: {
          title: 'Hardware & Engineering',
          description: '3D design/printing, IoT devices, and custom hardware-software integrations.',
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
      title: 'Chaos vs. Order',
      problem: {
        title: 'Analog Friction',
        text: 'Lost emails, Excel wars, and constant phone calls. Chaos isn’t just annoying – it’s costing your business time and money every single day.',
      },
      solution: {
        title: 'Digital Clarity',
        text: 'All data in one place, in real time. We build systems that don’t add to your workload – they take the weight off your shoulders.',
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
      title: 'The Bridge Between Reality and Digital Order',
      text1: "I don't just write code. Having spent years working with physical systems (security, access control, automation), I know exactly the difference between a plan that looks good on paper and a system that actually works in practice.",
      text2: "My goal with KordiX is simple: to provide tools that simplify, rather than complicate, your life. 'Just Works' isn't just a slogan here—it's a requirement for every line of code and every bolt we tighten.",
    },
    hardware: {
      title: 'Where Software Takes Shape',
      text: 'Off-the-shelf solutions rarely fit perfectly. We not only write the software but also design and manufacture the necessary physical devices. Our systems are built to "just work" in the physical world as well.',
      bullets: [
        'CAD Design: Precision 3D modeling',
        '3D Printing: Functional prototypes and end-parts',
        'IoT Integration: Software control and sensors',
        'Custom Enclosures and mechanical solutions',
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
      greeting: 'Megoldások, melyek működnek!',
      name: '',
      tagline: 'Egyedi vállalatirányítási rendszerek, felhő infrastruktúra és mérnöki hardver megoldások — sallangok nélkül.',
      viewWork: 'Referenciák',
      available: 'Elérhető projektalapon',
    },
    about: {
      title: 'A KORDIX PILLÉREI',
      description1: 'A KordiX nem csupán egy fejlesztő cég. Mi vagyunk a híd a digitális terv és a fizikai valóság között.',
      description2: 'Minden projektünket az írásos megállapodások tisztasága és a "Just Works" filozófia vezérli.',
      currentFocus: {
        title: 'Kiemelt Partnerség',
        description: 'Hivatalos Forpsi és Aruba Cloud partnerként teljes körű infrastruktúra támogatást biztosítunk.',
      },
      location: 'Magyarország, Eger 🇭🇺',
      highlights: {
        coordination: {
          title: 'Szoftverfejlesztés',
          description: 'Egyedi webalkalmazások, AI integráció és vállalatirányítási rendszerek (ERP).',
        },
        development: {
          title: 'Cloud & Hosting',
          description: 'Domain, tárhely, email és skálázható felhő megoldások a Forpsi technológiájával.',
        },
        automation: {
          title: 'Hardver & Mérnökség',
          description: '3D tervezés/nyomtatás, IoT eszközök és egyedi hardver-szoftver integrációk.',
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
      title: 'Káosz és Rend',
      problem: {
        title: 'Analóg akadályok',
        text: 'Elveszett emailek, Excel-háborúk és állandó telefonálgatás. A káosz nem csak idegesítő – minden nap pénzt és időt veszít vele a céged.',
      },
      solution: {
        title: 'Digitális egyértelműség',
        text: 'Minden adat egy helyen, valós időben. Olyan rendszereket építünk, amik nem plusz munkát adnak, hanem leveszik a válladról a terhet.',
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
      text1: "Nem csupán kódot írok. Évekig dolgoztam fizikai rendszerekkel (biztonságtechnika, beléptetők, automatizálás), így pontosan tudom, mi a különbség egy elméletben jól mutató terv és egy a gyakorlatban is működő rendszer között.",
      text2: "A célom a KordiX-szal egyszerű: olyan eszközöket adni a kezedbe, amik nem bonyolítják, hanem egyszerűsítik az életedet. A 'Just Works' nálam nem csak egy szlogen, hanem alapkövetelmény minden sor kódnál és minden meghúzott csavarnál.",
    },
    hardware: {
      title: 'Ahol a Szoftver testet ölt',
      text: 'A dobozos megoldások ritkán illeszkednek tökéletesen. Mi nemcsak a szoftvert írjuk meg, hanem megtervezzük és legyártjuk a szükséges fizikai eszközöket is. A rendszereink a fizikai világban is "csak működnek".',
      bullets: [
        'CAD Tervezés: Precíziós 3D modellezés',
        '3D Nyomtatás: Funkcionális prototípusok és végtermékek',
        'IoT Integráció: Szoftveres vezérlés és szenzorika',
        'Egyedi burkolatok és mechanikai megoldások',
      ],
    },
  },
};
