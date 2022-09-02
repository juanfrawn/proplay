/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
    },
    extend: {
      gridTemplateColumns: {
        '13': 'minmax(60px, 90px) minmax(110px, 1fr) minmax(80px, 100px)',
      },
      spacing: {
        '76': '300px',
        '98': '390px',
        '100': '400px',
        '120': '480px',
      },
      fontFamily: {
        'quicksand': 'Quicksand',
      },

    },
  },
  plugins: [],
}
