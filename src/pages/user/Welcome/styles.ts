import { styled, keyframes } from '@mui/material/styles'

export const fadeInAnimation = keyframes`
  0%  { transform: translateX(200px); opacity: 0; }
  100% { transform: translateX(0px); opacity: 1;}
`

export const Container = styled('div')`
  width: 100vw;
  height: 100vh;
  padding: ${({ theme }) => theme.spacing(20)};
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    padding: ${({ theme }) => theme.spacing(5)};
  }
  animation: ${fadeInAnimation} 1.5s;
`
