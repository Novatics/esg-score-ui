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
              <Typography mt={2} variant="body1" color="primary.medium">
                O objetivo por trás de cada pessoa que recebe uma pontuação ESG individual é ajudar a recompensar ações que ajudarão a mover o mundo em direção à sustentabilidade.
              </Typography>
              <Typography mt={2} variant="body1" color="primary.medium">
                Por enquanto, as pontuações ESG para indivíduos são usadas como uma ferramenta de rastreamento para as empresas monitorarem o comportamento. Para aqueles que já começaram a usar as pontuações ESG como parte de seu modelo de negócios, algumas pessoas com boas pontuações podem notar ofertas lucrativas, termos de empréstimo mais acessíveis e até pacotes direcionados projetados para recompensar comportamentos verdes ou sustentáveis.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={12} sm={6} md={5}>
            <Grid container rowGap={2}>
              <Grid item xs={6} sm={6} md={6}>
                <Box width="170px">
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Typography variant="h4" color="primary.main">
                      US$ 38 Bi
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="neutral.low.medium">
                      Ton CO2 despejadas na atmosfera todo ano
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Box width="170px">
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Typography variant="h4" color="primary.main">
                      US$ 148 mi
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="neutral.low.medium">
                      Volume de VC investidos em iniciativas verdes
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <StatisticsText
                  title={69}
                  text="de"
                  description="empresas possuem iniciativas de ESG"
                />
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
                <Box width="150px">
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Typography variant="h4" color="primary.main">
                      3
                    </Typography>
                    <Typography
                      sx={{ marginLeft: 1, marginRight: 1 }}
                      variant="caption"
                      color="neutral.low.medium"
                    >
                      em
                    </Typography>
                    <Typography variant="h4" color="primary.main">
                      5
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="neutral.low.medium">
                      Optam por marcas que possuem iniciativas ESG
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </BackgroundBox>
  )
}
