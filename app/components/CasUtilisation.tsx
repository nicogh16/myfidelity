'use client';

import { motion } from 'framer-motion';
import { UsersIcon, ClockIcon, ChartBarIcon, GiftIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    icon: UsersIcon,
    value: '7000+',
    label: 'Étudiants',
  },
  {
    icon: ClockIcon,
    value: '24/7',
    label: 'Données en temps réel',
  },
  {
    icon: ChartBarIcon,
    value: '-30%',
    label: 'Temps d\'attente',
  },
  {
    icon: GiftIcon,
    value: '1000+',
    label: 'Récompenses distribuées',
  },
];

const CasUtilisation = () => {
  return (
    <section id="cas-utilisation" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Cas d'utilisation : L'ASAP
          </h2>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto">
            Service de restauration de Polytechnique Montréal
          </p>
        </motion.div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <stat.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-primary/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Détails du cas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Le défi</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-secondary">•</span>
                <span className="ml-3">5 points de service à gérer</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-secondary">•</span>
                <span className="ml-3">2,4 M€ de revenus annuels</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-secondary">•</span>
                <span className="ml-3">Pics d'affluence importants</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-secondary">•</span>
                <span className="ml-3">Besoin de fidélisation étudiante</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Les résultats</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-secondary">•</span>
                <span className="ml-3">Réduction de l'attente aux heures de pointe</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-secondary">•</span>
                <span className="ml-3">Meilleure distribution de la demande</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-secondary">•</span>
                <span className="ml-3">Programme de récompenses populaire</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 text-secondary">•</span>
                <span className="ml-3">Données précieuses sur les habitudes</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Récompenses types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 p-8 rounded-lg"
        >
          <h3 className="text-2xl font-bold text-primary mb-6">Récompenses populaires</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-2xl mb-2">☕️</span>
              <p>Cafés gratuits</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-2xl mb-2">🥪</span>
              <p>Menus combos</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-2xl mb-2">🎁</span>
              <p>Tirages étudiants</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow text-center">
              <span className="text-2xl mb-2">💚</span>
              <p>Récompenses éco</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CasUtilisation; 