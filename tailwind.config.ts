import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fef7ee',
          100: '#fdedd3',
          200: '#fad6a5',
          300: '#f6b86d',
          400: '#f19132',
          500: '#ee7711',  // Main brand — warm amber
          600: '#df5d07',
          700: '#b94409',
          800: '#93360e',
          900: '#772e0f',
          950: '#401505',
        },
        // Warm-tinted neutrals (frontend-design: tint toward brand hue)
        warm: {
          50:  '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dd',
          300: '#d6d0c5',
          400: '#b8b0a1',
          500: '#9a9080',
          600: '#7d7467',
          700: '#665c51',
          800: '#534a41',
          900: '#403831',
          950: '#2a231d',
        },
        earth: {
          50:  '#f8f6f0',
          100: '#eee9db',
          200: '#dfd4b9',
          300: '#ccb88f',
          400: '#bc9d6d',
          500: '#b08b57',
          600: '#a3764a',
          700: '#885e3e',
          800: '#6f4d38',
          900: '#5b4030',
          950: '#312118',
        },
        peru: {
          red:    '#D91023',
          white:  '#FFFFFF',
          gold:   '#F5A623',
          forest: '#2D6A4F',
          ocean:  '#1B4965',
        },
      },
      fontFamily: {
        sans:    ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        // Fluid type scale (typeset skill)
        'fluid-sm':   'clamp(0.875rem, 0.8rem + 0.25vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.35vw, 1.125rem)',
        'fluid-lg':   'clamp(1.125rem, 1rem + 0.5vw, 1.375rem)',
        'fluid-xl':   'clamp(1.25rem, 1rem + 0.75vw, 1.75rem)',
        'fluid-2xl':  'clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem)',
        'fluid-3xl':  'clamp(1.875rem, 1.4rem + 1.8vw, 3rem)',
        'fluid-4xl':  'clamp(2.25rem, 1.5rem + 2.5vw, 4rem)',
        'fluid-hero': 'clamp(2.5rem, 2rem + 3.5vw, 5rem)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
        'gradient-warm': 'linear-gradient(135deg, #fef7ee 0%, #faf9f7 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'out-expo':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'spring':    'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float':      'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
