import { motion } from 'motion/react';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../i18n/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectsProps {
  limit?: number;
}

export function Projects({ limit }: ProjectsProps) {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const projects_en = [
    {
      title: 'Field Service Management – Pro',
      description: 'Full-featured service management platform: ticket tracking, technician scheduling, KPI dashboards, digital signatures, and automated invoicing workflow.',
      tech: ['Django', 'PWA', 'PostgreSQL'],
      role: '',
      image: '/projects/service-app-pro.webp'
    },
    {
      title: 'Multi-Stop Route Optimizer',
      description: 'Web-based tool that calculates the optimal route for field teams across hundreds of stops. Supports multiple depots, time windows, and exports to Excel/PDF.',
      tech: ['Python', 'OSRM', 'Leaflet'],
      role: '',
      image: '/projects/routeoptim.webp'
    },
    {
      title: 'Custom Access Control System',
      description: 'Bespoke enclosure design, 3D printing, and custom RFID software — fully integrated from hardware to web dashboard. Waterproof, tailored installation.',
      tech: ['3D Printing', 'IoT', 'Django'],
      role: 'Hardware & Software Symbiosis',
      image: '/projects/belepteto.webp'
    },
    {
      title: 'Warehouse & Work Order App – Lite',
      description: 'Inventory management, barcode generation, drag-and-drop scheduling, POS-style quick sale, and printable work order PDFs — all in one lightweight app.',
      tech: ['Django', 'Python', 'PostgreSQL'],
      role: '',
      image: '/projects/service-app-lite.webp'
    }
  ];

  const projects_hu = [
    {
      title: 'Szerviz menedzsment rendszer – Pro',
      description: 'Teljes körű szerviz platform: hibajegy-kezelés, technikus beosztás, KPI dashboard, digitális aláírás, és automatizált számlázási munkafolyamat.',
      tech: ['Django', 'PWA', 'PostgreSQL'],
      role: '',
      image: '/projects/service-app-pro.webp'
    },
    {
      title: 'Többállomásos útvonal-optimalizáló',
      description: 'Webes eszköz, amely kiszámítja a terepen dolgozó csapatok optimális útvonalát akár száz megálló esetén is. Több telephelyet, időablakokat kezel, Excel/PDF export.',
      tech: ['Python', 'OSRM', 'Leaflet'],
      role: '',
      image: '/projects/routeoptim.webp'
    },
    {
      title: 'Egyedi beléptető vezérlés',
      description: 'Egyedi burkolattervezés, 3D nyomtatás és saját RFID szoftver – teljes integráció hardvertől a webes vezérlőpanelig. Vízálló, testre szabott telepítés.',
      tech: ['3D Nyomtatás', 'IoT', 'Django'],
      role: 'Hardver és Szoftver szimbiózisa',
      image: '/projects/belepteto.webp'
    },
    {
      title: 'Raktár és munkalap app – Lite',
      description: 'Készletkezelés, vonalkód-generálás, drag-and-drop ütemezés, POS-szerű gyors eladás és nyomtatható munkalap PDF – egy könnyű alkalmazásban.',
      tech: ['Django', 'Python', 'PostgreSQL'],
      role: '',
      image: '/projects/service-app-lite.webp'
    }
  ];

  const allProjects = language === 'en' ? projects_en : projects_hu;
  const projects = limit ? allProjects.slice(0, limit) : allProjects;

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {limit && (
            <div className="flex justify-center pb-8">
              <button
                onClick={() => navigate('/projects')}
                className="flex items-center gap-2 px-8 py-4 border border-gray-800 rounded-full text-white hover:bg-gray-900 hover:border-blue-500/50 transition-all group"
              >
                <span>{language === 'en' ? 'View all solutions' : 'Összes megoldás megtekintése'}</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
