import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.spacing(15)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(4)};
`

export const Button = styled(IconButton)`
  border: 1px solid #f4f9ff;
  color: ${({ theme }) => theme.palette.primary.main};
`
