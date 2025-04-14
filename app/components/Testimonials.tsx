'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import { typography } from '../styles/design-system';
import { TestimonialType } from '../types';

const testimonials: TestimonialType[] = [
  {
    id: 1,
    content: "MyFidelity a transformé la façon dont nous gérons notre programme de fidélité. Nos clients adorent !",
    author: "Marie Laurent",
    role: "Propriétaire de boutique",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    content: "Une solution simple et efficace qui nous a permis d'augmenter notre taux de rétention client de 40%.",
    author: "Thomas Dubois",
    role: "Directeur Marketing",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    content: "Interface intuitive et support client exceptionnel. Je recommande vivement !",
    author: "Sophie Martin",
    role: "Restauratrice",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`${typography.h2} mb-4`}>
            Ce que nos clients disent
          </h2>
          <p className={`${typography.body} text-gray-600 max-w-2xl mx-auto`}>
            Découvrez les expériences de nos clients satisfaits
          </p>
        </motion.div>

        {/* Version Mobile : Style Stories Instagram */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto hide-scrollbar gap-4 -mx-4 px-4 mb-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px]"
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-500"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.author}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-1">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-orange-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Version Desktop : Grille */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-orange-500"
                />
                <div>
                  <h3 className={`${typography.h3}`}>{testimonial.author}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
                ))}
              </div>
              <p className={`${typography.body} text-gray-600`}>
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 