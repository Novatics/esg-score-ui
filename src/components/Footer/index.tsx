import Typography from 'components/Typography'
import { Container } from './styles'

export default function Footer() {
  return (
    <Container
      sx={{ 
        display: 'flex',
        justifyContent: 'flex-start',
      }}
    >
      <Typography variant="h5" color="#322F2F">
        Novatics
      </Typography>
    </Container>
  )
}
