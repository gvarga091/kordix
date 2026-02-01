import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="/placeholder-dashboard.webp"
        alt="Egyedi vállalatirányítási rendszer dashboard előnézet - valós idejű adatmonitorozás és folyamatkövetés"
        width="1920"
        height="1080"
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-left"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight font-bold text-white">
            {t.hero.greeting}
          </h1>
          
          <p className="text-gray-300 text-lg leading-relaxed" style={{ marginBottom: '5rem' }}>
            {t.hero.tagline}
          </p>
          
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full transition-all shadow-lg shadow-blue-500/50 transform hover:scale-105"
          >
            {t.hero.viewWork}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
