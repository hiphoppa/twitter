module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          // '0%': { transform: 'rotate(0deg)' },
          // '20%': { transform: 'rotate(3deg)' },
          // '40%': { transform: 'rotate(-3deg)' },
          // '60%': { transform: 'rotate(3deg)' },
          // '80%': { transform: 'rotate(-3deg)' },
          // '100%': { transform: 'rotate(0deg)' },
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      blur: {
        xs: '1px',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        spin: 'spin 2s linear infinite',
      },
      colors: {
        primary: {
          400: '#1DA1F2',
          450: '#1E96FA',
        }
      },
      fontFamily: {
        'iran': 'IRANSansX, serif !important',
      },
      fill: theme => ({
        current: 'currentColor',
        'red': theme('colors.red.400'),
        'white': theme('colors.white'),
      }),
      height: {
        29: '7.25rem',
        30: '7.5rem',
      },
      width: {
        '29': '7.25rem',
        '30': '7.5rem',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
      blur: ['group-hover'],
      brightness: ['hover'],
      fill: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
