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
import { SWR_USER_SCORE } from 'services/swr.keys'
import globalStore from 'store'
import { userThreats as threatsMap } from 'util/threatsInfo'
import ReviewCardModal from '../components/ReviewCardModal'
import ReviewImageCardModal from '../components/ReviewCardModal/ReviewImageCardModal'
import ReviewInvasiveAppsCardModal from '../components/ReviewCardModal/ReviewInvasiveAppsCardModal'
import ReviewPhoneCardModal from '../components/ReviewCardModal/ReviewPhoneCardModal'
import ImportantCard from './components/ImportantCard'
import PasswordManagerCard from './components/PasswordManagerCard'
import ResponsePlanCard from './components/ResponsePlanCard'
import ImportantSkeleton from './skeleton'

const ImportantArea = () => {
  const { user } = globalStore()
  invariant(user, 'Expected value to be a user')
  const { data } = useSWR(SWR_USER_SCORE, () => Services.Score.get())
  if (!data || !data.scoreHistory[data.scoreHistory.length - 1]) {
    return <ImportantSkeleton />
  }
  const importantThreats = data.scoreHistory[data.scoreHistory.length - 1].fixList.important || {}
  return (
    <CardBordered sx={{ mt: 3 }}>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box display="flex" alignItems="baseline">
          <ImportantIcon fill="#FFD600" />
          <Box ml={2}>
            <Typography variant="h5" color="#374151">
              Important Areas
            </Typography>
            <Typography color="gray.dark">
              Fixing these issues could have a major impact for your safety online.
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
        {Object.keys(importantThreats).length === 0 && (
          <Grid item xs={12}>
            <Typography p={3} variant="h6" textAlign="center">
              No data
            </Typography>
          </Grid>
        )}
        {importantThreats?.top10Apps && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ImportantCard
              recommendedAction={threatsMap.top10Apps.recommendedAction}
              description={threatsMap.top10Apps.description}
              Icon={threatsMap.top10Apps.icon}
              title={threatsMap.top10Apps.title}
              reviewComponent={
                <ReviewInvasiveAppsCardModal
                  recommendedAction={threatsMap.top10Apps.recommendedAction}
                />
              }
            />
          </Grid>
        )}
        {importantThreats?.allSocialMediasInPrivate && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ImportantCard
              recommendedAction={threatsMap.allSocialMediasInPrivate.recommendedAction}
              description={threatsMap.allSocialMediasInPrivate.description}
              Icon={threatsMap.allSocialMediasInPrivate.icon}
              title={threatsMap.allSocialMediasInPrivate.title}
              reviewComponent={
                <ReviewCardModal
                  area="important"
                  title={threatsMap.allSocialMediasInPrivate.title}
                  recommendedAction={threatsMap.allSocialMediasInPrivate.recommendedAction}
                />
              }
            />
          </Grid>
        )}
        {importantThreats?.fullname && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ImportantCard
              recommendedAction={threatsMap.fullname.recommendedAction}
              description={`Your name was leaked in ${importantThreats.fullname.breaches} sites`}
              Icon={threatsMap.fullname.icon}
              title={threatsMap.fullname.title}
              reviewComponent={
                <ReviewCardModal
                  area="important"
                  title={threatsMap.fullname.title}
                  recommendedAction={threatsMap.fullname.recommendedAction}
                />
              }
            />
          </Grid>
        )}
        {importantThreats?.image && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ImportantCard
              recommendedAction={threatsMap.image.recommendedAction}
              description={`Your personal image was found in ${importantThreats.image.breaches.length} sites without your consent.`}
              Icon={threatsMap.image.icon}
              title={threatsMap.image.title}
              reviewComponent={
                <ReviewImageCardModal
                  recommendedAction={threatsMap.image.recommendedAction}
                  breaches={importantThreats.image.breaches}
                  value={importantThreats.image.breaches.length}
                />
              }
            />
          </Grid>
        )}
        {importantThreats?.haveResponsePlan && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ResponsePlanCard
              recommendedAction={threatsMap.haveResponsePlan.recommendedAction}
              description={threatsMap.haveResponsePlan.description}
              Icon={threatsMap.haveResponsePlan.icon}
              title={threatsMap.haveResponsePlan.title}
            />
          </Grid>
        )}
        {importantThreats?.havePasswordManager && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <PasswordManagerCard
              recommendedAction={threatsMap.havePasswordManager.recommendedAction}
              description={threatsMap.havePasswordManager.description}
              Icon={threatsMap.havePasswordManager.icon}
              title={threatsMap.havePasswordManager.title}
            />
          </Grid>
        )}
        {importantThreats?.phoneNumber && (
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <ImportantCard
              recommendedAction={threatsMap.phoneNumber.recommendedAction}
              description={`Your phone number was leaked in ${importantThreats.phoneNumber.breaches.length} sites`}
              Icon={threatsMap.phoneNumber.icon}
              title={threatsMap.phoneNumber.title}
              reviewComponent={
                <ReviewPhoneCardModal
                  recommendedAction={threatsMap.phoneNumber.recommendedAction}
                  value={importantThreats.phoneNumber.breaches.length}
                  breaches={importantThreats.phoneNumber.breaches}
                />
              }
            />
          </Grid>
        )}
      </Grid>
    </CardBordered>
  )
}

export default ImportantArea
