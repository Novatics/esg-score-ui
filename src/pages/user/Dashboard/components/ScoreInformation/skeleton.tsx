import Box from 'components/Box'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Skeleton from 'components/Skeleton'
import Typography from 'components/Typography'

const ScoreInformationSkeleton = () => {
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
          >
            <Skeleton variant="rectangular" width="100%" height="255px" />
          </Grid>
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
          >
            <Skeleton variant="rectangular" width="100%" height="255px" />
          </Grid>
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
          >
            <Skeleton variant="rectangular" width="100%" height="255px" />
          </Grid>
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
          >
            <Skeleton variant="rectangular" width="100%" height="255px" />
          </Grid>
        </Grid>
      </Box>
    </Card>
  )
}

export default ScoreInformationSkeleton
