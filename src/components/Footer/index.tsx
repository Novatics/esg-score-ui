import Typography from 'components/Typography'
import { Container, ProtexxaLogo } from './styles'

export default function Footer() {
  return (
    <Container>
      <ProtexxaLogo>
        <Typography variant="h4" color="#322F2F">
          protexxa
        </Typography>
      </ProtexxaLogo>

      <Typography textAlign="center" variant="body2" color="#322F2F">
        Protecting Business, Protecting Lives.
      </Typography>
    </Container>
  )
}
