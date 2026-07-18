import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0F172A",
        "teal-premium": "#14B8A6",
        "gold-luxe": "#D4AF37",
        "gold-light": "#F5E6CC",
        cream: "#F8FAFC",
        charcoal: "#1E293B",
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(135deg, #D4AF37 0%, #F5E6CC 50%, #D4AF37 100%)",
      },
      boxShadow: {
        card: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
