import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B2C',
          50: '#FFF1EC',
          100: '#FFE4D9',
          200: '#FFD0B8',
          300: '#FFBC98',
          400: '#FFA877',
          500: '#FF9457',
          600: '#FF8036',
          700: '#FF6B2C',
          800: '#FF571D',
          900: '#FF420D',
        },
        secondary: {
          DEFAULT: '#1E40AF',
          50: '#E6EAF4',
          100: '#CCD4E9',
          200: '#99A9D3',
          300: '#667EBD',
          400: '#3353A7',
          500: '#1E40AF',
          600: '#1A38A0',
          700: '#162F91',
          800: '#132782',
          900: '#0F1F73',
        },
        dark: '#0F172A',
        light: '#F8FAFC',
        'primary-light': '#FFE082',
        'primary-dark': '#F57C00',
        'secondary-light': '#81C784',
        'secondary-dark': '#388E3C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config 