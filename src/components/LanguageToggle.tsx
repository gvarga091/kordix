import { useLanguage } from '../i18n/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hu' : 'en')}
      className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-blue-500/50 rounded-lg transition-all text-white"
      aria-label={language === 'en' ? 'Váltás magyar nyelvre' : 'Switch to English'}
    >
      <Globe size={18} />
      <span className="text-sm font-medium">{language === 'en' ? 'HU' : 'EN'}</span>
    </button>
  );
}
