import { Components } from '@mui/material'
import GeomanistBlack from '../../assets/fonts/geomanist-black-webfont.woff2'
import GeomanistBold from '../../assets/fonts/geomanist-bold-webfont.woff2'
import GeomanistLight from '../../assets/fonts/geomanist-light-webfont.woff2'
import GeomanistMedium from '../../assets/fonts/geomanist-medium-webfont.woff2'
import GeomanistRegular from '../../assets/fonts/geomanist-regular-webfont.woff2'
import palette from './palette'
import shadows from './shadows'

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Geomanist';
        font-style: normal;
        font-display: swap;
        font-weight: 700;
        src: local('Geomanist'), url(${GeomanistBlack}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'Geomanist';
        font-style: normal;
        font-display: swap;
        font-weight: 600;
        src: local('Geomanist'), url(${GeomanistBold}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'Geomanist';
        font-style: normal;
        font-display: swap;
        font-weight: 500;
        src: local('Geomanist'), url(${GeomanistMedium}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'Geomanist';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Geomanist'), url(${GeomanistRegular}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
      @font-face {
        font-family: 'Geomanist';
        font-style: normal;
        font-display: swap;
        font-weight: 100;
        src: local('Geomanist'), url(${GeomanistLight}) format('woff2');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
    `,
  },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '2px',
        textTransform: 'capitalize',
        boxShadow: 'none',
        '&.active': {
          textUnderlineOffset: 4,
          textDecorationThickness: 2,
          textDecorationLine: 'underline',
          textDecorationColor: '#0072FF',
        },
      },
      contained: {
        ':disabled': {
          color: palette.neutral.low.light,
          backgroundColor: palette.neutral.high.light,
        },
      },
      disableElevation: {
        color: palette.neutral.low.light,
        backgroundColor: palette.neutral.high.light,
        ':hover': {
          color: palette.neutral.high.light,
          backgroundColor: palette.neutral.low.light,
        },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '4px',
      },
      inputSizeSmall: {
        padding: '8px 8px 8px 12px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        boxShadow: shadows[5],
      },
    },
  },
}

export default components
