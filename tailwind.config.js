/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts,html}",
    "./components/*.{js,vue,ts,html}",
    "./layouts/**/*.vue",
    "./pages/**/*.{html,vue,js}",
    "./pages/*.{html,vue,js}",
    "./plugins/**/*.{js,ts}",
    "./plugins/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

