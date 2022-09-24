/* eslint-disable complexity */
import { useNavigate } from 'react-router-dom'
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import { ReactComponent as CriticalIcon } from 'assets/Icons/Areas/Critical.svg'
import Box from 'components/Box'
import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Grid from 'components/Grid'
import Typography from 'components/Typography'
import Services from 'services'
import { SWR_USER_SCORE } from 'services/swr.keys'
import globalStore from 'store'
import { userThreats as threatsMap } from 'util/threatsInfo'
import ReviewCardModal from '../components/ReviewCardModal'
import ReviewAddressCardModal from '../components/ReviewCardModal/ReviewAddressCardModal/index'
import CriticalCard from './criticalCard'
import CriticalSkeleton from './skeleton'

const CriticalArea = () => {
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR(SWR_USER_SCORE, () => Services.Score.get())
  const navigate = useNavigate()

  if (!data || !data.scoreHistory[data.scoreHistory.length - 1]) {
    return <CriticalSkeleton />
  }
  const criticalThreats = data.scoreHistory[data.scoreHistory.length - 1].fixList.critical || {}
  const emailBreachesQuantity = criticalThreats.email?.breaches.filter(
    email => email.emailBreaches.length !== 0
  ).length

  const webDomainsBreaches = criticalThreats.webDomains?.breaches.filter(
    webDomain => webDomain.webDomainBreaches.length !== 0
  )
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
              Your accounts are at risk! Check your fix list below.
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
        {Object.keys(criticalThreats).length === 0 && (
          <Grid item xs={12}>
            <Typography p={3} variant="h6" textAlign="center">
              No data
            </Typography>
          </Grid>
        )}
        {criticalThreats?.address && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CriticalCard
              recommendedAction={threatsMap.address.recommendedAction}
              description={`Your address was leaked in ${criticalThreats.address.breaches.length} site(s)`}
              Icon={threatsMap.address.icon}
              title={threatsMap.address.title}
              reviewComponent={
                <ReviewAddressCardModal
                  recommendedAction={threatsMap.address.recommendedAction}
                  value={criticalThreats.address.breaches.length}
                  breaches={criticalThreats.address.breaches}
                />
              }
            />
          </Grid>
        )}
        {criticalThreats?.email && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CriticalCard
              recommendedAction={threatsMap.email.recommendedAction}
              description={`${emailBreachesQuantity} of your confirmed email accounts have been compromised.`}
              Icon={threatsMap.email.icon}
              title={threatsMap.email.title}
              customOnClick={() => {
                navigate('/email-leaks')
              }}
            />
          </Grid>
        )}
        {criticalThreats?.webDomains && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CriticalCard
              recommendedAction={threatsMap.webDomains.recommendedAction}
              description={`${webDomainsBreaches?.length} of your web domains might have been compromised.`}
              Icon={threatsMap.webDomains.icon}
              title={threatsMap.webDomains.title}
              customOnClick={() => {
                navigate('/webDomain-leaks')
              }}
            />
          </Grid>
        )}
        {criticalThreats?.useMFA && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <CriticalCard
              recommendedAction={threatsMap.useMFA.recommendedAction}
              description={threatsMap.useMFA.description}
              Icon={threatsMap.useMFA.icon}
              title={threatsMap.useMFA.title}
              reviewComponent={
                <ReviewCardModal
                  area="critical"
                  title={threatsMap.useMFA.title}
                  recommendedAction={threatsMap.useMFA.recommendedAction}
                />
              }
            />
          </Grid>
        )}
      </Grid>
    </CardBordered>
  )
}

export default CriticalArea
