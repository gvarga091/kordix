import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

interface NavigationProps {
  activeSection: string;
}

export function Navigation({ activeSection }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
    if (id === 'projects') {
      navigate('/projects');
      setMobileMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'contrast', label: t.nav.contrast },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'bio', label: t.nav.bio },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md z-50 border-b border-gray-800/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="cursor-pointer flex items-center"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/kordix-logo.webp" 
              alt="KordiX Logo" 
              className="w-32 md:w-48 lg:w-56 h-auto transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[13px] uppercase tracking-widest transition-colors font-semibold ${
                  (activeSection === item.id || (location.pathname === '/projects' && item.id === 'projects'))
                    ? 'text-orange-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-6 w-[1px] bg-gray-700 mx-2" />
            
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
            aria-label={mobileMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-black/95 backdrop-blur-md border-t border-gray-800 absolute top-20 left-0 right-0 px-6 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left py-4 text-sm tracking-wider transition-colors border-b border-gray-800 last:border-0 ${
                  (activeSection === item.id || (location.pathname === '/projects' && item.id === 'projects'))
                    ? 'text-orange-500'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Language Toggle */}
            <div className="py-4 flex justify-between items-center">
              <span className="text-gray-400 text-xs tracking-widest uppercase">Nyelv</span>
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
