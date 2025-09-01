// tailwind.config.js (ESM za Vite)
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        "2xl": "3rem",
      },
      screens: { "2xl": "1280px" }, 
    },
    extend: {
      colors: {

        brand: {
          DEFAULT: "#3B82F6", // blue-500
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        surface: {
          DEFAULT: "#0b0b12", // glavna pozadina
          2: "#0f0f3d",      // sekundarna / paneli
          3: "#111827",      // tamniji overlay
        },
        // korisne neutralne nijanse
        muted: {
          DEFAULT: "#9CA3AF",
          2: "#6B7280",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        glow: "0 20px 60px rgba(59,130,246,.35)",
        "glow-sm": "0 10px 30px rgba(59,130,246,.25)",
      },
      borderRadius: {
        xl: "0.9rem",
      },
    },
  },
  plugins: [],
};
