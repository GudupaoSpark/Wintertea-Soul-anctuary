"use client";
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useHydration } from '../hooks/useHydration';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh-HK', name: '繁體中文' },
];

interface LanguageSwitcherProps {
  direction?: 'up' | 'down';
}

const LanguageSwitcher = ({ direction = 'down' }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hydrated = useHydration();

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  if (!hydrated) {
    // Render a placeholder or null on the server and initial client render
    return <div className="w-28 h-8 bg-gray-200 rounded animate-pulse" />;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-2 text-gray-700 hover:text-amber-800 transition-colors focus:outline-none"
      >
        <Globe size={20} />
        <span>{currentLanguage.name}</span>
      </button>
      {isOpen && (
        <div
          className={`absolute right-0 w-40 bg-white rounded-md shadow-lg z-50 ring-1 ring-black ring-opacity-5 ${
            direction === 'up' ? 'bottom-full mb-2' : 'mt-2'
          }`}
        >
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    i18n.language === lang.code
                      ? 'bg-amber-100 text-amber-900'
                      : 'text-gray-700'
                  } hover:bg-amber-50 hover:text-amber-800`}
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;