import Box from 'components/Box'
import ChangePassword from 'components/ChangePassword'
import Divider from 'components/Divider'
import DeleteMyProfile from './components/DeleteProfile'
import SecurityInformation from './components/SecurityInformation'

const AccountSettings = () => {
  return (
    <Box sx={{ borderRadius: 1, p: 4, backgroundColor: 'primary.contrastText' }}>
      <SecurityInformation />
      <ChangePassword />
      <Divider sx={{ my: 3 }} />
      <DeleteMyProfile />
    </Box>
  )
}

export default AccountSettings
