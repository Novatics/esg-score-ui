import { styled } from '@mui/material/styles'
import StaySafeWithProtexxaBackground from 'assets/images/StaySafeWithProtexxaBackground.png'
import Box from 'components/Box'
import MuiContainer from 'components/Container'

export const BackgroundBox = styled(Box)`
  background-image: url(${StaySafeWithProtexxaBackground});
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
