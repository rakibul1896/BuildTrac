module.exports = {
  purge: ['./public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('Svg/contact-img.png')",
        'project-background': "linear-gradient(to right bottom, rgba(241,241,255,0.8), rgba(255,255,255,0.8)), url('Svg/Path 619 1.png')",
       },
      width: {
        '53%': '53.333333%',
        '43%': '43.333333%',
        '46%' : '46%',
      },
      height: {
        46: '187px',
        897: '896px',
        500: '499px',
        41: '41px'
      },
      colors: {
        black: '#212121',
        gray: '#848484',
        'gray-bold': '#959595',
        'gray-new': '#eceff1',
        white: '#FFFFFF',
        offWhite: '#F0EFFF',
        'white-near': '#FFFFFB',
        'white-blue': '#F1F2FF',
        'white-close': '#F1F1FF',
        sky: '#F1FEFF',
        'sky-light': '#f5f5ff',
        blue: '#3B51D1',
        'blue-light': '#968FFF',
        'blue-lighter': '#B9B4FF',
        'blue-deep': '#6A63D9',
        'blue-dark': '#575989',
        pink: '#F37A7A',
        'yellow-new': '#FF9800',
        'yellow-medium': '#E5AD5A',
        'yellow-light': '#DEC7A5',
        'yellow-lighter': '#fefff8',
        heading: '#212B65',
        unknown: "#438488",
        'red-new': '#f37a7a',
        'purple-text': '#968FFF',
        'purple-border': '#B7B3EF',
        bottom: '#575989',
      },
  
      fontFamily: {
        quick: ['Quicksand', 'sans-serif'],
        lat: ['Lato', 'sans-serif'],
        rob: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        '5rem': ['5rem', '1.25'],
       },
       screens: {
        'dsk': '1900px',
        // => @media (min-width: 1900px) { ... }
      },
      inset: {
       '16%': '16%',
       '2%': '2%',
      },
      backgroundSize: {
        '100%': '100%',
      },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
