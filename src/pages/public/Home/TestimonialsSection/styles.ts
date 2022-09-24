import { styled } from '@mui/material/styles'

export const Container = styled('div')`
  height: 60vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.theme.breakpoints.down('md')} {
    height: auto;
    margin-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(3)};
  }
`
