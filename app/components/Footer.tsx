'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const navigation = {
  solutions: [
    { name: 'Programme de fidélité', href: '#' },
    { name: 'Application mobile', href: '#' },
    { name: 'Statistiques', href: '#' },
    { name: 'Partenariats', href: '#' },
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: "Guide d'utilisation", href: '#' },
    { name: 'Contact support', href: '#' },
  ],
  entreprise: [
    { name: 'À propos', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Emplois', href: '#' },
    { name: 'Presse', href: '#' },
  ],
  legal: [
    { name: 'CGU', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'Mentions légales', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: FaFacebook, href: '#' },
  { name: 'Twitter', icon: FaTwitter, href: '#' },
  { name: 'Instagram', icon: FaInstagram, href: '#' },
  { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative bg-white">
      {/* Effet de vague décoratif */}
      <div className="absolute inset-x-0 -top-4 h-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAyNGMzMDAtMzIgNDAwLTMyIDcyMCAwIDMyMCAzMiA0MjAgMzIgNzIwIDBWMEgwdjI0WiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')] bg-repeat-x" />

      <div className="mx-auto max-w-7xl">
        {/* Section Newsletter avec fond dégradé */}
        <div className="relative overflow-hidden px-6 py-12 md:py-20 mx-4 my-8 rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 rounded-2xl" />
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Restez informé de nos actualités
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.
              </p>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-10 max-w-md"
            >
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Adresse email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 transition-all duration-200"
                  placeholder="Entrez votre email"
                />
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#ea580c' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex-none rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-all duration-200"
                >
                  S'inscrire
                </motion.button>
              </div>
            </motion.form>
          </div>
        </div>

        {/* Section principale avec fond blanc */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 px-6 py-12 lg:py-16 bg-white">
          {/* Logo et description */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://placehold.co/200x200/FF6B2C/FFFFFF?text=MyFidelity"
                alt="MyFidelity"
                width={150}
                height={40}
                className="rounded-lg"
              />
              <p className="mt-6 text-base leading-7 text-gray-600">
                MyFidelity révolutionne la fidélisation client en proposant une solution innovante et éco-responsable.
                Rejoignez-nous dans cette aventure vers un commerce plus durable.
              </p>
            </motion.div>
            
            {/* Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-6"
            >
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.1, color: '#f97316' }}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-6 w-6" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div>
              <h3 className="text-sm font-semibold leading-6 text-orange-600">Solutions</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-orange-600">Support</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-orange-600">Entreprise</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.entreprise.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-orange-600">Légal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Barre de copyright avec fond subtil */}
        <div className="border-t border-gray-100 bg-gray-50/50">
          <div className="px-6 py-8 md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-sm leading-5 text-gray-600"
              >
                Fait avec ❤️ à Paris, France
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-8 text-sm leading-5 text-gray-600 md:order-1 md:mt-0"
            >
              &copy; 2024 MyFidelity, Inc. Tous droits réservés.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
} 