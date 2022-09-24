import { CardBordered } from 'components/Card'
import Divider from 'components/Divider'
import Stack from 'components/Stack'
import DeleteMyProfile from './components/DeleteMyProfile'
import SecurityInformation from './components/SecurityInformation'

function Settings() {
  const StyledDivider = () => (
    <Divider color="#c5c7cc" style={{ marginTop: 24, marginBottom: 24 }} />
  )

  return (
    <CardBordered elevation={2} sx={{ padding: 4 }}>
      <Stack>
        <SecurityInformation />
        <StyledDivider />
        <DeleteMyProfile />
      </Stack>
    </CardBordered>
  )
}

export default Settings
