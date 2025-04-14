export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  scaleHover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 }
  },
  cardHover: {
    scale: 1.03,
    y: -5,
    transition: { type: "spring", stiffness: 300 }
  }
};

export const gradients = {
  primary: "bg-gradient-to-r from-orange-500 to-orange-600",
  secondary: "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900",
  subtle: "bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50",
  glass: "backdrop-blur-md bg-white/10 border border-white/20",
  darkGlass: "backdrop-blur-md bg-gray-900/80 border border-gray-800/50"
};

export const shadows = {
  subtle: "shadow-lg shadow-gray-900/5",
  medium: "shadow-xl shadow-gray-900/10",
  strong: "shadow-2xl shadow-gray-900/20",
  glow: "shadow-lg shadow-orange-500/30"
};

export const typography = {
  h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  h2: "text-3xl md:text-4xl font-bold tracking-tight",
  h3: "text-2xl md:text-3xl font-semibold",
  body: "text-base md:text-lg leading-relaxed",
  caption: "text-sm text-gray-500"
};

export const effects = {
  glassmorphism: "backdrop-blur-xl bg-white/10 border border-white/20",
  darkGlassmorphism: "backdrop-blur-xl bg-gray-900/80 border border-gray-800/50",
  softShadow: "shadow-lg shadow-gray-900/5 hover:shadow-xl transition-shadow duration-300",
  glowHover: "hover:shadow-lg hover:shadow-orange-500/30 transition-shadow duration-300"
}; 