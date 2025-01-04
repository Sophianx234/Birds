/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Rethink Sans, sans-serif',
      },
    extend: {
      fontFamily: {
        nato: 'Nato Sans',
        rethink: 'Rethink Sans',
        mulish: 'Mulish',
        poppins: 'Poppins',
        Montserrat: 'Montserrat',
        lobster: 'Lobster',
        chewy: 'Chewy',
        inter: 'Inter',
        quicksand: 'Quick-sand'
      }
    
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"], // Keep only the light theme or other themes you prefer
  },
}

