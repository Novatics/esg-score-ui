/* eslint-disable  */
import { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import { CircleProgress } from 'react-gradient-progress'
import { useNavigate } from 'react-router-dom'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Card from 'components/Card'
import CardActions from 'components/CardActions'
import CardContent from 'components/CardContent'
import Typography from 'components/Typography'
import { useScoreByEmail } from 'hooks/score.hooks'
import globalStore from 'store'
import { Container, BackgroundMap, Loader } from './styles'

const STEP = 0.01
export default function LoadingScore() {
  const navigate = useNavigate()

  const [score, fixList] = useScoreByEmail()
  const [scanPercentage, setScanPercentage] = useState(0)
  let loadingInterval
  let currentProgress = 0
  useEffect(() => {
    loadingInterval = setInterval(() => {
      currentProgress = STEP + currentProgress
      if (!score) {
        setScanPercentage(
          Math.trunc(Math.round((Math.atan(currentProgress) / (Math.PI / 2)) * 100 * 1000) / 1000)
        )
      }
    }, 100)
    return () => {
      clearInterval(loadingInterval)
    }
  }, [score])
  useEffect(() => {
    // if (score && fixList) {
    //   clearInterval(loadingInterval)
    //   fetchUserScore()
    //   setScanPercentage(100)
    // }
  }, [])

  return (
    <Container>
      <BackgroundMap />
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: 800,
          width: '50%',
          height: 415,
          padding: 20,
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <CardContent>
          <CircleProgress
            percentage={scanPercentage}
            strokeWidth={11}
            fontSize="36px"
            secondaryColor="#E6F1FF"
            strokeLinecap="round"
            primaryColor={['#0072ff', '#00f896']}
          />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginTop: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <CheckIcon fontSize="small" />
              <Typography variant="body1" sx={{ color: 'neutral.low.medium', marginLeft: 1 }}>
                Collect your data
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 2,
              }}
            >
              <Typography variant="body1" sx={{ color: 'neutral.low.medium', marginLeft: 1 }}>
                Running your first scan
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions />
      </Card>
    </Container>
  )
}
