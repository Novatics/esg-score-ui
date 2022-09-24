/* eslint-disable max-lines */
/* eslint-disable complexity */
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import { ReactComponent as ImportantIcon } from 'assets/Icons/Areas/Important.svg'
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
import ImportantCard from './components/ImportantCard'
import ImportantSkeleton from './skeleton'

const ImportantArea = () => {
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR(SWR_COMPANY_STATS, () => Services.Company.getCompanyStats())
  if (!data) {
    return <ImportantSkeleton />
  }
  const importantThreats = data.threats.filter(threat => threat.classification === 'important')
  return (
    <CardBordered sx={{ mt: 3, width: '100%' }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="baseline">
          <ImportantIcon fill="#FFD600" />
          <Box ml={2}>
            <Typography variant="h5" color="#374151">
              Important Areas
            </Typography>
            <Typography color="gray.dark">
              Fixing these issues could have a major impact for your company’s safety.
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
            backgroundColor: '#FFF7CC66',
            borderRadius: 1,
          }}
        >
          <Typography mr={1} variant="h5" color="#665600">
            {Object.keys(importantThreats).length}
          </Typography>
          <Typography color="#665600">threats identified</Typography>
        </Box>
      </Box>
      <Divider />
      <Grid mt={4} container spacing={2}>
        {importantThreats.map(threat => (
          <Grid key={threat.label} item xs={12} sm={12} md={12} lg={6}>
            <ImportantCard
              value={threat.quantity}
              description={threatsMap[threat.label].description}
              Icon={threatsMap[threat.label].icon}
              title={threatsMap[threat.label].title}
              reviewComponent={
                <ReviewCardModal
                  area="important"
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

export default ImportantArea
