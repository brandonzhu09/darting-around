/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': '#D4BFBF'
      },
      backgroundImage: {
        'hero-header': "url('./assets/mountain.png')",
        'flight-header': "url('./assets/airplane-view-mountains.jpg')",
        'hotel-header': "url('./assets/ski-resort.jpg')",
      },
      spacing: {
        '128': '32rem'
      },
      fontFamily: {
        body: ['Monda'],
      }
    },
  },
  plugins: [],
}
