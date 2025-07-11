module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7847ea',
        secondary: '#2d1a4a',
        accent: '#7847ea',
        background: '#131118',
        text: '#ffffff',
        'text-secondary': '#ffffff99',
        'text-tertiary': '#ffffffcc',
        'border-color': '#2d2938',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'manrope': ['Manrope', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
}