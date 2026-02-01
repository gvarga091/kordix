import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../i18n/LanguageContext';

export function Projects() {
  const { t, language } = useLanguage();
  
  const projects_en = [
    {
      title: 'The service company that ditched paper',
      description: "The problem: Disappearing work orders, slow invoicing. The solution: A fully digital workflow. The technician receives the task on a tablet and closes it with a single button press. The office sees everything in real time.",
      tech: ['Django', 'PWA'],
      role: '',
      image: '/placeholder-video-1.gif'
    },
    {
      title: 'Warehouse inventory without guesswork',
      description: 'The problem: "I think we still have some in stock" based operation. The solution: A barcode system, real-time inventory monitoring, and automatic alerts for low stock levels.',
      tech: ['Python', 'PostgreSQL'],
      role: '',
      image: '/placeholder-video-2.gif'
    },
    {
      title: 'Custom Access Control',
      description: 'The off-the-shelf readers did not fit the gate. I designed a custom enclosure, printed a prototype, and integrated it into my own software. Result: a compromise-free, waterproof, custom solution.',
      tech: ['3D Printing', 'Python', 'Hardware Integration'],
      role: 'Symbiosis of Hardware and Software.',
      image: '/placeholder-image-3.webp'
    }
  ];

  const projects_hu = [
    {
      title: 'A Szervizcég, aki elhagyta a papírt',
      description: 'A probléma: Eltűnő munkalapok, lassú számlázás. A megoldás: Teljesen digitális munkafolyamat. A technikus tableten kapja a feladatot, egy gombnyomással lezárja. Az iroda valós időben lát mindent.',
      tech: ['Django', 'PWA'],
      role: '',
      image: '/placeholder-video-1.gif'
    },
    {
      title: 'Raktárkészlet, tippek nélkül',
      description: 'A probléma: "Szerintem még van a raktárban" alapú működés. A megoldás: Vonalkódos rendszer, valós idejű készletfigyelés és automatikus figyelmeztetés alacsony készletszintnél.',
      tech: ['Python', 'PostgreSQL'],
      role: '',
      image: '/placeholder-video-2.gif'
    },
    {
      title: 'Egyedi Beléptetés Vezérlés',
      description: 'A piacon kapható olvasók nem illeszkedtek a kapuhoz. Terveztem egy saját burkolatot, nyomtattam egy prototípust, és integráltam a saját szoftverembe. Eredmény: kompromisszummentes, vízálló, egyedi megoldás.',
      tech: ['3D Nyomtatás', 'Python', 'Hardver Integráció'],
      role: 'Hardver és Szoftver szimbiózisa.',
      image: '/placeholder-image-3.webp'
    }
  ];

  const projects = language === 'en' ? projects_en : projects_hu;

  return (
    <section id="projects" className="py-24 pb-8 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl text-white mb-4">{t.projects.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto" />
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
