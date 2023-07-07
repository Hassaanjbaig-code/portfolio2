/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Belanosima: ["Belanosima", "sans-serif"],
        Roboto: ['Roboto Condensed', 'sans-serif'],
        Bebas_Neue: ['Bebas Neue', 'sans-serif']
      },
      gridTemplateColumns: {
        '14c': 'repeat(3, minmax(0, 0.23fr));',
        '16': 'repeat(3, minmax(0, 1.23fr))',
      },
      colors: {
        'border': '#9f9f9f76',
        'tcolor': '#9f9f9f'
      },
      placeholderColor: {
        'primary': '#9f9f9f76',
      }
    },
  },
  plugins: [],
}
