import { styled } from '@mui/material/styles'
import Typography from 'components/Typography'

export const StyledScoreValue = styled(Typography)`
  font-family: 'Geomanist';
  font-weight: 500;
  background: linear-gradient(44.54deg, #0072ff -31.61%, #00f896 132.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  font-size: ${({ theme }) => theme.spacing(6)};
`
