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
          50: '#fef7ee',
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
        earth: {
          50: '#f8f6f0',
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
          red: '#D91023',     // Inspired by Peruvian flag
          white: '#FFFFFF',
          gold: '#F5A623',
          forest: '#2D6A4F',
          ocean: '#1B4965',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
      },
    },
  },
  plugins: [],
};

export default config;
