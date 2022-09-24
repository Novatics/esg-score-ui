import { styled, keyframes, css } from '@mui/material/styles'

export const fadeInAnimation = keyframes`
  0%  { transform: translateX(200px); opacity: 0; }
  100% { transform: translateX(0px); opacity: 1;}
`
export const fadeOutAnimation = keyframes`
  0%  { transform: translateX(0px); opacity: 1; }
  100% { transform: translateX(-200px); opacity: 0;}
`

type TContainer = {
  fadeIn: boolean
  fadeOut: boolean
}

export const Container = styled('div')`
  animation: ${({ fadeIn }: TContainer) =>
    fadeIn &&
    css`
      ${fadeInAnimation} 300ms
    `};

  animation: ${({ fadeOut }: TContainer) =>
    fadeOut &&
    css`
      ${fadeOutAnimation} 300ms
    `};
`
