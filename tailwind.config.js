/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: 'repeat(auto-fit, minmax(600px, 1fr))'
      }
    }
  },
  plugins: []
}
