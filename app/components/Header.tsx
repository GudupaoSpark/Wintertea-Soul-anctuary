"use client"; // Add this directive for useState
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { useHydration } from '../hooks/useHydration';
import '../i18n'; // Initialize i18next

const Header = () => {
  const { t } = useTranslation();
  const hydrated = useHydration();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 bg-amber-50 shadow-md`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-amber-800 hover:text-amber-900 transition-colors">
          <Link href="/">
            {hydrated ? t('header.title') : '...'}
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-amber-800 transition-colors">
            {hydrated ? t('header.about') : '...'}
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-amber-800 transition-colors">
            {hydrated ? t('header.services') : '...'}
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-amber-800 transition-colors">
            {hydrated ? t('header.blog') : '...'}
          </Link>
          <Link href="/contact" className="bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-colors">
            {hydrated ? t('header.contact') : '...'}
          </Link>
          <LanguageSwitcher />
        </nav>
        <div className="md:hidden">
          {/* Hamburger button - ONLY opens the menu */}
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-white/80 backdrop-blur-lg`}>
        {/* A dedicated close button inside the menu */}
        <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-6 text-gray-700 focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          <Link href="/about" className="text-2xl text-gray-800 hover:text-amber-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
            {hydrated ? t('header.about') : '...'}
          </Link>
          <Link href="/services" className="text-2xl text-gray-800 hover:text-amber-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
            {hydrated ? t('header.services') : '...'}
          </Link>
          <Link href="/blog" className="text-2xl text-gray-800 hover:text-amber-800 transition-colors" onClick={() => setIsMenuOpen(false)}>
            {hydrated ? t('header.blog') : '...'}
          </Link>
          <Link href="/contact" className="text-2xl bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
            {hydrated ? t('header.contact') : '...'}
          </Link>
           {/* Language Switcher Mobile */}
          <div className="pt-8">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;