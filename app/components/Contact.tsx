'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

interface FormData {
  name: string;
  institution: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    institution: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, nous ajouterons la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative isolate bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950">
      {/* Background effects */}
      <div className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-orange-500 to-orange-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Contactez-nous
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Prêt à révolutionner votre système de fidélité ? Parlons-en !
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 p-10 rounded-3xl backdrop-blur-lg border border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-300">
                  Nom complet
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-orange-500 sm:text-sm sm:leading-6 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium leading-6 text-gray-300">
                  Institution
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="institution"
                    id="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Nom de votre établissement"
                    className="block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-orange-500 sm:text-sm sm:leading-6 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-orange-500 sm:text-sm sm:leading-6 transition-colors duration-200"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-300">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="block w-full rounded-lg border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-orange-500 sm:text-sm sm:leading-6 transition-colors duration-200"
                  />
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:from-orange-600 hover:to-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 transition-all duration-200"
                >
                  Envoyer
                </button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:ml-8 space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Nos coordonnées</h3>
              <dl className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-x-4 rounded-lg bg-white/5 p-6 backdrop-blur-lg border border-gray-800"
                >
                  <dt className="flex-none">
                    <span className="sr-only">Adresse</span>
                    <BuildingOffice2Icon className="h-7 w-6 text-orange-500" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-7 text-gray-300">
                    <p className="font-semibold text-white">MyFidelity</p>
                    <p>Polytechnique Montréal</p>
                    <p>2900 Boulevard Édouard-Montpetit</p>
                    <p>Montréal, QC H3T 1J4</p>
                  </dd>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex gap-x-4 rounded-lg bg-white/5 p-6 backdrop-blur-lg border border-gray-800"
                >
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon className="h-7 w-6 text-orange-500" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-7 text-gray-300">
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:contact@myfidelity.com" className="hover:text-orange-500 transition-colors duration-200">
                      contact@myfidelity.com
                    </a>
                  </dd>
                </motion.div>
              </dl>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Suivez-nous</h3>
              <div className="flex gap-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram className="h-6 w-6" />
                </motion.a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Horaires de support</h3>
              <div className="rounded-lg bg-white/5 p-6 backdrop-blur-lg border border-gray-800">
                <p className="text-sm leading-7 text-gray-300">
                  Lundi - Vendredi : 9h - 18h
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background effects */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-orange-500 to-orange-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
    </div>
  );
};

export default Contact; 