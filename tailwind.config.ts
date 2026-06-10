import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#031421",
        night: "#071E2D",
        aqua: "#25C7D9",
        mist: "#8FEAF2",
        pearl: "#F6FBFC",
        copy: "#0D1726",
        success: "#17B26A"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(37, 199, 217, 0.22)",
        premium: "0 24px 70px rgba(3, 20, 33, 0.16)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
