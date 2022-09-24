import { styled } from '@mui/material/styles'

export const PhotoButtonsContainer = styled('div')`
  position: fixed;
  right: 0;
  bottom: 0;
  padding: ${({ theme }) => theme.spacing(2)};
  > * {
    margin-right: ${({ theme }) => theme.spacing(1)};
  }
`
