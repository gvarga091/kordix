import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../i18n/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  
  const projects_en = [
    {
      title: 'The service company that ditched paper',
      description: "Disappearing work orders and slow invoicing solved with a fully digital workflow. The technician receives tasks on a tablet and closes them with a single tap.",
      tech: ['Django', 'PWA'],
      role: '',
      image: '/placeholder-video-1.gif'
    },
    {
      title: 'Warehouse inventory without guesswork',
      description: 'Eliminating stock-level uncertainty with a barcode system, real-time monitoring, and automatic low-stock alerts.',
      tech: ['Python', 'PostgreSQL'],
      role: '',
      image: '/placeholder-video-2.gif'
    },
    {
      title: 'Custom Access Control',
      description: 'Bespoke enclosure design and 3D printing integrated with custom software for a compromise-free, waterproof hardware solution.',
      tech: ['3D Printing', 'IoT'],
      role: 'Hardware & Software Symbiosis',
      image: '/placeholder-image-3.webp'
    }
  ];

  const projects_hu = [
    {
      title: 'Digitális munkalap szervizcégeknek',
      description: 'Eltűnő munkalapok és lassú számlázás helyett: a technikus tableten kapja a feladatot, egy gombnyomással lezárja, az iroda pedig valós időben számláz.',
      tech: ['Django', 'PWA'],
      role: '',
      image: '/placeholder-video-1.gif'
    },
    {
      title: 'Raktárkészlet-kezelés tippek nélkül',
      description: 'A "szerintem még van" alapú működés vége. Vonalkódos rendszer, valós idejű készletfigyelés és automatikus utánrendelési figyelmeztetés.',
      tech: ['Python', 'PostgreSQL'],
      role: '',
      image: '/placeholder-video-2.gif'
    },
    {
      title: 'Egyedi Beléptetés Vezérlés',
      description: 'Speciális burkolattervezés, 3D nyomtatás és saját szoftver integráció. Kompromisszummentes, vízálló hardver megoldás egyedi igényekre.',
      tech: ['3D Nyomtatás', 'IoT'],
      role: 'Hardver és Szoftver szimbiózisa',
      image: '/placeholder-image-3.webp'
    }
  ];

  const projects = language === 'en' ? projects_en : projects_hu;

  return (
    <section id="projects" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl text-white mb-4 uppercase tracking-wider font-bold">{t.projects.title}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto" />
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="flex justify-center pb-8">
            <button
              onClick={() => navigate('/projects')}
              className="flex items-center gap-2 px-8 py-4 border border-gray-800 rounded-full text-white hover:bg-gray-900 hover:border-blue-500/50 transition-all group"
            >
              <span>{language === 'en' ? 'View all solutions' : 'Összes megoldás megtekintése'}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
