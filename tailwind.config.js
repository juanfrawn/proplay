/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '76': '300px',
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
