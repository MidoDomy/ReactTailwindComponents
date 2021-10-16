function withOpacity(variableName) {
  return ({opacityValue}) => {
    if(opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: (theme) => ({
      center: true,
      padding: theme("spacing.4")
    }),
    minWidth: {
      '0': '0',
      '1': '1rem',
      'full': '100%',
    },
    minHeight: {
     '0': '0',
     '1': '1rem',
     'full': '100%',
    },
    extend: {
      textColor: {
        base: {
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
          light: withOpacity('--color-light'),
          dark: withOpacity('--color-dark'),
          success: withOpacity('--color-success'),
          danger: withOpacity('--color-danger'),
          warning: withOpacity('--color-warning'),
          info: withOpacity('--color-info'),
          disabled: withOpacity('--color-disabled')
        }
      },
      backgroundColor: {
        base: {
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
          light: withOpacity('--color-light'),
          dark: withOpacity('--color-dark'),
          success: withOpacity('--color-success'),
          danger: withOpacity('--color-danger'),
          warning: withOpacity('--color-warning'),
          info: withOpacity('--color-info'),
          disabled: withOpacity('--color-disabled')
        }
      },
      borderColor: {
        base: {
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
          light: withOpacity('--color-light'),
          dark: withOpacity('--color-dark'),
          success: withOpacity('--color-success'),
          danger: withOpacity('--color-danger'),
          warning: withOpacity('--color-warning'),
          info: withOpacity('--color-info'),
          disabled: withOpacity('--color-disabled')
        }
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      backgroundOpacity: ['disabled'],
      borderColor: ['disabled'],
      textColor: ['disabled']
    },
  },
  plugins: [],
}
