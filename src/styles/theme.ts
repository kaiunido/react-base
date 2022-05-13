const breakpoints = {
  sizes: {
    xs: '0',
    sm: '600px',
    md: '960px',
    lg: '1280px - 16px',
    xl: '1920px - 16px',
  },
};

const fontFamily = {
  openSans: "'Open Sans', sans-serif",
  roboto: "'Roboto', sans-serif",
};

const theme = {
  colors: {
    light: {
      bgColor: '#FFFFFF',
      fgColor: '#000000',
      text: '#000000',
    },
    dark: {
      bgColor: '#303030',
      fgColor: '#FFFFFF',
      text: '#FFFFFF',
    },
    primary: '#E53935',
    secondary: '#FFCDD2',
    accent: '#3F51B5',
    success: '#4caf50',
    info: '#2196f3',
    warning: '#fb8c00',
    error: '#ff5252',

    red: '#F44336',
    pink: '#e91e63',
    purple: '#9c27b0',
    deepPurple: '#673ab7',
    indigo: '#3f51b5',
    blue: '#2196F3',
    lightBlue: '#03a9f4',
    cyan: '#00bcd4',
    teal: '#009688',
    green: '#4CAF50',
    lightGreen: '#8bc34a',
    lime: '#cddc39',
    yellow: '#ffeb3b',
    amber: '#ffc107',
    orange: '#ff9800',
    deepOrange: '#ff5722',
    brown: '#795548',
    blueGrey: '#607d8b',
    grey: '#9e9e9e',
    black: '#000000',
    white: '#FFFFFF',
    transparent: 'transparent',
  },
  fonts: {
    family: {
      default: fontFamily.openSans,
      ...fontFamily,
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
    weights: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      black: 900,
    },
  },
  breakpoints: {
    sizes: breakpoints.sizes,
    displays: {
      xsOnly: `only screen and (max-width: ${breakpoints.sizes.xs})`,
      smOnly: `only screen and (min-width: ${breakpoints.sizes.sm}) and (max-width: ${breakpoints.sizes.md})`,
      smAndDown: `only screen and (max-width: ${breakpoints.sizes.md})`,
      smAndUp: `only screen and (min-width: ${breakpoints.sizes.sm})`,
      mdOnly: `only screen and (min-width: ${breakpoints.sizes.md}) and (max-width: ${breakpoints.sizes.lg})`,
      mdAndDown: `only screen and (max-width: ${breakpoints.sizes.lg})`,
      mdAndUp: `only screen and (min-width: ${breakpoints.sizes.md})`,
      lgOnly: `only screen and (min-width: ${breakpoints.sizes.lg}) and (max-width: ${breakpoints.sizes.xl})`,
      lgAndDown: `only screen and (max-width: ${breakpoints.sizes.lg})`,
      lgAndUp: `only screen and (min-width: ${breakpoints.sizes.lg})`,
      xlOnly: `only screen and (min-width: ${breakpoints.sizes.xl})`,
    },
  },
};

export default theme;
