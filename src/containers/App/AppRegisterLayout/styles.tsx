import { styled } from '@mui/material/styles'
import BackgroundImage from 'assets/images/modern-geometrical-background-with-round-lines.png'
import Box from 'components/Box'
// Header: 92 Footer: 69

export const StyledBox = styled(Box)`
  padding-bottom: 92px;
  padding-top: 92px;
  display: flex;
  min-height: calc(100vh - 69px);
  width: 100vw;
  background-image: url(${BackgroundImage});
  background-size: 100% 100%;
`
