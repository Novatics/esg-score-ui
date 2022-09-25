import { styled } from '@mui/material/styles'
import infoSectionBackground from 'assets/images/infoSectionBackground.png'
import Box from 'components/Box'
import MuiContainer from 'components/Container'

export const BackgroundBox = styled(Box)`
  background-image: url(${infoSectionBackground});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Container = styled(MuiContainer)`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
