/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mondo: ['Monda', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],

      },
      animation: {
        'slow-bounce': 'slow-bounce 3s infinite',
      },
      keyframes: {
        'slow-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100px)' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
