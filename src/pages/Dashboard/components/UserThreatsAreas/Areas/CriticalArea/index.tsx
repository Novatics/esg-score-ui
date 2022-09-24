/* eslint-disable complexity */
import { ReactComponent as CriticalIcon } from 'assets/Icons/Areas/Critical.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import { userThreats as threatsMap } from 'util/threatsInfo'
import CriticalCard from './criticalCard'

const CriticalArea = () => {
  return (
    <CardBordered sx={{ mt: 3 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="baseline">
          <CriticalIcon fill="#BE0027" />
          <Box ml={2}>
            <Typography variant="h5" color="#374151">
              Pontos críticos
            </Typography>
            <Typography color="gray.dark">
              YEtiam luctus diam et leo tincidunt rhoncu.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Grid mt={4} container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CriticalCard
              recommendedAction={threatsMap.webDomains.recommendedAction}
              description={`of your web domains might have been compromised.`}
              Icon={threatsMap.webDomains.icon}
              title={threatsMap.webDomains.title}
            />
          </Grid>
      </Grid>
    </CardBordered>
  )
}

export default CriticalArea
