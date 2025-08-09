"use client";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { useHydration } from '../hooks/useHydration';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
  const { t } = useTranslation();
  const hydrated = useHydration();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-50 text-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand and Social */}
          <div className="flex flex-col items-center md:items-start md:col-span-1">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              {hydrated ? t('header.title') : '...'}
            </h2>
            <p className="text-center md:text-left mb-4">
              {hydrated ? t('footer.slogan') : '...'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-amber-700 transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-500 hover:text-amber-700 transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-500 hover:text-amber-700 transition-colors"><Instagram size={24} /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-800">{hydrated ? t('footer.quickLinksTitle') : '...'}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-amber-700 transition-colors">{hydrated ? t('header.about') : '...'}</Link></li>
              <li><Link href="/services" className="hover:text-amber-700 transition-colors">{hydrated ? t('header.services') : '...'}</Link></li>
              <li><Link href="/blog" className="hover:text-amber-700 transition-colors">{hydrated ? t('header.blog') : '...'}</Link></li>
              <li><Link href="/contact" className="hover:text-amber-700 transition-colors">{hydrated ? t('header.contact') : '...'}</Link></li>
            </ul>
          </div>

          {/* Column 3: Friendly Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-800">
              {hydrated ? t('footer.friendlyLinks') : '...'}
            </h3>
            <ul className="space-y-2">
              {hydrated && t('footer.links', { returnObjects: true }) && Array.isArray(t('footer.links', { returnObjects: true })) && (t('footer.links', { returnObjects: true }) as Array<{name: string, url: string}>).map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="hover:text-amber-700 transition-colors" target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-800">{hydrated ? t('footer.contactTitle') : '...'}</h3>
            <p>Email: Nothing</p>
            <p>{hydrated ? t('footer.address') : '...'}</p>
          </div>
        </div>

        <div className="mt-12 border-t border-amber-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">&copy; {currentYear} {hydrated ? t('header.title') : '...'}. All Rights Reserved.</p>
          <LanguageSwitcher direction="up" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;