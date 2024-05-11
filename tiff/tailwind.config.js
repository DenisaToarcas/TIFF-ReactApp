/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // Enable dark mode based on class
  theme: {
    extend: {
      colors: {
        // Define your dark mode colors here
        darkGray: {
          DEFAULT: '#333333',
        },
        darkBlue: {
          DEFAULT: '#1a202c',
        },
        darkGreen: {
          DEFAULT: '#2b6cb0',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['dark'], // Enable textColor variant for dark mode
      backgroundColor: ['dark'], // Enable backgroundColor variant for dark mode
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}