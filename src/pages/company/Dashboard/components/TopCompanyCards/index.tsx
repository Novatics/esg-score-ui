import { format } from 'date-fns'
import useSWR from 'swr'
import Grid from 'components/Grid'
import Services from 'services'
import CompanyCard from './CompanyCard'
import CompanyCardSkeleton from './CompanyCard/skeleton'
import CompanyScanCard from './CompanyScanCard'

const CardsGridSkeleton = () => (
  <>
    <Grid item xs={6} sm={6} md={4} lg={2.4}>
      <CompanyCardSkeleton />
    </Grid>
    <Grid item xs={6} sm={6} md={4} lg={2.4}>
      <CompanyCardSkeleton />
    </Grid>
    <Grid item xs={6} sm={6} md={4} lg={2.4}>
      <CompanyCardSkeleton />
    </Grid>
    <Grid item xs={6} sm={6} md={4} lg={2.4}>
      <CompanyCardSkeleton />
    </Grid>
    <Grid item xs={12} sm={12} md={4} lg={2.4}>
      <CompanyCardSkeleton />
    </Grid>
  </>
)
const TopCompanyCards = () => {
  const { data } = useSWR('SWR_COMPANY_STATS', () => Services.Company.getCompanyStats())
  const { data: companyData } = useSWR('SWR_COMPANY', () => Services.Company.getCompany())
  return data ? (
    <>
      <Grid item xs={6} sm={6} md={2} lg={2.4}>
        <CompanyScanCard nextScanDate={data.nextScanDate} />
      </Grid>
      <Grid item xs={6} sm={6} md={5} lg={2.4}>
        <CompanyCard
          title="Company Scans"
          description="last scan happened in "
          footerDescription={
            companyData?.scoreHistory[companyData.scoreHistory.length - 1]
              ? format(
                  new Date(companyData?.scoreHistory.at(-1)?.date || '').setMonth(
                    new Date(data.nextScanDate).getMonth() - 1
                  ),
                  'dd/MM/yyy'
                )
              : '--/--/----'
          }
          value={data.companyScans}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={5} lg={2.4}>
        <CompanyCard
          title="Total of Users"
          description="users have signed up"
          footerDescription={`${data.seatsRemaining}/${data.seats} available seats`}
          value={data.seats - data.seatsRemaining}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={2.4}>
        <CompanyCard
          title="Accounts Created"
          description="in the last 30 days"
          footerDescription={`${data.accountsCreated.completedProfile} completed their profile`}
          value={data.accountsCreated.total}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={2.4}>
        <CompanyCard
          title="Participation Rate"
          description="users have scanned"
          footerDescription={`${data.participationRate.calculation} company members`}
          value={`${data.participationRate.percentage}%`}
        />
      </Grid>
    </>
  ) : (
    <CardsGridSkeleton />
  )
}

export default TopCompanyCards
