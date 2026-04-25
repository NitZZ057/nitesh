/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0F172A',
        panel: '#111827',
        line: '#1F2937',
        primary: '#22C55E',
        secondary: '#38BDF8',
        ink: '#F9FAFB',
        muted: '#9CA3AF',
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 197, 94, 0.18)',
        blueglow: '0 0 44px rgba(56, 189, 248, 0.18)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
