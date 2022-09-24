import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Stack from 'components/Stack'
import CompanyDomains from './components/CompanyDomains'
import CompanyProfile from './components/CompanyProfile'
import CompanySeats from './components/CompanySeats'

function Profile() {
  const StyledDivider = () => (
    <Divider color="#c5c7cc" style={{ marginTop: 24, marginBottom: 24 }} />
  )

  return (
    <CardBordered elevation={2} sx={{ padding: 4 }}>
      <Stack>
        <CompanyProfile />
        <StyledDivider />
        <CompanyDomains />
        <StyledDivider />
        <CompanySeats />
      </Stack>
    </CardBordered>
  )
}

export default Profile
