'use client';

import { motion } from "framer-motion";
import { gradients, typography } from "../styles/design-system";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 0.15,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Taches de couleur orange floutées */}
      <motion.div
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-orange-200/40 blur-[80px]"
      />
      <motion.div
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-100/50 blur-[100px]"
      />
      <motion.div
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-orange-50/60 blur-[60px]"
      />

      {/* Formes géométriques en arrière-plan */}
      <motion.div
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-orange-200/30 blur-[90px]"
      />
      <motion.div
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-20 left-20 w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-[120px]"
      />
      <motion.div
        variants={shapeVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-40 left-1/4 w-64 h-64 bg-purple-100/30 rotate-45 blur-[70px]"
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.h1 
          variants={itemVariants}
          className={`${typography.h1} mb-6`}
        >
          Fidélisez <span className="text-orange-500">vos clients</span> avec{" "}
          <span className="relative">
            MyFidelity
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className={`${typography.body} mb-8 max-w-2xl mx-auto text-gray-600`}
        >
          La solution <span className="text-orange-500 font-semibold">complète</span> pour créer et gérer votre programme de fidélité. 
          Augmentez vos ventes et fidélisez votre clientèle avec notre plateforme intuitive.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px -10px rgba(234, 88, 12, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className={`${gradients.primary} px-8 py-4 rounded-xl text-white font-semibold transition-shadow`}
          >
            Commencer maintenant
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#f8fafc" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white px-8 py-4 rounded-xl text-gray-900 font-semibold border border-gray-200 transition-colors"
          >
            En savoir plus
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <motion.div 
            whileHover={{ y: -5 }}
            className="text-center p-6 rounded-xl bg-white shadow-lg shadow-orange-100/50"
          >
            <h3 className={`${typography.h2} text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text`}>10k+</h3>
            <p className={`${typography.caption} text-gray-600`}>Clients satisfaits</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="text-center p-6 rounded-xl bg-white shadow-lg shadow-orange-100/50"
          >
            <h3 className={`${typography.h2} text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text`}>95%</h3>
            <p className={`${typography.caption} text-gray-600`}>Taux de rétention</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="text-center p-6 rounded-xl bg-white shadow-lg shadow-orange-100/50"
          >
            <h3 className={`${typography.h2} text-4xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text`}>24/7</h3>
            <p className={`${typography.caption} text-gray-600`}>Support client</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Flèche de défilement repositionnée */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-orange-500"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
} 