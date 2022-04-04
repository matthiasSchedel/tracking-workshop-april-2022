const enablePurge = false;

module.exports = {
  mode: "jit",
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.scss'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          'primary': '#0A0719',
          'secondary': '#605A79',
          'violet': '#7321AC',
          'gray-mid': '#E1E0E5',
          dark: {
            'violet': '#651E96',
            'error': '#8d0000',
          }
        }
      },
      fontFamily: {
        'avenir': 'Avenir Next LT Pro'
      },
      backgroundImage: {
        'bg-image': "url('/assets/bg.png')"
      },
      dropShadow: {
        'main': '0 5px 10px rgb(115 33 172 / 16%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
