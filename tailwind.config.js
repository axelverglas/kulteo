/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-indivisible)"],
        roc: ["var(--font-roc)"],
      },
      colors: {
        primary: "#E4B589",
        secondary: "#AB6FF9",
        secondarylight: "#8758C4",
        whitesmoke: "#F4F4F4",
        jetdark: "#2D2D2D",
        dark: "#1E1E1E",
        grayishblue: "#E5EAEE",
        night: "#111111",
      },
      boxShadow: {
        "night": "0px 1px 2px rgba(114, 113, 113, 0.25)",
        "light": "0px 1px 2px rgba(229, 234, 238, 0.25)",
      },
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(30deg)' },
        },
        swingRight: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-30deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        moveUp: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
        swingRight: 'swingRight 1s ease-in-out infinite',
        moveUp: 'moveUp 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};