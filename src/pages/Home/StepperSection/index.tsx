/* eslint-disable max-lines */
import image3 from 'assets/images/BannerHomepageBackground3.png'
import Box from 'components/Box'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import { StyledContainer, StyledImg, StyledBackground } from './styles'

export default function StepperComponent() {
  return (
    <StyledBackground backgroundcolor={'#fdfdfd'}>
      <StyledContainer>
        <Grid container>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Box sx={{ p: { xs: 2, sm: 0, md: 0 } }}>
              <Box>
                <Typography maxWidth={600} color="primary.dark" variant={'h2'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
              </Box>
              <Typography
                sx={{ marginTop: 3 }}
                maxWidth={600}
                variant={'h6'}
                color="primary.medium"
              >
                Quisque volutpat, odio ac lacinia viverra, dui erat maximus nisl
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            flexDirection="column"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <StyledImg height="100%" src={image3} alt="banner" />
          </Grid>
        </Grid>
      </StyledContainer>
    </StyledBackground>
  )
}
