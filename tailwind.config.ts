import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hg: {
          green: "#004225",
          cream: "#F7F2D9",
          sage: "#A8BFA3",
          amber: "#E6B8A2",
          red: "#C46A6A",
          darkgreen: "#002D18",
          gold: "#C8B97A",
          body: "#222222",
          grey: "#666666",
          sagelight: "#EEF4ED",
          amberlight: "#FDF3EE",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
