/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      unique: "Unique",
      unique_light: "UniqueLight",
    },
    colors: {
      black: "#0000000",
      green_lemon: "#8CBE19",
      yellow_lemon: "#B4D440",
      sweet_green: "#E2EB70",
      pale_cream: "#F8F5B4",
      soft_ivory: "#FFFBEB",
    },
    extend: {},
  },
  plugins: [],
};
