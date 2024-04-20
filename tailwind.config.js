/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {},
  },
  
  daisyui: {
    themes: [
      {
                mytheme: {
                
        "primary": "#030A1C",
                
        "secondary": "#DB00FF",
                
        "accent": "#55C1B3",
                
        "neutral": "#80E786",
                
        "base-100": "#030A1C",
                
        "info": "#0000ff",
                
        "success": "#00ff00",
                
        "warning": "#00ff00",
                
        "error": "191B1F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

