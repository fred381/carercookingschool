import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'hg-green': '#004225',
        'hg-cream': '#F7F2D9',
        'hg-sage': '#A8BFA3',
        'hg-amber': '#E6B8A2',
        'hg-darkgreen': '#002D18',
        'hg-gold': '#C8B97A',
        'hg-sagelight': '#EEF4ED',
        'hg-amberlight': '#FDF3EE',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
