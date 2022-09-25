/* eslint-disable max-lines */
import { useNavigate } from 'react-router-dom'
import image3 from 'assets/images/BannerHomepageBackground3.png'
import Box from 'components/Box'
import Grid from 'components/Grid'
import Button from 'components/Button'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import { StyledContainer, StyledImg, StyledBackground } from './styles'

export default function StepperComponent() {
  const navigate = useNavigate()

  return (
    <StyledBackground backgroundcolor="#fdfdfd">
      <StyledContainer>
        <Grid container>
          <Grid item xs={12} sm={8} md={8} lg={8}>
            <Box sx={{ p: { xs: 2, sm: 0, md: 0 } }}>
              <Box>
                <Typography maxWidth={600} color="primary.dark" variant="h2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </Typography>
              </Box>
              <Typography
                sx={{ marginTop: 3 }}
                maxWidth={600}
                variant="h6"
                color="primary.medium"
              >
                Quisque volutpat, odio ac lacinia viverra, dui erat maximus nisl
              </Typography>
              <Stack
                mt={2}
                sx={{
                  flexDirection: {
                    sx: 'column',
                    sm: 'row',
                  },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    height: 40,
                    textTransform: 'none',
                  }}
                  onClick={() => navigate('/creditform')}
                >
                  Calcule seu Score
                </Button>
              </Stack>
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
