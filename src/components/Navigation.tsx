import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "navigation" });

  // Ensure we have a valid language on component mount
  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Editions", href: "#editions" },
    { name: "Contact", href: "#contact" },
  ];

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'tr', label: 'TR' }
  ];

  const switchLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  // Get the base language code (en or tr) from the full language code (en-US, tr-TR, etc.)
  const getCurrentLanguage = () => {
    const fullLang = i18n.language || 'en';
    return fullLang.split('-')[0];
  };

  return (
    <nav className="fixed top-0 w-full bg-white backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="ARTMEET Logo"
              className="h-[72px] w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-900 transition-colors duration-200 font-medium"
                >
                  {t(item.name)}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="ml-8 flex items-center space-x-2">
              {languages.map((lang, index) => (
                <div key={lang.code} className="flex items-center">
                  <button
                    onClick={() => switchLanguage(lang.code)}
                    disabled={getCurrentLanguage() === lang.code}
                    className={`px-2 py-1 rounded transition-colors duration-200 ${
                      getCurrentLanguage() === lang.code
                        ? 'text-gray-400 font-bold'
                        : 'text-gray-600 hover:text-purple-900'
                    }`}
                  >
                    {lang.label}
                  </button>
                  {index < languages.length - 1 && (
                    <span className="text-gray-300 ml-2">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-purple-900 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {t(item.name)}
              </a>
            ))}
            
            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-2 py-2 mt-2 border-t border-gray-100">
              {languages.map((lang, index) => (
                <div key={lang.code} className="flex items-center">
                  <button
                    onClick={() => switchLanguage(lang.code)}
                    disabled={getCurrentLanguage() === lang.code}
                    className={`px-2 py-1 rounded transition-colors duration-200 ${
                      getCurrentLanguage() === lang.code
                        ? 'text-gray-400 font-bold'
                        : 'text-gray-600 hover:text-purple-900'
                    }`}
                  >
                    {lang.label}
                  </button>
                  {index < languages.length - 1 && (
                    <span className="text-gray-300 ml-2">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
