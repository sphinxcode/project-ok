/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A962',
          light: '#E8D5A3',
          dark: '#9A7B3C',
        },
        'deep-purple': '#1A1423',
        'purple-mid': '#2D2438',
        'purple-light': '#3D3250',
        cream: '#FAF8F5',
        'text-light': '#E8E4DF',
        'text-muted': '#9B95A3',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
