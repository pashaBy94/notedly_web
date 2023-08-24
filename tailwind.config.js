module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      padding: {
        '1em': '1em',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotateY(0)' },
          '50%': { transform: 'rotateY(4.142rad)' },
        },
        drobbl: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out ',
        drobbl: 'drobbl 1s ease-in-out infinite',
      },
      // keyframes: {
      //   drobbl: {
      //     '0%, 100%': { transform: 'rotate(-3deg)' },
      //     '50%': { transform: 'rotate(3deg)' },
      //   }
      // },
      // animation: {
      //   drobbl: 'drobbl 1s ease-in-out infinite',
      // }
    },
    fontFamily: {
      'body': ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
    fontSize: {
      '1.1em': '1.1em',
    },
    screens: {
      'if': { 'max': '340px' },
      'fw': '500px',
      'vm': { 'max': '400px' },
      'fm': { 'max': '500px' },
      'sw': '700px',
      'lg': '1024px',
      'sm': { 'max': '700px' },
    }
  },
  plugins: [],
}