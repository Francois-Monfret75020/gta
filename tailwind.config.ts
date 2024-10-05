import { info } from "console";
import { Oswald } from "next/font/google";
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
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "serif"],
        gta: ["var(--gta-font)"],
      },
      colors: {
        creme: "#E9E3D1",
        greeno: "#00fe9b",
        blacko: "#001D1B",
        neonGlow: "#02c435",
        neon: "#00fe9b",
        pinkGta: "#c812aa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        calendly: "1650px",
        footer: "652px",
        info: "900px",
      },
      // fontFamily: { gta: ["var(--gta-font)"] }, // Removed duplicate property
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    function ({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, any>,
        variants?: string[]
      ) => void;
    }) {
      const newUtilities = {
        ".text-glow": {
          textShadow:
            "0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor",
        },
      };
      addUtilities(newUtilities, ["hover"]);
    },
  ],
};

export default config;
