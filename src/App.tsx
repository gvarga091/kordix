import { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contrast } from './components/Contrast';
import { Bio } from './components/Bio';
import { Hardware } from './components/Hardware';
import { Contact } from './components/Contact';
import { Toaster } from 'sonner';

function AppContent() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'contrast', 'about', 'projects', 'hardware', 'bio', 'contact'];
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
    <div className="min-h-screen bg-black">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Contrast />
      <About />
      <Projects />
      <Hardware />
      <Bio />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
      <Toaster position="top-right" />
    </LanguageProvider>
  );
}
