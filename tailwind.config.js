/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FBF7EE',          // base cálida según referencia HTML
        'paper-deep': '#F4ECDA',
        ink: '#15110B',
        'ink-soft': '#4A4636',
        muted: '#80796B',
        line: 'rgba(21, 17, 11, 0.10)',
        gold: {
          DEFAULT: '#D9A441',
          deep: '#A87614',
          soft: '#F4E0AB',
        },
        electric: '#0EA8FF',       // azul, solo en panel + energía transformada
        'electric-deep': '#0277C2',
        night: '#0A1014',
        'night-soft': '#131A1F',
      },
      fontFamily: {
        serif: ['Fraunces', 'Times New Roman', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'sm-soft': '0 2px 12px rgba(21, 17, 11, 0.06)',
        'md-soft': '0 18px 40px rgba(21, 17, 11, 0.08)',
        'lg-soft': '0 36px 90px rgba(21, 17, 11, 0.12)',
        'gold': '0 12px 28px rgba(217, 164, 65, 0.32)',
        'panel': '0 50px 120px rgba(10, 16, 20, 0.32), 0 12px 30px rgba(10, 16, 20, 0.18)',
      },
      maxWidth: {
        container: '1320px',
      },
      animation: {
        breathe: 'breathe 2.2s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
}
