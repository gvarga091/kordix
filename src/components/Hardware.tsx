import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Hardware() {
  const { t } = useLanguage();

  const hardwareText = t.hardware || {
    title: 'Hardware',
    text: '...',
    bullets: [],
  };

  return (
    <section id="hardware" className="pt-8 pb-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="min-w-0"
          >
            <div className="shadow-2xl rounded-2xl bg-neutral-900/50 border border-neutral-800/50 p-4 sm:p-6 overflow-hidden">
              <img
                src="/hardware-3d-model.webp"
                alt="Engineering prototype"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="min-w-0"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 tracking-tighter uppercase">
              {hardwareText.title}
            </h2>
            <p className="text-base lg:text-lg leading-relaxed mb-8 text-gray-400">
              {hardwareText.text}
            </p>

            <div className="flex flex-col gap-4">
              {hardwareText.bullets.map((bullet, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                  <span className="text-gray-300 text-sm lg:text-base font-medium tracking-wide italic">{bullet}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
