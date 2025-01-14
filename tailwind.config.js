/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   "slide-in": "slideIn 0.5s ease-in-out",
      // },
      spacing: {
        '18': '4.5rem',   // Optional: adds 4.5rem to spacing scale
      },
      transform: ['hover', 'focus'], 

      colors: {
        // Add your custom colors if needed
      },
      screens: {
        'sm': '640px',    // Small screens (phone)
        'md': '768px',    // Medium screens (tablet)
        'lg': '1024px',   // Large screens (laptops/desktops)
        'xl': '1280px',   // Extra large screens (big displays)
        '2xl': '1536px',  // Very large screens
      },
      fontFamily:{
        cursive:["poppins","sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        slider: {
          "0%, 33%": { transform: "translateX(0%)" },
          "34%, 66%": { transform: "translateX(-100%)" },
          "67%, 100%": { transform: "translateX(-200%)" },
        },
        // slideIn: {
        //   "0%": { transform: "translateY(100%)", opacity: 0 },
        //   "100%": { transform: "translateY(0)", opacity: 1 },
        // },
      },
      animation: {
        slider: "slider 10s infinite",
      },
    },
  },
  plugins: [],
};
