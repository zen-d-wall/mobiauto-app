import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: theme => ({
      'resultbg': '#ccfbf1',
      'pricepill': '#14b8a6',
     }),
    extend: {
    },
  },
  plugins: [],
};
export default config;
