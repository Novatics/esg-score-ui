import Box from 'components/Box'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import globalStore from 'store'
import ScoreInformationSkeleton from './skeleton'

const scoreData = [
  {
    title: 'Poor',
    minValue: 0,
    maxValue: 399,
    description:
      '0 - 399: You have poor cyber hygiene and are in the highest risk category for compromise. Immediate focus on reducing your attack surface is required. You can do it!',
  },
  {
    title: 'Good',
    minValue: 400,
    maxValue: 599,
    description:
      '400 - 599: You have a reasonable chance of being impacted by a cyber attack. Additional focus on your cyber hygiene is required. A few small changes will have a major  impact for you!',
  },
  {
    title: 'Very Good',
    minValue: 600,
    maxValue: 799,
    description:
      '600 - 799: You have very good online habits and are less likely to fall prey to cyber threats. Consider levelling up your cyber hygiene. You are on the right track, keep going!',
  },
  {
    title: 'Excellent',
    minValue: 800,
    maxValue: 1000,
    description:
      '800 - 1000: You have excellent cyber hygiene or a limited radius of exposure. We encourage your continued focus and diligence, keep up the great work!',
  },
]

const ScoreInformation = () => {
  const { userScore } = globalStore()

  if (!userScore || userScore.scoreHistory.length === 0) return <ScoreInformationSkeleton />

  const { score } = userScore.scoreHistory[userScore.scoreHistory.length - 1]

  const isCardSelected = (scoreNumber: number, cardInfo) => {
    if (scoreNumber >= cardInfo.minValue && scoreNumber <= cardInfo.maxValue) return true
    return false
  }

  return (
    <Card
      sx={{
        height: {
          xs: 'auto',
          sm: 'auto',
          md: 'auto',
          lg: 'auto',
        },
      }}
    >
      <Box p={4}>
        <Typography mb={2.5} variant="h6" fontWeight="400" color="primary.dark">
          What the score means?
        </Typography>
        <Grid columnSpacing={2} container sx={{ display: 'flex' }}>
          {scoreData.map(cardInfo => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={3}
              sx={{
                mb: {
                  xs: 2,
                  sm: 2,
                  md: 2,
                  lg: 0,
                },
              }}
              key={cardInfo.title}
            >
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: isCardSelected(score, cardInfo)
                    ? 'primary.main'
                    : 'neutral.high.medium',
                  borderRadius: 1,
                  display: 'flex',
                  backgroundColor: theme =>
                    isCardSelected(score, cardInfo) ? theme.palette.background.lightBlue : '',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: theme => theme.shadows[1],
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: '1 0 0 0',
                    backgroundColor: isCardSelected(score, cardInfo)
                      ? 'primary.main'
                      : 'neutral.high.medium',
                  }}
                  py={1}
                  px={4}
                >
                  <Typography
                    color={
                      isCardSelected(score, cardInfo) ? 'primary.contrastText' : 'neutral.low.dark'
                    }
                    fontWeight={700}
                    variant="body1"
                    sx={{ userSelect: 'none' }}
                  >
                    {cardInfo.title}
                  </Typography>
                </Box>

                <Box sx={{ p: '10px 12px' }}>
                  <Typography
                    variant="caption"
                    color={isCardSelected(score, cardInfo) ? 'primary.main' : 'neutral.low.medium'}
                    sx={{ userSelect: 'none' }}
                  >
                    {cardInfo.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  )
}

export default ScoreInformation
