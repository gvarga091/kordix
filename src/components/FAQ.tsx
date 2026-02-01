import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<'hu' | 'en', FAQItem[]> = {
  hu: [
    {
      question: 'Mennyibe kerül egy egyedi rendszer?',
      answer: 'Minden projekt más, ezért az ár is. Egy egyszerű automatizálás 100-200k Ft-tól indul. Közepes összetettségű rendszerek 500k-2M Ft között mozognak. Komplex, több modulból álló megoldások elérhetik a 8-10M Ft-ot is. Ingyenes konzultáció után pontos árajánlatot kapsz.',
    },
    {
      question: 'Mennyi idő alatt készül el?',
      answer: 'Ez is projektfüggő. Egy egyszerű megoldás akár 1-2 hét is lehet. Közepes projektek 1-3 hónapot vesznek igénybe. Nagyobb, komplex rendszerek fejlesztése 6-12 hónap vagy több. A pontos határidőt az igények tisztázása után tudom megmondani.',
    },
    {
      question: 'Kell-e technikai tudás a használatához?',
      answer: 'NEM. Ha egy gombot megnyomni tudsz, használni tudod. Zéró betanítás, intuitív felület. Ez a cél.',
    },
    {
      question: 'Hogyan zajlik egy projekt?',
      answer: '1) Ingyenes konzultáció (20 perc) 2) Árajánlat + határidő (1-2 nap) 3) Fejlesztés + hetente egyeztetés 4) Átadás + oktatás (1 óra) 5) 3 hónap garancia',
    },
    {
      question: 'Mi van ha elromlik?',
      answer: 'Ingyenes 3 hónapos garancia minden projektre. Utána opcionális karbantartási csomag érhető el.',
    },
  ],
  en: [
    {
      question: 'How much does a custom system cost?',
      answer: 'Every project is different, so the price varies. Simple automation starts from 100-200k HUF. Medium complexity systems range from 500k-2M HUF. Complex, multi-module solutions can reach 8-10M HUF or more. You get a precise quote after a free consultation.',
    },
    {
      question: 'How long does it take?',
      answer: 'This is also project-dependent. A simple solution can be as quick as 1-2 weeks. Medium projects take 1-3 months. Larger, complex systems take 6-12 months or more to develop. I can give you a precise timeline after clarifying your requirements.',
    },
    {
      question: 'Do I need technical knowledge to use it?',
      answer: "NO. If you can press a button, you can use it. Zero training, intuitive interface. That's the goal.",
    },
    {
      question: 'How does a project work?',
      answer: '1) Free consultation (20 min) 2) Quote + timeline (1-2 days) 3) Development + weekly check-ins 4) Handover + training (1 hour) 5) 3 months warranty',
    },
    {
      question: 'What if something breaks?',
      answer: 'Free 3-month warranty on every project. Optional maintenance package available afterwards.',
    },
  ],
};

export default function FAQ() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = faqData[language];

  return (
    <div className="mt-8 pt-8 border-t border-zinc-800">
      <h3 className="text-lg font-medium text-zinc-300 mb-4">
        {language === 'hu' ? 'Gyakori kérdések' : 'Frequently Asked Questions'}
      </h3>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/30"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-zinc-900/50 transition-colors"
            >
              <span className="text-sm font-medium text-zinc-200">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-zinc-400 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 pb-3 text-sm text-zinc-400 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
