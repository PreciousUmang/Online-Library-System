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
        // 'accent':'#9B59B6', //Purple
        // 'accent':'#1ABC9C', //Mint
        // 'accent':'#C0392B', //Crimson
        // 'accent':'#D4AF37', //MutedGold
        'accent':'#3498DB', //Blue      
        // 'accent':'#FF6F61', //Pink
       
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

