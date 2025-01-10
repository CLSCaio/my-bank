import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray100: '#D9D9D9',
        gray200: '#EAE9E9',
        gray300: '#484848',
        gray400: '#B5B5B5',
        'lemon-green': '#1BC681',
        aqua: '#43B7FF',
        'text-default': '#FFF',
      },
      dropShadow: {
        cardShadow: '0 4px 4px #00000040',
      },
    },
  },
  plugins: [],
} satisfies Config;
