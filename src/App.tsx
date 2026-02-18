import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contrast } from './components/Contrast';
import { Bio } from './components/Bio';
import { Hardware } from './components/Hardware';
import { Contact } from './components/Contact';
import { Legal } from './components/Legal';
import { Toaster } from 'sonner';

function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    if (location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Tisztítsuk meg a state-et, hogy ne görögjön újra frissítéskor
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'contrast', 'about', 'hardware', 'bio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation activeSection={activeSection} />
      <Hero />
      <Contrast />
      <About />
      <Projects limit={3} />
      <Hardware />
      <Bio />
      <Contact />
    </>
  );
}

function ProjectsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation activeSection="projects" />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <button
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Vissza</span>
          </button>
        </div>
        <Projects />
      </div>
      <Contact />
    </>
  );
}

function AppRoutes() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      
      {/* Footer */}
      <footer className="bg-[#060609] border-t border-gray-800 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <span className="text-white text-xl font-bold tracking-wide">
                Kordi<span className="text-[#029CDF]">X</span>
              </span>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                {useLanguage().language === 'hu'
                  ? 'Egyedi szoftverfejlesztés, felhő infrastruktúra és mérnöki megoldások.'
                  : 'Custom software development, cloud infrastructure, and engineering solutions.'}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-4">
                {useLanguage().language === 'hu' ? 'Linkek' : 'Links'}
              </h4>
              <div className="flex flex-col gap-2 text-sm">
                <Link to="/legal" className="hover:text-white transition-colors w-fit">
                  {useLanguage().language === 'hu' ? 'Impresszum' : 'Legal Notice'}
                </Link>
                <a href="mailto:gergo@kordix.hu" className="hover:text-white transition-colors w-fit">
                  Support
                </a>
              </div>
            </div>

            {/* Partners */}
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-gray-300 mb-4">
                {useLanguage().language === 'hu' ? 'Partnerek' : 'Partners'}
              </h4>
              <div className="flex items-center gap-6">
                <a href="https://www.forpsi.hu" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/Forpsi_bianco_blu_atlatszo_hatter.png"
                    alt="Forpsi"
                    className="h-8 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                </a>
                <div className="w-px h-6 bg-gray-700" />
                <a
                  href="https://www.arubacloud.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-black italic text-sm uppercase opacity-50 hover:opacity-100 transition-all"
                >
                  Aruba Cloud
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster position="top-right" />
    </LanguageProvider>
  );
}
