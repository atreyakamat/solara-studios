/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#070A05',
        darkGreen: '#111B0B',
        deepOlive: '#20320B',
        lime: {
          DEFAULT: '#A6FF19',
          light: '#C4FF77',
          hover: '#93e615',
          muted: '#85d40f',
        },
        cream: '#F7F9EF',
        white: '#FFFFFF',
        muted: '#73776C',
        gridLine: '#DCE4CF',
        borderLine: '#D7DEC9',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        'page': '1280px',
      },
      boxShadow: {
        'lime-glow': '0 0 25px rgba(166, 255, 25, 0.25)',
        'lime-pill': '0 4px 20px rgba(166, 255, 25, 0.3)',
        'subtle': '0 2px 8px rgba(7, 10, 5, 0.04)',
        'elevated': '0 12px 35px -5px rgba(7, 10, 5, 0.08)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
}