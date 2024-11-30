/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': {opacity: 1},
          '50%': {opacity: 0},
        },
      },
      colors: {
        primary: '#092c2f', // Dark Cyan
        secondary: '#a4dc1b', // Neon Green
        'strong-blue': '#085fd1',
        'grey-text': '#a9a9a9',
        'vivid-yellow': '#e0f561', // Same as quote-radio-option
        white: '#fff',
        black: '#000',
        'footer-stroke': '#7a7a7a',
        'quote-radio-option': '#e0f561', // Same as vivid-yellow
        'white-2': '#ffffff',
        'black-2': '#000000',
      },
      fontFamily: {
        sans: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
