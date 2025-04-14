'use client';

import { motion } from 'framer-motion';
import { 
  DevicePhoneMobileIcon,
  UserGroupIcon,
  GiftIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Application Mobile',
    description: 'Gérez votre programme de fidélité où que vous soyez. Application disponible sur iOS et Android.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Communauté Étudiante',
    description: 'Accédez à une large communauté d\'étudiants actifs et engagés.',
    icon: UserGroupIcon,
  },
  {
    name: 'Récompenses Exclusives',
    description: 'Offrez des avantages uniques et personnalisés à vos clients fidèles.',
    icon: GiftIcon,
  },
  {
    name: 'Analyses Détaillées',
    description: 'Suivez vos performances et optimisez votre stratégie commerciale.',
    icon: ChartBarIcon,
  },
  {
    name: 'Sécurité Garantie',
    description: 'Vos données et transactions sont protégées par un système sécurisé.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Impact Positif',
    description: 'Contribuez à la réduction du gaspillage alimentaire dans votre région.',
    icon: GlobeAltIcon,
  },
];

const stats = [
  { id: 1, name: 'Étudiants actifs', value: '15k+' },
  { id: 2, name: 'Établissements partenaires', value: '50+' },
  { id: 3, name: 'Satisfaction client', value: '98%' },
];

export default function Advantages() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="absolute w-full h-full bg-gradient-radial from-primary-100 via-white to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-6"
          >
            <span className="rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary">
              Les avantages MyFidelity
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-dark text-center mb-4"
          >
            Tout ce dont vous avez besoin
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-dark/70 text-center"
          >
            Une solution complète pour gérer votre programme de fidélité et développer votre activité.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col bg-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="mb-6">
                <div className="rounded-xl bg-primary/10 p-4 w-16 h-16 flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{feature.name}</h3>
              <p className="text-dark/70 flex-1">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-20 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-8 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-dark/70">{stat.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 