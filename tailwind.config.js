module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        padding: {
          '1em': '1em',
        }
      },
      fontFamily: {
        'body': ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      fontSize: {
        '1.1em': '1.1em',
      },
      screens:{
        'fw': '500px',
        'sw': '700px',
        'lg': '1024px',
        'sm': {'max': '700px'},
      }
    },
    plugins: [],
  }