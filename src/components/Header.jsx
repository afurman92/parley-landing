import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-parley-navy/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold rounded">
            <img
              src="/logo-white.png"
              alt="PARLEY - Go to homepage"
              className="h-8 lg:h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parley-navy rounded"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parley-navy rounded"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold focus-visible:ring-offset-2 focus-visible:ring-offset-parley-navy rounded"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center text-white/80 hover:text-white transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold rounded"
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold rounded"
              aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>

            {/* CTA Button - Desktop */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:block bg-parley-gold hover:bg-parley-gold-light text-parley-navy font-semibold px-5 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-parley-navy"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.nav.requestDemo}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold rounded"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden bg-parley-navy border-t border-white/10"
        >
          <nav className="flex flex-col px-4 py-4 gap-4">
            <button
              onClick={() => scrollToSection('features')}
              className="text-white/80 hover:text-white transition-colors text-left py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold rounded"
            >
              {t.nav.features}
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-white/80 hover:text-white transition-colors text-left py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold rounded"
            >
              {t.nav.howItWorks}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-colors text-left py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-parley-gold rounded"
            >
              {t.nav.contact}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-parley-gold hover:bg-parley-gold-light text-parley-navy font-semibold px-5 py-3 rounded-lg transition-colors mt-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-parley-navy"
            >
              {t.nav.requestDemo}
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
