import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url(/meggi.jpg)",
        "meggi": "url(/meggi.jpg)",
        "collector": "url(/collector.jpg)",
      },
    },
  },
  plugins: [],
};
export default config;