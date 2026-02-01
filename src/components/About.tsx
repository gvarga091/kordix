import { motion } from 'motion/react';
import { Eye, Cog, Route } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();

  const servicesText = t.services || {
    title: 'Services',
    card1: { title: 'Card 1', text: '...' },
    card2: { title: 'Card 2', text: '...' },
    card3: { title: 'Card 3', text: '...' },
  };

  const cards = [
    {
      icon: <Eye size={32} />,
      title: servicesText.card1.title,
      description: servicesText.card1.text,
    },
    {
      icon: <Cog size={32} />,
      title: servicesText.card2.title,
      description: servicesText.card2.text,
    },
    {
      icon: <Route size={32} />,
      title: servicesText.card3.title,
      description: servicesText.card3.text,
    },
  ];

  return (
    <section id="about" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{servicesText.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 rounded-2xl p-10 text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-400 group-hover:bg-blue-600/30 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
