/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#FDF6F0',
          100: '#FAEADE',
          200: '#F5CEAF',
          300: '#EFB07D',
          400: '#E8904A',
          500: '#D4723A',   // primary
          600: '#B85C2C',
          700: '#8F4420',
          800: '#652F16',
          900: '#3D1C0C',
        },
        blush: {
          50:  '#FEF0F4',
          100: '#FCD9E5',
          200: '#F9AECA',
          300: '#F47DAA',
          400: '#EB4D86',
          500: '#D4356E',   // accent
          600: '#A8244F',
        },
        ink: {
          50:  '#F7F5F3',
          100: '#EAE6E1',
          200: '#D4CEC6',
          300: '#B8AFA4',
          400: '#968A7E',
          500: '#756A60',
          600: '#5A5049',
          700: '#423A34',
          800: '#2C2620',
          900: '#1A1510',   // near black
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#2C2620',
            a: { color: '#D4356E', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
            h1: { fontFamily: 'var(--font-display)', color: '#1A1510' },
            h2: { fontFamily: 'var(--font-display)', color: '#1A1510' },
            h3: { fontFamily: 'var(--font-display)', color: '#1A1510' },
          },
        },
      },
    },
  },
  plugins: [],
}
