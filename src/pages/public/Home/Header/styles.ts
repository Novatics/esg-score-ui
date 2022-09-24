import { styled } from '@mui/material/styles'
import Box from 'components/Box'
import Container from 'components/Container'

export const StyledBox = styled(Box)`
  width: 100%;
  position: absolute;
  top: 0;
  background: transparent;
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
  background: transparent;
`

export const ButtonsContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
