/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      "my-bg": "#fafafb",
      "my-text": "#2d3033",
      "my-base": "#FFFFFF",
      "my-brand": "#2974e9",
      "my-subbrand": "#94baf4",
      "my-accent": "#e99e29",
      "my-subaccent": "#f4cf94",
      "white" : "#FFFFFF",
      "black" : "#000000",
      "red" : "#FF0000",
      "blue" : "#0000FF",
      "my-blue" : "#1D5D9B",
    }
  },
  plugins: [],
}
