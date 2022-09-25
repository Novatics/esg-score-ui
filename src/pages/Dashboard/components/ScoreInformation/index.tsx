import Box from 'components/Box'
import Card from 'components/Card'
import Grid from 'components/Grid'
import Typography from 'components/Typography'

const scoreData = [
  {
    id: 1,
    title: 'Retardatária',
    scoreRange: [{ min: 0.0, max: 1.4, grade: 'CCC' }, { min: 1.4, max: 2.9, grade: 'B' }],
    backgroundColor: '#fff2f4',
    mainTextColor: '#ff3232',
    description:
      'Apresenta comportamento com impacto socioambiental negativo e baixa preocupação com relação ao seu papel como agente de transformação do meio ambiente',
  },
  {
    id: 2,
    title: 'Médio',
    scoreRange: [
      { min: 2.9, max: 4.3, grade: 'BB' },
      { min: 4.3, max: 5.7, grade: 'BBB' },
      { min: 5.7, max: 7.1, grade: 'A' },
    ],
    backgroundColor: '#FFFFF0',
    mainTextColor: '#FFC000',
    description:
      'Sensibilizado ou em processo de educação com relação a questões socioambientais, em processo de adoção de boas práticas de consumo e comportamento para uma vivência mais sustentável ',
  },
  {
    id: 3,
    title: 'Líder',
    scoreRange: [{ min: 7.1, max: 8.6, grade: 'AA' }, { min: 8.6, max: 10, grade: 'AAA' }],
    backgroundColor: '#FFFFF0',
    mainTextColor: '#009900',
    description:
      'Parabéns, você tem um comportamento exemplar quando o assunto é meio ambiente. Ajude a transformar o mundo em um lugar mais sustentável convidando mais pessoas a acompanharem seu personal ESG score',
  },
]

const ScoreInformation = () => {
  return (
    <Card
      sx={{
        height: '100%',
        minHeight: '362px',
      }}
    >
      <Box p={3}>
        <Typography mb={2.5} variant="h6" fontWeight="400" color="primary.dark">
          O que isso significa ?
        </Typography>
        <Grid columnSpacing={1} container 
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            height: '100%',
            alignItems: 'center',
          }}
          >
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
                height: '250px',
                minWidth: '250px'
              }}
              key={cardInfo.id}
            >
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'neutral.high.medium',
                  borderRadius: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  boxShadow: theme => theme.shadows[1],
                  textAlign: 'center',
                  backgroundColor: `${cardInfo.backgroundColor}`,
                }}
              >
                <Box
                  sx={{
                    padding: '10px 5px 5px 5px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}
                >
                  {cardInfo?.scoreRange?.map(score => (
                    <Box
                      sx={{
                        border: `1px solid ${cardInfo.mainTextColor}`,
                        padding: '5px',
                        backgroundColor: `${cardInfo.mainTextColor}`,
                        width: '30%',
                        borderRadius: '5px',
                      }}
                    >
                      <Typography sx={{ fontSize: '10px' }} color='#ffffff'>
                        {score.min.toFixed(1)} -  {score.max}
                      </Typography>
                      <Typography variant='body1' fontWeight={500} color='#ffffff'>
                        {score.grade}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{
                  p: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  }}
                >
                  <Typography
                    variant="caption"
                    color={'neutral.low.medium'}
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
