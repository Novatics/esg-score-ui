import { useContext } from 'react'
import { CircleProgress } from 'react-gradient-progress'
import Box from 'components/Box'
import Card from 'components/Card'
import ScoreValue from 'components/ScoreValue'
import Typography from 'components/Typography'
import { EsgScoreContext } from 'context'
import { Container, Value } from './styles'

const MAX_VALUE = 1000
const HALF_CIRCLE = 50

export default function ScoreIndicator() {
  const { scoreData } = useContext(EsgScoreContext)
  const scoreArray = Object.keys(scoreData)
  let finalScore = 0
  scoreArray.forEach(score => { finalScore = finalScore + scoreData[score] })
  let score: any = (finalScore / 5) * 100;
  score = score.toFixed(0)
  const circleProgress = (score / MAX_VALUE) * HALF_CIRCLE

  const getTotalValue = (total: number) => {
    if (total < 400) return 'Poor'
    if (total < 600) return 'Good'
    if (total < 1000) return 'Very Good'
  }

  return (
    <Card sx={{ height: '100%' }}>
      <Box p={4} display="flex" justifyContent="space-between" flexDirection="row">
        <Typography variant="h5" color="primary.dark">
          ESG Personal Score
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
