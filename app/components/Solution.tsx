'use client';

import { motion } from 'framer-motion';
import { DevicePhoneMobileIcon, QrCodeIcon, GiftIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: DevicePhoneMobileIcon,
    title: 'Application Mobile',
    description: 'Une interface intuitive pour gérer vos points et récompenses en quelques clics.',
  },
  {
    icon: QrCodeIcon,
    title: 'QR Code Unique',
    description: 'Un code personnel sécurisé pour accumuler vos points rapidement.',
  },
  {
    icon: GiftIcon,
    title: 'Récompenses Exclusives',
    description: 'Des offres personnalisées basées sur vos habitudes d\'achat.',
  },
  {
    icon: ChartBarIcon,
    title: 'Statistiques Détaillées',
    description: 'Suivez vos économies et votre impact environnemental.',
  },
];

const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-dark mb-6"
          >
            Une Solution{' '}
            <span className="text-primary">Intelligente</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-dark/70 max-w-2xl mx-auto"
          >
            Découvrez comment MyFidelity révolutionne la fidélisation étudiante avec une technologie innovante et facile à utiliser.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-card hover:shadow-hover transition-all group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">{feature.title}</h3>
              <p className="text-dark/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8"
        >
          <div className="bg-white rounded-2xl shadow-card p-8 flex flex-col md:flex-row items-center justify-between">
            <div className="text-left mb-8 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-dark mb-4">
                Prêt à commencer ?
              </h3>
              <p className="text-dark/70 mb-6">
                Rejoignez MyFidelity dès aujourd'hui et commencez à gagner des points sur vos achats.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors shadow-soft"
              >
                Créer un compte
              </motion.button>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center">
                <span className="text-primary/50">Aperçu de l'application</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution; 