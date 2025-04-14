'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, BellIcon } from '@heroicons/react/24/outline';

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
    { name: 'Solution', href: '#solution' },
    { name: 'Avantages', href: '#avantages' },
    { name: 'Partenaires', href: '#partenaires' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              MyFidelity
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dark hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Points et notifications */}
            <div className="flex items-center space-x-4 ml-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center bg-primary/10 px-4 py-2 rounded-full"
              >
                <ShoppingCartIcon className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium text-primary">0 PTS</span>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <BellIcon className="h-6 w-6 text-dark" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-secondary rounded-full"></span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-dark" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-dark" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-lg text-dark hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center bg-primary/10 px-4 py-2 rounded-full">
                  <ShoppingCartIcon className="h-5 w-5 text-primary mr-2" />
                  <span className="font-medium text-primary">0 PTS</span>
                </div>
                
                <button className="relative p-2 rounded-full hover:bg-gray-100">
                  <BellIcon className="h-6 w-6 text-dark" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-secondary rounded-full"></span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 