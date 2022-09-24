import Box from 'components/Box'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import StatisticsText from './StatisticText'
import { BackgroundBox, Container } from './styles'

export default function StatisticsSection() {
  return (
    <BackgroundBox>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} sm={5} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              sx={{ p: { xs: 2 } }}
            >
              <Typography variant="h5" color="primary.dark">
                Do you know how vulnerable your company is to cyber attacks?
              </Typography>
              <Typography mt={2} variant="body1" color="primary.medium">
                Cyberattacks are a growing problem. Since the onset of the COVID-19 pandemic cyber
                crime has quadrupled
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} sm={6} md={5}>
            <Grid container rowGap={2}>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignContent="center"
                xs={6}
                sm={6}
                md={6}
              >
                <StatisticsText
                  title={93}
                  text="of"
                  description="corporate networks can be penetrated"
                />
              </Grid>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignContent="center"
                xs={6}
                sm={6}
                md={6}
              >
                <StatisticsText
                  title={90}
                  text="of"
                  description="cyber hacks are caused by human error"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <StatisticsText
                  title={50}
                  text="of"
                  description="internet users have been hacked or breached"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Box width="150px">
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Typography variant="h4" color="primary.main">
                      1
                    </Typography>
                    <Typography
                      sx={{ marginLeft: 1, marginRight: 1 }}
                      variant="caption"
                      color="neutral.low.medium"
                    >
                      out of
                    </Typography>
                    <Typography variant="h4" color="primary.main">
                      4
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="neutral.low.medium">
                      smartphones or computers have malware
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignContent="center"
                xs={6}
                sm={6}
                md={6}
              >
                <StatisticsText
                  title={43}
                  text="of"
                  description="cyber attacks are aimed at small businesses"
                />
              </Grid>
              <Grid
                item
                display="flex"
                justifyContent="center"
                alignContent="center"
                xs={6}
                sm={6}
                md={6}
              >
                <StatisticsText
                  title={50}
                  text="of"
                  description="cyber attacks on corporate networks since 2021"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </BackgroundBox>
  )
}
