import { motion } from 'framer-motion';
import { 
  QrCodeIcon, 
  GiftIcon, 
  ChartBarIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { gradients, typography } from '../styles/design-system';

const features = [
  {
    icon: QrCodeIcon,
    title: 'Scan & Gagnez',
    description: 'Scannez votre QR code à chaque visite pour cumuler des points automatiquement.'
  },
  {
    icon: GiftIcon,
    title: 'Récompenses',
    description: 'Échangez vos points contre des récompenses exclusives et personnalisées.'
  },
  {
    icon: ChartBarIcon,
    title: 'Statistiques',
    description: 'Suivez vos gains et votre progression en temps réel.'
  },
  {
    icon: CreditCardIcon,
    title: 'Paiements',
    description: 'Payez directement depuis l\'application et gagnez plus de points.'
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Application Mobile',
    description: 'Accédez à votre compte où que vous soyez avec notre application.'
  },
  {
    icon: UserGroupIcon,
    title: 'Parrainage',
    description: 'Invitez vos amis et gagnez des points bonus.'
  }
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gray-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${typography.h2} mb-4`}
          >
            Toutes les fonctionnalités dont vous avez besoin
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`${typography.body} text-gray-600 max-w-2xl mx-auto`}
          >
            Une solution complète pour fidéliser vos clients et développer votre activité
          </motion.p>
        </div>

        {/* Version Mobile : Style carte horizontale swipeable */}
        <div className="md:hidden -mx-4 px-4 space-y-4 overflow-x-auto hide-scrollbar">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4"
            >
              <div className={`${gradients.primary} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Version Desktop : Grille */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group"
            >
              <div className={`${gradients.primary} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className={`${typography.h3} mb-3`}>{feature.title}</h3>
              <p className={`${typography.body} text-gray-600`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bouton d'action mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center md:hidden"
        >
          <motion.button
            whileTap={{ scale: 0.98 }}
            className={`${gradients.primary} w-full py-4 rounded-xl text-white font-semibold shadow-lg shadow-orange-500/20`}
          >
            Découvrir toutes les fonctionnalités
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 