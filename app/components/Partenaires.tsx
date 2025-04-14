'use client';

import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Polytechnique Montréal',
    logo: '/logos/poly.png',
    description: 'École d\'ingénierie de renommée internationale',
  },
  {
    name: 'L\'ASAP',
    logo: '/logos/asap.png',
    description: 'Service de restauration universitaire',
  },
  {
    name: 'Propolys',
    logo: '/logos/propolys.png',
    description: 'Partenaire technologique',
  },
];

const Partenaires = () => {
  return (
    <section id="partenaires" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Nos partenaires
          </h2>
          <p className="text-xl text-primary/70 max-w-2xl mx-auto">
            Ils nous font confiance pour fidéliser leur clientèle étudiante
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="h-32 flex items-center justify-center mb-6">
                {/* Placeholder pour les logos */}
                <div className="w-48 h-24 bg-primary/5 rounded flex items-center justify-center">
                  <span className="text-primary font-medium">{partner.name}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {partner.name}
              </h3>
              <p className="text-primary/70">{partner.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-light transition-colors font-medium"
          >
            Devenez partenaire
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Partenaires; 