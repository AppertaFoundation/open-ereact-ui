import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';
// import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const font = "'Cabin', sans-serif";

// const breakpoints = createBreakpoints({});

// function pxToRem(value) {
//   return `${value / 16}rem`;
// }
const lightTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: font,
      subtitle1: {
        lineHeight: '24px',
      },
    },
    palette: {
      // background: {
      //   default: '#ffff',
      // },
      primary: {
        main: '#29235c',

        // light: '#546088',
        // main: '#28365b',
        // dark: '#001031',
        // main: 'rgb(83, 79, 124)',
        // dark: '#29235c',
        contrastText: '#fff',
      },
      secondary: {
        main: '#e96d18',
        contrastText: '#000000',
      },
      success: {
        main: '#397F3A',
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            backgroundColor: '#DADADA',
          },
        },
      },
    },
  }),
);

export const themes = {
  light: lightTheme,
  dark: lightTheme,
};
