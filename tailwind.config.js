/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'pink',
          100: 'blue',
        },
        secondary: {
          50: 'pink',
          100: 'blue',
        },
        fontFamily: {},
      },
    },
  },
  plugins: [],
}
