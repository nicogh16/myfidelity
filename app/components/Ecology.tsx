'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  SparklesIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const stats = [
  { 
    id: 1, 
    name: 'Déchets évités', 
    value: '2.5T', 
    description: 'de nourriture sauvée chaque mois',
    icon: SparklesIcon 
  },
  { 
    id: 2, 
    name: 'Émissions CO2', 
    value: '-30%', 
    description: 'réduction moyenne par commerce',
    icon: ChartBarIcon 
  },
  { 
    id: 3, 
    name: 'Commerces engagés', 
    value: '50+', 
    description: 'partenaires éco-responsables',
    icon: BuildingStorefrontIcon 
  },
  { 
    id: 4, 
    name: 'Étudiants sensibilisés', 
    value: '15k+', 
    description: 'acteurs du changement',
    icon: UserGroupIcon 
  },
];

const initiatives = [
  {
    title: 'Gestion intelligente des stocks',
    description: 'Notre algorithme prévoit les pics de consommation pour optimiser vos commandes et réduire le gaspillage.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Récompenses éco-responsables',
    description: 'Encouragez vos clients à adopter des pratiques durables avec des points bonus pour les contenants réutilisables.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Communauté engagée',
    description: 'Rejoignez un réseau de commerces et d\'étudiants engagés pour un avenir plus durable.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Ecology() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-green-50 via-white to-white opacity-70" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/80 shadow-xl shadow-green-500/10 ring-1 ring-green-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <span className="rounded-full bg-green-500/10 px-6 py-2 text-sm font-medium text-green-600">
              Impact environnemental
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-dark text-center mb-4"
          >
            Ensemble, réduisons notre empreinte
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-dark/70 text-center"
          >
            MyFidelity s'engage pour un avenir plus durable en aidant les commerces et les étudiants 
            à adopter des pratiques éco-responsables.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="mb-4 rounded-xl bg-green-500/10 p-3">
                <stat.icon className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-dark mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-dark mb-2">{stat.name}</div>
              <div className="text-sm text-dark/70 text-center">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Initiatives Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index }}
                className="relative overflow-hidden rounded-3xl"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-dark/0" />
                </div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
                  <p className="text-white/80 text-sm">{initiative.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold text-dark mb-6">
            Prêt à faire la différence ?
          </h3>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-green-600 px-8 py-4 text-white hover:bg-green-500 transition-colors"
          >
            Rejoindre le mouvement
          </a>
        </motion.div>
      </div>
    </div>
  );
} 