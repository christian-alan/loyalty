/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '100rem',
      tablet: { max: '48rem' },
      phone: { max: '26rem' },
      cm: { max: '64rem' },
    },
    colors:{
      orange:'#C76D4A',
      lightOrange:'#F9F0ED',
      black:'#000000',
      blue:'#5EA1F0',
      white:'#FFFFFF',
    },

    extend: {
      
    },
  },
  plugins: [],
}

