import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4400AF',
          hover: '#310080',
          border: 'rgba(68, 0, 175, 0.18)',
          surface: {
            xs: 'rgba(68, 0, 175, 0.04)',
            sm: 'rgba(68, 0, 175, 0.06)',
            md: 'rgba(68, 0, 175, 0.10)',
          },
        },
        text: {
          primary: '#111827',
          secondary: '#52627A',
          muted: '#6B7280',
        },
      },
    },
  },
  plugins: [],
}
