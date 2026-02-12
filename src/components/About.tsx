import { motion } from 'motion/react';
import { Code, Cloud, Cpu } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Code size={32} />,
      title: t.about.highlights.coordination.title,
      description: t.about.highlights.coordination.description,
      color: 'blue'
    },
    {
      icon: <Cloud size={32} />,
      title: t.about.highlights.development.title,
      description: t.about.highlights.development.description,
      color: 'orange'
    },
    {
      icon: <Cpu size={32} />,
      title: t.about.highlights.automation.title,
      description: t.about.highlights.automation.description,
      color: 'blue'
    },
  ];

  return (
    <section id="about" className="py-24 bg-black text-white relative">
      <div className="mx-auto px-6 relative z-10" style={{ maxWidth: '80rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wider">{t.about.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8 text-center transition-all flex flex-col items-center"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto ${
                card.color === 'orange' ? 'bg-orange-600/20 text-orange-400' : 'bg-blue-600/20 text-blue-400'
              }`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white uppercase px-2">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed px-4">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <a href="https://www.forpsi.hu" target="_blank" rel="noopener noreferrer" style={{ display: 'block', lineHeight: 0 }}>
            <img
              src="/Forpsi_bianco_blu_atlatszo_hatter.png"
              alt="Forpsi Hivatalos Partner"
              style={{ maxWidth: '140px', height: 'auto', filter: 'grayscale(100%)', opacity: 0.5, transition: 'all 0.5s' }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.5'; }}
            />
          </a>
          <div style={{ width: '1px', height: '2rem', backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <a
              href="https://www.arubacloud.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.025em', fontSize: '1.25rem', textTransform: 'uppercase', opacity: 0.5, transition: 'all 0.5s', textDecoration: 'none' }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.5'; }}
            >
              Aruba Cloud
            </a>
            <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 500, color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
              Hivatalos Infrastruktúra Partner
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
