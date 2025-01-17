/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      bold: ['TradaSans-Bold', 'Times New Roman', 'Times', 'serif'],
      demibold: ['TradaSans-DemiBold', 'Times New Roman', 'Times', 'serif'],
      regular: ['TradaSans-Regular', 'Times New Roman', 'Times', 'serif'],
      medium: ['TradaSans-Medium', 'Times New Roman', 'Times', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
