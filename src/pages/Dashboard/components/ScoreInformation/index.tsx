import Box from 'components/Box'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Typography from 'components/Typography'

const scoreData = [
  {
    title: 'Poor',
    minValue: 0,
    maxValue: 399,
    description:
      '0 - 399: ellentesque cursus, risus eu tempus feugiat, leo sem vehicula ante, ac maximus tellus metus ut mauris. Fusce ultricies, enim a congue blandit',
  },
  {
    title: 'Good',
    minValue: 400,
    maxValue: 599,
    description:
      '400 - 599: ellentesque cursus, risus eu tempus feugiat, leo sem vehicula ante, ac maximus tellus metus ut mauris. Fusce ultricies, enim a congue blandit',
  },
  {
    title: 'Very Good',
    minValue: 600,
    maxValue: 799,
    description:
      '600 - 799: Suspendisse dapibus sem sit amet mauris maximus, et sagittis augue porta. Ut dapibus magna nisi, varius auctor enim vestibulum nec.',
  },
  {
    title: 'Excellent',
    minValue: 800,
    maxValue: 1000,
    description:
      '800 - 1000: Suspendisse dapibus sem sit amet mauris maximus, et sagittis augue porta. Ut dapibus magna nisi, varius auctor enim vestibulum nec.',
  },
]

const ScoreInformation = () => {
  const score = 20;

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
