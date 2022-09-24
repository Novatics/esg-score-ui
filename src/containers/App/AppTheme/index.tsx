import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import GlobalStyles from '../../../common/globalStyles'
import theme from '../../../common/theme'

export interface IAppThemeProps {
  children: React.ReactNode
}
const AppTheme = ({ children }: IAppThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default AppTheme
