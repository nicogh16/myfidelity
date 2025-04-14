'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'Comment intégrer MyFidelity à ma caisse ?',
    answer: 'L\'intégration est simple et rapide. Nous fournissons soit un QR code fixe à afficher, soit un terminal NFC à connecter à votre caisse. Notre équipe technique vous accompagne durant toute l\'installation.',
  },
  {
    question: 'Puis-je choisir mes récompenses ?',
    answer: 'Oui, vous avez un contrôle total sur vos récompenses. Définissez les paliers, les types de récompenses et les conditions d\'obtention selon votre stratégie commerciale.',
  },
  {
    question: 'Est-ce que les étudiants ont besoin d\'un compte ?',
    answer: 'Oui, les étudiants créent un compte gratuit via notre application mobile. Ils peuvent ensuite scanner les QR codes ou utiliser leur téléphone en NFC pour gagner et utiliser leurs points.',
  },
  {
    question: 'Quels sont les coûts ?',
    answer: 'Nous proposons plusieurs formules adaptées à la taille de votre établissement. Contactez-nous pour obtenir un devis personnalisé incluant l\'installation, la formation et le support technique.',
  },
  {
    question: 'Comment sont protégées les données ?',
    answer: 'La sécurité est notre priorité. Toutes les données sont chiffrées et stockées selon les normes RGPD. Nous ne collectons que les informations nécessaires au bon fonctionnement du service.',
  },
  {
    question: 'Quel support technique proposez-vous ?',
    answer: 'Notre équipe support est disponible 7j/7 par email et téléphone. Nous proposons également des sessions de formation pour votre équipe et des mises à jour régulières du système.',
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-b border-primary/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 w-full flex justify-between items-center text-left"
      >
        <span className="text-lg font-medium text-primary">{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-primary transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-primary/70">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-primary/70">
            Tout ce que vous devez savoir sur MyFidelity
          </p>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-primary/70 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="#contact"
            className="text-secondary hover:text-secondary/80 font-medium"
          >
            Contactez-nous →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ; 