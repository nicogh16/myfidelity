import { motion } from 'framer-motion';
import { typography } from '../styles/design-system';

const stats = [
  { id: 1, value: '10k+', label: 'Clients satisfaits' },
  { id: 2, value: '95%', label: 'Rétention' },
  { id: 3, value: '24/7', label: 'Support' },
];

export default function Stats() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-16 gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.id * 0.1 }}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className={`${typography.h1} text-orange-500 order-2 text-5xl font-bold tracking-tight`}>
                {stat.value}
              </dt>
              <dd className={`${typography.body} text-gray-600 order-3 text-base leading-7`}>
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Centered Arrow */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg
            className="w-6 h-6 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
} 