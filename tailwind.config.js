/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // 2026 "Vane" Architectural Palette
        vane: {
          dark: "#0B0D10",    // True Charcoal (Backgrounds)
          accent: "#C9A46B",  // Architectural Brass (Primary CTAs)
          muted: "#2B2F36",   // Slate (Secondary elements/Borders)
          paper: "#F0EEE9",   // "Cloud Dancer" (Text & Off-white surfaces)
          gold: "#FFD66B",    // Ion Gold (Subtle interactive highlights)
        },
        // Keeping "Mocha Mousse" as a trend accent for 2026
        accent: {
          DEFAULT: "#A47864",
          foreground: "#F0EEE9",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"], 
        sans: ["Inter", "sans-serif"],
      },
      // Essential for Shadcn animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}