import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#164B9C",
          blueDark: "#0B2D63",
          blueLight: "#EAF1FC",
        },
        accent: {
          // Green pulled from the SaiTech logo's "A" mark
          green: "#3AAE49",
          greenDark: "#2E8A3A",
          greenLight: "#E7F6EA",
        },
        ink: "#1B2430",
        muted: "#6B7686",
        soft: "#F3F5F9",
        line: "#E5E9F0",
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(11,45,99,0.08)",
        cardHover: "0 20px 45px rgba(11,45,99,0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
