/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { TCustomThemeProps } from './common/theme/type'

declare module 'react-score-indicator'

declare module 'react-gradient-progress'

declare module '@emotion/react' {
  export interface Theme extends TCustomThemeProps {}
}
