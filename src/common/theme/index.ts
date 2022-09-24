import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles'
import components from './components'
import palette from './palette'
import shadows from './shadows'
import shape from './shape'
import typography from './typography'

const theme: Theme = createTheme({
  palette,
  typography,
  shape,
  components,
  shadows,
})

export default responsiveFontSizes(theme)
