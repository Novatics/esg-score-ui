import { styled } from '@mui/material/styles'
import Box from 'components/Box'
import Container from 'components/Container'

export const StyledBox = styled(Box)`
  padding-bottom: 92px;
  padding-top: 92px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.light};
`

export const StyledContainer = styled(Container)`
  padding-top: ${({ theme }) => theme.spacing(4)};
`
