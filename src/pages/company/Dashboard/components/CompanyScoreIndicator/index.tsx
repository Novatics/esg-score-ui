/* eslint-disable complexity */
/* eslint-disable no-nested-ternary */
import { useState, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import { CircleProgress } from 'react-gradient-progress'
import { ReactComponent as TooltipIcon } from 'assets/Icons/Tooltip.svg'
import Box from 'components/Box'
import Button from 'components/Button'
import ScoreValue from 'components/ScoreValue'
import Tooltip from 'components/Tooltip'
import Typography from 'components/Typography'
import { companyScoreInfomation } from 'util/score'
import { Container, Value } from './styles'

interface ICompanyScoreIndicator {
  score: number
}
export default function CompanyScoreIndicator({ score }: ICompanyScoreIndicator) {
  const percentageOfCircleUsed = 50
  const theme = useTheme()
  const maxValue = 1000
  const [circleProgress, setCircleProgress] = useState(0)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))
  useEffect(() => {
    const circleParsedValue = (score / maxValue) * percentageOfCircleUsed
    setCircleProgress(circleParsedValue)
  }, [score])

  return (
    <>
      <Box display="flex" alignItems="center" pb={3}>
        <Typography sx={{ mr: 1 }} variant="h5" color="primary.dark">
          Company Score
        </Typography>
        <Tooltip
          arrow
          enterTouchDelay={50}
          leaveTouchDelay={2500}
          placement={isSmallScreen ? 'top' : 'right'}
          title={
            <Typography color="primary.dark">
              This is your companie score. It’s the average of all employees score.
            </Typography>
          }
          componentsProps={{
            tooltip: {
              sx: {
                p: 1.5,
                backgroundColor: 'background.lightBlue',
              },
            },
          }}
        >
          <TooltipIcon />
        </Tooltip>
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
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <ScoreValue>{companyScoreInfomation(score).scoreGrade}</ScoreValue>
              <Typography mt={-1} variant="body1" color="neutral.low.light">
                {Math.trunc(score)}/1000
              </Typography>
            </Box>
          </Value>
        </Container>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography textAlign="left" color="text.secondary" variant="body1">
          {companyScoreInfomation(score).scoreMessage}
        </Typography>

        <Button
          type="button"
          variant="contained"
          disabled
          sx={{ width: '50%', textTransform: 'none', mt: 2, py: 1.5 }}
        >
          View Report
        </Button>
      </Box>
    </>
  )
}
