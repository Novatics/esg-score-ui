import { styled } from '@mui/material/styles'
import HomeNetBackground from 'assets/images/HomeNetBackground.png'
import MuiContainer from 'components/Container'

export const BackgroundBox = styled('section')`
  background-image: url(${HomeNetBackground});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100vw auto;
  width: 100%;
  height: 60vh;
`

export const Container = styled(MuiContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

export const StatisticsContainer = styled('div')`
  display: flex;
  align-items: center;
`
