import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          brown: "#3E2723",
          dark: "#2D1B18",
        },
        matte: {
          black: "#121212",
        },
        cream: {
          DEFAULT: "#F5E6D3",
          light: "#FAF3E0",
        },
        gold: {
          DEFAULT: "#C6A75E",
          light: "#D4AF37",
          dark: "#B8860B",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "xl": "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        "luxury": "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
        "gold-glow": "0 0 20px rgba(198, 167, 94, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
