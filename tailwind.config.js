/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e2e2e',
        secondary: '#3a3a3a',
        'text-light': '#f0f0f0',
        'border-dark': '#505050',

        // Light theme colors (optional)
        'primary-light': '#E9E9E9',
        'secondary-light': '#FAFAFA',
        'text-dark': '#696969',
        'border-light': '#BABABA',
      },
    },
  },
  plugins: [],
};