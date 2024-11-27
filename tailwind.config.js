/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#FFFFFF",
        'secondary': "#2C3E50",
        // 'accent': "#F39C12", //Gold
        // 'accent':'#FF7F50', //Coral
        'accent':'#9B59B6', //Purple
        'darkAccent': "#1F2A35"
      },
      fontFamily:
      {
        'afacad':"Afacad Flux"
      },
    },
  },
  plugins: [],
}

