/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'tinyMobile': {'min': '320px', 'max': '355px'},
      'mobile': {'min': '356px', 'max': '399px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      'mobileBig': {'min': '400px', 'max': '500px'},
      'tinyTablet': {'min': '501px', 'max': '640px'},


      'tablet': {'min': '641px', 'max': '715px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'bigTablet': {'min': '716px', 'max': '819px'},


      'desktop': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

    },

    // fontSize: {
    //   'xl': '1.22rem', 
    // },
  },
  plugins: [],
}
