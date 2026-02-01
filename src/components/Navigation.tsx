import { Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'contrast', label: t.nav.contrast },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'bio', label: t.nav.bio },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#303437] backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="cursor-pointer"
            style={{ paddingTop: '16px' }}
          >
            <img 
              src="/kordix-logo.webp" 
              alt="KordiX Logo" 
              width="200" 
              height="100"
              style={{ width: 'auto', height: '100px' }} 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm tracking-wider transition-colors ${
                  activeSection === item.id
                    ? 'text-orange-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Toggle */}
            <LanguageToggle />
            
            <button 
              className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
              aria-label="Felhasználói profil"
            >
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400"
            aria-label={mobileMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm tracking-wider transition-colors ${
                  activeSection === item.id
                    ? 'text-orange-500 bg-gray-900'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Language Toggle */}
            <div className="px-4 py-3">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
