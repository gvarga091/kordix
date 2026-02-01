import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Contrast() {
  const { t } = useLanguage();

  // Fallback object to prevent runtime errors if translations are not ready
  const contrastText = t.contrast || {
    title: 'Contrast',
    problem: { title: 'Problem', text: '...' },
    solution: { title: 'Solution', text: '...' },
  };

  return (
    <section id="contrast" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{contrastText.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: The Problem (Chaos) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gray-900 border border-gray-800 rounded-lg p-8 flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-red-500 mb-4">{contrastText.problem.title}</h3>
              <p className="text-gray-400 mb-6">{contrastText.problem.text}</p>
            </div>
            <div className="w-full h-48 bg-gray-800 rounded-md overflow-hidden filter blur-sm opacity-70">
              <img 
                src="/placeholder-messy-excel.webp" 
                alt="Kaotikus Excel táblázat - elveszett információk, nehezen kezelhető adatok" 
                width="800"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Column 2: The Solution (Order) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gray-900 border border-blue-500/50 rounded-lg p-8 flex flex-col"
          >
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-green-500 mb-4">{contrastText.solution.title}</h3>
              <p className="text-gray-300 mb-6">{contrastText.solution.text}</p>
            </div>
            <div className="w-full h-48 bg-gray-800 rounded-md overflow-hidden">
              <img 
                src="/placeholder_clean-product-list.webp" 
                alt="Tiszta digitális terméknyilvántartás - strukturált adatok, egyértelmű folyamatok" 
                width="800"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}