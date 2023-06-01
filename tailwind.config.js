/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-indivisible)'],
        roc: ['var(--font-roc)'],
      },
      colors: {
        primary: '#E4B589',
        secondary: '#AB6FF9',
      },
    },
  },
  plugins: [],
}
