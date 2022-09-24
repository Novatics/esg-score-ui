import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import invariant from 'tiny-invariant'
import startButton from 'assets/images/StartButton.svg'
import Box from 'components/Box'
import IconButton from 'components/IconButton'
import Typography from 'components/Typography'
import globalStore from 'store'
import { Container } from './styles'

export default function Welcome() {
  const navigate = useNavigate()
  const { user, userScore } = globalStore()

  invariant(user, 'Expected value to be a user')

  useEffect(() => {
    if (user.role === 'admin') navigate('company/dashboard')
    if (userScore) navigate('/dashboard')
  }, [navigate, user.role, userScore])

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Container>
        <Typography mb={3} variant="h4" color="primary.main">
          Welcome to the Protexxa community!
        </Typography>
        <Typography mb={4} variant="h6" color="#322F2F">
          Let’s find out if you have any cyber breaches or blindspots but first, let’s build your
          profile:
        </Typography>
        <IconButton onClick={() => navigate('/userform')}>
          <img src={startButton} alt="start button" />
        </IconButton>
      </Container>
    </Box>
  )
}
