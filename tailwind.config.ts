import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#7B93A6",
        bg: "#FFFFFF", 
        text: "#37474F",
        accent: "#CFD8DC",
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'cursive'],
        body: ['var(--font-body)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
