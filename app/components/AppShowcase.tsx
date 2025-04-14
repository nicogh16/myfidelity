'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid';

const features = [
  {
    title: 'Gestion simplifiée',
    description: 'Gérez vos points de fidélité et vos récompenses en quelques clics',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=200&auto=format&fit=crop'
  },
  {
    title: 'Statistiques en temps réel',
    description: 'Suivez vos performances et l\'engagement de vos clients',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=200&auto=format&fit=crop'
  },
  {
    title: 'Notifications intelligentes',
    description: 'Restez informé des nouvelles offres et des points à utiliser',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=200&auto=format&fit=crop'
  }
];

export default function AppShowcase() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-6"
            >
              <span className="rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary">
                Application mobile
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-dark mb-4"
            >
              Une application tout-en-un
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-dark/70 mb-16"
            >
              Gérez votre programme de fidélité où que vous soyez, quand vous voulez.
            </motion.p>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 bg-primary/5 rounded-[40px] -z-10 transform rotate-1"
            />
            <div className="relative bg-white rounded-[32px] shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-b from-primary/10 to-primary/5 p-4"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop"
                      alt="Application mobile MyFidelity"
                      width={400}
                      height={800}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="rounded-full bg-white/90 p-4 text-primary hover:bg-white transition-colors">
                        <PlayIcon className="h-8 w-8" />
                      </button>
                    </div>
                  </motion.div>
                </div>

                <div className="flex flex-col justify-center space-y-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="relative flex gap-6"
                    >
                      <div className="flex-none">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={32}
                            height={32}
                            className="h-6 w-6 object-contain"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-dark mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-dark/70">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 