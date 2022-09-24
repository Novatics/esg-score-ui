import { styled } from '@mui/material/styles'
import Container from 'components/Container'
import TextField from 'components/TextField'

export const StyledContainer = styled(Container)`
  width: 100%;
  min-height: 100px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  ${props => props.theme.breakpoints.down('sm')} {
    padding-top: 100px;
  }
`

export const StyledInput = styled(TextField)`
  width: 300px;
`
