/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      yellow_custon: '#FFCC70',
      pink_custon: '#C850C0',
      blue_custom: '#4158D0',
      purple_custom: '#711DE0',
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent'
    }
  },
  plugins: [],
}