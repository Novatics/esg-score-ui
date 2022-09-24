import { styled } from '@mui/material/styles'

export const TextContainer = styled('div')`
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-left: ${({ theme }) => theme.spacing(5)};

  ${props => props.theme.breakpoints.down('md')} {
    margin-left: 0;
  }
`
