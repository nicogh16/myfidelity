import { motion } from 'framer-motion';
import { typography } from '../styles/design-system';

const stats = [
  { id: 1, value: '10k+', label: 'Clients satisfaits' },
  { id: 2, value: '95%', label: 'Rétention' },
  { id: 3, value: '24/7', label: 'Support' },
];

export default function Stats() {
  return (
    <div className="relative bg-white py-8 sm:py-16">
      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-y-8 sm:gap-y-16 gap-x-4 sm:gap-x-8 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: stat.id * 0.1 }}
              className="mx-auto flex max-w-[280px] w-full flex-col gap-y-2 sm:gap-y-4"
            >
              <dt className="text-4xl sm:text-5xl font-bold tracking-tight text-orange-500 order-2">
                {stat.value}
              </dt>
              <dd className="text-sm sm:text-base text-gray-600 order-3 leading-relaxed px-2">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Centered Arrow */}
      <div className="hidden sm:block absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-shadow"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500"
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