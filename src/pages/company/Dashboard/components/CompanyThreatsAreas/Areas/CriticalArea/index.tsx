/* eslint-disable complexity */
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import { ReactComponent as CriticalIcon } from 'assets/Icons/Areas/Critical.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_COMPANY_STATS } from 'services/swr.keys'
import globalStore from 'store'
import { companyThreats as threatsMap } from 'util/threatsInfo'
import ReviewCardModal from '../components/ReviewCardModal'
import CriticalCard from './criticalCard'
import CriticalSkeleton from './skeleton'

const CriticalArea = () => {
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR(SWR_COMPANY_STATS, () => Services.Company.getCompanyStats())

  if (!data) {
    return <CriticalSkeleton />
  }
  const criticalThreats = data.threats.filter(threat => threat.classification === 'critical')
  return (
    <CardBordered sx={{ mt: 3 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="baseline">
          <CriticalIcon fill="#BE0027" />
          <Box ml={2}>
            <Typography variant="h5" color="#374151">
              Critical Areas
            </Typography>
            <Typography color="gray.dark">
              These items could expose your company to a cyber attack.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: 'fit-content',
            px: 2,
            py: 1.5,
            alignItems: 'center',
            backgroundColor: '#FFF8F9',
            borderRadius: 1,
          }}
        >
          <Typography mr={1} variant="h5" color="#BE0027">
            {Object.keys(criticalThreats).length}
          </Typography>

          <Typography color="#BE0027">threats identified</Typography>
        </Box>
      </Box>
      <Divider />
      <Grid mt={4} container spacing={2}>
        {criticalThreats.map(threat => (
          <Grid key={threat.label} item xs={12} sm={12} md={12} lg={6}>
            <CriticalCard
              value={threat.quantity}
              description={threatsMap[threat.label].description}
              Icon={threatsMap[threat.label].icon}
              title={threatsMap[threat.label].title}
              reviewComponent={
                <ReviewCardModal
                  area="critical"
                  value={threat.quantity}
                  title={threatsMap[threat.label].description}
                  recommendedAction={threatsMap[threat.label].recommendedAction}
                />
              }
            />
          </Grid>
        ))}
      </Grid>
    </CardBordered>
  )
}

export default CriticalArea
