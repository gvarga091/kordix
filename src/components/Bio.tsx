import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Bio() {
  const { t } = useLanguage();

  const bioText = t.bio || {
    title: 'About Me',
    text1: '...',
    text2: '...',
  };

  return (
    <section id="bio" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{bioText.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>{bioText.text1}</p>
              <p>{bioText.text2}</p>
            </div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72">
              <div className="absolute -inset-3 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full blur-xl opacity-40" />
              <img
                src="/profile-photo.webp"
                alt="Varga Gergő (Gary) - Projektkoordinátor és Full-Stack fejlesztő, Django és Python szakértő Egerből"
                width="600"
                height="600"
                loading="lazy"
                decoding="async"
                className="relative w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
