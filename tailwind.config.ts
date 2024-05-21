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
        primary : ["Lexend", "sans-serif"]
      },
      colors: {
        biru: "#1F2C56",
        kuning: "#FFBD2B",
        hijau: "#00BA89",
      },
    },
  },
  plugins: [],
};
export default config;
