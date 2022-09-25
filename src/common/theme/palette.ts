/* eslint-disable */
declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    darker: string
    light: string
    lightBlue: string
    primary: string
    card: string
  }

  interface TypeText {
    primary: string
    secondary: string
    disabled: string
    white: string
  }

  interface PaletteColor {
    medium?: string
  }

  interface Palette {
    neutral: {
      low: {
        pure: string
        light: string
        medium: string
        dark: string
      }
      high: {
        pure: string
        light: string
        medium: string
        dark: string
      }
    }
    text: {
      primary: string
      white: string
      secondary: string
      disabled: string
    }
  }
}

export default {
  primary: {
    main: '#0072FF',
    light: '#E6F1FF',
    medium: '#6AA0FF',
    dark: '#0048CB',
    contrastText: '#FFFFFF',
  },
  gray: {
    main: '#D1D5DB',
    light: '#F3F4F6',
    medium: '#9CA3AF',
    dark: '#6B7280',
  },
  secondary: {
    main: '#00F896',
    light: '#E9FFF7',
    medium: '#6AFFC7',
    dark: '#00C467',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#3AA76D',
    light: '#ECFFF7',
    medium: '##7AD0A3',
    dark: '#10462D',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#FFC043',
    light: '#FFF2D9',
    medium: '#FFDB94',
    dark: '#674D1B',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#D44333',
    light: '#FFF8F9',
    medium: '#F27B6C',
    dark: '#720017',
    contrastText: '#FFFFFF',
  },
  highlight: {
    main: '#F673AD',
    light: '#FDD9E9',
    medium: '#900945',
    dark: '#430420',
    contrastText: '#FFFFFF',
  },
  purple: {
    main: '#7356BF',
    light: '#E3DDF2',
    medium: '#9C83DB',
    dark: '#2E224C',
    contrastText: '#FFFFFF',
  },
  magenta: {
    main: '#F9194F',
    light: '#FFEEF1',
    medium: '#FF607B',
    dark: '#BE0027',
    contrastText: '#FFFFFF',
  },
  orange: {
    main: '#ED6E33',
    light: '#FFE1D6',
    medium: '#F49E76',
    dark: '#672A16',
    contrastText: '#FFFFFF',
  },
  navy: {
    main: '#0E1FC1',
    light: '#EBEDFA',
    medium: '#6F7BEF',
    dark: '#050C4D',
    contrastText: '#FFFFFF',
  },
  brow: {
    main: '#99644C',
    light: '#F6F0EA',
    medium: '#BD9482',
    dark: '#3D281E',
    contrastText: '#FFFFFF',
  },
  neutral: {
    low: {
      pure: '#000000',
      light: '#A3A3A3',
      medium: '#686868',
      dark: '#292929',
    },
    high: {
      pure: '#FFFFFF',
      light: '#F4F4F4',
      medium: '#E0E0E0',
      dark: '#CCCCCC',
    },
  },
  background: {
    light: '#fafafa',
    lightBlue: '#F4F9FF',
    primary: '#0072FF',
  },
  text: {
    primary: '#000000',
    secondary: '#A3A3A3',
    white: '#FFFFFF',
    disabled: 'rgba(0, 0, 0, 0, 0.38)',
  },
}
