module.exports = {
  important: true,
  purge: {
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [],
    },
  },
  theme: {
    /**
     * Color values are defined in /src/theme/colors.scss.
     * Color names should be sematic in order to provide
     * contextual alignment when thinking about themes.
     * E.g. primary-text-color (semantic) vs black-1 (literal)
     */
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      app: {
        background: 'var(--app-background)',
        footer: 'var(--app-footer)',
      },
      typography: {
        primary: 'var(--typography-primary)',
        secondary: 'var(--typography-secondary)',
        success: 'var(--typography-success)',
        error: 'var(--typography-error)',
        light: 'var(--typography-light)',
      },
      button: {
        'success': 'var(--button-success)',
        'failure': 'var(--button-failure)',
      },
      white: "#fff",
      twitter: {
        blue: '#1D9BF0',
        link: '#1C9BF3',
        light: "#E1E7EA",
        dark: "rgb(15, 20, 25)",
        subtext: '#536472'
      }
    },
    fontSize: {
      "xxs": '0.65rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '0.9rem': '0.9rem',
      '1.8rem': '1.8rem'
    },
    extend: {
      width: {
        '1em': '1em',
        '170px': "170px"
      },
      margin: {
        'n1em': "-1em",
        '2rem': '2rem'
      },

      border: {
        'a0aec0': '#a0aec0'
      },
      maxWidth: {
        '300px': '300px',
        '600px': '600px',
        '1200px': "1200px",
      },
      maxHeight: {
        '400px': '400px'
      },
      screens: {
        '800px': {
          max: '800px'
        }
      },
      content: {
        square: "'\\25A0'"
      },
      backgroundImage: {
        'twitter-hero': "url('/lohp_en_1302x955.png')"
      },
      gridTemplateRows: {
        'landing-layout': "1fr auto"
      },
      fontFamily: {
        twitter: ['Open Sans', 'sans-serif']
      }
    }
  },
  variants: {},
  plugins: [],
};
