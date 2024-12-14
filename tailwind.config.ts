import flowbitePlugin from "flowbite/plugin";

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // text
        text_light: {
          50: "#0c0c0c",
        },
        text_dark: {
          50: "#f2f2f2",
        },
        // background
        bg_light: {
          50: "#f2f2f2",
        },
        bg_dark: {
          50: "#2d2d2d",
          100: "#444444",
        },
        // support
        primary: {
          50: "#cb76e2",
        },
        primary_dark: {
          50: "#c31af2",
        },
      },
    },
  },

  plugins: [flowbitePlugin],
} as Config;
