import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        bg: {
          primary: "#050B1A",
          secondary: "#0A1628",
          tertiary: "#0F1E3D",
        },
        text: {
          primary: "#E8EEF7",
        },
        accent: "#00E0FF",
      },
    },
  },
  plugins: [],
};

export default config;
