import useSWR from 'swr'
import invariant from 'tiny-invariant'
import { ReactComponent as StrengthIcon } from 'assets/Icons/Areas/Strength.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_COMPANY_STATS } from 'services/swr.keys'
import globalStore from 'store'
import { companyThreats as threatsMap } from 'util/threatsInfo'
import StrengthSkeleton from './skeleton'
import StrengthCard from './strengthCard'

const StrengthArea = () => {
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR(SWR_COMPANY_STATS, () => Services.Company.getCompanyStats())
  if (!data) {
    return <StrengthSkeleton />
  }
  const strengthThreats = data.threats.filter(threat => threat.classification === 'strength')
  return (
    <CardBordered sx={{ mt: 3 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="baseline">
          <StrengthIcon fill="#006BF0" />
          <Box ml={2}>
            <Typography variant="h5" color="#374151">
              Areas of Strength
            </Typography>
            <Typography color="gray.dark">These items help keep your company safe.</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: 'fit-content',
            px: 2,
            py: 1.5,
            alignItems: 'center',
            backgroundColor: '#F2F8FF',
            borderRadius: 1,
          }}
        >
          <Typography mr={1} variant="h5" color="#0056C0">
            {strengthThreats?.length}
          </Typography>
          <Typography color="#0056C0">areas identified</Typography>
        </Box>
      </Box>
      <Divider />
      <Grid mt={2} container spacing={2}>
        {strengthThreats.length > 0 ? (
          strengthThreats?.map(threat => (
            <Grid mt={2} key={threat.label} item xs={12} sm={12} md={12} lg={6}>
              <StrengthCard
                reasonToBeImportant={threatsMap[threat.label].reasonToBeImportant}
                description={threatsMap[threat.label].strengthAreaText}
                Icon={threatsMap[threat.label].icon}
                title={threatsMap[threat.label].strengthTitle}
              />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography p={3} variant="h6" textAlign="center">
              No data
            </Typography>
          </Grid>
        )}
      </Grid>
    </CardBordered>
  )
}

export default StrengthArea
