// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface ITypographyPropsVariantOverrides {
    caption: false
    caption1: true
  }
}

declare module '@mui/material/styles' {
  interface ITypographyVariants {
    caption1: React.CSSProperties
    h7: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface ITypographyVariantsOptions {
    caption1?: React.CSSProperties
    h7?: React.CSSProperties
  }
}

export default {
  fontFamily: 'Geomanist',
  fontWeightLight: 100,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  fontWeightBlack: 700,
  h1: {
    fontWeight: 500,
    lineHeight: 1.4,
    fontSize: '6rem', // 48px
  },
  h2: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '3.75rem', // 60px
  },
  h3: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '3rem', // 48px
  },
  h4: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '2.125rem', // 34px
  },
  h5: {
    fontWeight: 500,
    lineHeight: 1.2,
    fontSize: '1.5rem', // 24px
  },
  h6: {
    fontWeight: 400,
    lineHeight: 1.25,
    fontSize: '1.25rem', // 20px
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: '1rem', // 16px
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: '0.875rem', // 14px
  },
  subtitle1: {
    fontWeight: 500,
    lineHeight: 1,
    fontSize: '1rem', // 16px
  },
  subtitle2: {
    fontWeight: 500,
    lineHeight: 0.875,
    fontSize: '0.875rem', // 16px
  },
  caption1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: '0.750rem', // 12px
  },
  button: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: '0.875rem', // 12px
  },
}
