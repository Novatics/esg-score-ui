import { useEffect, useState } from 'react'
import useSWR from 'swr'
import invariant from 'tiny-invariant'
import Box from 'components/Box'
import Button from 'components/Button'
import { CardBordered } from 'components/Card'
import Grid from 'components/Grid'
import Stack from 'components/Stack'
import Typography from 'components/Typography'
import Services from 'services'
import globalStore from 'store'
import CompanyScoreIndicator from './components/CompanyScoreIndicator'
import CompanyScoreIndicatorSkeleton from './components/CompanyScoreIndicator/skeleton'
import CompanyThreatsAreas from './components/CompanyThreatsAreas'
import InviteUsersModal from './components/InviteUsersModal'
import ThreatsChart from './components/ThreatsBarChart'
import TopCompanyCards from './components/TopCompanyCards'

export default function Dashboard() {
  const [isInviteModalOpened, setIsInviteModalOpened] = useState(false)
  const { user, fetchUserScore } = globalStore()
  invariant(user, 'Expected value to be a user')

  const { data } = useSWR('SWR_COMPANY_STATS', () => Services.Company.getCompanyStats())

  const TitleHeader = () => {
    return (
      <Stack flexDirection="row" justifyContent="space-between">
        <Typography variant="h4">Dashboard</Typography>
        <Button
          onClick={() => {
            setIsInviteModalOpened(true)
          }}
          variant="contained"
        >
          Invite Users
        </Button>
      </Stack>
    )
  }

  useEffect(() => {
    fetchUserScore()
  }, [fetchUserScore])

  return (
    <Box mt={1}>
      <InviteUsersModal
        setIsModalOpened={setIsInviteModalOpened}
        isModalOpened={isInviteModalOpened}
      />
      <TitleHeader />
      <Grid mt={2} container spacing={2}>
        <TopCompanyCards />
      </Grid>
      <Grid mt={2} container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={4}>
          <CardBordered>
            {data ? (
              <CompanyScoreIndicator score={data.lastScore} />
            ) : (
              <CompanyScoreIndicatorSkeleton />
            )}
          </CardBordered>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <CardBordered>
            <Box mb={2} display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h5" color="primary.dark">
                Threats Found
              </Typography>

              <Box display="flex" alignItems="baseline">
                <Typography ml={1} mr={0.5} variant="h6" fontWeight="500" color="magenta.dark">
                  {data?.sumThreats}
                </Typography>
                <Typography variant="h6" fontWeight="400" color="#6B7280">
                  in total
                </Typography>
              </Box>
            </Box>

            <ThreatsChart threats={data?.threats} />
          </CardBordered>
        </Grid>
        <Grid item lg={12}>
          <Box>
            <CompanyThreatsAreas />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
