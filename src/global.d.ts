/* eslint-disable */
import { TCustomThemeProps } from './common/theme/type'

declare module 'react-score-indicator'

declare module 'react-gradient-progress'

declare module '@emotion/react' {
  export interface Theme extends TCustomThemeProps {}
}
