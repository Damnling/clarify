/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neural: {
          bg: '#05070F',
          surface: '#0C1220',
          border: '#1A2540',
          cyan: '#5EEAD4',
          purple: '#A78BFA',
          gold: '#FFD166',
          pink: '#F472B6',
        },
      },
    },
  },
  plugins: [],
}