/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./src/**/*.{html,js}'],
  theme: {
    extend: {
      
        fontFamily: {
          'sans': ['Montserrat','sans-serif'],
        },
        fontFamily: {
          'cute' : ['Montserrat Alternates'],
        },
        fontFamily: {
          'moon' : ['Montserrat', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

