module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
      colors: {
        charcoal: '#1a1a1a',
        offwhite: '#f5f3ef',
        warm: '#c8b89a',
        'warm-dark': '#a0937d',
        muted: '#6b6b6b',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
