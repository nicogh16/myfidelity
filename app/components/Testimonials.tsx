'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    content: "MyFidelity a transformé la façon dont nous gérons notre programme de fidélité. L'interface est intuitive et nos étudiants adorent !",
    author: {
      name: 'Marie Laurent',
      role: 'Gérante - Le Petit Bistrot',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
    }
  },
  {
    content: "Depuis que nous utilisons MyFidelity, notre fréquentation étudiante a augmenté de 40%. C'est un véritable game-changer pour notre établissement.",
    author: {
      name: 'Thomas Dubois',
      role: 'Directeur - Café Campus',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop'
    }
  },
  {
    content: "L'application est super simple à utiliser et le support client est toujours là quand on en a besoin. Je recommande vivement !",
    author: {
      name: 'Sophie Martin',
      role: 'Manager - Fresh&Co',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop'
    }
  },
];

export default function Testimonials() {
  return (
    <div className="relative isolate bg-white py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-gradient-radial from-primary-100 via-white to-white" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <span className="rounded-full bg-primary/10 px-6 py-2 text-sm font-medium text-primary">
              Témoignages
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-dark mb-4"
          >
            Ce qu'en pensent nos clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg text-dark/70"
          >
            Découvrez les retours d'expérience de nos partenaires qui utilisent MyFidelity au quotidien.
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="flex flex-col justify-between bg-white rounded-3xl p-8 shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="relative mb-8">
                <svg
                  className="absolute -top-4 -left-4 h-8 w-8 text-primary/20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-lg text-dark/80 italic">{testimonial.content}</p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.author.imageUrl}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-semibold text-dark">{testimonial.author.name}</div>
                  <div className="text-sm text-dark/70">{testimonial.author.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 