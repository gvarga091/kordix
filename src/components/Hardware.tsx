import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function Hardware() {
  const { t } = useLanguage();

  const hardwareText = t.hardware || {
    title: 'Hardware',
    text: '...',
    bullets: [],
  };

  return (
    <section id="hardware" className="pt-8 pb-24 bg-[#0a0a0f] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: 3D Model Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-96 bg-gray-900 border border-gray-800 rounded-lg overflow-hidden flex items-center justify-center"
          >
            <img 
              src="/hardware-3d-model.webp" 
              alt="3D CAD tervezett egyedi IoT szenzor ház és hardver integráció - 3D nyomtatott alkatrészek" 
              width="800"
              height="600"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{hardwareText.title}</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {hardwareText.text}
            </p>
            <ul className="space-y-4">
              {hardwareText.bullets.map((bullet, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
