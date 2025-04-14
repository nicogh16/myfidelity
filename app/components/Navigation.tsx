'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon,
  QrCodeIcon,
  UserCircleIcon,
  GiftIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { gradients } from '../styles/design-system';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '/', icon: HomeIcon },
    { name: 'Scanner', href: '#scan', icon: QrCodeIcon },
    { name: 'Récompenses', href: '#rewards', icon: GiftIcon },
    { name: 'Profil', href: '#profile', icon: UserCircleIcon },
  ];

  return (
    <>
      {/* Navigation Desktop */}
      <nav className={`fixed w-full z-50 transition-all duration-300 hidden md:block ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                MyFidelity
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">
                Fonctionnalités
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
                Tarifs
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              <Link
                href="#start"
                className={`${gradients.primary} px-4 py-2 rounded-lg text-white hover:shadow-lg transition-shadow`}
              >
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Mobile (style Instagram/Uber) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 pb-safe">
        <div className="grid grid-cols-4 h-16">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center space-y-1"
            >
              <motion.div
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <item.icon className="w-6 h-6 text-gray-600" />
                {item.name === 'Récompenses' && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full" />
                )}
              </motion.div>
              <span className="text-xs text-gray-600">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Menu Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-3/4 bg-white"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 mb-4"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-6 h-6 text-gray-600" />
                      <span className="text-gray-900">{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 