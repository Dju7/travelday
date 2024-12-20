import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'accueil': "url('/mainback1.jpg')",
        'destination': "url('/ban.jpg')",
        'voyageur': "url('/voyageur.jpg')"
        
      },
      zIndex: {
        '1000': '1000',
      }
    },
    darkMode: "class",
    plugins: [nextui()]
  },
  plugins: [],
};
export default config;
