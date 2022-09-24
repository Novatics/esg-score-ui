import { CircleProgress } from 'react-gradient-progress'
import Box from 'components/Box'
import Card from 'components/Card'
import ScoreValue from 'components/ScoreValue'
import Typography from 'components/Typography'
import { Container, Value } from './styles'

const MAX_VALUE = 1000
const HALF_CIRCLE = 50

export default function ScoreIndicator() {
  const score = 20;
  const circleProgress = (score / MAX_VALUE) * HALF_CIRCLE

  const getTotalValue = (total: number) => {
    if (total < 400) return 'Poor'
    if (total < 600) return 'Good'
    if (total < 800) return 'Very Good'
    return 'Excellent'
  }

  return (
    <Card sx={{ height: '362px' }}>
      <Box p={4} display="flex" justifyContent="space-between" flexDirection="row">
        <Typography variant="h5" color="primary.dark">
          Score
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Container>
          <CircleProgress
            percentage={circleProgress}
            strokeWidth={23}
            secondaryColor="#E6FAF8"
            strokeLinecap="round"
            primaryColor={['#0072ff', '#00f896']}
            width={350}
          />
          <Value>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="row">
              <ScoreValue>{score}</ScoreValue>
              <Typography variant="subtitle2" mt={2} color="neutral.low.light">
                / 1000
              </Typography>
            </Box>

            <Typography textAlign="center" color="#8CDDB5" variant="h5">
              {getTotalValue(score)}
            </Typography>
          </Value>
        </Container>
      </Box>
    </Card>
  )
}
