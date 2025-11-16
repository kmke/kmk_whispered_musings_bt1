/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'script': ['Great Vibes', 'cursive'],
      },
      colors: {
        gold: {
          50: '#FFFEF5',
          100: '#FEF9E7',
          200: '#F9E79F',
          300: '#F7DC6F',
          400: '#F4D03F',
          500: '#D4AF37',
          600: '#C9A227',
          700: '#B8941F',
        },
      },
    },
  },
  plugins: [],
};
