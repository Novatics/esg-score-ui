import { styled } from '@mui/material/styles'

export const Container = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;

  padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(20)};
  background-color: #f4f4f4;

  ${props => props.theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
    padding: ${({ theme }) => theme.spacing(3)} ${({ theme }) => theme.spacing(3)};
  }
`
export const ProtexxaLogo = styled('div')`
  left: 10%;
  position: absolute;

  ${props => props.theme.breakpoints.down('md')} {
    left: 0;
    position: initial;
    margin-top: ${({ theme }) => theme.spacing(1)};
  }
`
