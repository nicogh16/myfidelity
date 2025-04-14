'use client';

import { motion } from 'framer-motion';
import { ChartBarIcon, UserGroupIcon, BanknotesIcon, HeartIcon, SparklesIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface Advantage {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface AdvantageCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const advantages: { merchants: Advantage[]; students: Advantage[] } = {
  merchants: [
    {
      icon: ChartBarIcon,
      title: 'Augmentation de la fréquentation',
      description: 'Attirez et fidélisez plus de clients grâce à un système de récompenses attractif.',
    },
    {
      icon: UserGroupIcon,
      title: 'Données clients précieuses',
      description: 'Analysez les habitudes de consommation pour optimiser votre offre.',
    },
    {
      icon: BanknotesIcon,
      title: 'Satisfaction client accrue',
      description: 'Récompensez la fidélité de vos clients et augmentez leur satisfaction.',
    },
  ],
  students: [
    {
      icon: HeartIcon,
      title: 'Économies substantielles',
      description: 'Profitez de réductions et récompenses à chaque visite.',
    },
    {
      icon: SparklesIcon,
      title: 'Engagement écologique',
      description: 'Participez à la réduction du gaspillage et aux initiatives zéro déchet.',
    },
    {
      icon: ArrowPathIcon,
      title: 'Flexibilité totale',
      description: 'Utilisez vos points quand vous voulez, où vous voulez.',
    },
  ],
};

const AdvantageCard = ({ icon: Icon, title, description }: AdvantageCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <Icon className="h-12 w-12 text-secondary mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-primary/70">{description}</p>
  </motion.div>
);

const Avantages = () => {
  return (
    <section id="avantages" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-light mb-4">
            Les avantages MyFidelity
          </h2>
          <p className="text-xl text-light/80 max-w-2xl mx-auto">
            Une solution gagnant-gagnant pour les commerçants et les étudiants
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Avantages commerçants */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-secondary mb-8"
            >
              📊 Pour les commerçants
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.merchants.map((advantage) => (
                <AdvantageCard key={advantage.title} {...advantage} />
              ))}
            </div>
          </div>

          {/* Avantages étudiants */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-secondary mb-8"
            >
              💸 Pour les étudiants
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advantages.students.map((advantage) => (
                <AdvantageCard key={advantage.title} {...advantage} />
              ))}
            </div>
          </div>
        </div>

        {/* Section écologique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-secondary/10 p-8 rounded-lg border border-secondary/20"
        >
          <h3 className="text-2xl font-bold text-secondary mb-4">
            🌱 Impact écologique positif
          </h3>
          <div className="text-light space-y-4">
            <p>
              MyFidelity s'engage pour l'environnement en encourageant :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>La réduction du gaspillage alimentaire</li>
              <li>Les initiatives zéro déchet</li>
              <li>Les récompenses écoresponsables</li>
              <li>La dématérialisation des cartes de fidélité</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Avantages; 