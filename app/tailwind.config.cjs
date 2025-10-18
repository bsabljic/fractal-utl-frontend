/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:"#f5f9ff",100:"#e6f0ff",200:"#cde0ff",300:"#9ec1ff",
          400:"#6fa2ff",500:"#4285ff",600:"#1b6cff",700:"#0f59e6",
          800:"#0d48bf",900:"#0a3999"
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        fractal: {
          "primary": "#4285ff",
          "secondary": "#22d3ee",
          "accent": "#a78bfa",
          "neutral": "#111827",
          "base-100": "#0b1220",
          "info": "#38bdf8",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#ef4444",
        },
      },
    ],
    darkTheme: "fractal",
  },
};
